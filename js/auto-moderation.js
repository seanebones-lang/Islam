// Auto-Moderation System for Islamic Learning Companion
// Protects community from inappropriate content while maintaining respectful discussions

class AutoModeration {
    constructor() {
        this.inappropriateWords = this.loadInappropriateWords();
        this.islamicTerms = this.loadIslamicTerms();
        this.spamPatterns = this.loadSpamPatterns();
        this.flaggedContent = [];
        this.userWarnings = new Map();
        this.init();
    }

    init() {
        this.setupContentFilters();
        this.setupSpamDetection();
        this.setupIslamicContentValidation();
        this.setupAutoActions();
    }

    // Load inappropriate words and phrases
    loadInappropriateWords() {
        return {
            // Profanity and offensive language
            profanity: [
                'damn', 'hell', 'crap', 'stupid', 'idiot', 'moron', 'fool',
                'hate', 'kill', 'die', 'death', 'murder', 'violence',
                'sex', 'sexual', 'porn', 'nude', 'naked', 'adult',
                'drug', 'alcohol', 'drunk', 'high', 'stoned',
                'racist', 'racism', 'discrimination', 'prejudice'
            ],
            
            // Anti-Islamic content
            antiIslamic: [
                'kafir', 'infidel', 'unbeliever', 'heretic', 'apostate',
                'blasphemy', 'blasphemous', 'sacrilege', 'sacrilegious',
                'mock', 'mockery', 'ridicule', 'ridiculous', 'absurd',
                'false', 'fake', 'lie', 'lying', 'deceive', 'deception'
            ],
            
            // Political extremism
            extremism: [
                'terrorist', 'terrorism', 'bomb', 'explosive', 'weapon',
                'jihad', 'holy war', 'crusade', 'crusader',
                'extremist', 'radical', 'radicalization',
                'violence', 'violent', 'aggression', 'aggressive'
            ],
            
            // Spam and commercial content
            spam: [
                'buy now', 'click here', 'free money', 'get rich',
                'investment', 'crypto', 'bitcoin', 'trading',
                'promotion', 'advertisement', 'advertise',
                'spam', 'scam', 'fraud', 'fake'
            ],
            
            // Personal attacks
            personalAttacks: [
                'you are', 'you\'re', 'you suck', 'you\'re stupid',
                'shut up', 'be quiet', 'go away', 'leave',
                'nobody likes', 'everyone hates', 'you\'re wrong'
            ]
        };
    }

    // Load Islamic terms that should be protected
    loadIslamicTerms() {
        return {
            // Sacred terms
            sacred: [
                'allah', 'muhammad', 'quran', 'islam', 'muslim',
                'prayer', 'salah', 'fasting', 'ramadan', 'hajj',
                'zakat', 'charity', 'mosque', 'masjid', 'imam',
                'sheikh', 'scholar', 'hadith', 'sunnah', 'seerah'
            ],
            
            // Respectful terms
            respectful: [
                'brother', 'sister', 'brothers', 'sisters',
                'may allah', 'insha allah', 'alhamdulillah',
                'subhanallah', 'astaghfirullah', 'bismillah',
                'peace be upon', 'pbuh', 'swt', 'azza wa jal'
            ]
        };
    }

    // Load spam detection patterns
    loadSpamPatterns() {
        return {
            // Repeated characters
            repeatedChars: /(.)\1{4,}/g,
            
            // Excessive punctuation
            excessivePunctuation: /[!]{3,}|[?]{3,}|[.]{3,}/g,
            
            // All caps
            allCaps: /^[A-Z\s]{20,}$/,
            
            // URLs and links
            urls: /https?:\/\/[^\s]+/g,
            
            // Email addresses
            emails: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g,
            
            // Phone numbers
            phoneNumbers: /\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/g
        };
    }

    // Main content moderation function
    moderateContent(content, userInfo = {}) {
        const moderationResult = {
            approved: true,
            warnings: [],
            actions: [],
            confidence: 0,
            reasons: []
        };

        // Check for inappropriate content
        const inappropriateCheck = this.checkInappropriateContent(content);
        if (!inappropriateCheck.approved) {
            moderationResult.approved = false;
            moderationResult.warnings.push(...inappropriateCheck.warnings);
            moderationResult.reasons.push(...inappropriateCheck.reasons);
        }

        // Check for spam
        const spamCheck = this.checkSpam(content);
        if (!spamCheck.approved) {
            moderationResult.approved = false;
            moderationResult.warnings.push(...spamCheck.warnings);
            moderationResult.reasons.push(...spamCheck.reasons);
        }

        // Check for Islamic content violations
        const islamicCheck = this.checkIslamicContent(content);
        if (!islamicCheck.approved) {
            moderationResult.approved = false;
            moderationResult.warnings.push(...islamicCheck.warnings);
            moderationResult.reasons.push(...islamicCheck.reasons);
        }

        // Check for personal attacks
        const attackCheck = this.checkPersonalAttacks(content);
        if (!attackCheck.approved) {
            moderationResult.approved = false;
            moderationResult.warnings.push(...attackCheck.warnings);
            moderationResult.reasons.push(...attackCheck.reasons);
        }

        // Calculate confidence score
        moderationResult.confidence = this.calculateConfidenceScore(content, moderationResult);

        // Determine actions based on severity
        if (!moderationResult.approved) {
            moderationResult.actions = this.determineActions(moderationResult, userInfo);
        }

        return moderationResult;
    }

    // Check for inappropriate content
    checkInappropriateContent(content) {
        const result = { approved: true, warnings: [], reasons: [] };
        const lowerContent = content.toLowerCase();

        // Check profanity
        for (const word of this.inappropriateWords.profanity) {
            if (lowerContent.includes(word)) {
                result.approved = false;
                result.warnings.push(`Inappropriate language detected: "${word}"`);
                result.reasons.push('profanity');
            }
        }

        // Check anti-Islamic content
        for (const word of this.inappropriateWords.antiIslamic) {
            if (lowerContent.includes(word)) {
                result.approved = false;
                result.warnings.push(`Anti-Islamic content detected: "${word}"`);
                result.reasons.push('anti-islamic');
            }
        }

        // Check extremism
        for (const word of this.inappropriateWords.extremism) {
            if (lowerContent.includes(word)) {
                result.approved = false;
                result.warnings.push(`Extremist content detected: "${word}"`);
                result.reasons.push('extremism');
            }
        }

        return result;
    }

    // Check for spam
    checkSpam(content) {
        const result = { approved: true, warnings: [], reasons: [] };

        // Check for repeated characters
        if (this.spamPatterns.repeatedChars.test(content)) {
            result.approved = false;
            result.warnings.push('Excessive repeated characters detected');
            result.reasons.push('spam');
        }

        // Check for excessive punctuation
        if (this.spamPatterns.excessivePunctuation.test(content)) {
            result.approved = false;
            result.warnings.push('Excessive punctuation detected');
            result.reasons.push('spam');
        }

        // Check for all caps
        if (this.spamPatterns.allCaps.test(content)) {
            result.approved = false;
            result.warnings.push('Excessive capitalization detected');
            result.reasons.push('spam');
        }

        // Check for URLs
        if (this.spamPatterns.urls.test(content)) {
            result.approved = false;
            result.warnings.push('External links not allowed');
            result.reasons.push('spam');
        }

        // Check for email addresses
        if (this.spamPatterns.emails.test(content)) {
            result.approved = false;
            result.warnings.push('Email addresses not allowed');
            result.reasons.push('spam');
        }

        // Check for phone numbers
        if (this.spamPatterns.phoneNumbers.test(content)) {
            result.approved = false;
            result.warnings.push('Phone numbers not allowed');
            result.reasons.push('spam');
        }

        return result;
    }

    // Check for Islamic content violations
    checkIslamicContent(content) {
        const result = { approved: true, warnings: [], reasons: [] };
        const lowerContent = content.toLowerCase();

        // Check for disrespectful use of Islamic terms
        for (const term of this.islamicTerms.sacred) {
            if (lowerContent.includes(term)) {
                // Check if used inappropriately
                if (this.isDisrespectfulUse(content, term)) {
                    result.approved = false;
                    result.warnings.push(`Disrespectful use of Islamic term: "${term}"`);
                    result.reasons.push('islamic-violation');
                }
            }
        }

        return result;
    }

    // Check for personal attacks
    checkPersonalAttacks(content) {
        const result = { approved: true, warnings: [], reasons: [] };
        const lowerContent = content.toLowerCase();

        for (const attack of this.inappropriateWords.personalAttacks) {
            if (lowerContent.includes(attack)) {
                result.approved = false;
                result.warnings.push(`Personal attack detected: "${attack}"`);
                result.reasons.push('personal-attack');
            }
        }

        return result;
    }

    // Check if Islamic term is used disrespectfully
    isDisrespectfulUse(content, term) {
        const disrespectfulContexts = [
            'joke', 'funny', 'lol', 'haha', 'lmao',
            'stupid', 'dumb', 'idiot', 'moron',
            'hate', 'dislike', 'annoying', 'boring'
        ];

        const lowerContent = content.toLowerCase();
        const termIndex = lowerContent.indexOf(term.toLowerCase());
        
        if (termIndex === -1) return false;

        // Check context around the term
        const contextStart = Math.max(0, termIndex - 50);
        const contextEnd = Math.min(content.length, termIndex + term.length + 50);
        const context = lowerContent.substring(contextStart, contextEnd);

        for (const disrespectful of disrespectfulContexts) {
            if (context.includes(disrespectful)) {
                return true;
            }
        }

        return false;
    }

    // Calculate confidence score
    calculateConfidenceScore(content, moderationResult) {
        let score = 100;

        // Reduce score based on warnings
        score -= moderationResult.warnings.length * 10;

        // Reduce score for specific violations
        if (moderationResult.reasons.includes('profanity')) score -= 30;
        if (moderationResult.reasons.includes('anti-islamic')) score -= 50;
        if (moderationResult.reasons.includes('extremism')) score -= 40;
        if (moderationResult.reasons.includes('spam')) score -= 20;
        if (moderationResult.reasons.includes('personal-attack')) score -= 25;

        return Math.max(0, score);
    }

    // Determine actions based on moderation result
    determineActions(moderationResult, userInfo) {
        const actions = [];

        // Immediate actions
        if (moderationResult.reasons.includes('anti-islamic') || 
            moderationResult.reasons.includes('extremism')) {
            actions.push('reject');
            actions.push('warn_user');
            actions.push('flag_for_review');
        }

        // Moderate actions
        if (moderationResult.reasons.includes('profanity') || 
            moderationResult.reasons.includes('personal-attack')) {
            actions.push('reject');
            actions.push('warn_user');
        }

        // Light actions
        if (moderationResult.reasons.includes('spam')) {
            actions.push('reject');
            actions.push('suggest_edit');
        }

        return actions;
    }

    // Setup content filters
    setupContentFilters() {
        // Filter text inputs
        const textInputs = document.querySelectorAll('input[type="text"], textarea');
        textInputs.forEach(input => {
            input.addEventListener('input', (e) => {
                this.filterInput(e.target);
            });
        });

        // Filter content on form submission
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                if (!this.validateFormContent(form)) {
                    e.preventDefault();
                }
            });
        });
    }

    // Filter input in real-time
    filterInput(input) {
        const content = input.value;
        const moderationResult = this.moderateContent(content);

        if (!moderationResult.approved) {
            this.showModerationWarning(input, moderationResult);
        } else {
            this.hideModerationWarning(input);
        }
    }

    // Validate form content
    validateFormContent(form) {
        const textInputs = form.querySelectorAll('input[type="text"], textarea');
        let allValid = true;

        textInputs.forEach(input => {
            const content = input.value;
            const moderationResult = this.moderateContent(content);

            if (!moderationResult.approved) {
                this.showModerationError(input, moderationResult);
                allValid = false;
            }
        });

        return allValid;
    }

    // Show moderation warning
    showModerationWarning(input, moderationResult) {
        let warningDiv = input.parentNode.querySelector('.moderation-warning');
        
        if (!warningDiv) {
            warningDiv = document.createElement('div');
            warningDiv.className = 'moderation-warning';
            warningDiv.style.cssText = `
                background: #ff6b6b;
                color: white;
                padding: 0.5rem;
                border-radius: 5px;
                margin-top: 0.5rem;
                font-size: 0.9rem;
                display: flex;
                align-items: center;
                gap: 0.5rem;
            `;
            input.parentNode.appendChild(warningDiv);
        }

        warningDiv.innerHTML = `
            <i class="fas fa-exclamation-triangle"></i>
            <span>Content may be inappropriate: ${moderationResult.warnings.join(', ')}</span>
        `;
    }

    // Hide moderation warning
    hideModerationWarning(input) {
        const warningDiv = input.parentNode.querySelector('.moderation-warning');
        if (warningDiv) {
            warningDiv.remove();
        }
    }

    // Show moderation error
    showModerationError(input, moderationResult) {
        input.style.borderColor = '#ff6b6b';
        
        let errorDiv = input.parentNode.querySelector('.moderation-error');
        if (!errorDiv) {
            errorDiv = document.createElement('div');
            errorDiv.className = 'moderation-error';
            errorDiv.style.cssText = `
                background: #ff6b6b;
                color: white;
                padding: 0.5rem;
                border-radius: 5px;
                margin-top: 0.5rem;
                font-size: 0.9rem;
            `;
            input.parentNode.appendChild(errorDiv);
        }

        errorDiv.innerHTML = `
            <i class="fas fa-ban"></i>
            <strong>Content rejected:</strong> ${moderationResult.warnings.join(', ')}
        `;
    }

    // Setup spam detection
    setupSpamDetection() {
        // Detect rapid posting
        this.postTimestamps = [];
        
        // Monitor post frequency
        setInterval(() => {
            this.checkPostFrequency();
        }, 60000); // Check every minute
    }

    // Check post frequency
    checkPostFrequency() {
        const now = Date.now();
        const oneMinuteAgo = now - 60000;
        
        // Remove old timestamps
        this.postTimestamps = this.postTimestamps.filter(timestamp => timestamp > oneMinuteAgo);
        
        // Check if user is posting too frequently
        if (this.postTimestamps.length > 5) {
            this.flagSpamUser();
        }
    }

    // Flag spam user
    flagSpamUser() {
        console.log('Spam user detected - too many posts in short time');
        // In a real app, this would flag the user for review
    }

    // Setup Islamic content validation
    setupIslamicContentValidation() {
        // Monitor for respectful Islamic discussions
        this.setupIslamicContentMonitoring();
    }

    // Setup Islamic content monitoring
    setupIslamicContentMonitoring() {
        // Add Islamic content guidelines
        this.addIslamicGuidelines();
    }

    // Add Islamic guidelines
    addIslamicGuidelines() {
        const guidelines = document.createElement('div');
        guidelines.id = 'islamic-guidelines';
        guidelines.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--dark-green);
            color: var(--gold);
            padding: 1rem;
            border-radius: 10px;
            max-width: 300px;
            z-index: 1000;
            display: none;
        `;
        
        guidelines.innerHTML = `
            <h4><i class="fas fa-mosque"></i> Islamic Guidelines</h4>
            <ul style="margin: 0.5rem 0; padding-left: 1rem;">
                <li>Use respectful language</li>
                <li>Maintain Islamic etiquette</li>
                <li>No inappropriate content</li>
                <li>No personal attacks</li>
                <li>Focus on Islamic learning</li>
            </ul>
            <button onclick="this.parentElement.style.display='none'" style="background: var(--gold); color: var(--dark-green); border: none; padding: 0.5rem 1rem; border-radius: 5px; cursor: pointer;">Got it</button>
        `;
        
        document.body.appendChild(guidelines);
    }

    // Setup auto actions
    setupAutoActions() {
        // Auto-reject inappropriate content
        this.setupAutoReject();
        
        // Auto-warn users
        this.setupAutoWarn();
        
        // Auto-flag for review
        this.setupAutoFlag();
    }

    // Setup auto-reject
    setupAutoReject() {
        // This would integrate with the form submission process
        console.log('Auto-reject system activated');
    }

    // Setup auto-warn
    setupAutoWarn() {
        // This would send warnings to users
        console.log('Auto-warn system activated');
    }

    // Setup auto-flag
    setupAutoFlag() {
        // This would flag content for manual review
        console.log('Auto-flag system activated');
    }

    // Get moderation statistics
    getModerationStats() {
        return {
            totalModerated: this.flaggedContent.length,
            inappropriateContent: this.flaggedContent.filter(item => 
                item.reasons.includes('profanity') || 
                item.reasons.includes('anti-islamic')
            ).length,
            spamContent: this.flaggedContent.filter(item => 
                item.reasons.includes('spam')
            ).length,
            personalAttacks: this.flaggedContent.filter(item => 
                item.reasons.includes('personal-attack')
            ).length
        };
    }

    // Show moderation dashboard
    showModerationDashboard() {
        const stats = this.getModerationStats();
        
        const dashboard = document.createElement('div');
        dashboard.id = 'moderation-dashboard';
        dashboard.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: var(--dark-green);
            color: var(--gold);
            padding: 2rem;
            border-radius: 15px;
            max-width: 500px;
            z-index: 1001;
        `;
        
        dashboard.innerHTML = `
            <h3><i class="fas fa-shield-alt"></i> Moderation Dashboard</h3>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin: 1rem 0;">
                <div style="text-align: center;">
                    <div style="font-size: 2rem; font-weight: bold;">${stats.totalModerated}</div>
                    <div>Total Moderated</div>
                </div>
                <div style="text-align: center;">
                    <div style="font-size: 2rem; font-weight: bold;">${stats.inappropriateContent}</div>
                    <div>Inappropriate</div>
                </div>
                <div style="text-align: center;">
                    <div style="font-size: 2rem; font-weight: bold;">${stats.spamContent}</div>
                    <div>Spam</div>
                </div>
                <div style="text-align: center;">
                    <div style="font-size: 2rem; font-weight: bold;">${stats.personalAttacks}</div>
                    <div>Personal Attacks</div>
                </div>
            </div>
            <button onclick="this.parentElement.remove()" style="background: var(--gold); color: var(--dark-green); border: none; padding: 0.5rem 1rem; border-radius: 5px; cursor: pointer; width: 100%;">Close</button>
        `;
        
        document.body.appendChild(dashboard);
    }
}

// Initialize auto-moderation when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.autoModeration = new AutoModeration();
    
    // Add moderation dashboard button for admins
    if (window.location.href.includes('community-board.html')) {
        const moderationBtn = document.createElement('button');
        moderationBtn.innerHTML = '<i class="fas fa-shield-alt"></i> Moderation';
        moderationBtn.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 20px;
            background: var(--gold);
            color: var(--dark-green);
            border: none;
            padding: 1rem;
            border-radius: 50%;
            cursor: pointer;
            z-index: 1000;
            box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        `;
        
        moderationBtn.addEventListener('click', () => {
            window.autoModeration.showModerationDashboard();
        });
        
        document.body.appendChild(moderationBtn);
    }
});

// Global moderation functions
window.moderateContent = function(content) {
    return window.autoModeration.moderateContent(content);
};

window.showModerationGuidelines = function() {
    const guidelines = document.getElementById('islamic-guidelines');
    if (guidelines) {
        guidelines.style.display = 'block';
    }
};

// Add CSS for moderation warnings
const moderationStyle = document.createElement('style');
moderationStyle.textContent = `
    .moderation-warning {
        animation: slideDown 0.3s ease;
    }
    
    .moderation-error {
        animation: shake 0.5s ease;
    }
    
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
    
    .moderation-warning i,
    .moderation-error i {
        margin-right: 0.5rem;
    }
`;
document.head.appendChild(moderationStyle);
