// Translation Manager - Easy way to add new languages and translations
class TranslationManager {
    constructor() {
        this.translations = {};
        this.loadTranslations();
    }

    // Load all translation files
    async loadTranslations() {
        const languages = ['en', 'ar', 'ur', 'tr', 'fr', 'es', 'id', 'ms', 'bn', 'hi'];
        
        for (const lang of languages) {
            try {
                const response = await fetch(`js/translations/${lang}.json`);
                if (response.ok) {
                    this.translations[lang] = await response.json();
                }
            } catch (error) {
                console.warn(`Could not load translations for ${lang}:`, error);
            }
        }
    }

    // Add new translation
    addTranslation(langCode, key, value) {
        if (!this.translations[langCode]) {
            this.translations[langCode] = {};
        }
        
        const keys = key.split('.');
        let current = this.translations[langCode];
        
        for (let i = 0; i < keys.length - 1; i++) {
            if (!current[keys[i]]) {
                current[keys[i]] = {};
            }
            current = current[keys[i]];
        }
        
        current[keys[keys.length - 1]] = value;
    }

    // Get translation
    getTranslation(langCode, key) {
        const lang = this.translations[langCode] || this.translations['en'];
        return this.getNestedValue(lang, key);
    }

    // Get nested value from object
    getNestedValue(obj, path) {
        return path.split('.').reduce((current, key) => current && current[key], obj);
    }

    // Export translations to JSON files
    exportTranslations() {
        Object.keys(this.translations).forEach(langCode => {
            const dataStr = JSON.stringify(this.translations[langCode], null, 2);
            const dataBlob = new Blob([dataStr], {type: 'application/json'});
            
            const link = document.createElement('a');
            link.href = URL.createObjectURL(dataBlob);
            link.download = `${langCode}.json`;
            link.click();
        });
    }

    // Add new language
    addLanguage(langCode, languageInfo) {
        LanguageConfig.languages[langCode] = languageInfo;
        
        // Initialize empty translations
        if (!this.translations[langCode]) {
            this.translations[langCode] = {};
        }
    }

    // Get missing translations for a language
    getMissingTranslations(langCode) {
        const englishKeys = this.getAllKeys(this.translations['en']);
        const langKeys = this.getAllKeys(this.translations[langCode] || {});
        
        return englishKeys.filter(key => !langKeys.includes(key));
    }

    // Get all keys from nested object
    getAllKeys(obj, prefix = '') {
        let keys = [];
        
        for (const key in obj) {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                keys = keys.concat(this.getAllKeys(obj[key], prefix + key + '.'));
            } else {
                keys.push(prefix + key);
            }
        }
        
        return keys;
    }

    // Auto-translate using a translation service (placeholder)
    async autoTranslate(text, fromLang, toLang) {
        // This would integrate with Google Translate API or similar
        // For now, return the original text
        console.log(`Would translate "${text}" from ${fromLang} to ${toLang}`);
        return text;
    }

    // Validate translations
    validateTranslations() {
        const issues = [];
        const englishKeys = this.getAllKeys(this.translations['en']);
        
        Object.keys(this.translations).forEach(langCode => {
            if (langCode === 'en') return;
            
            const langKeys = this.getAllKeys(this.translations[langCode]);
            const missing = englishKeys.filter(key => !langKeys.includes(key));
            const extra = langKeys.filter(key => !englishKeys.includes(key));
            
            if (missing.length > 0) {
                issues.push({
                    lang: langCode,
                    type: 'missing',
                    keys: missing
                });
            }
            
            if (extra.length > 0) {
                issues.push({
                    lang: langCode,
                    type: 'extra',
                    keys: extra
                });
            }
        });
        
        return issues;
    }
}

// Initialize translation manager
const translationManager = new TranslationManager();

// Helper functions for easy translation management
window.addTranslation = (langCode, key, value) => {
    translationManager.addTranslation(langCode, key, value);
};

window.getTranslation = (langCode, key) => {
    return translationManager.getTranslation(langCode, key);
};

window.exportTranslations = () => {
    translationManager.exportTranslations();
};

window.validateTranslations = () => {
    return translationManager.validateTranslations();
};

window.addLanguage = (langCode, languageInfo) => {
    translationManager.addLanguage(langCode, languageInfo);
};

// Language detection and auto-switching
class LanguageDetector {
    static detectUserLanguage() {
        // Get language from URL parameter
        const urlParams = new URLSearchParams(window.location.search);
        const urlLang = urlParams.get('lang');
        if (urlLang && LanguageConfig.languages[urlLang]) {
            return urlLang;
        }

        // Get language from localStorage
        const savedLang = localStorage.getItem('islamic-app-language');
        if (savedLang && LanguageConfig.languages[savedLang]) {
            return savedLang;
        }

        // Detect from browser
        const browserLang = navigator.language.split('-')[0];
        if (LanguageConfig.languages[browserLang]) {
            return browserLang;
        }

        // Detect from browser's full language
        const fullBrowserLang = navigator.language;
        for (const [code, lang] of Object.entries(LanguageConfig.languages)) {
            if (fullBrowserLang.startsWith(code)) {
                return code;
            }
        }

        // Default to English
        return 'en';
    }

    static setLanguageFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        const lang = urlParams.get('lang');
        if (lang && LanguageConfig.languages[lang]) {
            LanguageConfig.changeLanguage(lang);
        }
    }
}

// Auto-detect language on page load
document.addEventListener('DOMContentLoaded', function() {
    LanguageDetector.setLanguageFromURL();
});

// Language switching with URL updates
function changeLanguageWithURL(langCode) {
    LanguageConfig.changeLanguage(langCode);
    
    // Update URL without page reload
    const url = new URL(window.location);
    url.searchParams.set('lang', langCode);
    window.history.pushState({}, '', url);
}

// Make functions globally available
window.changeLanguageWithURL = changeLanguageWithURL;
window.LanguageDetector = LanguageDetector;
