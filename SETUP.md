# Islamic Learning Platform Setup Instructions

## 🔑 API Key Configuration

### 1. Get Your Groq API Key
1. Visit [Groq Console](https://console.groq.com/)
2. Sign up or log in to your account
3. Navigate to API Keys section
4. Create a new API key
5. Copy the API key (starts with `gsk_`)

### 2. Configure the API Key

#### Option A: Using Config File (Recommended)
1. Open `js/config.js`
2. Replace `YOUR_GROQ_API_KEY_HERE` with your actual Groq API key:
   ```javascript
   GROQ_API_KEY: 'gsk_your_actual_api_key_here',
   ```

#### Option B: Using Environment Variables (For Server Deployment)
```bash
export GROQ_API_KEY="gsk_your_actual_api_key_here"
```

### 3. Add Config to HTML Pages
Make sure to include the config file before the RAG system:
```html
<script src="js/config.js"></script>
<script src="js/rag-system.js"></script>
```

## 🚀 Features

### AI Assistant (Currently in Development)
- Comprehensive Islamic knowledge base
- RAG (Retrieval-Augmented Generation) system
- Groq API integration for enhanced responses
- Authentic source attribution
- Islamic greetings and appropriate language

### Quran Reader
- Complete Quran with all 114 surahs
- Page-by-page navigation
- Arabic text with translations
- Mobile-responsive design

### Knowledge Base Coverage
- Quranic sciences (Tajweed, Tafsir, Grammar)
- Hadith collections and methodology
- Islamic jurisprudence (Four schools)
- Islamic theology (Aqeedah, Tawhid)
- Islamic history (Seerah, Caliphs, Golden Age)
- Contemporary issues (Science, Finance, Environment)
- Islamic spirituality (Tasawwuf, Dhikr)
- Islamic culture (Art, Literature, Education)

## 📁 File Structure

```
js/
├── config.js                           # Configuration file (API keys)
├── rag-system.js                       # Core RAG system
├── extensive-islamic-knowledge.js      # Core Islamic sciences
├── specialized-islamic-knowledge.js    # Advanced topics
├── detailed-quranic-hadith-database.js # Scriptural knowledge
├── comprehensive-islamic-knowledge.js  # Original knowledge base
└── complete-quran-data.js              # Complete Quran data

rag-assistant.html                      # AI Assistant interface (in development)
complete-quran-reader.html              # Main Quran reader interface
```

## 🔧 Integration

### Adding AI Assistant to New Pages
```html
<script src="js/config.js"></script>
<script src="js/complete-quran-data.js"></script>
<script src="hadiths.js"></script>
<script src="js/comprehensive-islamic-knowledge.js"></script>
<script src="js/extensive-islamic-knowledge.js"></script>
<script src="js/specialized-islamic-knowledge.js"></script>
<script src="js/detailed-quranic-hadith-database.js"></script>
<script src="js/rag-system.js"></script>
```

## ⚠️ Security Notes

- Never commit API keys to version control
- Use environment variables in production
- The config.js file should be added to .gitignore
- Consider using a secrets management system for production

## 🛠️ Troubleshooting

### AI Assistant Not Responding
1. Check if the API key is correctly configured
2. Verify all JavaScript files are loaded
3. Check browser console for errors
4. Ensure internet connection for Groq API calls

### Quran Reader Issues
1. Verify `js/complete-quran-data.js` is loaded
2. Check for JavaScript errors in console
3. Ensure CSS is properly loaded

### Knowledge Base Issues
1. Verify all knowledge base files are loaded
2. Check if the RAG system is properly initialized
3. Ensure proper file loading order

## 📞 Support

For technical support or questions about the platform implementation, please refer to the documentation or contact the development team.

---

**Note**: This setup ensures the AI assistant has access to comprehensive Islamic knowledge while maintaining security best practices for API key management.
