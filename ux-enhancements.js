// UX Enhancements for Islamic Learning Companion
// Designed for users of all ages with accessibility and ease of use in mind

// Global variables for UX features
let currentTextSize = 100; // Percentage
let isHighContrast = false;
let isFirstVisit = true;
let isReadingMode = false;
let isReduceMotion = false;
let isFocusMode = false;
let currentTheme = 'default';
let currentFontWeight = 'normal';
let currentLineSpacing = 1.5;
let speechSynthesis = window.speechSynthesis;
let currentUtterance = null;

// Initialize UX enhancements
document.addEventListener('DOMContentLoaded', function() {
    initializeUXFeatures();
    checkFirstVisit();
    setupAccessibilityControls();
    setupTooltips();
    setupProgressIndicators();
});

// Initialize all UX features
function initializeUXFeatures() {
    // Load user preferences
    loadUserPreferences();
    
    // Setup keyboard navigation
    setupKeyboardNavigation();
    
    // Setup touch gestures for mobile
    setupTouchGestures();
    
    // Initialize smooth scrolling
    setupSmoothScrolling();
    
    // Setup auto-save for forms
    setupAutoSave();
}

// Check if this is the user's first visit
function checkFirstVisit() {
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
        setTimeout(() => {
            showQuickStart();
            localStorage.setItem('hasVisited', 'true');
        }, 2000);
    }
}

// Quick Start Modal Functions
function showQuickStart() {
    const modal = document.getElementById('quickStartModal');
    if (modal) {
        modal.style.display = 'flex';
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

function closeQuickStart() {
    const modal = document.getElementById('quickStartModal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    }
}

// Help Modal Functions
function showHelp() {
    const modal = document.getElementById('helpModal');
    if (modal) {
        modal.style.display = 'flex';
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

function closeHelp() {
    const modal = document.getElementById('helpModal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    }
}

// Accessibility Controls
function setupAccessibilityControls() {
    // Load saved preferences
    const savedTextSize = localStorage.getItem('textSize');
    const savedContrast = localStorage.getItem('highContrast');
    
    if (savedTextSize) {
        currentTextSize = parseInt(savedTextSize);
        applyTextSize();
    }
    
    if (savedContrast === 'true') {
        isHighContrast = true;
        applyHighContrast();
    }
}

function toggleHighContrast() {
    isHighContrast = !isHighContrast;
    applyHighContrast();
    localStorage.setItem('highContrast', isHighContrast.toString());
    
    // Show feedback
    showAccessibilityFeedback(isHighContrast ? 'High contrast enabled' : 'High contrast disabled');
}

function applyHighContrast() {
    const body = document.body;
    if (isHighContrast) {
        body.classList.add('high-contrast');
    } else {
        body.classList.remove('high-contrast');
    }
}

function increaseTextSize() {
    if (currentTextSize < 200) {
        currentTextSize += 10;
        applyTextSize();
        localStorage.setItem('textSize', currentTextSize.toString());
        showAccessibilityFeedback(`Text size: ${currentTextSize}%`);
    }
}

function decreaseTextSize() {
    if (currentTextSize > 60) {
        currentTextSize -= 10;
        applyTextSize();
        localStorage.setItem('textSize', currentTextSize.toString());
        showAccessibilityFeedback(`Text size: ${currentTextSize}%`);
    }
}

// Enhanced text size control
function setTextSize(size) {
    currentTextSize = size;
    applyTextSize();
    localStorage.setItem('textSize', currentTextSize.toString());
    updateTextSizeDisplay();
    showAccessibilityFeedback(`Text size set to ${currentTextSize}%`);
}

function updateTextSizeDisplay() {
    const display = document.getElementById('currentTextSize');
    if (display) {
        display.textContent = currentTextSize + '%';
    }
}

// Font weight control
function setFontWeight(weight) {
    currentFontWeight = weight;
    document.body.style.fontWeight = weight;
    localStorage.setItem('fontWeight', weight);
    showAccessibilityFeedback(`Font weight: ${weight}`);
}

// Theme control
function setTheme(theme) {
    currentTheme = theme;
    document.body.className = document.body.className.replace(/theme-\w+/g, '');
    document.body.classList.add('theme-' + theme);
    localStorage.setItem('theme', theme);
    showAccessibilityFeedback(`Theme: ${theme}`);
}

// Reading mode toggle
function toggleReadingMode() {
    isReadingMode = !isReadingMode;
    if (isReadingMode) {
        document.body.classList.add('reading-mode');
        // Apply reading mode settings
        setTextSize(150);
        setLineSpacing(2.0);
        setFontWeight('bold');
    } else {
        document.body.classList.remove('reading-mode');
        // Restore previous settings
        loadUserPreferences();
    }
    localStorage.setItem('readingMode', isReadingMode.toString());
    showAccessibilityFeedback(isReadingMode ? 'Reading mode enabled' : 'Reading mode disabled');
}

// Reduce motion toggle
function toggleReduceMotion() {
    isReduceMotion = !isReduceMotion;
    if (isReduceMotion) {
        document.body.classList.add('reduce-motion');
    } else {
        document.body.classList.remove('reduce-motion');
    }
    localStorage.setItem('reduceMotion', isReduceMotion.toString());
    showAccessibilityFeedback(isReduceMotion ? 'Motion reduced' : 'Motion enabled');
}

// Focus mode toggle
function toggleFocusMode() {
    isFocusMode = !isFocusMode;
    if (isFocusMode) {
        document.body.classList.add('focus-mode');
        addFocusModeListeners();
    } else {
        document.body.classList.remove('focus-mode');
        removeFocusModeListeners();
    }
    localStorage.setItem('focusMode', isFocusMode.toString());
    showAccessibilityFeedback(isFocusMode ? 'Focus mode enabled' : 'Focus mode disabled');
}

// Line spacing control
function setLineSpacing(spacing) {
    currentLineSpacing = spacing;
    document.body.style.lineHeight = spacing;
    localStorage.setItem('lineSpacing', spacing.toString());
    showAccessibilityFeedback(`Line spacing: ${spacing}`);
}

// Text-to-Speech functions
function speakPage() {
    if (speechSynthesis.speaking) {
        speechSynthesis.cancel();
    }
    
    const text = document.body.innerText;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = parseFloat(document.getElementById('speechRate').value);
    utterance.pitch = 1;
    utterance.volume = 1;
    
    utterance.onstart = function() {
        showAccessibilityFeedback('Reading page...');
    };
    
    utterance.onend = function() {
        showAccessibilityFeedback('Finished reading');
    };
    
    speechSynthesis.speak(utterance);
    currentUtterance = utterance;
}

function stopSpeaking() {
    speechSynthesis.cancel();
    showAccessibilityFeedback('Stopped reading');
}

function setSpeechRate(rate) {
    const rateValue = document.getElementById('rateValue');
    if (rateValue) {
        rateValue.textContent = rate + 'x';
    }
    localStorage.setItem('speechRate', rate);
}

// Visual Settings Modal
function showVisualSettings() {
    const modal = document.getElementById('visualSettingsModal');
    if (modal) {
        modal.style.display = 'flex';
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
        loadVisualSettings();
    }
}

function closeVisualSettings() {
    const modal = document.getElementById('visualSettingsModal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    }
}

function loadVisualSettings() {
    // Load current settings into the modal
    const readingModeCheckbox = document.getElementById('readingMode');
    const reduceMotionCheckbox = document.getElementById('reduceMotion');
    const focusModeCheckbox = document.getElementById('focusMode');
    const speechRateSlider = document.getElementById('speechRate');
    
    if (readingModeCheckbox) readingModeCheckbox.checked = isReadingMode;
    if (reduceMotionCheckbox) reduceMotionCheckbox.checked = isReduceMotion;
    if (focusModeCheckbox) focusModeCheckbox.checked = isFocusMode;
    if (speechRateSlider) speechRateSlider.value = localStorage.getItem('speechRate') || '1';
    
    updateTextSizeDisplay();
    setSpeechRate(speechRateSlider.value);
}

function saveVisualSettings() {
    // Settings are already saved when changed
    showAccessibilityFeedback('Settings saved!');
    closeVisualSettings();
}

function resetVisualSettings() {
    // Reset all settings to default
    setTextSize(100);
    setFontWeight('normal');
    setTheme('default');
    setLineSpacing(1.5);
    setSpeechRate('1');
    
    isReadingMode = false;
    isReduceMotion = false;
    isFocusMode = false;
    
    document.body.className = '';
    document.body.style.fontWeight = '';
    document.body.style.lineHeight = '';
    
    // Clear localStorage
    localStorage.removeItem('textSize');
    localStorage.removeItem('fontWeight');
    localStorage.removeItem('theme');
    localStorage.removeItem('lineSpacing');
    localStorage.removeItem('speechRate');
    localStorage.removeItem('readingMode');
    localStorage.removeItem('reduceMotion');
    localStorage.removeItem('focusMode');
    
    showAccessibilityFeedback('Settings reset to default');
    loadVisualSettings();
}

// Focus mode helpers
function addFocusModeListeners() {
    document.addEventListener('click', highlightClickedElement);
    document.addEventListener('keydown', highlightFocusedElement);
}

function removeFocusModeListeners() {
    document.removeEventListener('click', highlightClickedElement);
    document.removeEventListener('keydown', highlightFocusedElement);
    document.querySelectorAll('.focus-highlight').forEach(el => {
        el.classList.remove('focus-highlight');
    });
}

function highlightClickedElement(e) {
    if (isFocusMode) {
        document.querySelectorAll('.focus-highlight').forEach(el => {
            el.classList.remove('focus-highlight');
        });
        e.target.classList.add('focus-highlight');
    }
}

function highlightFocusedElement(e) {
    if (isFocusMode && e.key === 'Tab') {
        document.querySelectorAll('.focus-highlight').forEach(el => {
            el.classList.remove('focus-highlight');
        });
        document.activeElement.classList.add('focus-highlight');
    }
}

function applyTextSize() {
    document.documentElement.style.fontSize = currentTextSize + '%';
}

// Keyboard Navigation
function setupKeyboardNavigation() {
    document.addEventListener('keydown', function(e) {
        // Escape key closes modals
        if (e.key === 'Escape') {
            closeQuickStart();
            closeHelp();
        }
        
        // Alt + H for help
        if (e.altKey && e.key === 'h') {
            e.preventDefault();
            showHelp();
        }
        
        // Alt + Q for quick start
        if (e.altKey && e.key === 'q') {
            e.preventDefault();
            showQuickStart();
        }
        
        // Alt + + for increase text size
        if (e.altKey && e.key === '+') {
            e.preventDefault();
            increaseTextSize();
        }
        
        // Alt + - for decrease text size
        if (e.altKey && e.key === '-') {
            e.preventDefault();
            decreaseTextSize();
        }
    });
}

// Touch Gestures for Mobile
function setupTouchGestures() {
    let startY = 0;
    let startX = 0;
    
    document.addEventListener('touchstart', function(e) {
        startY = e.touches[0].clientY;
        startX = e.touches[0].clientX;
    });
    
    document.addEventListener('touchend', function(e) {
        const endY = e.changedTouches[0].clientY;
        const endX = e.changedTouches[0].clientX;
        const diffY = startY - endY;
        const diffX = startX - endX;
        
        // Swipe up to show quick actions
        if (diffY > 50 && Math.abs(diffX) < 50) {
            showQuickActions();
        }
        
        // Swipe down to hide quick actions
        if (diffY < -50 && Math.abs(diffX) < 50) {
            hideQuickActions();
        }
    });
}

// Smooth Scrolling
function setupSmoothScrolling() {
    // Add smooth scrolling to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Scroll to specific section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
    closeQuickStart();
}

// Auto-save for forms
function setupAutoSave() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        const formId = form.id || 'form_' + Math.random().toString(36).substr(2, 9);
        
        // Load saved data
        const savedData = localStorage.getItem('form_' + formId);
        if (savedData) {
            const data = JSON.parse(savedData);
            Object.keys(data).forEach(key => {
                const input = form.querySelector(`[name="${key}"]`);
                if (input) {
                    input.value = data[key];
                }
            });
        }
        
        // Save on input
        form.addEventListener('input', function() {
            const formData = new FormData(form);
            const data = {};
            for (let [key, value] of formData.entries()) {
                data[key] = value;
            }
            localStorage.setItem('form_' + formId, JSON.stringify(data));
        });
        
        // Clear on submit
        form.addEventListener('submit', function() {
            localStorage.removeItem('form_' + formId);
        });
    });
}

// Tooltips
function setupTooltips() {
    const tooltipElements = document.querySelectorAll('[title]');
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', showTooltip);
        element.addEventListener('mouseleave', hideTooltip);
    });
}

function showTooltip(e) {
    const element = e.target;
    const title = element.getAttribute('title');
    if (title) {
        element.setAttribute('data-original-title', title);
        element.removeAttribute('title');
        
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = title;
        document.body.appendChild(tooltip);
        
        const rect = element.getBoundingClientRect();
        tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
        tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
        
        element.tooltip = tooltip;
    }
}

function hideTooltip(e) {
    const element = e.target;
    if (element.tooltip) {
        element.tooltip.remove();
        element.setAttribute('title', element.getAttribute('data-original-title'));
        delete element.tooltip;
    }
}

// Progress Indicators
function setupProgressIndicators() {
    // Add progress indicators to long pages
    const longPages = ['learn.html', 'practice.html', 'community.html'];
    const currentPage = window.location.pathname.split('/').pop();
    
    if (longPages.includes(currentPage)) {
        createProgressIndicator();
    }
}

function createProgressIndicator() {
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    progressBar.innerHTML = '<div class="reading-progress-bar"></div>';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', updateReadingProgress);
}

function updateReadingProgress() {
    const progressBar = document.querySelector('.reading-progress-bar');
    if (progressBar) {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    }
}

// Quick Actions for Mobile
function showQuickActions() {
    let quickActions = document.getElementById('quickActions');
    if (!quickActions) {
        quickActions = document.createElement('div');
        quickActions.id = 'quickActions';
        quickActions.className = 'quick-actions';
        quickActions.innerHTML = `
            <button onclick="window.location.href='learn.html'" class="quick-action-btn">
                <i class="fas fa-book-open"></i>
                <span>Learn</span>
            </button>
            <button onclick="window.location.href='practice.html'" class="quick-action-btn">
                <i class="fas fa-star"></i>
                <span>Practice</span>
            </button>
            <button onclick="showHelp()" class="quick-action-btn">
                <i class="fas fa-question-circle"></i>
                <span>Help</span>
            </button>
        `;
        document.body.appendChild(quickActions);
    }
    quickActions.classList.add('show');
}

function hideQuickActions() {
    const quickActions = document.getElementById('quickActions');
    if (quickActions) {
        quickActions.classList.remove('show');
    }
}

// User Preferences
function loadUserPreferences() {
    const preferences = {
        textSize: localStorage.getItem('textSize') || '100',
        highContrast: localStorage.getItem('highContrast') === 'true',
        theme: localStorage.getItem('theme') || 'default',
        language: localStorage.getItem('language') || 'en'
    };
    
    // Apply preferences
    currentTextSize = parseInt(preferences.textSize);
    isHighContrast = preferences.highContrast;
    
    applyTextSize();
    if (isHighContrast) {
        applyHighContrast();
    }
}

// Feedback System
function showAccessibilityFeedback(message) {
    const feedback = document.createElement('div');
    feedback.className = 'accessibility-feedback';
    feedback.textContent = message;
    document.body.appendChild(feedback);
    
    setTimeout(() => {
        feedback.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        feedback.classList.remove('show');
        setTimeout(() => {
            feedback.remove();
        }, 300);
    }, 2000);
}

// Search Enhancement
function setupSearchEnhancements() {
    const searchInputs = document.querySelectorAll('input[type="search"], input[placeholder*="search" i]');
    searchInputs.forEach(input => {
        input.addEventListener('input', debounce(handleSearch, 300));
    });
}

function handleSearch(e) {
    const query = e.target.value.toLowerCase();
    if (query.length > 2) {
        showSearchSuggestions(query);
    } else {
        hideSearchSuggestions();
    }
}

function showSearchSuggestions(query) {
    // This would integrate with your existing search functionality
    console.log('Searching for:', query);
}

function hideSearchSuggestions() {
    // Hide search suggestions
}

// Debounce function for search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Error Handling
window.addEventListener('error', function(e) {
    console.error('Application error:', e.error);
    // Could send error reports to analytics
});

// Performance Monitoring
function monitorPerformance() {
    if ('performance' in window) {
        window.addEventListener('load', function() {
            const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
            console.log('Page load time:', loadTime + 'ms');
            
            // Store performance data
            localStorage.setItem('lastLoadTime', loadTime.toString());
        });
    }
}

// Initialize performance monitoring
monitorPerformance();

// Export functions for global access
window.showQuickStart = showQuickStart;
window.closeQuickStart = closeQuickStart;
window.showHelp = showHelp;
window.closeHelp = closeHelp;
window.toggleHighContrast = toggleHighContrast;
window.increaseTextSize = increaseTextSize;
window.decreaseTextSize = decreaseTextSize;
window.scrollToSection = scrollToSection;
