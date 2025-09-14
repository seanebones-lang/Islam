# 🔐 Secure Setup Guide for DeenBot

This guide explains how to securely configure your API keys for DeenBot without exposing them in the public repository.

## 🛡️ Security Features

- **API keys are encrypted** and stored locally
- **Local configuration files** are gitignored
- **Template files** provided for easy setup
- **No sensitive data** in public repository

## 🚀 Quick Setup

### 1. Copy the Template
```bash
cp js/local-config-template.js js/local-config.js
```

### 2. Add Your API Key
Edit `js/local-config.js` and replace `YOUR_GROQ_API_KEY_HERE` with your actual Groq API key:

```javascript
const LOCAL_CONFIG = {
    GROQ_API_KEY: 'your_actual_groq_api_key_here',
    // ... other configuration
};
```

### 3. Test the Setup
Open `rag-assistant.html` or `debug-bot.html` to test your configuration.

## 🔧 Configuration Options

### Groq API (Optional)
- **Purpose**: Enhanced AI responses using Groq's language models
- **Required**: No (bot works without it using knowledge base)
- **Get Key**: Sign up at [console.groq.com](https://console.groq.com)

### Other Settings
- `MAX_SEARCH_RESULTS`: Number of search results to return (default: 5)
- `MAX_TOKENS`: Maximum tokens for AI responses (default: 1000)
- `TEMPERATURE`: AI response creativity (0.0-1.0, default: 0.3)

## 🔒 Security Notes

- ✅ `js/local-config.js` is **gitignored** - your keys stay private
- ✅ API keys are **encrypted** in localStorage
- ✅ **Template files** are safe to commit
- ✅ **No sensitive data** in public repository

## 🐛 Troubleshooting

### Bot Not Responding
1. Check browser console for errors
2. Verify API key is correctly set in `local-config.js`
3. Use `debug-bot.html` to test system status

### API Key Issues
1. Ensure key starts with `gsk_` for Groq
2. Check key length (should be 56+ characters)
3. Verify key is active in Groq console

### Knowledge Base Issues
1. Check if all JavaScript files are loading
2. Verify browser console for loading errors
3. Test with `debug-bot.html`

## 📁 File Structure

```
js/
├── secure-config.js          # Secure configuration system
├── local-config-template.js  # Template for local config (safe to commit)
├── local-config.js          # Your actual config (gitignored)
└── rag-system.js            # Main RAG system
```

## 🔄 Updates

When updating the app:
1. Your `local-config.js` will be preserved
2. New template features will be available
3. No need to reconfigure your API keys

## 🆘 Support

If you encounter issues:
1. Check the browser console for errors
2. Use the debug page to diagnose problems
3. Ensure all files are properly loaded
4. Verify your API key is correct

---

**Barakallahu feek** for using DeenBot! May Allah bless your journey of seeking Islamic knowledge. 🙏
