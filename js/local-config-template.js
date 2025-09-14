// Local Configuration Template for DeenBot
// Copy this file to local-config.js and add your actual API keys
// This file is ignored by git to keep your keys secure

const LOCAL_CONFIG = {
    // Groq API Configuration
    GROQ_API_KEY: 'YOUR_GROQ_API_KEY_HERE', // Replace with your actual Groq API key
    GROQ_ENDPOINT: 'https://api.groq.com/openai/v1/chat/completions',
    
    // DeenBot Configuration
    DEENBOT_NAME: 'DeenBot',
    DEENBOT_GREETING: 'As-salamu alaykum wa rahmatullahi wa barakatuh',
    
    // RAG System Configuration
    MAX_SEARCH_RESULTS: 5,
    MAX_TOKENS: 1000,
    TEMPERATURE: 0.3,
    
    // Islamic Sources
    ISLAMIC_SOURCES: [
        {
            name: 'Sunnah.com',
            url: 'https://sunnah.com',
            description: 'Authentic Hadith collections and Islamic texts'
        },
        {
            name: 'Quran.com',
            url: 'https://quran.com',
            description: 'Complete Quran with translations and tafsir'
        },
        {
            name: 'IslamQA',
            url: 'https://islamqa.info',
            description: 'Scholarly Islamic Q&A and rulings'
        },
        {
            name: 'SeekersGuidance',
            url: 'https://seekersguidance.org',
            description: 'Islamic education and spiritual guidance'
        }
    ]
};

// Export for use in other modules
if (typeof window !== 'undefined') {
    window.LOCAL_CONFIG = LOCAL_CONFIG;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = LOCAL_CONFIG;
}
