// DeenBot Floating Widget Include Template
// Add this script to any page to include the floating DeenBot widget

// This file serves as a simple include template for the floating widget
// It automatically loads the main widget functionality

(function() {
    'use strict';
    
    // Check if the floating widget script is already loaded
    if (typeof window.FloatingDeenBotWidget !== 'undefined') {
        console.log('🕌 Floating DeenBot Widget already loaded');
        return;
    }
    
    // Create script element to load the main widget
    const script = document.createElement('script');
    script.src = 'js/floating-deenbot-widget.js';
    script.async = true;
    script.onload = function() {
        console.log('🕌 Floating DeenBot Widget loaded successfully');
    };
    script.onerror = function() {
        console.error('❌ Failed to load Floating DeenBot Widget');
    };
    
    // Add to document head
    document.head.appendChild(script);
    
    // Also load required dependencies if not already present
    const dependencies = [
        'js/config.js',
        'js/complete-quran-data.js',
        'hadiths.js', 
        'js/comprehensive-islamic-knowledge.js',
        'js/extensive-islamic-knowledge.js',
        'js/specialized-islamic-knowledge.js',
        'js/detailed-quranic-hadith-database.js',
        'js/rag-system.js'
    ];
    
    dependencies.forEach(dep => {
        // Check if script is already loaded
        const existingScript = document.querySelector(`script[src="${dep}"]`);
        if (!existingScript) {
            const depScript = document.createElement('script');
            depScript.src = dep;
            depScript.async = true;
            document.head.appendChild(depScript);
        }
    });
    
})();

// Usage Instructions:
/*
To add the floating DeenBot widget to any page:

1. Include this script in your HTML:
   <script src="js/deenbot-widget-include.js"></script>

2. That's it! The widget will automatically appear on the page.

Optional: You can also manually control the widget:
- window.floatingDeenBot.showNotificationForUser() - Show notification dot
- window.floatingDeenBot.sendProgrammaticMessage("Hello") - Send a message
- window.floatingDeenBot.openPanel() - Open the chat panel

The widget includes:
- Floating yellow dot button with mosque icon
- Expandable chat panel with Islamic styling
- Integration with DeenBot RAG system
- Groq API fallback for additional information
- Mobile responsive design
- Islamic greetings and appropriate language
- Source links and disclaimers
*/
