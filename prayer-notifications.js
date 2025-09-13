// Prayer Time Notifications System
// Provides customizable alerts before prayer times

class PrayerNotifications {
    constructor() {
        this.isEnabled = false;
        this.notificationTiming = 5; // minutes before prayer
        this.notificationSound = true;
        this.notificationPermission = 'default';
        this.notificationCheckInterval = null;
        this.sentNotifications = new Set(); // Track sent notifications to avoid duplicates
        this.currentDate = null;
        
        this.loadSettings();
        this.requestNotificationPermission();
    }

    // Load notification settings from localStorage
    loadSettings() {
        const settings = JSON.parse(localStorage.getItem('prayerNotificationSettings') || '{}');
        this.isEnabled = settings.isEnabled || false;
        this.notificationTiming = settings.notificationTiming || 5;
        this.notificationSound = settings.notificationSound !== false;
        this.notificationPermission = settings.notificationPermission || 'default';
    }

    // Save notification settings to localStorage
    saveSettings() {
        const settings = {
            isEnabled: this.isEnabled,
            notificationTiming: this.notificationTiming,
            notificationSound: this.notificationSound,
            notificationPermission: this.notificationPermission
        };
        localStorage.setItem('prayerNotificationSettings', JSON.stringify(settings));
    }

    // Request browser notification permission
    async requestNotificationPermission() {
        if (!('Notification' in window)) {
            console.log('This browser does not support notifications');
            return false;
        }

        if (Notification.permission === 'granted') {
            this.notificationPermission = 'granted';
            return true;
        } else if (Notification.permission !== 'denied') {
            try {
                const permission = await Notification.requestPermission();
                this.notificationPermission = permission;
                this.saveSettings();
                return permission === 'granted';
            } catch (error) {
                console.error('Error requesting notification permission:', error);
                return false;
            }
        }
        
        return false;
    }

    // Enable prayer notifications
    enableNotifications() {
        this.isEnabled = true;
        this.saveSettings();
        this.startNotificationChecking();
        
        // Show success message
        this.showNotificationMessage('Prayer notifications enabled! You will receive alerts before each prayer.', 'success');
        
        return true;
    }

    // Disable prayer notifications
    disableNotifications() {
        this.isEnabled = false;
        this.saveSettings();
        this.stopNotificationChecking();
        
        // Show info message
        this.showNotificationMessage('Prayer notifications disabled.', 'info');
        
        return true;
    }

    // Start checking for upcoming prayer times
    startNotificationChecking() {
        if (this.notificationCheckInterval) {
            clearInterval(this.notificationCheckInterval);
        }

        // Check every 30 seconds for more precise timing
        this.notificationCheckInterval = setInterval(() => {
            this.checkForUpcomingPrayer();
        }, 30000);

        // Also check immediately
        this.checkForUpcomingPrayer();
    }

    // Stop checking for upcoming prayer times
    stopNotificationChecking() {
        if (this.notificationCheckInterval) {
            clearInterval(this.notificationCheckInterval);
            this.notificationCheckInterval = null;
        }
    }

    // Check if a prayer time is approaching
    checkForUpcomingPrayer() {
        if (!this.isEnabled || !window.prayerTimesCalculator || !window.prayerTimesCalculator.prayerTimes) {
            return;
        }

        const now = new Date();
        const currentTime = now.getHours() + now.getMinutes() / 60;
        const today = now.toDateString();
        
        // Reset notifications for new day
        if (this.currentDate !== today) {
            this.sentNotifications.clear();
            this.currentDate = today;
        }

        const prayerTimes = window.prayerTimesCalculator.prayerTimes;
        const prayers = [
            { name: 'Fajr', time: prayerTimes.fajr },
            { name: 'Dhuhr', time: prayerTimes.dhuhr },
            { name: 'Asr', time: prayerTimes.asr },
            { name: 'Maghrib', time: prayerTimes.maghrib },
            { name: 'Isha', time: prayerTimes.isha }
        ];

        prayers.forEach(prayer => {
            const notificationKey = `${today}-${prayer.name}`;
            
            // Check if we've already sent notification for this prayer today
            if (this.sentNotifications.has(notificationKey)) {
                return;
            }

            // Calculate time until prayer
            let timeUntilPrayer = prayer.time - currentTime;
            
            // Handle prayers that are tomorrow (negative time)
            if (timeUntilPrayer < 0) {
                timeUntilPrayer += 24;
            }

            // Convert to minutes
            const minutesUntilPrayer = timeUntilPrayer * 60;

            // Check if prayer is within notification timing
            if (minutesUntilPrayer <= this.notificationTiming && minutesUntilPrayer > 0) {
                this.sendPrayerNotification(prayer, minutesUntilPrayer);
                this.sentNotifications.add(notificationKey);
            }
        });
    }

    // Send prayer notification
    sendPrayerNotification(prayer, minutesUntil) {
        const message = this.getNotificationMessage(prayer, minutesUntil);
        
        // Browser notification
        if (this.notificationPermission === 'granted') {
            this.showBrowserNotification(prayer.name, message);
        }

        // In-app notification
        this.showInAppNotification(prayer.name, message);

        // Sound notification
        if (this.notificationSound) {
            this.playNotificationSound();
        }

        // Update UI to show notification was sent
        this.updateNotificationUI(prayer.name, minutesUntil);
    }

    // Get notification message based on prayer and time
    getNotificationMessage(prayer, minutesUntil) {
        if (minutesUntil <= 1) {
            return `${prayer.name} prayer is starting now! It's time to pray.`;
        } else if (minutesUntil <= 2) {
            return `${prayer.name} prayer starts in ${Math.round(minutesUntil)} minutes. Please prepare for prayer.`;
        } else {
            return `${prayer.name} prayer starts in ${Math.round(minutesUntil)} minutes. Time to prepare for salah.`;
        }
    }

    // Show browser notification
    showBrowserNotification(prayerName, message) {
        try {
            const notification = new Notification(`${prayerName} Prayer Alert`, {
                body: message,
                icon: '/favicon.ico', // You can add an Islamic icon here
                badge: '/favicon.ico',
                tag: `prayer-${prayerName}`,
                requireInteraction: false,
                silent: !this.notificationSound
            });

            // Auto close after 10 seconds
            setTimeout(() => {
                notification.close();
            }, 10000);

            // Handle notification click
            notification.onclick = () => {
                window.focus();
                notification.close();
            };

        } catch (error) {
            console.error('Error showing browser notification:', error);
        }
    }

    // Show in-app notification
    showInAppNotification(prayerName, message) {
        const notification = document.createElement('div');
        notification.className = 'prayer-alert-notification';
        notification.innerHTML = `
            <div class="alert-content">
                <div class="alert-icon">
                    <i class="fas fa-mosque"></i>
                </div>
                <div class="alert-text">
                    <h4>${prayerName} Prayer Alert</h4>
                    <p>${message}</p>
                </div>
                <button class="alert-close" onclick="this.parentElement.parentElement.remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;

        // Style the notification
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, var(--gold), var(--gold-light));
            color: var(--dark-green);
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(212, 175, 55, 0.3);
            z-index: 10001;
            max-width: 350px;
            transform: translateX(100%);
            transition: transform 0.5s ease;
            border: 2px solid var(--dark-green);
        `;

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Auto remove after 15 seconds
        setTimeout(() => {
            if (notification.parentElement) {
                notification.style.transform = 'translateX(100%)';
                setTimeout(() => {
                    if (notification.parentElement) {
                        notification.remove();
                    }
                }, 500);
            }
        }, 15000);
    }

    // Play notification sound
    playNotificationSound() {
        try {
            // Create a simple beep sound using Web Audio API
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
            oscillator.frequency.setValueAtTime(1000, audioContext.currentTime + 0.1);
            oscillator.frequency.setValueAtTime(800, audioContext.currentTime + 0.2);

            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.5);

        } catch (error) {
            console.error('Error playing notification sound:', error);
        }
    }

    // Update notification UI
    updateNotificationUI(prayerName, minutesUntil) {
        // Update the prayer widget to show notification was sent
        const prayerWidget = document.querySelector('.prayer-times-widget');
        if (prayerWidget) {
            const notificationIndicator = prayerWidget.querySelector('.notification-indicator') || 
                                        this.createNotificationIndicator(prayerWidget);
            
            notificationIndicator.innerHTML = `
                <i class="fas fa-bell"></i>
                <span>${prayerName} notification sent!</span>
            `;
            notificationIndicator.style.display = 'flex';
            
            // Hide after 5 seconds
            setTimeout(() => {
                notificationIndicator.style.display = 'none';
            }, 5000);
        }
    }

    // Create notification indicator
    createNotificationIndicator(prayerWidget) {
        const indicator = document.createElement('div');
        indicator.className = 'notification-indicator';
        indicator.style.cssText = `
            display: none;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 1rem;
            background: rgba(34, 197, 94, 0.1);
            border: 1px solid var(--light-green);
            border-radius: 20px;
            margin-top: 1rem;
            font-size: 0.9rem;
            color: var(--light-green);
        `;
        prayerWidget.appendChild(indicator);
        return indicator;
    }

    // Show notification message
    showNotificationMessage(message, type = 'info') {
        if (window.showNotification) {
            window.showNotification(message, type);
        } else {
            console.log(`Notification: ${message}`);
        }
    }

    // Set notification timing
    setNotificationTiming(minutes) {
        this.notificationTiming = minutes;
        this.saveSettings();
        this.showNotificationMessage(`Notifications will now alert you ${minutes} minutes before prayer time.`, 'success');
    }

    // Toggle notification sound
    toggleNotificationSound() {
        this.notificationSound = !this.notificationSound;
        this.saveSettings();
        const message = this.notificationSound ? 
            'Notification sound enabled' : 
            'Notification sound disabled';
        this.showNotificationMessage(message, 'info');
    }

    // Get current settings
    getSettings() {
        return {
            isEnabled: this.isEnabled,
            notificationTiming: this.notificationTiming,
            notificationSound: this.notificationSound,
            notificationPermission: this.notificationPermission
        };
    }

    // Check if notifications are available
    isNotificationAvailable() {
        return 'Notification' in window && this.notificationPermission === 'granted';
    }

    // Initialize notifications when prayer times are ready
    initialize() {
        if (window.prayerTimesCalculator) {
            // Wait for prayer times to be calculated
            const checkPrayerTimes = () => {
                if (window.prayerTimesCalculator.prayerTimes) {
                    if (this.isEnabled) {
                        this.startNotificationChecking();
                    }
                } else {
                    setTimeout(checkPrayerTimes, 1000);
                }
            };
            checkPrayerTimes();
        }
    }
}

// Global prayer notifications instance
window.prayerNotifications = new PrayerNotifications();

// Global functions for notification controls
window.enablePrayerNotifications = function() {
    return window.prayerNotifications.enableNotifications();
};

window.disablePrayerNotifications = function() {
    return window.prayerNotifications.disableNotifications();
};

window.setNotificationTiming = function(minutes) {
    return window.prayerNotifications.setNotificationTiming(minutes);
};

window.toggleNotificationSound = function() {
    return window.prayerNotifications.toggleNotificationSound();
};

window.getNotificationSettings = function() {
    return window.prayerNotifications.getSettings();
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize notifications after prayer times calculator is ready
    setTimeout(() => {
        window.prayerNotifications.initialize();
    }, 3000);
});

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PrayerNotifications;
}
