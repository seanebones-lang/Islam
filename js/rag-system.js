// DeenBot - Islamic RAG System
class IslamicRAGSystem {
    constructor() {
        // Use secure configuration system
        this.secureConfig = window.SecureConfig || null;
        this.groqApiKey = this.secureConfig ? this.secureConfig.getApiKey() : null;
        this.groqEndpoint = this.secureConfig ? this.secureConfig.get('GROQ_ENDPOINT') : "https://api.groq.com/openai/v1/chat/completions";
        this.isInitialized = false;
        this.knowledgeBase = {
            quran: [],
            hadiths: [],
            topics: [],
            navigation: []
        };
        
        // Debug configuration loading
        console.log('🔍 RAG System Debug:');
        console.log('- SecureConfig available:', !!this.secureConfig);
        console.log('- API Key detected:', !!this.groqApiKey);
        console.log('- API Key length:', this.groqApiKey ? this.groqApiKey.length : 0);
        console.log('- Endpoint:', this.groqEndpoint);
        
        this.initialize();
    }
    
    async initialize() {
        try {
            // Load Quran data
            if (typeof window.completeQuranData !== 'undefined') {
                // Convert object to array format for easier searching
                this.knowledgeBase.quran = Object.values(window.completeQuranData).map(surah => ({
                    english_name: surah.name,
                    arabic_name: surah.arabic,
                    verses: surah.verses_data.map(verse => ({
                        verse_number: verse.verse_number || 1,
                        arabic: verse.arabic,
                        translation: verse.translation,
                        transliteration: verse.transliteration
                    }))
                }));
                console.log(`✅ Loaded ${this.knowledgeBase.quran.length} surahs`);
            } else {
                console.warn('⚠️ Quran data not available');
            }
            
            // Load Hadith data
            if (typeof window.hadithDatabase !== 'undefined') {
                this.knowledgeBase.hadiths = window.hadithDatabase;
                console.log(`✅ Loaded ${this.knowledgeBase.hadiths.length} hadiths`);
            } else {
                console.warn('⚠️ Hadith data not available');
            }
            
            // Load Islamic knowledge
            if (typeof window.getAllIslamicTopics !== 'undefined') {
                this.knowledgeBase.topics = window.getAllIslamicTopics();
                console.log(`✅ Loaded ${this.knowledgeBase.topics.length} Islamic topics`);
            } else {
                console.warn('⚠️ Islamic knowledge not available');
            }
            
            // Add navigation data
            this.knowledgeBase.navigation = [
                {
                    title: "Quran Reader",
                    description: "Complete Quran with Arabic text, transliteration, and translation",
                    url: "complete-quran-reader.html",
                    features: ["Arabic text", "Transliteration", "Translation", "Audio", "Bookmarks"],
                    keywords: "quran, reading, arabic, translation, audio"
                },
                {
                    title: "Hadith Collection",
                    description: "Authentic Hadiths from Sahih Bukhari, Muslim, and other collections",
                    url: "hadiths.html",
                    features: ["Search", "Categories", "Sources", "Arabic text"],
                    keywords: "hadith, sunnah, prophet, authentic, bukhari, muslim"
                },
                {
                    title: "Prayer Guide",
                    description: "Complete guide to performing Salah with step-by-step instructions",
                    url: "prayer-guide.html",
                    features: ["Step-by-step", "Visual aids", "Audio", "Qibla finder"],
                    keywords: "prayer, salah, guide, wudu, qibla"
                },
                {
                    title: "Qibla Finder",
                    description: "Find the direction to Mecca from anywhere in the world",
                    url: "qibla-finder.html",
                    features: ["GPS location", "Compass", "Multiple methods"],
                    keywords: "qibla, mecca, direction, compass, gps"
                },
                {
                    title: "Prayer Times",
                    description: "Accurate prayer times based on your location",
                    url: "prayer-times.html",
                    features: ["Location-based", "Multiple methods", "Notifications"],
                    keywords: "prayer times, fajr, dhuhr, asr, maghrib, isha"
                },
                {
                    title: "Islamic Calendar",
                    description: "Hijri calendar with important Islamic dates and events",
                    url: "islamic-calendar.html",
                    features: ["Hijri dates", "Important events", "Moon phases"],
                    keywords: "calendar, hijri, islamic dates, ramadan, eid"
                },
                {
                    title: "Daily Duas",
                    description: "Essential supplications for daily life",
                    url: "daily-duas.html",
                    features: ["Daily duas", "Categories", "Arabic text", "Translation"],
                    keywords: "duas, supplications, daily, arabic, translation"
                },
                {
                    title: "Wudu Guide",
                    description: "Complete guide to performing ablution",
                    url: "wudu-guide.html",
                    features: ["Step-by-step", "Visual aids", "Audio guidance"],
                    keywords: "wudu, ablution, purification, guide"
                },
                {
                    title: "New Muslims",
                    description: "Essential resources and guidance for new Muslims",
                    url: "new-muslims.html",
                    features: ["Basics", "Step-by-step", "Resources", "Community"],
                    keywords: "new muslim, convert, basics, guidance, resources"
                },
                {
                    title: "Islamic Ethics",
                    description: "Complete guide to Islamic character and manners",
                    url: "islamic-ethics.html",
                    features: ["Character", "Manners", "Examples", "Stories"],
                    keywords: "ethics, character, manners, akhlaq, behavior"
                }
            ];
            
            this.isInitialized = true;
            console.log('✅ Islamic RAG System initialized successfully');
        } catch (error) {
            console.error('❌ Error initializing RAG system:', error);
            this.isInitialized = false;
        }
    }
    
    // Search function
    async search(query, options = {}) {
        if (!this.isInitialized) {
            throw new Error('RAG system not initialized');
        }
        
        const limit = options.limit || 5;
        const results = [];
        
        // Search Quran
        if (this.knowledgeBase.quran.length > 0) {
            const quranResults = this.searchQuran(query);
            results.push(...quranResults.slice(0, 2));
        }
        
        // Search Hadiths
        if (this.knowledgeBase.hadiths.length > 0) {
            const hadithResults = this.searchHadiths(query);
            results.push(...hadithResults.slice(0, 2));
        }
        
        // Search Topics
        if (this.knowledgeBase.topics.length > 0) {
            const topicResults = this.searchTopics(query);
            results.push(...topicResults.slice(0, 2));
        }
        
        // Search Navigation
        const navResults = this.searchNavigation(query);
        results.push(...navResults.slice(0, 1));
        
        // Sort by relevance and return top results
        return results
            .sort((a, b) => (b.score || 0) - (a.score || 0))
            .slice(0, limit);
    }
    
    // Search Quran
    searchQuran(query) {
        const results = [];
        const queryLower = query.toLowerCase();
        
        this.knowledgeBase.quran.forEach(surah => {
            surah.verses.forEach(verse => {
                let score = 0;
                
                // Check translation
                if (verse.translation.toLowerCase().includes(queryLower)) {
                    score += 3;
                }
                
                // Check Arabic (basic)
                if (verse.arabic.includes(query)) {
                    score += 2;
                }
                
                // Check transliteration
                if (verse.transliteration && verse.transliteration.toLowerCase().includes(queryLower)) {
                    score += 1;
                }
                
                if (score > 0) {
                    results.push({
                        type: 'quran_verse',
                        surah_english: surah.english_name,
                        surah_arabic: surah.arabic_name,
                        verse_number: verse.verse_number,
                        arabic: verse.arabic,
                        translation: verse.translation,
                        transliteration: verse.transliteration,
                        score: score,
                        category: 'Quran'
                    });
                }
            });
        });
        
        return results;
    }
    
    // Search Hadiths
    searchHadiths(query) {
        const results = [];
        const queryLower = query.toLowerCase();
        
        this.knowledgeBase.hadiths.forEach(hadith => {
            let score = 0;
            
            // Check English text
            if (hadith.english && hadith.english.toLowerCase().includes(queryLower)) {
                score += 3;
            }
            
            // Check Arabic text
            if (hadith.arabic && hadith.arabic.includes(query)) {
                score += 2;
            }
            
            // Check lesson/description
            if (hadith.lesson && hadith.lesson.toLowerCase().includes(queryLower)) {
                score += 1;
            }
            
            if (score > 0) {
                results.push({
                    type: 'hadith',
                    source: hadith.source,
                    english: hadith.english,
                    arabic: hadith.arabic,
                    lesson: hadith.lesson,
                    score: score,
                    category: 'Hadith'
                });
            }
        });
        
        return results;
    }
    
    // Search Topics
    searchTopics(query) {
        const results = [];
        const queryLower = query.toLowerCase();
        
        this.knowledgeBase.topics.forEach(topic => {
            let score = 0;
            
            // Check title
            if (topic.title && topic.title.toLowerCase().includes(queryLower)) {
                score += 3;
            }
            
            // Check content
            if (topic.content && topic.content.toLowerCase().includes(queryLower)) {
                score += 2;
            }
            
            // Check keywords
            if (topic.keywords && topic.keywords.toLowerCase().includes(queryLower)) {
                score += 1;
            }
            
            if (score > 0) {
                results.push({
                    type: 'topic',
                    title: topic.title,
                    content: topic.content,
                    keywords: topic.keywords,
                    score: score,
                    category: 'Islamic Knowledge'
                });
            }
        });
        
        return results;
    }
    
    // Search Navigation
    searchNavigation(query) {
        const results = [];
        const queryLower = query.toLowerCase();
        
        this.knowledgeBase.navigation.forEach(page => {
            let score = 0;
            
            // Check title
            if (page.title.toLowerCase().includes(queryLower)) {
                score += 3;
            }
            
            // Check description
            if (page.description.toLowerCase().includes(queryLower)) {
                score += 2;
            }
            
            // Check keywords
            if (page.keywords && page.keywords.toLowerCase().includes(queryLower)) {
                score += 1;
            }
            
            if (score > 0) {
                results.push({
                    type: 'navigation',
                    title: page.title,
                    description: page.description,
                    url: page.url,
                    features: page.features,
                    keywords: page.keywords,
                    score: score,
                    category: 'Navigation'
                });
            }
        });
        
        return results;
    }
    
    // Get intelligent response
    async getIntelligentResponse(query) {
        try {
            // First, search for relevant content
            const searchResults = await this.search(query, { limit: 3 });
            
            // If we have Groq API, use it for enhanced responses
            if (this.groqApiKey && this.groqApiKey !== "YOUR_GROQ_API_KEY_HERE") {
                return await this.getGroqResponse(query, searchResults);
            }
            
            // Otherwise, generate response from search results
            return this.generateResponseFromResults(query, searchResults);
            
        } catch (error) {
            console.error('Error generating response:', error);
            return {
                type: 'error',
                response_text: 'I apologize, but I encountered an error processing your request. Please try again or ask about Quran, Hadith, prayer, or site navigation.',
                groq_used: false
            };
        }
    }
    
    // Generate response from search results
    generateResponseFromResults(query, results) {
        let response = '';
        
        if (results.length === 0) {
            // Provide helpful fallback responses based on common queries
            const queryLower = query.toLowerCase();
            
            // Handle Islamic greetings and basic interactions
            if (queryLower.includes('salam') || queryLower.includes('asalamu') || queryLower.includes('alaykum') || 
                queryLower.includes('hello') || queryLower.includes('hi') || queryLower.includes('greetings') ||
                queryLower.includes('hey') || queryLower.includes('good morning') || queryLower.includes('good afternoon') ||
                queryLower.includes('good evening') || queryLower.includes('assalamu') || queryLower.includes('salamu')) {
                response = `**Wa alaykum as-salam wa rahmatullahi wa barakatuh!**\n\n`;
                response += `As-salamu alaykum! I'm DeenBot, your Islamic AI companion. I'm here to help you with:\n\n`;
                response += `• **Quranic verses** and translations\n`;
                response += `• **Authentic Hadiths** from reliable collections\n`;
                response += `• **Islamic topics** and guidance\n`;
                response += `• **Prayer and worship** instructions\n`;
                response += `• **Navigation** to app features\n\n`;
                response += `How can I assist you in your journey of Islamic learning today?`;
            } else if (queryLower.includes('thank') || queryLower.includes('shukran') || queryLower.includes('jazakallah')) {
                response = `**Wa iyyakum!** (And to you as well!)\n\n`;
                response += `Barakallahu feek! I'm always here to help with your Islamic learning. Feel free to ask me anything about:\n\n`;
                response += `• Quran and Hadith\n• Prayer and worship\n• Islamic guidance\n• App features\n\n`;
                response += `May Allah bless your journey of seeking knowledge!`;
            } else if (queryLower.includes('how are you') || queryLower.includes('how are you doing')) {
                response = `**Alhamdulillah, I'm doing well!**\n\n`;
                response += `Thank you for asking. I'm here and ready to help you with any Islamic questions or guidance you might need. What would you like to learn about today?`;
            } else if (queryLower.includes('pillar') || queryLower.includes('five')) {
                response = `**The Five Pillars of Islam:**\n\n`;
                response += `1. **Shahada** (Declaration of Faith): "La ilaha illa Allah, Muhammadun rasul Allah"\n`;
                response += `2. **Salah** (Prayer): Five daily prayers at prescribed times\n`;
                response += `3. **Zakat** (Charity): Obligatory charity to help the needy\n`;
                response += `4. **Sawm** (Fasting): Fasting during the month of Ramadan\n`;
                response += `5. **Hajj** (Pilgrimage): Pilgrimage to Mecca once in a lifetime for those who are able\n\n`;
                response += `These pillars form the foundation of Muslim life and worship.`;
            } else if (queryLower.includes('prayer') || queryLower.includes('salah')) {
                response = `**Islamic Prayer (Salah):**\n\n`;
                response += `Salah is the second pillar of Islam. Muslims perform five daily prayers:\n\n`;
                response += `• **Fajr** (Dawn prayer) - Before sunrise\n`;
                response += `• **Dhuhr** (Midday prayer) - After the sun passes its zenith\n`;
                response += `• **Asr** (Afternoon prayer) - Late afternoon\n`;
                response += `• **Maghrib** (Sunset prayer) - Just after sunset\n`;
                response += `• **Isha** (Evening prayer) - Night time\n\n`;
                response += `Each prayer consists of units called rak'ahs with recitation, bowing (ruku), and prostration (sujud).`;
            } else if (queryLower.includes('wudu') || queryLower.includes('ablution')) {
                response = `**Wudu (Ablution) Steps:**\n\n`;
                response += `1. **Intention** (Niyyah) - Make intention to perform wudu\n`;
                response += `2. **Wash hands** three times\n`;
                response += `3. **Rinse mouth** three times\n`;
                response += `4. **Rinse nose** three times\n`;
                response += `5. **Wash face** three times\n`;
                response += `6. **Wash arms** up to elbows three times\n`;
                response += `7. **Wipe head** once\n`;
                response += `8. **Wash feet** up to ankles three times\n\n`;
                response += `Wudu purifies the body and soul before prayer.`;
            } else if (queryLower.includes('quran') || queryLower.includes('verse')) {
                response = `**About the Quran:**\n\n`;
                response += `The Quran is the holy book of Islam, revealed to Prophet Muhammad (PBUH) over 23 years. It contains 114 surahs (chapters) and over 6,000 verses covering all aspects of life.\n\n`;
                response += `You can explore the complete Quran with Arabic text, transliteration, and translation in our Quran Reader section.`;
            } else if (queryLower.includes('hadith') || queryLower.includes('sunnah')) {
                response = `**About Hadith:**\n\n`;
                response += `Hadith are the sayings, actions, and approvals of Prophet Muhammad (PBUH). They are the second source of Islamic guidance after the Quran.\n\n`;
                response += `Major collections include Sahih al-Bukhari, Sahih Muslim, and others. You can search our comprehensive Hadith collection for authentic teachings.`;
            } else if (queryLower.includes('bismillah') || queryLower.includes('in the name of allah')) {
                response = `**Bismillahi-r-Rahmani-r-Raheem**\n\n`;
                response += `"In the name of Allah, the Entirely Merciful, the Especially Merciful."\n\n`;
                response += `This is the opening of every surah in the Quran (except At-Tawbah). It's recommended to say Bismillah before starting any good deed. Would you like to learn more about this beautiful phrase or explore the Quran?`;
            } else if (queryLower.includes('alhamdulillah') || queryLower.includes('praise be to allah')) {
                response = `**Alhamdulillah!**\n\n`;
                response += `"Praise be to Allah" - This is one of the most beautiful expressions of gratitude in Islam. The Prophet (PBUH) said: "Alhamdulillah fills the scale."\n\n`;
                response += `Would you like to learn more about gratitude in Islam or explore related verses and hadiths?`;
            } else if (queryLower.includes('inshallah') || queryLower.includes('god willing')) {
                response = `**Insha'Allah!**\n\n`;
                response += `"If Allah wills" - This phrase shows our submission to Allah's will and reminds us that everything happens by His permission. The Quran says: "And never say of anything, 'Indeed, I will do that tomorrow,' except [when adding], 'If Allah wills.'"\n\n`;
                response += `Would you like to learn more about this important Islamic concept?`;
            } else {
                response = `I couldn't find specific information about "${query}" in my knowledge base. However, I can help you with:\n\n`;
                response += `• **Quranic verses** and translations\n`;
                response += `• **Authentic Hadiths** from reliable collections\n`;
                response += `• **Islamic topics** and guidance\n`;
                response += `• **Prayer and worship** instructions\n`;
                response += `• **Navigation** to app features\n\n`;
                response += `Please try rephrasing your question or ask about:\n`;
                response += `- "What are the five pillars of Islam?"\n`;
                response += `- "How do I perform prayer?"\n`;
                response += `- "Show me verses about patience"\n`;
                response += `- "Find hadiths about charity"`;
            }
        } else {
            response = `Based on your question about "${query}", here's what I found:\n\n`;
            
            results.forEach((result, index) => {
                if (result.type === 'quran_verse') {
                    response += `**Quran - ${result.surah_english} ${result.verse_number}:**\n`;
                    response += `"${result.translation}"\n\n`;
                } else if (result.type === 'hadith') {
                    response += `**Hadith from ${result.source}:**\n`;
                    response += `"${result.english}"\n`;
                    if (result.lesson) {
                        response += `\n*Lesson: ${result.lesson}*\n\n`;
                    }
                } else if (result.type === 'topic') {
                    response += `**${result.title}:**\n`;
                    response += `${result.content}\n\n`;
                } else if (result.type === 'navigation') {
                    response += `**${result.title}:** ${result.description}\n`;
                    response += `You can find this feature at: ${result.url}\n\n`;
                }
            });
        }
        
        return {
            type: 'response',
            response_text: response,
            additional_results: results,
            groq_used: false
        };
    }
    
    // Query Groq API
    async queryGroq(query, context = '') {
        if (!this.groqApiKey || this.groqApiKey === "YOUR_GROQ_API_KEY_HERE") {
            return null;
        }
        
        try {
            const response = await fetch(this.groqEndpoint, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${this.groqApiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: 'llama3-8b-8192',
                    messages: [
                        {
                            role: 'system',
                            content: `You are DeenBot, an Islamic AI assistant. Provide accurate, helpful responses about Islam based on authentic sources. Always be respectful and use Islamic greetings. Context: ${context}`
                        },
                        {
                            role: 'user',
                            content: query
                        }
                    ],
                    max_tokens: 1000,
                    temperature: 0.3
                })
            });
            
            if (!response.ok) {
                throw new Error(`Groq API error: ${response.status}`);
            }
            
            const data = await response.json();
            return data.choices[0].message.content;
            
        } catch (error) {
            console.error('Groq API error:', error);
            return null;
        }
    }
    
    // Get Groq response with context
    async getGroqResponse(query, searchResults) {
        const context = searchResults.map(result => {
            if (result.type === 'quran_verse') {
                return `Quran ${result.surah_english} ${result.verse_number}: "${result.translation}"`;
            } else if (result.type === 'hadith') {
                return `Hadith from ${result.source}: "${result.english}"`;
            } else if (result.type === 'topic') {
                return `${result.title}: ${result.content}`;
            }
            return '';
        }).join('\n\n');
        
        const groqResponse = await this.queryGroq(query, context);
        
        if (groqResponse) {
            return {
                type: 'response',
                response_text: groqResponse,
                additional_results: searchResults,
                groq_used: true,
                disclaimer: 'This response is generated by AI and should be verified with authentic Islamic sources. Please consult with knowledgeable scholars for important matters.'
            };
        } else {
            return this.generateResponseFromResults(query, searchResults);
        }
    }
    
    // Get system status
    getStatus() {
        return {
            initialized: this.isInitialized,
            contentCounts: {
                quran: this.knowledgeBase.quran.length,
                hadiths: this.knowledgeBase.hadiths.length,
                topics: this.knowledgeBase.topics.length,
                navigation: this.knowledgeBase.navigation.length
            },
            groqAvailable: this.groqApiKey && this.groqApiKey !== "YOUR_GROQ_API_KEY_HERE"
        };
    }
}

// Initialize the RAG system after a short delay to ensure config is loaded
setTimeout(() => {
    window.islamicRAG = new IslamicRAGSystem();
}, 100);
