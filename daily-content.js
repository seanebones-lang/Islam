// Daily Islamic Content System
// Provides daily duas, Quranic verses, and motivational content with notifications

class DailyContentSystem {
    constructor() {
        this.isEnabled = false;
        this.contentTypes = {
            dua: true,
            quran: true,
            motivation: true
        };
        this.notificationTiming = {
            morning: '08:00',
            afternoon: '15:00',
            evening: '20:00'
        };
        this.currentContent = {};
        this.contentHistory = [];
        this.notificationCheckInterval = null;
        
        this.loadSettings();
        this.initializeContent();
    }

    // Load settings from localStorage
    loadSettings() {
        const settings = JSON.parse(localStorage.getItem('dailyContentSettings') || '{}');
        this.isEnabled = settings.isEnabled || false;
        this.contentTypes = { ...this.contentTypes, ...settings.contentTypes };
        this.notificationTiming = { ...this.notificationTiming, ...settings.notificationTiming };
        this.contentHistory = settings.contentHistory || [];
    }

    // Save settings to localStorage
    saveSettings() {
        const settings = {
            isEnabled: this.isEnabled,
            contentTypes: this.contentTypes,
            notificationTiming: this.notificationTiming,
            contentHistory: this.contentHistory
        };
        localStorage.setItem('dailyContentSettings', JSON.stringify(settings));
    }

    // Initialize daily content
    initializeContent() {
        const today = new Date().toDateString();
        const todayContent = this.contentHistory.find(entry => entry.date === today);
        
        if (!todayContent) {
            this.generateDailyContent();
        } else {
            this.currentContent = todayContent.content;
        }
    }

    // Generate new daily content
    generateDailyContent() {
        const today = new Date().toDateString();
        const content = {
            dua: this.getRandomDua(),
            quran: this.getRandomQuranicVerse(),
            motivation: this.getRandomMotivationalContent()
        };
        
        this.currentContent = content;
        
        // Save to history
        this.contentHistory.unshift({
            date: today,
            content: content
        });
        
        // Keep only last 30 days
        this.contentHistory = this.contentHistory.slice(0, 30);
        this.saveSettings();
    }

    // Get random daily dua
    getRandomDua() {
        const duas = [
            {
                arabic: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
                transliteration: 'Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina azaban-nar',
                translation: 'Our Lord, give us good in this world and good in the Hereafter, and protect us from the punishment of the Fire.',
                reference: 'Quran 2:201',
                category: 'General Supplication'
            },
            {
                arabic: 'اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ',
                transliteration: 'Allahumma anta rabbi la ilaha illa anta khalaqtani wa ana abduka',
                translation: 'O Allah, You are my Lord. There is no deity but You. You created me and I am Your servant.',
                reference: 'Hadith',
                category: 'Morning Dua'
            },
            {
                arabic: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ سُبْحَانَ اللَّهِ الْعَظِيمِ',
                transliteration: 'Subhanallahi wa bihamdihi subhanallahi-l-azim',
                translation: 'Glory be to Allah and praise be to Him. Glory be to Allah, the Most Great.',
                reference: 'Hadith',
                category: 'Dhikr'
            },
            {
                arabic: 'اللَّهُمَّ بَارِكْ لِي فِي وَقْتِي وَاجْعَلْنِي مِنَ الْمُنْجِحِينَ',
                transliteration: 'Allahumma barik li fi waqti wa-jalni minal-munjiheen',
                translation: 'O Allah, bless my time and make me among the successful ones.',
                reference: 'General Dua',
                category: 'Success'
            },
            {
                arabic: 'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي',
                transliteration: 'Rabbi-shrah li sadri wa yassir li amri',
                translation: 'My Lord, expand my breast for me and make my task easy for me.',
                reference: 'Quran 20:25-26',
                category: 'Ease and Guidance'
            },
            {
                arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى',
                transliteration: 'Allahumma inni as\'aluka-l-huda wat-tuqa wal-afafa wal-ghina',
                translation: 'O Allah, I ask You for guidance, piety, chastity, and self-sufficiency.',
                reference: 'Hadith',
                category: 'Guidance'
            },
            {
                arabic: 'رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ',
                transliteration: 'Rabbana hab lana min azwajina wa dhurriyyatina qurrata a\'yun',
                translation: 'Our Lord, grant us from among our wives and offspring comfort to our eyes.',
                reference: 'Quran 25:74',
                category: 'Family'
            },
            {
                arabic: 'اللَّهُمَّ أَصْلِحْ لِي دِينِي الَّذِي هُوَ عِصْمَةُ أَمْرِي',
                transliteration: 'Allahumma aslih li deeni-l-ladhi huwa ismatu amri',
                translation: 'O Allah, rectify my religion for me, which is the safeguard of my affairs.',
                reference: 'Hadith',
                category: 'Religion'
            }
        ];
        
        return duas[Math.floor(Math.random() * duas.length)];
    }

    // Get random Quranic verse
    getRandomQuranicVerse() {
        const verses = [
            {
                arabic: 'وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا',
                transliteration: 'Wa man yattaqillaha yaj\'al lahu makhrajan',
                translation: 'And whoever fears Allah - He will make for him a way out.',
                reference: 'Quran 65:2',
                theme: 'Trust in Allah'
            },
            {
                arabic: 'وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ',
                transliteration: 'Wa man yatawakkal alallahi fahuwa hasbuhu',
                translation: 'And whoever relies upon Allah - then He is sufficient for him.',
                reference: 'Quran 65:3',
                theme: 'Reliance on Allah'
            },
            {
                arabic: 'فَإِنَّ مَعَ الْعُسْرِ يُسْرًا',
                transliteration: 'Fa-inna ma\'a-l-usri yusra',
                translation: 'Indeed, with hardship comes ease.',
                reference: 'Quran 94:6',
                theme: 'Hope and Patience'
            },
            {
                arabic: 'وَاللَّهُ خَيْرُ الرَّازِقِينَ',
                transliteration: 'Wallahu khayru-r-razziqeen',
                translation: 'And Allah is the best of providers.',
                reference: 'Quran 62:11',
                theme: 'Provision'
            },
            {
                arabic: 'وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ عَلَيْهِ تَوَكَّلْتُ وَإِلَيْهِ أُنِيبُ',
                transliteration: 'Wa ma tawfiqi illa billah alayhi tawakkaltu wa ilayhi unib',
                translation: 'And my success is not but through Allah. Upon him I have relied, and to Him I return.',
                reference: 'Quran 11:88',
                theme: 'Success and Repentance'
            },
            {
                arabic: 'وَمَن يَعْمَلْ مِنَ الصَّالِحَاتِ مِن ذَكَرٍ أَوْ أُنثَىٰ وَهُوَ مُؤْمِنٌ فَأُولَٰئِكَ يَدْخُلُونَ الْجَنَّةَ',
                transliteration: 'Wa man ya\'mal mina-s-salihati min dhakarin aw untha wa huwa mu\'minun fa-ula\'ika yadkhuluna-l-jannah',
                translation: 'And whoever does righteous deeds, whether male or female, while being a believer - those will enter Paradise.',
                reference: 'Quran 4:124',
                theme: 'Righteous Deeds'
            },
            {
                arabic: 'وَلَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا',
                transliteration: 'Wa la tahzan inna-llaha ma\'ana',
                translation: 'And do not grieve; indeed Allah is with us.',
                reference: 'Quran 9:40',
                theme: 'Comfort and Support'
            },
            {
                arabic: 'وَمَن يَجْتَنِبْ كَبَائِرَ الْإِثْمِ وَالْفَوَاحِشَ إِلَّا اللَّمَمَ إِنَّ رَبَّكَ وَاسِعُ الْمَغْفِرَةِ',
                transliteration: 'Wa man yajtanib kaba\'ira-l-ithmi wal-fawahisha illa-l-lamam inna rabbaka wasi\'u-l-maghfirah',
                translation: 'And whoever avoids the major sins and immoralities, except for minor offenses - indeed, your Lord is vast in forgiveness.',
                reference: 'Quran 53:32',
                theme: 'Forgiveness'
            }
        ];
        
        return verses[Math.floor(Math.random() * verses.length)];
    }

    // Get random motivational content
    getRandomMotivationalContent() {
        const motivations = [
            {
                title: 'The Power of Patience',
                content: 'Patience is not the ability to wait, but the ability to keep a good attitude while waiting. Remember, Allah is with the patient.',
                source: 'Quran 2:153',
                category: 'Patience'
            },
            {
                title: 'Gratitude is Key',
                content: 'When you wake up in the morning, thank Allah for the gift of life. Gratitude opens doors to more blessings.',
                source: 'Hadith',
                category: 'Gratitude'
            },
            {
                title: 'Small Steps, Big Rewards',
                content: 'Every small act of kindness, every sincere dua, every moment of remembrance - Allah sees them all and rewards abundantly.',
                source: 'Islamic Teaching',
                category: 'Good Deeds'
            },
            {
                title: 'Trust the Process',
                content: 'Allah\'s timing is perfect. What you\'re going through today is preparing you for tomorrow\'s success.',
                source: 'Quran 65:3',
                category: 'Trust'
            },
            {
                title: 'Your Dua is Powerful',
                content: 'Never underestimate the power of your dua. Allah hears every word, sees every tear, and answers in the best way.',
                source: 'Quran 40:60',
                category: 'Supplication'
            },
            {
                title: 'Be Kind to Yourself',
                content: 'Allah is the Most Merciful. If you\'ve made mistakes, seek forgiveness and move forward with hope and determination.',
                source: 'Quran 39:53',
                category: 'Mercy'
            },
            {
                title: 'Knowledge is Light',
                content: 'Seeking knowledge is an act of worship. Every page you read, every lesson you learn, brings you closer to Allah.',
                source: 'Hadith',
                category: 'Knowledge'
            },
            {
                title: 'Your Struggles Have Purpose',
                content: 'Every challenge you face is an opportunity to grow closer to Allah. Trust that He is preparing you for something greater.',
                source: 'Quran 2:155-156',
                category: 'Trials'
            }
        ];
        
        return motivations[Math.floor(Math.random() * motivations.length)];
    }

    // Enable daily content notifications
    enableNotifications() {
        this.isEnabled = true;
        this.saveSettings();
        this.startNotificationChecking();
        
        this.showNotification('Daily Islamic content notifications enabled! You will receive duas, verses, and motivation throughout the day.', 'success');
        return true;
    }

    // Disable daily content notifications
    disableNotifications() {
        this.isEnabled = false;
        this.saveSettings();
        this.stopNotificationChecking();
        
        this.showNotification('Daily Islamic content notifications disabled.', 'info');
        return true;
    }

    // Start checking for notification times
    startNotificationChecking() {
        if (this.notificationCheckInterval) {
            clearInterval(this.notificationCheckInterval);
        }

        // Check every minute for precise timing
        this.notificationCheckInterval = setInterval(() => {
            this.checkForNotificationTime();
        }, 60000);

        // Check immediately
        this.checkForNotificationTime();
    }

    // Stop checking for notification times
    stopNotificationChecking() {
        if (this.notificationCheckInterval) {
            clearInterval(this.notificationCheckInterval);
            this.notificationCheckInterval = null;
        }
    }

    // Check if it's time for a notification
    checkForNotificationTime() {
        if (!this.isEnabled) return;

        const now = new Date();
        const currentTime = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
        
        Object.entries(this.notificationTiming).forEach(([period, time]) => {
            if (currentTime === time && this.contentTypes[period] !== undefined) {
                this.sendDailyContentNotification(period);
            }
        });
    }

    // Send daily content notification
    sendDailyContentNotification(period) {
        let content, title, message;
        
        switch(period) {
            case 'morning':
                content = this.currentContent.dua;
                title = 'Daily Dua';
                message = `Start your day with this beautiful dua: "${content.translation}"`;
                break;
            case 'afternoon':
                content = this.currentContent.quran;
                title = 'Quranic Verse of the Day';
                message = `Reflect on this verse: "${content.translation}"`;
                break;
            case 'evening':
                content = this.currentContent.motivation;
                title = 'Daily Motivation';
                message = content.content;
                break;
            default:
                return;
        }

        if (!this.contentTypes[period]) return;

        // Browser notification
        if (window.prayerNotifications && window.prayerNotifications.isNotificationAvailable()) {
            this.showBrowserNotification(title, message, content);
        }

        // In-app notification
        this.showInAppNotification(title, message, content);

        // Update UI
        this.updateContentUI(period, content);
    }

    // Show browser notification
    showBrowserNotification(title, message, content) {
        try {
            const notification = new Notification(title, {
                body: message,
                icon: '/favicon.ico',
                badge: '/favicon.ico',
                tag: `daily-content-${Date.now()}`,
                requireInteraction: false,
                silent: false
            });

            setTimeout(() => notification.close(), 10000);

            notification.onclick = () => {
                window.focus();
                notification.close();
                this.showContentModal(content, title);
            };

        } catch (error) {
            console.error('Error showing browser notification:', error);
        }
    }

    // Show in-app notification
    showInAppNotification(title, message, content) {
        const notification = document.createElement('div');
        notification.className = 'daily-content-notification';
        notification.innerHTML = `
            <div class="content-notification-content">
                <div class="content-notification-icon">
                    <i class="fas fa-star"></i>
                </div>
                <div class="content-notification-text">
                    <h4>${title}</h4>
                    <p>${message}</p>
                </div>
                <div class="content-notification-actions">
                    <button class="content-btn" onclick="window.dailyContentSystem.showContentModal(this.closest('.daily-content-notification').contentData, '${title}')">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="content-btn" onclick="this.closest('.daily-content-notification').remove()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </div>
        `;

        notification.contentData = content;

        notification.style.cssText = `
            position: fixed;
            top: 20px;
            left: 20px;
            background: linear-gradient(135deg, var(--medium-green), var(--light-green));
            color: var(--dark-green);
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(34, 197, 94, 0.3);
            z-index: 10001;
            max-width: 400px;
            transform: translateX(-100%);
            transition: transform 0.5s ease;
            border: 2px solid var(--dark-green);
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        setTimeout(() => {
            if (notification.parentElement) {
                notification.style.transform = 'translateX(-100%)';
                setTimeout(() => {
                    if (notification.parentElement) {
                        notification.remove();
                    }
                }, 500);
            }
        }, 15000);
    }

    // Show content modal
    showContentModal(content, title) {
        const modal = document.createElement('div');
        modal.className = 'content-modal';
        modal.innerHTML = `
            <div class="content-modal-content">
                <div class="content-modal-header">
                    <h3><i class="fas fa-star"></i> ${title}</h3>
                    <button class="modal-close" onclick="this.closest('.content-modal').remove()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="content-modal-body">
                    ${this.formatContentForModal(content, title)}
                </div>
                <div class="content-modal-footer">
                    <button class="btn-secondary" onclick="this.closest('.content-modal').remove()">Close</button>
                    <button class="btn-primary" onclick="window.dailyContentSystem.shareContent('${JSON.stringify(content).replace(/"/g, '&quot;')}', '${title}')">
                        <i class="fas fa-share"></i> Share
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
        `;

        modal.querySelector('.content-modal-content').style.cssText = `
            background: linear-gradient(135deg, var(--dark-green), var(--medium-green));
            border-radius: 15px;
            padding: 2rem;
            max-width: 600px;
            width: 90%;
            border: 2px solid var(--gold);
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            max-height: 80vh;
            overflow-y: auto;
        `;
    }

    // Format content for modal display
    formatContentForModal(content, title) {
        if (title === 'Daily Dua') {
            return `
                <div class="content-arabic">
                    ${content.arabic}
                </div>
                <div class="content-transliteration">
                    ${content.transliteration}
                </div>
                <div class="content-translation">
                    ${content.translation}
                </div>
                <div class="content-reference">
                    <strong>Reference:</strong> ${content.reference}
                </div>
                <div class="content-category">
                    <strong>Category:</strong> ${content.category}
                </div>
            `;
        } else if (title === 'Quranic Verse of the Day') {
            return `
                <div class="content-arabic">
                    ${content.arabic}
                </div>
                <div class="content-transliteration">
                    ${content.transliteration}
                </div>
                <div class="content-translation">
                    ${content.translation}
                </div>
                <div class="content-reference">
                    <strong>Reference:</strong> ${content.reference}
                </div>
                <div class="content-category">
                    <strong>Theme:</strong> ${content.theme}
                </div>
            `;
        } else {
            return `
                <div class="content-title">
                    ${content.title}
                </div>
                <div class="content-text">
                    ${content.content}
                </div>
                <div class="content-reference">
                    <strong>Source:</strong> ${content.source}
                </div>
                <div class="content-category">
                    <strong>Category:</strong> ${content.category}
                </div>
            `;
        }
    }

    // Share content
    shareContent(contentJson, title) {
        const content = JSON.parse(contentJson);
        let shareText = `${title}\n\n`;
        
        if (title === 'Daily Dua') {
            shareText += `${content.arabic}\n\n${content.translation}\n\nReference: ${content.reference}`;
        } else if (title === 'Quranic Verse of the Day') {
            shareText += `${content.arabic}\n\n${content.translation}\n\nReference: ${content.reference}`;
        } else {
            shareText += `${content.content}\n\nSource: ${content.source}`;
        }
        
        shareText += '\n\nShared from Islamic Learning Companion';

        if (navigator.share) {
            navigator.share({
                title: title,
                text: shareText
            });
        } else {
            navigator.clipboard.writeText(shareText);
            this.showNotification('Content copied to clipboard!', 'success');
        }
    }

    // Update content UI
    updateContentUI(period, content) {
        // Update any content widgets on the page
        const contentWidgets = document.querySelectorAll('.daily-content-widget');
        contentWidgets.forEach(widget => {
            this.updateContentWidget(widget, period, content);
        });
    }

    // Update content widget
    updateContentWidget(widget, period, content) {
        // Implementation for updating content widgets
        console.log('Updating content widget:', period, content);
    }

    // Show notification message
    showNotification(message, type = 'info') {
        if (window.showNotification) {
            window.showNotification(message, type);
        } else {
            console.log(`Notification: ${message}`);
        }
    }

    // Get current content
    getCurrentContent() {
        return this.currentContent;
    }

    // Get settings
    getSettings() {
        return {
            isEnabled: this.isEnabled,
            contentTypes: this.contentTypes,
            notificationTiming: this.notificationTiming
        };
    }

    // Set content types
    setContentTypes(types) {
        this.contentTypes = { ...this.contentTypes, ...types };
        this.saveSettings();
    }

    // Set notification timing
    setNotificationTiming(timing) {
        this.notificationTiming = { ...this.notificationTiming, ...timing };
        this.saveSettings();
    }

    // Initialize when ready
    initialize() {
        this.initializeContent();
        if (this.isEnabled) {
            this.startNotificationChecking();
        }
    }
}

// Global daily content system instance
window.dailyContentSystem = new DailyContentSystem();

// Global functions
window.enableDailyContent = function() {
    return window.dailyContentSystem.enableNotifications();
};

window.disableDailyContent = function() {
    return window.dailyContentSystem.disableNotifications();
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        window.dailyContentSystem.initialize();
    }, 2000);
});

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DailyContentSystem;
}
