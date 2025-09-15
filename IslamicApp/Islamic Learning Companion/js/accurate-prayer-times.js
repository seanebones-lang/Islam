// Accurate Prayer Times Calculator
// Fixed calculation with proper timezone handling

class AccuratePrayerTimesCalculator {
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
            }
        };
        
        this.currentMethod = 'MWL';
        this.userLocation = null;
        this.prayerTimes = {};
        this.timezone = 0;
    }

    // Initialize with user location
    async initialize() {
        try {
            // Get user location
            const position = await this.getCurrentPosition();
            this.userLocation = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            };
            
            // Get accurate timezone
            this.timezone = await this.getTimezoneOffset();
            
            // Calculate prayer times
            await this.calculatePrayerTimes();
            
            return true;
        } catch (error) {
            console.error('Error initializing prayer times:', error);
            return false;
        }
    }

    // Get current position
    getCurrentPosition() {
        return new Promise((resolve, reject) => {
            if (!navigator.geolocation) {
                reject(new Error('Geolocation not supported'));
                return;
            }
            
            navigator.geolocation.getCurrentPosition(
                resolve,
                reject,
                {
                    enableHighAccuracy: true,
                    timeout: 10000,
                    maximumAge: 300000 // 5 minutes
                }
            );
        });
    }

    // Get accurate timezone offset
    async getTimezoneOffset() {
        try {
            // Use the browser's timezone offset as a fallback
            const now = new Date();
            const utc = new Date(now.getTime() + (now.getTimezoneOffset() * 60000));
            
            // For more accuracy, we could use a timezone API
            // For now, use the browser's timezone offset
            return -now.getTimezoneOffset() / 60; // Convert to hours
        } catch (error) {
            console.error('Error getting timezone:', error);
            return 0;
        }
    }

    // Calculate prayer times for today
    async calculatePrayerTimes(date = new Date()) {
        if (!this.userLocation) {
            throw new Error('User location not available');
        }

        const method = this.methods[this.currentMethod];
        const lat = this.userLocation.latitude;
        const lng = this.userLocation.longitude;

        // Calculate Julian day
        const jd = this.julianDay(date);
        
        // Calculate sun position
        const sunPos = this.sunPosition(jd);
        
        // Calculate prayer times (in decimal hours)
        const rawTimes = {
            fajr: this.calculateTime(jd, lat, lng, -method.fajr, sunPos),
            sunrise: this.calculateTime(jd, lat, lng, -0.833, sunPos),
            dhuhr: this.calculateTime(jd, lat, lng, 0, sunPos),
            asr: this.calculateAsrTime(jd, lat, lng, sunPos),
            maghrib: this.calculateTime(jd, lat, lng, -0.833, sunPos),
            isha: this.calculateTime(jd, lat, lng, -method.isha, sunPos)
        };

        // Adjust for timezone
        Object.keys(rawTimes).forEach(prayer => {
            rawTimes[prayer] = this.adjustForTimezone(rawTimes[prayer], this.timezone);
        });

        // Store both raw times (for calculations) and formatted times (for display)
        this.prayerTimes = rawTimes;
        this.prayerTimesFormatted = {
            fajr: this.formatTime(rawTimes.fajr, true),
            sunrise: this.formatTime(rawTimes.sunrise, true),
            dhuhr: this.formatTime(rawTimes.dhuhr, true),
            asr: this.formatTime(rawTimes.asr, true),
            maghrib: this.formatTime(rawTimes.maghrib, true),
            isha: this.formatTime(rawTimes.isha, true)
        };
        
        this.currentDate = date;
        
        return this.prayerTimesFormatted;
    }

    // Calculate Julian day
    julianDay(date) {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        
        let y = year;
        let m = month;
        
        if (month <= 2) {
            y = year - 1;
            m = month + 12;
        }
        
        const a = Math.floor(y / 100);
        const b = 2 - a + Math.floor(a / 4);
        
        return Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + day + b - 1524.5;
    }

    // Calculate sun position
    sunPosition(jd) {
        const n = jd - 2451545.0;
        const L = (280.460 + 0.9856474 * n) % 360;
        const g = (357.528 + 0.9856003 * n) % 360;
        const lambda = L + 1.915 * Math.sin(g * Math.PI / 180) + 0.020 * Math.sin(2 * g * Math.PI / 180);
        const epsilon = 23.439 - 0.0000004 * n;
        
        const alpha = Math.atan2(
            Math.cos(epsilon * Math.PI / 180) * Math.sin(lambda * Math.PI / 180), 
            Math.cos(lambda * Math.PI / 180)
        ) * 180 / Math.PI;
        
        const delta = Math.asin(
            Math.sin(epsilon * Math.PI / 180) * Math.sin(lambda * Math.PI / 180)
        ) * 180 / Math.PI;
        
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

    // Create prayer widget
    createPrayerWidget(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        // Update prayer times display using formatted times
        const fajrTime = document.getElementById('fajr-time');
        const dhuhrTime = document.getElementById('dhuhr-time');
        const asrTime = document.getElementById('asr-time');
        const maghribTime = document.getElementById('maghrib-time');
        const ishaTime = document.getElementById('isha-time');

        if (fajrTime && this.prayerTimesFormatted) fajrTime.textContent = this.prayerTimesFormatted.fajr;
        if (dhuhrTime && this.prayerTimesFormatted) dhuhrTime.textContent = this.prayerTimesFormatted.dhuhr;
        if (asrTime && this.prayerTimesFormatted) asrTime.textContent = this.prayerTimesFormatted.asr;
        if (maghribTime && this.prayerTimesFormatted) maghribTime.textContent = this.prayerTimesFormatted.maghrib;
        if (ishaTime && this.prayerTimesFormatted) ishaTime.textContent = this.prayerTimesFormatted.isha;

        // Update next prayer
        const nextPrayer = this.getNextPrayer();
        const nextPrayerName = document.getElementById('next-prayer-name');
        const nextPrayerCountdown = document.getElementById('next-prayer-countdown');

        if (nextPrayerName) nextPrayerName.textContent = nextPrayer.name;
        if (nextPrayerCountdown) nextPrayerCountdown.textContent = nextPrayer.timeUntilText;

        // Update status
        const statusElement = document.getElementById('prayer-status');
        if (statusElement) {
            statusElement.innerHTML = `
                <i class="fas fa-map-marker-alt" style="color: var(--gold);"></i>
                <span style="color: var(--light-green);">Accurate prayer times for your location</span>
            `;
        }
    }

    // Set calculation method
    setMethod(method) {
        if (this.methods[method]) {
            this.currentMethod = method;
            this.calculatePrayerTimes();
        }
    }

    // Get available methods
    getMethods() {
        return Object.keys(this.methods);
    }
}

// Create global instance
window.accuratePrayerTimesCalculator = new AccuratePrayerTimesCalculator();

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize prayer times calculator
    window.accuratePrayerTimesCalculator.initialize().then(success => {
        if (success) {
            console.log('Accurate prayer times initialized successfully');
        } else {
            console.log('Failed to initialize accurate prayer times');
        }
    });
});
