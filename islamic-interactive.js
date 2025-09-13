// Islamic Learning Companion - Interactive Features

// Prayer Times Calculator
class PrayerTimes {
    constructor() {
        this.prayerTimes = {
            Fajr: '05:30',
            Dhuhr: '12:30',
            Asr: '15:45',
            Maghrib: '18:20',
            Isha: '19:50'
        };
    }

    updateDisplay() {
        const prayerContainer = document.getElementById('prayerTimes');
        if (prayerContainer) {
            prayerContainer.innerHTML = Object.entries(this.prayerTimes)
                .map(([name, time]) => `
                    <div class="prayer-item">
                        <span class="prayer-name">${name}</span>
                        <span class="prayer-time">${time}</span>
                    </div>
                `).join('');
        }
    }
}

// Islamic Calendar
class IslamicCalendar {
    constructor() {
        this.currentDate = new Date();
        this.islamicMonths = [
            'Muharram', 'Safar', 'Rabi\' al-awwal', 'Rabi\' al-thani',
            'Jumada al-awwal', 'Jumada al-thani', 'Rajab', 'Sha\'ban',
            'Ramadan', 'Shawwal', 'Dhu al-Qi\'dah', 'Dhu al-Hijjah'
        ];
    }

    getCurrentIslamicDate() {
        // Simplified conversion - in real implementation, use proper Islamic calendar library
        const islamicYear = this.currentDate.getFullYear() - 579;
        const islamicMonth = this.islamicMonths[this.currentDate.getMonth()];
        return `${islamicMonth} ${islamicYear} AH`;
    }

    updateDisplay() {
        const calendarElement = document.getElementById('islamicDate');
        if (calendarElement) {
            calendarElement.textContent = this.getCurrentIslamicDate();
        }
    }
}

// Qibla Compass
class QiblaCompass {
    constructor() {
        this.currentDirection = 45; // Default direction (Northeast)
        this.isAnimating = false;
    }

    updateCompass(direction) {
        const needle = document.querySelector('.compass-needle');
        if (needle) {
            this.currentDirection = direction;
            needle.style.transform = `translate(-50%, -100%) rotate(${direction}deg)`;
        }
    }

    animateToDirection(targetDirection) {
        if (this.isAnimating) return;
        
        this.isAnimating = true;
        const needle = document.querySelector('.compass-needle');
        const startDirection = this.currentDirection;
        const duration = 1000; // 1 second
        const startTime = Date.now();

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            
            const currentDirection = startDirection + (targetDirection - startDirection) * easeProgress;
            needle.style.transform = `translate(-50%, -100%) rotate(${currentDirection}deg)`;
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                this.currentDirection = targetDirection;
                this.isAnimating = false;
            }
        };
        
        animate();
    }
}

// Arabic Learning Tools
class ArabicLearning {
    constructor() {
        this.currentLetter = 0;
        this.arabicLetters = [
            { letter: 'ا', name: 'Alif', sound: 'A' },
            { letter: 'ب', name: 'Ba', sound: 'B' },
            { letter: 'ت', name: 'Ta', sound: 'T' },
            { letter: 'ث', name: 'Tha', sound: 'TH' },
            { letter: 'ج', name: 'Jeem', sound: 'J' },
            { letter: 'ح', name: 'Ha', sound: 'H' },
            { letter: 'خ', name: 'Kha', sound: 'KH' },
            { letter: 'د', name: 'Dal', sound: 'D' },
            { letter: 'ذ', name: 'Thal', sound: 'TH' },
            { letter: 'ر', name: 'Ra', sound: 'R' },
            { letter: 'ز', name: 'Zay', sound: 'Z' },
            { letter: 'س', name: 'Seen', sound: 'S' },
            { letter: 'ش', name: 'Sheen', sound: 'SH' },
            { letter: 'ص', name: 'Sad', sound: 'S' },
            { letter: 'ض', name: 'Dad', sound: 'D' },
            { letter: 'ط', name: 'Ta', sound: 'T' },
            { letter: 'ظ', name: 'Za', sound: 'Z' },
            { letter: 'ع', name: 'Ayn', sound: 'A' },
            { letter: 'غ', name: 'Ghayn', sound: 'GH' },
            { letter: 'ف', name: 'Fa', sound: 'F' },
            { letter: 'ق', name: 'Qaf', sound: 'Q' },
            { letter: 'ك', name: 'Kaf', sound: 'K' },
            { letter: 'ل', name: 'Lam', sound: 'L' },
            { letter: 'م', name: 'Meem', sound: 'M' },
            { letter: 'ن', name: 'Noon', sound: 'N' },
            { letter: 'ه', name: 'Ha', sound: 'H' },
            { letter: 'و', name: 'Waw', sound: 'W' },
            { letter: 'ي', name: 'Ya', sound: 'Y' }
        ];
    }

    nextLetter() {
        this.currentLetter = (this.currentLetter + 1) % this.arabicLetters.length;
        this.updateDisplay();
    }

    previousLetter() {
        this.currentLetter = this.currentLetter === 0 ? this.arabicLetters.length - 1 : this.currentLetter - 1;
        this.updateDisplay();
    }

    updateDisplay() {
        const letterElement = document.getElementById('currentLetter');
        const nameElement = document.getElementById('letterName');
        const soundElement = document.getElementById('letterSound');
        
        if (letterElement && nameElement && soundElement) {
            const current = this.arabicLetters[this.currentLetter];
            letterElement.textContent = current.letter;
            nameElement.textContent = current.name;
            soundElement.textContent = current.sound;
        }
    }
}

// Dua Memorization
class DuaMemorization {
    constructor() {
        this.memorizedDuas = JSON.parse(localStorage.getItem('memorizedDuas')) || [];
        this.currentDua = 0;
        this.duas = [
            {
                arabic: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم",
                english: "In the name of Allah, the Most Gracious, the Most Merciful",
                context: "Before starting any action"
            },
            {
                arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
                english: "Praise be to Allah, Lord of all the worlds",
                context: "After completing something"
            },
            {
                arabic: "سُبْحَانَ اللَّهِ",
                english: "Glory be to Allah",
                context: "General dhikr"
            },
            {
                arabic: "اللَّهُ أَكْبَر",
                english: "Allah is the Greatest",
                context: "Takbir"
            },
            {
                arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ",
                english: "There is no god but Allah",
                context: "Shahada"
            }
        ];
    }

    markAsMemorized(duaIndex) {
        if (!this.memorizedDuas.includes(duaIndex)) {
            this.memorizedDuas.push(duaIndex);
            localStorage.setItem('memorizedDuas', JSON.stringify(this.memorizedDuas));
            this.updateProgress();
        }
    }

    updateProgress() {
        const progressElement = document.getElementById('memorizationProgress');
        if (progressElement) {
            const percentage = (this.memorizedDuas.length / this.duas.length) * 100;
            progressElement.style.width = percentage + '%';
        }
    }

    getRandomDua() {
        const randomIndex = Math.floor(Math.random() * this.duas.length);
        return this.duas[randomIndex];
    }
}

// Initialize all features
document.addEventListener('DOMContentLoaded', function() {
    // Initialize prayer times
    const prayerTimes = new PrayerTimes();
    prayerTimes.updateDisplay();

    // Initialize Islamic calendar
    const islamicCalendar = new IslamicCalendar();
    islamicCalendar.updateDisplay();

    // Initialize Qibla compass
    const qiblaCompass = new QiblaCompass();
    
    // Initialize Arabic learning
    const arabicLearning = new ArabicLearning();
    arabicLearning.updateDisplay();

    // Initialize Dua memorization
    const duaMemorization = new DuaMemorization();
    duaMemorization.updateProgress();

    // Add event listeners
    addEventListeners(prayerTimes, islamicCalendar, qiblaCompass, arabicLearning, duaMemorization);
});

function addEventListeners(prayerTimes, islamicCalendar, qiblaCompass, arabicLearning, duaMemorization) {
    // Arabic learning controls
    const nextLetterBtn = document.getElementById('nextLetter');
    const prevLetterBtn = document.getElementById('prevLetter');
    
    if (nextLetterBtn) {
        nextLetterBtn.addEventListener('click', () => arabicLearning.nextLetter());
    }
    
    if (prevLetterBtn) {
        prevLetterBtn.addEventListener('click', () => arabicLearning.previousLetter());
    }

    // Qibla compass controls
    const qiblaBtn = document.getElementById('findQibla');
    if (qiblaBtn) {
        qiblaBtn.addEventListener('click', () => {
            // Simulate finding Qibla direction
            const randomDirection = Math.floor(Math.random() * 360);
            qiblaCompass.animateToDirection(randomDirection);
        });
    }

    // Dua memorization
    const memorizeBtns = document.querySelectorAll('.memorize-dua');
    memorizeBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            duaMemorization.markAsMemorized(index);
            btn.textContent = 'Memorized ✓';
            btn.disabled = true;
        });
    });

    // Random Dua button
    const randomDuaBtn = document.getElementById('randomDua');
    if (randomDuaBtn) {
        randomDuaBtn.addEventListener('click', () => {
            const randomDua = duaMemorization.getRandomDua();
            const duaContainer = document.getElementById('dailyDua');
            if (duaContainer) {
                duaContainer.innerHTML = `
                    <div class="arabic-text">${randomDua.arabic}</div>
                    <p><strong>${randomDua.english}</strong></p>
                    <small>${randomDua.context}</small>
                `;
            }
        });
    }
}

// Utility functions
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#28a745' : '#007bff'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        font-weight: 600;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Export for global access
window.IslamicInteractive = {
    PrayerTimes,
    IslamicCalendar,
    QiblaCompass,
    ArabicLearning,
    DuaMemorization,
    showNotification
};
