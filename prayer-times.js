// Prayer Times Calculator for Islamic Learning Companion
// Accurate prayer time calculations based on user location

class PrayerTimesCalculator {
    constructor() {
        this.methods = {
            'MWL': { // Muslim World League
                fajr: 18,
                isha: 17,
                method: 'MWL'
            },
            'ISNA': { // Islamic Society of North America
                fajr: 15,
                isha: 15,
                method: 'ISNA'
            },
            'Egypt': {
                fajr: 19.5,
                isha: 17.5,
                method: 'Egypt'
            },
            'Makkah': {
                fajr: 18.5,
                isha: 19,
                method: 'Makkah'
            },
            'Karachi': {
                fajr: 18,
                isha: 18,
                method: 'Karachi'
            },
            'Tehran': {
                fajr: 17.7,
                isha: 14,
                method: 'Tehran'
            },
            'Jafari': {
                fajr: 16,
                isha: 14,
                method: 'Jafari'
            }
        };
        
        this.currentMethod = 'MWL'; // Default method
        this.userLocation = null;
        this.prayerTimes = {};
        this.updateInterval = null;
    }

    // Initialize prayer times system
    async initialize() {
        try {
            await this.getUserLocation();
            if (this.userLocation) {
                await this.calculatePrayerTimes();
                this.startAutoUpdate();
                return true;
            }
            return false;
        } catch (error) {
            console.error('Error initializing prayer times:', error);
            return false;
        }
    }

    // Get user's current location
    async getUserLocation() {
        return new Promise((resolve, reject) => {
            if (!navigator.geolocation) {
                reject(new Error('Geolocation is not supported by this browser'));
                return;
            }

            navigator.geolocation.getCurrentPosition(
                (position) => {
                    this.userLocation = {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        accuracy: position.coords.accuracy
                    };
                    console.log('User location obtained:', this.userLocation);
                    resolve(this.userLocation);
                },
                (error) => {
                    console.error('Error getting location:', error);
                    // Fallback to default location (Mecca)
                    this.userLocation = {
                        latitude: 21.4225,
                        longitude: 39.8262,
                        accuracy: 0,
                        isDefault: true
                    };
                    resolve(this.userLocation);
                },
                {
                    enableHighAccuracy: true,
                    timeout: 10000,
                    maximumAge: 300000 // 5 minutes
                }
            );
        });
    }

    // Calculate prayer times for the current date
    async calculatePrayerTimes(date = new Date()) {
        if (!this.userLocation) {
            throw new Error('User location not available');
        }

        const method = this.methods[this.currentMethod];
        const lat = this.userLocation.latitude;
        const lng = this.userLocation.longitude;
        const timezone = await this.getTimezone(lat, lng);

        // Calculate Julian day
        const jd = this.julianDay(date);
        
        // Calculate sun position
        const sunPos = this.sunPosition(jd);
        
        // Calculate prayer times
        const times = {
            fajr: this.calculateTime(jd, lat, lng, -method.fajr, sunPos),
            sunrise: this.calculateTime(jd, lat, lng, -0.833, sunPos),
            dhuhr: this.calculateTime(jd, lat, lng, 0, sunPos),
            asr: this.calculateAsrTime(jd, lat, lng, sunPos),
            maghrib: this.calculateTime(jd, lat, lng, -0.833, sunPos),
            isha: this.calculateTime(jd, lat, lng, -method.isha, sunPos)
        };

        // Adjust for timezone
        Object.keys(times).forEach(prayer => {
            times[prayer] = this.adjustForTimezone(times[prayer], timezone);
        });

        this.prayerTimes = times;
        this.currentDate = date;
        
        return times;
    }

    // Calculate prayer times for multiple days
    async calculateMonthlyPrayerTimes(year, month) {
        const daysInMonth = new Date(year, month, 0).getDate();
        const monthlyTimes = {};

        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month - 1, day);
            const times = await this.calculatePrayerTimes(date);
            monthlyTimes[day] = times;
        }

        return monthlyTimes;
    }

    // Get timezone offset for location
    async getTimezone(lat, lng) {
        try {
            // Use a simple timezone estimation based on longitude
            // In a real app, you'd use a proper timezone API
            const timezoneOffset = Math.round(lng / 15);
            return timezoneOffset;
        } catch (error) {
            console.error('Error getting timezone:', error);
            return 0;
        }
    }

    // Calculate Julian day
    julianDay(date) {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        
        if (month <= 2) {
            year -= 1;
            month += 12;
        }
        
        const a = Math.floor(year / 100);
        const b = 2 - a + Math.floor(a / 4);
        
        return Math.floor(365.25 * (year + 4716)) + Math.floor(30.6001 * (month + 1)) + day + b - 1524.5;
    }

    // Calculate sun position
    sunPosition(jd) {
        const n = jd - 2451545.0;
        const L = (280.460 + 0.9856474 * n) % 360;
        const g = (357.528 + 0.9856003 * n) % 360;
        const lambda = L + 1.915 * Math.sin(g * Math.PI / 180) + 0.020 * Math.sin(2 * g * Math.PI / 180);
        const epsilon = 23.439 - 0.0000004 * n;
        
        const alpha = Math.atan2(Math.cos(epsilon * Math.PI / 180) * Math.sin(lambda * Math.PI / 180), Math.cos(lambda * Math.PI / 180)) * 180 / Math.PI;
        const delta = Math.asin(Math.sin(epsilon * Math.PI / 180) * Math.sin(lambda * Math.PI / 180)) * 180 / Math.PI;
        
        return { alpha, delta };
    }

    // Calculate prayer time
    calculateTime(jd, lat, lng, angle, sunPos) {
        const hourAngle = this.hourAngle(lat, sunPos.delta, angle);
        const time = 12 + hourAngle / 15 - sunPos.alpha / 15;
        
        return this.normalizeTime(time);
    }

    // Calculate Asr time
    calculateAsrTime(jd, lat, lng, sunPos) {
        const angle = Math.atan(1 + Math.tan((lat - sunPos.delta) * Math.PI / 180)) * 180 / Math.PI;
        return this.calculateTime(jd, lat, lng, -angle, sunPos);
    }

    // Calculate hour angle
    hourAngle(lat, delta, angle) {
        const cosH = (Math.sin(angle * Math.PI / 180) - Math.sin(lat * Math.PI / 180) * Math.sin(delta * Math.PI / 180)) / 
                    (Math.cos(lat * Math.PI / 180) * Math.cos(delta * Math.PI / 180));
        
        if (cosH < -1 || cosH > 1) {
            return 0; // No prayer time (polar day/night)
        }
        
        return Math.acos(cosH) * 180 / Math.PI;
    }

    // Normalize time to 24-hour format
    normalizeTime(time) {
        while (time < 0) time += 24;
        while (time >= 24) time -= 24;
        return time;
    }

    // Adjust time for timezone
    adjustForTimezone(time, timezone) {
        return time + timezone;
    }

    // Format time for display
    formatTime(time, format12 = false) {
        const hours = Math.floor(time);
        const minutes = Math.round((time - hours) * 60);
        
        let displayHours = hours;
        let period = '';
        
        if (format12) {
            period = hours >= 12 ? 'PM' : 'AM';
            displayHours = hours % 12;
            if (displayHours === 0) displayHours = 12;
        }
        
        return `${displayHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}${period}`;
    }

    // Get next prayer
    getNextPrayer() {
        const now = new Date();
        const currentTime = now.getHours() + now.getMinutes() / 60;
        
        const prayers = [
            { name: 'Fajr', time: this.prayerTimes.fajr },
            { name: 'Sunrise', time: this.prayerTimes.sunrise },
            { name: 'Dhuhr', time: this.prayerTimes.dhuhr },
            { name: 'Asr', time: this.prayerTimes.asr },
            { name: 'Maghrib', time: this.prayerTimes.maghrib },
            { name: 'Isha', time: this.prayerTimes.isha }
        ];
        
        for (const prayer of prayers) {
            if (prayer.time > currentTime) {
                const timeUntil = prayer.time - currentTime;
                return {
                    ...prayer,
                    timeUntil,
                    timeUntilText: this.formatTimeUntil(timeUntil)
                };
            }
        }
        
        // If no prayer found today, return tomorrow's Fajr
        return {
            name: 'Fajr (Tomorrow)',
            time: this.prayerTimes.fajr + 24,
            timeUntil: this.prayerTimes.fajr + 24 - currentTime,
            timeUntilText: this.formatTimeUntil(this.prayerTimes.fajr + 24 - currentTime)
        };
    }

    // Format time until prayer
    formatTimeUntil(hours) {
        const totalMinutes = Math.floor(hours * 60);
        const h = Math.floor(totalMinutes / 60);
        const m = totalMinutes % 60;
        
        if (h > 0) {
            return `${h}h ${m}m`;
        } else {
            return `${m}m`;
        }
    }

    // Set calculation method
    setMethod(method) {
        if (this.methods[method]) {
            this.currentMethod = method;
            if (this.userLocation) {
                this.calculatePrayerTimes();
            }
        }
    }

    // Get available methods
    getMethods() {
        return Object.keys(this.methods).map(key => ({
            key,
            name: this.methods[key].method,
            fajr: this.methods[key].fajr,
            isha: this.methods[key].isha
        }));
    }

    // Start auto-update every minute
    startAutoUpdate() {
        if (this.updateInterval) {
            clearInterval(this.updateInterval);
        }
        
        this.updateInterval = setInterval(() => {
            this.calculatePrayerTimes();
            this.updatePrayerTimeDisplays();
        }, 60000); // Update every minute
    }

    // Stop auto-update
    stopAutoUpdate() {
        if (this.updateInterval) {
            clearInterval(this.updateInterval);
            this.updateInterval = null;
        }
    }

    // Update prayer time displays on the page
    updatePrayerTimeDisplays() {
        // Update prayer time widgets
        const widgets = document.querySelectorAll('.prayer-time-widget');
        widgets.forEach(widget => {
            this.updatePrayerWidget(widget);
        });

        // Update next prayer display
        const nextPrayerElement = document.getElementById('next-prayer');
        if (nextPrayerElement) {
            const nextPrayer = this.getNextPrayer();
            nextPrayerElement.innerHTML = `
                <div class="next-prayer-info">
                    <h4>Next Prayer: ${nextPrayer.name}</h4>
                    <div class="time-until">${nextPrayer.timeUntilText}</div>
                    <div class="prayer-time">${this.formatTime(nextPrayer.time, true)}</div>
                </div>
            `;
        }

        // Update prayer times table
        this.updatePrayerTimesTable();
    }

    // Update prayer widget
    updatePrayerWidget(widget) {
        if (!this.prayerTimes || Object.keys(this.prayerTimes).length === 0) {
            return;
        }

        const prayers = [
            { name: 'Fajr', time: this.prayerTimes.fajr, icon: 'fas fa-sun' },
            { name: 'Dhuhr', time: this.prayerTimes.dhuhr, icon: 'fas fa-sun' },
            { name: 'Asr', time: this.prayerTimes.asr, icon: 'fas fa-sun' },
            { name: 'Maghrib', time: this.prayerTimes.maghrib, icon: 'fas fa-moon' },
            { name: 'Isha', time: this.prayerTimes.isha, icon: 'fas fa-moon' }
        ];

        const nextPrayer = this.getNextPrayer();
        
        widget.innerHTML = `
            <div class="prayer-widget-header">
                <h3><i class="fas fa-clock"></i> Prayer Times</h3>
                <div class="location-info">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${this.userLocation.isDefault ? 'Default Location' : 'Your Location'}</span>
                </div>
            </div>
            
            <div class="next-prayer-highlight">
                <div class="next-prayer-name">${nextPrayer.name}</div>
                <div class="next-prayer-time">${this.formatTime(nextPrayer.time, true)}</div>
                <div class="time-until">in ${nextPrayer.timeUntilText}</div>
            </div>
            
            <div class="prayer-times-list">
                ${prayers.map(prayer => `
                    <div class="prayer-item ${prayer.name.toLowerCase()}">
                        <div class="prayer-info">
                            <i class="${prayer.icon}"></i>
                            <span class="prayer-name">${prayer.name}</span>
                        </div>
                        <div class="prayer-time">${this.formatTime(prayer.time, true)}</div>
                    </div>
                `).join('')}
            </div>
            
            <div class="prayer-widget-footer">
                <button class="btn-small" onclick="refreshPrayerTimes()">
                    <i class="fas fa-sync-alt"></i> Refresh
                </button>
                <button class="btn-small" onclick="changePrayerMethod()">
                    <i class="fas fa-cog"></i> Method
                </button>
            </div>
        `;
    }

    // Update prayer times table
    updatePrayerTimesTable() {
        const table = document.getElementById('prayer-times-table');
        if (!table || !this.prayerTimes) return;

        const tbody = table.querySelector('tbody');
        if (!tbody) return;

        const prayers = [
            { name: 'Fajr', time: this.prayerTimes.fajr },
            { name: 'Sunrise', time: this.prayerTimes.sunrise },
            { name: 'Dhuhr', time: this.prayerTimes.dhuhr },
            { name: 'Asr', time: this.prayerTimes.asr },
            { name: 'Maghrib', time: this.prayerTimes.maghrib },
            { name: 'Isha', time: this.prayerTimes.isha }
        ];

        tbody.innerHTML = prayers.map(prayer => `
            <tr>
                <td>${prayer.name}</td>
                <td>${this.formatTime(prayer.time, true)}</td>
                <td>${this.formatTime(prayer.time)}</td>
            </tr>
        `).join('');
    }

    // Create prayer time widget
    createPrayerWidget(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = '<div class="prayer-time-widget"></div>';
        this.updatePrayerTimeDisplays();
    }

    // Check if it's prayer time
    isPrayerTime() {
        if (!this.prayerTimes) return null;

        const now = new Date();
        const currentTime = now.getHours() + now.getMinutes() / 60;
        
        const prayers = [
            { name: 'Fajr', time: this.prayerTimes.fajr },
            { name: 'Dhuhr', time: this.prayerTimes.dhuhr },
            { name: 'Asr', time: this.prayerTimes.asr },
            { name: 'Maghrib', time: this.prayerTimes.maghrib },
            { name: 'Isha', time: this.prayerTimes.isha }
        ];

        for (const prayer of prayers) {
            const timeDiff = Math.abs(currentTime - prayer.time);
            if (timeDiff <= 0.05) { // Within 3 minutes
                return prayer;
            }
        }

        return null;
    }

    // Get prayer times for today
    getTodayPrayerTimes() {
        return this.prayerTimes;
    }

    // Get user location info
    getUserLocationInfo() {
        return this.userLocation;
    }
}

// Global prayer times calculator instance
window.prayerTimesCalculator = new PrayerTimesCalculator();

// Global functions for prayer times
async function initializePrayerTimes() {
    const success = await window.prayerTimesCalculator.initialize();
    if (success) {
        console.log('Prayer times initialized successfully');
        return true;
    } else {
        console.log('Failed to initialize prayer times');
        return false;
    }
}

function refreshPrayerTimes() {
    if (window.prayerTimesCalculator) {
        window.prayerTimesCalculator.calculatePrayerTimes();
        window.prayerTimesCalculator.updatePrayerTimeDisplays();
    }
}

function changePrayerMethod() {
    const methods = window.prayerTimesCalculator.getMethods();
    const methodNames = methods.map(m => m.name).join('\n');
    
    const method = prompt(`Available methods:\n${methodNames}\n\nEnter method name:`, 'MWL');
    if (method && window.prayerTimesCalculator.methods[method]) {
        window.prayerTimesCalculator.setMethod(method);
        showNotification(`Prayer calculation method changed to ${method}`, 'success');
    }
}

function showPrayerTimeNotification(prayerName) {
    const notification = document.createElement('div');
    notification.className = 'prayer-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <div class="notification-icon">
                <i class="fas fa-mosque"></i>
            </div>
            <div class="notification-text">
                <h4>It's time for ${prayerName} prayer!</h4>
                <p>May Allah accept your prayers</p>
            </div>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 30 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 30000);
}

// Check for prayer times every minute
setInterval(() => {
    if (window.prayerTimesCalculator && window.prayerTimesCalculator.prayerTimes) {
        const currentPrayer = window.prayerTimesCalculator.isPrayerTime();
        if (currentPrayer) {
            showPrayerTimeNotification(currentPrayer.name);
        }
    }
}, 60000);

// Initialize prayer times when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Initialize prayer times after a short delay to ensure page is loaded
    setTimeout(() => {
        initializePrayerTimes();
    }, 1000);
});

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PrayerTimesCalculator;
}
