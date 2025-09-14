// Floating DeenBot Widget - Universal Islamic AI Assistant
// Can be added to any page for instant Islamic assistance

class FloatingDeenBotWidget {
    constructor() {
        this.isVisible = false;
        this.isExpanded = false;
        this.chatHistory = [];
        this.isInitialized = false;
        this.createWidget();
        this.bindEvents();
        this.initializeDeenBot();
    }

    // Create the floating widget HTML structure
    createWidget() {
        // Create main widget container
        const widgetContainer = document.createElement('div');
        widgetContainer.id = 'deenbot-floating-widget';
        widgetContainer.innerHTML = `
            <!-- Floating Button -->
            <div class="deenbot-floating-button" id="deenbot-toggle">
                <i class="fas fa-mosque"></i>
                <span class="deenbot-notification-dot" id="deenbot-notification"></span>
            </div>

            <!-- Chat Panel -->
            <div class="deenbot-chat-panel" id="deenbot-panel" style="display: none;">
                <!-- Header -->
                <div class="deenbot-header">
                    <div class="deenbot-header-info">
                        <i class="fas fa-mosque"></i>
                        <span>DeenBot</span>
                        <span class="deenbot-status" id="deenbot-status">Ready</span>
                    </div>
                </div>

                <!-- Chat Container -->
                <div class="deenbot-chat-container" id="deenbot-chat-container">
                    <div class="deenbot-welcome">
                        <div class="deenbot-welcome-icon">
                            <i class="fas fa-mosque"></i>
                        </div>
                        <div class="deenbot-welcome-text">
                            <h4>As-salamu alaykum!</h4>
                            <p>I'm DeenBot, your Islamic AI companion. How can I help you today?</p>
                        </div>
                    </div>
                </div>

                <!-- Input Area -->
                <div class="deenbot-input-area">
                    <div class="deenbot-input-container">
                        <input type="text" id="deenbot-input" placeholder="Ask me anything about Islam..." autocomplete="off">
                        <button class="deenbot-send-btn" id="deenbot-send">
                            <i class="fas fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;

        // Add to body
        document.body.appendChild(widgetContainer);
    }

    // Add CSS styles for the widget
    addStyles() {
        const style = document.createElement('style');
        style.textContent = `
            /* Floating DeenBot Widget Styles */
            #deenbot-floating-widget {
                position: fixed;
                bottom: 20px;
                right: 20px;
                z-index: 9999;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            }

            /* Floating Button */
            .deenbot-floating-button {
                width: 60px;
                height: 60px;
                background: linear-gradient(135deg, #FFD700, #FFA500);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                box-shadow: 0 4px 20px rgba(255, 215, 0, 0.4);
                transition: all 0.3s ease;
                position: relative;
                border: 3px solid #fff;
            }

            .deenbot-floating-button:hover {
                transform: scale(1.1);
                box-shadow: 0 6px 25px rgba(255, 215, 0, 0.6);
            }

            .deenbot-floating-button i {
                font-size: 24px;
                color: #2c3e50;
            }

            .deenbot-notification-dot {
                position: absolute;
                top: -5px;
                right: -5px;
                width: 20px;
                height: 20px;
                background: #e74c3c;
                border-radius: 50%;
                border: 2px solid #fff;
                display: none;
                animation: pulse 2s infinite;
            }

            @keyframes pulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.2); }
                100% { transform: scale(1); }
            }

            /* Chat Panel */
            .deenbot-chat-panel {
                position: absolute;
                bottom: 80px;
                right: 0;
                width: 350px;
                height: 500px;
                background: linear-gradient(135deg, #2c3e50, #34495e);
                border-radius: 15px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                display: flex;
                flex-direction: column;
                overflow: hidden;
                border: 1px solid rgba(255, 215, 0, 0.3);
            }

            /* Header */
            .deenbot-header {
                background: linear-gradient(135deg, #FFD700, #FFA500);
                padding: 15px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                color: #2c3e50;
                font-weight: 600;
            }

            .deenbot-header-info {
                display: flex;
                align-items: center;
                gap: 8px;
            }

            .deenbot-header-info i {
                font-size: 18px;
            }

            .deenbot-status {
                font-size: 12px;
                background: rgba(44, 62, 80, 0.2);
                padding: 2px 8px;
                border-radius: 10px;
            }


            /* Chat Container */
            .deenbot-chat-container {
                flex: 1;
                padding: 20px;
                overflow-y: auto;
                background: linear-gradient(to bottom, #34495e, #2c3e50);
            }

            .deenbot-welcome {
                text-align: center;
                color: #ecf0f1;
                margin-bottom: 20px;
            }

            .deenbot-welcome-icon {
                font-size: 48px;
                color: #FFD700;
                margin-bottom: 15px;
            }

            .deenbot-welcome h4 {
                margin: 0 0 10px 0;
                color: #FFD700;
                font-size: 18px;
            }

            .deenbot-welcome p {
                margin: 0;
                font-size: 14px;
                line-height: 1.5;
                opacity: 0.9;
            }

            /* Messages */
            .deenbot-message {
                margin-bottom: 15px;
                display: flex;
                flex-direction: column;
            }

            .deenbot-message.user {
                align-items: flex-end;
            }

            .deenbot-message.assistant {
                align-items: flex-start;
            }

            .deenbot-message-bubble {
                max-width: 80%;
                padding: 12px 16px;
                border-radius: 18px;
                font-size: 14px;
                line-height: 1.4;
                word-wrap: break-word;
            }

            .deenbot-message.user .deenbot-message-bubble {
                background: linear-gradient(135deg, #FFD700, #FFA500);
                color: #2c3e50;
                border-bottom-right-radius: 5px;
            }

            .deenbot-message.assistant .deenbot-message-bubble {
                background: rgba(255, 255, 255, 0.1);
                color: #ecf0f1;
                border-bottom-left-radius: 5px;
                border: 1px solid rgba(255, 215, 0, 0.2);
            }

            .deenbot-message-time {
                font-size: 11px;
                color: #bdc3c7;
                margin-top: 5px;
                text-align: right;
            }

            .deenbot-message.assistant .deenbot-message-time {
                text-align: left;
            }

            /* Input Area */
            .deenbot-input-area {
                padding: 15px;
                background: #2c3e50;
                border-top: 1px solid rgba(255, 215, 0, 0.2);
            }

            .deenbot-input-container {
                display: flex;
                gap: 10px;
            }

            #deenbot-input {
                flex: 1;
                padding: 12px 15px;
                border: 1px solid rgba(255, 215, 0, 0.3);
                border-radius: 25px;
                background: rgba(255, 255, 255, 0.1);
                color: #ecf0f1;
                font-size: 14px;
                outline: none;
                transition: all 0.3s ease;
            }

            #deenbot-input:focus {
                border-color: #FFD700;
                background: rgba(255, 255, 255, 0.15);
            }

            #deenbot-input::placeholder {
                color: #bdc3c7;
            }

            .deenbot-send-btn {
                width: 45px;
                height: 45px;
                border: none;
                border-radius: 50%;
                background: linear-gradient(135deg, #FFD700, #FFA500);
                color: #2c3e50;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 16px;
                transition: all 0.3s ease;
            }

            .deenbot-send-btn:hover {
                transform: scale(1.05);
                box-shadow: 0 4px 15px rgba(255, 215, 0, 0.4);
            }


            /* Groq Disclaimer Styles */
            .deenbot-groq-disclaimer {
                background: rgba(255, 193, 7, 0.1);
                border: 1px solid #ffc107;
                border-radius: 8px;
                padding: 8px;
                margin: 8px 0;
                font-size: 11px;
            }

            .deenbot-disclaimer-header {
                display: flex;
                align-items: center;
                gap: 4px;
                color: #ffc107;
                font-weight: 600;
                margin-bottom: 4px;
            }

            .deenbot-disclaimer-text {
                color: rgba(255, 255, 255, 0.9);
                line-height: 1.3;
            }

            /* Sources Section */
            .deenbot-sources-section {
                margin: 8px 0;
                padding: 8px;
                background: rgba(255, 255, 255, 0.05);
                border-radius: 8px;
                border-left: 2px solid #FFD700;
            }

            .deenbot-sources-section strong {
                color: #FFD700;
                display: block;
                margin-bottom: 6px;
                font-size: 12px;
            }

            .deenbot-source-item {
                margin-bottom: 4px;
                padding: 4px;
                background: rgba(255, 255, 255, 0.05);
                border-radius: 6px;
            }

            .deenbot-source-link {
                color: #FFD700;
                text-decoration: none;
                font-weight: 600;
                display: inline-flex;
                align-items: center;
                gap: 4px;
                font-size: 11px;
                transition: color 0.3s ease;
            }

            .deenbot-source-link:hover {
                color: #FFA500;
            }

            .deenbot-source-description {
                color: rgba(255, 255, 255, 0.8);
                font-size: 10px;
                margin-top: 2px;
                margin-left: 12px;
            }

            /* Mobile Responsive */
            @media (max-width: 768px) {
                #deenbot-floating-widget {
                    bottom: 15px;
                    right: 15px;
                }

                .deenbot-chat-panel {
                    width: 300px;
                    height: 450px;
                    bottom: 75px;
                }

                .deenbot-floating-button {
                    width: 55px;
                    height: 55px;
                }

                .deenbot-floating-button i {
                    font-size: 22px;
                }
            }

            @media (max-width: 480px) {
                .deenbot-chat-panel {
                    width: calc(100vw - 30px);
                    right: -15px;
                    height: 400px;
                }
            }

            /* Animation for panel appearance */
            .deenbot-chat-panel.show {
                animation: slideUp 0.3s ease-out;
            }

            @keyframes slideUp {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            /* Loading animation */
            .deenbot-typing {
                display: flex;
                align-items: center;
                gap: 4px;
                padding: 12px 16px;
                background: rgba(255, 255, 255, 0.1);
                border-radius: 18px;
                border-bottom-left-radius: 5px;
                max-width: 80%;
            }

            .deenbot-typing-dot {
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background: #FFD700;
                animation: typing 1.4s infinite ease-in-out;
            }

            .deenbot-typing-dot:nth-child(1) { animation-delay: -0.32s; }
            .deenbot-typing-dot:nth-child(2) { animation-delay: -0.16s; }

            @keyframes typing {
                0%, 80%, 100% {
                    transform: scale(0.8);
                    opacity: 0.5;
                }
                40% {
                    transform: scale(1);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Bind event listeners
    bindEvents() {
        const toggleBtn = document.getElementById('deenbot-toggle');
        const panel = document.getElementById('deenbot-panel');
        const sendBtn = document.getElementById('deenbot-send');
        const input = document.getElementById('deenbot-input');

        // Toggle panel
        toggleBtn.addEventListener('click', () => {
            this.togglePanel();
        });

        // Send message
        sendBtn.addEventListener('click', () => {
            this.sendMessage();
        });

        // Enter key to send
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendMessage();
            }
        });

        // Close panel when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('#deenbot-floating-widget')) {
                this.closePanel();
            }
        });
    }

    // Initialize DeenBot integration
    async initializeDeenBot() {
        try {
            // Wait for Islamic RAG system to be available
            if (typeof window.islamicRAG !== 'undefined' && window.islamicRAG.isInitialized) {
                this.isInitialized = true;
                this.updateStatus('Ready');
                console.log('🕌 Floating DeenBot Widget initialized and connected to RAG system');
            } else {
                // Wait a bit and try again
                setTimeout(() => this.initializeDeenBot(), 1000);
            }
        } catch (error) {
            console.error('Error initializing DeenBot:', error);
            this.updateStatus('Error');
        }
    }

    // Toggle panel visibility
    togglePanel() {
        const panel = document.getElementById('deenbot-panel');
        if (this.isVisible) {
            this.closePanel();
        } else {
            this.openPanel();
        }
    }

    // Open panel
    openPanel() {
        const panel = document.getElementById('deenbot-panel');
        panel.style.display = 'flex';
        panel.classList.add('show');
        this.isVisible = true;
        this.hideNotification();
        
        // Focus input
        setTimeout(() => {
            document.getElementById('deenbot-input').focus();
        }, 100);
    }

    // Close panel
    closePanel() {
        const panel = document.getElementById('deenbot-panel');
        panel.style.display = 'none';
        panel.classList.remove('show');
        this.isVisible = false;
    }


    // Update status indicator
    updateStatus(status) {
        const statusElement = document.getElementById('deenbot-status');
        if (statusElement) {
            statusElement.textContent = status;
        }
    }

    // Show notification dot
    showNotification() {
        const notification = document.getElementById('deenbot-notification');
        if (notification) {
            notification.style.display = 'block';
        }
    }

    // Hide notification dot
    hideNotification() {
        const notification = document.getElementById('deenbot-notification');
        if (notification) {
            notification.style.display = 'none';
        }
    }

    // Send message
    async sendMessage() {
        const input = document.getElementById('deenbot-input');
        const message = input.value.trim();
        
        if (!message || !this.isInitialized) return;

        // Add user message to chat
        this.addMessage('user', message);
        input.value = '';

        // Show typing indicator
        this.showTyping();

        try {
            // Get response from Islamic RAG system
            const response = await window.islamicRAG.getIntelligentResponse(message);
            
            // Hide typing indicator
            this.hideTyping();

            // Add assistant response
            this.addMessage('assistant', response);
            
        } catch (error) {
            console.error('Error getting DeenBot response:', error);
            this.hideTyping();
            this.addMessage('assistant', 'Alhamdulillah, I encountered an issue. Please try again or visit the full DeenBot interface.');
        }
    }

    // Add message to chat
    addMessage(type, content) {
        const chatContainer = document.getElementById('deenbot-chat-container');
        const messageDiv = document.createElement('div');
        messageDiv.className = `deenbot-message ${type}`;

        let messageContent = '';
        let timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        if (type === 'user') {
            messageContent = content;
        } else {
            // Handle DeenBot response
            if (typeof content === 'string') {
                messageContent = content;
            } else if (content.response_text) {
                messageContent = content.response_text;
                
                // Add Groq disclaimer if applicable
                if (content.groq_used && content.disclaimer) {
                    messageContent += `<div class="deenbot-groq-disclaimer">
                        <div class="deenbot-disclaimer-header">
                            <i class="fas fa-exclamation-triangle"></i>
                            <strong>Notice</strong>
                        </div>
                        <div class="deenbot-disclaimer-text">${content.disclaimer}</div>
                    </div>`;
                }

                // Add sources if available
                if (content.sources && content.sources.length > 0) {
                    messageContent += '<div class="deenbot-sources-section">';
                    messageContent += '<strong><i class="fas fa-link"></i> Sources:</strong>';
                    content.sources.forEach(source => {
                        messageContent += `<div class="deenbot-source-item">
                            <a href="${source.url}" target="_blank" class="deenbot-source-link">
                                <i class="fas fa-external-link-alt"></i>
                                ${source.name}
                            </a>
                            <div class="deenbot-source-description">${source.description}</div>
                        </div>`;
                    });
                    messageContent += '</div>';
                }
            } else {
                messageContent = 'I apologize, but I couldn\'t process that request.';
            }
        }

        messageDiv.innerHTML = `
            <div class="deenbot-message-bubble">${messageContent}</div>
            <div class="deenbot-message-time">${timestamp}</div>
        `;

        chatContainer.appendChild(messageDiv);
        chatContainer.scrollTop = chatContainer.scrollHeight;

        // Store in chat history
        this.chatHistory.push({
            type: type,
            content: messageContent,
            timestamp: timestamp
        });
    }

    // Show typing indicator
    showTyping() {
        const chatContainer = document.getElementById('deenbot-chat-container');
        const typingDiv = document.createElement('div');
        typingDiv.className = 'deenbot-message assistant';
        typingDiv.id = 'deenbot-typing-indicator';
        typingDiv.innerHTML = `
            <div class="deenbot-typing">
                <div class="deenbot-typing-dot"></div>
                <div class="deenbot-typing-dot"></div>
                <div class="deenbot-typing-dot"></div>
            </div>
        `;
        chatContainer.appendChild(typingDiv);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    // Hide typing indicator
    hideTyping() {
        const typingIndicator = document.getElementById('deenbot-typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    // Public method to show notification
    showNotificationForUser() {
        if (!this.isVisible) {
            this.showNotification();
        }
    }

    // Public method to send a message programmatically
    sendProgrammaticMessage(message) {
        if (this.isVisible) {
            document.getElementById('deenbot-input').value = message;
            this.sendMessage();
        } else {
            this.openPanel();
            setTimeout(() => {
                document.getElementById('deenbot-input').value = message;
                this.sendMessage();
            }, 300);
        }
    }
}

// Initialize the floating widget when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add styles first
    const floatingWidget = new FloatingDeenBotWidget();
    floatingWidget.addStyles();
    
    // Make it globally accessible
    window.floatingDeenBot = floatingWidget;
    
    console.log('🕌 Floating DeenBot Widget loaded successfully');
});

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FloatingDeenBotWidget;
}
