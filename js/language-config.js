// Language Configuration System
const LanguageConfig = {
    // Supported languages with their details
    languages: {
        'en': {
            name: 'English',
            nativeName: 'English',
            direction: 'ltr',
            flag: '🇺🇸',
            rtl: false
        },
        'ar': {
            name: 'Arabic',
            nativeName: 'العربية',
            direction: 'rtl',
            flag: '🇸🇦',
            rtl: true
        },
        'ur': {
            name: 'Urdu',
            nativeName: 'اردو',
            direction: 'rtl',
            flag: '🇵🇰',
            rtl: true
        },
        'tr': {
            name: 'Turkish',
            nativeName: 'Türkçe',
            direction: 'ltr',
            flag: '🇹🇷',
            rtl: false
        },
        'fr': {
            name: 'French',
            nativeName: 'Français',
            direction: 'ltr',
            flag: '🇫🇷',
            rtl: false
        },
        'es': {
            name: 'Spanish',
            nativeName: 'Español',
            direction: 'ltr',
            flag: '🇪🇸',
            rtl: false
        },
        'id': {
            name: 'Indonesian',
            nativeName: 'Bahasa Indonesia',
            direction: 'ltr',
            flag: '🇮🇩',
            rtl: false
        },
        'ms': {
            name: 'Malay',
            nativeName: 'Bahasa Melayu',
            direction: 'ltr',
            flag: '🇲🇾',
            rtl: false
        },
        'bn': {
            name: 'Bengali',
            nativeName: 'বাংলা',
            direction: 'ltr',
            flag: '🇧🇩',
            rtl: false
        },
        'hi': {
            name: 'Hindi',
            nativeName: 'हिन्दी',
            direction: 'ltr',
            flag: '🇮🇳',
            rtl: false
        }
    },

    // Default language
    defaultLanguage: 'en',

    // Current language
    currentLanguage: 'en',

    // Initialize language system
    async init() {
        // Load translations first
        await this.loadTranslations();
        
        // Get saved language or detect browser language
        const savedLanguage = localStorage.getItem('islamic-app-language');
        const browserLanguage = navigator.language.split('-')[0];
        
        if (savedLanguage && this.languages[savedLanguage]) {
            this.currentLanguage = savedLanguage;
        } else if (this.languages[browserLanguage]) {
            this.currentLanguage = browserLanguage;
        }

        this.applyLanguage();
        this.createLanguageSelector();
    },

    // Load translations from external files
    async loadTranslations() {
        const languages = Object.keys(this.languages);
        
        for (const lang of languages) {
            try {
                const response = await fetch(`js/translations/${lang}.json`);
                if (response.ok) {
                    this.translations[lang] = await response.json();
                } else {
                    console.warn(`Could not load translations for ${lang}`);
                }
            } catch (error) {
                console.warn(`Error loading translations for ${lang}:`, error);
            }
        }
    },

    // Apply language to the page
    applyLanguage() {
        const lang = this.languages[this.currentLanguage];
        
        // Set document direction
        document.documentElement.dir = lang.direction;
        document.documentElement.lang = this.currentLanguage;
        
        // Apply RTL styles if needed
        if (lang.rtl) {
            document.body.classList.add('rtl');
        } else {
            document.body.classList.remove('rtl');
        }

        // Update all translatable elements
        this.updateTexts();
        
        // Save language preference
        localStorage.setItem('islamic-app-language', this.currentLanguage);
    },

    // Update all text content
    updateTexts() {
        const translations = this.getTranslations();
        
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.getNestedTranslation(translations, key);
            
            if (translation) {
                if (element.tagName === 'INPUT' && element.type === 'text') {
                    element.placeholder = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });

        // Update elements with data-i18n-html for HTML content
        document.querySelectorAll('[data-i18n-html]').forEach(element => {
            const key = element.getAttribute('data-i18n-html');
            const translation = this.getNestedTranslation(translations, key);
            
            if (translation) {
                element.innerHTML = translation;
            }
        });
    },

    // Get translations for current language
    getTranslations() {
        return this.translations[this.currentLanguage] || this.translations[this.defaultLanguage];
    },

    // Get nested translation value
    getNestedTranslation(obj, path) {
        return path.split('.').reduce((current, key) => current && current[key], obj);
    },

    // Change language
    changeLanguage(langCode) {
        if (this.languages[langCode]) {
            this.currentLanguage = langCode;
            this.applyLanguage();
            
            // Update language selector
            this.updateLanguageSelector();
            
            // Show success message
            this.showLanguageChangeMessage();
        }
    },

    // Create language selector
    createLanguageSelector() {
        // Check if selector already exists
        if (document.getElementById('language-selector')) return;

        const selector = document.createElement('div');
        selector.id = 'language-selector';
        selector.className = 'language-selector';
        
        selector.innerHTML = `
            <div class="language-current" onclick="toggleLanguageDropdown()">
                <span class="language-flag">${this.languages[this.currentLanguage].flag}</span>
                <span class="language-name">${this.languages[this.currentLanguage].nativeName}</span>
                <i class="fas fa-chevron-down"></i>
            </div>
            <div class="language-dropdown" id="language-dropdown">
                ${Object.entries(this.languages).map(([code, lang]) => `
                    <div class="language-option ${code === this.currentLanguage ? 'active' : ''}" 
                         onclick="LanguageConfig.changeLanguage('${code}')">
                        <span class="language-flag">${lang.flag}</span>
                        <span class="language-name">${lang.nativeName}</span>
                        <span class="language-english">${lang.name}</span>
                    </div>
                `).join('')}
            </div>
        `;

        // Add to navigation
        const nav = document.querySelector('.nav-menu');
        if (nav) {
            nav.appendChild(selector);
        }
    },

    // Update language selector
    updateLanguageSelector() {
        const current = document.querySelector('.language-current');
        const dropdown = document.getElementById('language-dropdown');
        
        if (current) {
            current.innerHTML = `
                <span class="language-flag">${this.languages[this.currentLanguage].flag}</span>
                <span class="language-name">${this.languages[this.currentLanguage].nativeName}</span>
                <i class="fas fa-chevron-down"></i>
            `;
        }

        if (dropdown) {
            dropdown.innerHTML = Object.entries(this.languages).map(([code, lang]) => `
                <div class="language-option ${code === this.currentLanguage ? 'active' : ''}" 
                     onclick="LanguageConfig.changeLanguage('${code}')">
                    <span class="language-flag">${lang.flag}</span>
                    <span class="language-name">${lang.nativeName}</span>
                    <span class="language-english">${lang.name}</span>
                </div>
            `).join('');
        }
    },

    // Show language change message
    showLanguageChangeMessage() {
        const message = document.createElement('div');
        message.className = 'language-change-message';
        message.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <span data-i18n="language.changed">Language changed successfully!</span>
        `;
        
        document.body.appendChild(message);
        
        // Remove after 3 seconds
        setTimeout(() => {
            message.remove();
        }, 3000);
    },

    // Translation data - will be loaded from external files
    translations: {}
};

// Toggle language dropdown
function toggleLanguageDropdown() {
    const dropdown = document.getElementById('language-dropdown');
    if (dropdown) {
        dropdown.classList.toggle('show');
    }
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    const selector = document.getElementById('language-selector');
    const dropdown = document.getElementById('language-dropdown');
    
    if (selector && dropdown && !selector.contains(event.target)) {
        dropdown.classList.remove('show');
    }
});

// Initialize language system when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    LanguageConfig.init();
});
