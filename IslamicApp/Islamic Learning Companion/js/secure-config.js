// Secure Configuration System for DeenBot
// This file handles encrypted configuration and API keys

class SecureConfig {
    constructor() {
        this.encryptionKey = this.generateEncryptionKey();
        this.config = this.loadSecureConfig();
    }
    
    // Generate a simple encryption key based on domain and timestamp
    generateEncryptionKey() {
        const domain = window.location.hostname || 'localhost';
        const timestamp = Math.floor(Date.now() / (1000 * 60 * 60 * 24)); // Daily rotation
        return btoa(domain + timestamp).substring(0, 16);
    }
    
    // Simple XOR encryption for API keys
    encrypt(text, key) {
        let result = '';
        for (let i = 0; i < text.length; i++) {
            result += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i % key.length));
        }
        return btoa(result);
    }
    
    // Simple XOR decryption for API keys
    decrypt(encryptedText, key) {
        try {
            const text = atob(encryptedText);
            let result = '';
            for (let i = 0; i < text.length; i++) {
                result += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i % key.length));
            }
            return result;
        } catch (error) {
            console.warn('Failed to decrypt configuration:', error);
            return null;
        }
    }
    
    // Load secure configuration
    loadSecureConfig() {
        // Check for local configuration first
        if (typeof window.LOCAL_CONFIG !== 'undefined') {
            console.log('✅ Local config found:', window.LOCAL_CONFIG);
            return window.LOCAL_CONFIG;
        }
        
        console.warn('⚠️ LOCAL_CONFIG not found, checking for CONFIG...');
        
        // Fallback to old CONFIG system
        if (typeof window.CONFIG !== 'undefined') {
            console.log('✅ Fallback config found:', window.CONFIG);
            return window.CONFIG;
        }
        
        // Check for encrypted configuration in localStorage
        const encryptedConfig = localStorage.getItem('deenbot_config');
        if (encryptedConfig) {
            try {
                const decrypted = this.decrypt(encryptedConfig, this.encryptionKey);
                if (decrypted) {
                    return JSON.parse(decrypted);
                }
            } catch (error) {
                console.warn('Failed to load encrypted configuration:', error);
            }
        }
        
        // Return default configuration
        return {
            GROQ_API_KEY: null,
            GROQ_ENDPOINT: 'https://api.groq.com/openai/v1/chat/completions',
            DEENBOT_NAME: 'DeenBot',
            DEENBOT_GREETING: 'As-salamu alaykum wa rahmatullahi wa barakatuh',
            MAX_SEARCH_RESULTS: 5,
            MAX_TOKENS: 1000,
            TEMPERATURE: 0.3
        };
    }
    
    // Save configuration securely
    saveConfig(config) {
        try {
            const encrypted = this.encrypt(JSON.stringify(config), this.encryptionKey);
            localStorage.setItem('deenbot_config', encrypted);
            this.config = config;
            return true;
        } catch (error) {
            console.error('Failed to save configuration:', error);
            return false;
        }
    }
    
    // Get configuration value
    get(key) {
        return this.config[key];
    }
    
    // Set configuration value
    set(key, value) {
        this.config[key] = value;
        this.saveConfig(this.config);
    }
    
    // Check if API key is configured
    hasApiKey() {
        return this.config.GROQ_API_KEY && 
               this.config.GROQ_API_KEY !== 'YOUR_GROQ_API_KEY_HERE' &&
               this.config.GROQ_API_KEY.length > 10;
    }
    
    // Get API key safely
    getApiKey() {
        if (this.hasApiKey()) {
            return this.config.GROQ_API_KEY;
        }
        return null;
    }
}

// Initialize secure configuration
window.SecureConfig = new SecureConfig();

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SecureConfig;
}
