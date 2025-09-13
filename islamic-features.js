// Islamic Learning Companion - Enhanced Features
// This file contains interactive features for all pages

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all Islamic features
    initializeIslamicCalendar();
    initializeQiblaFinder();
    initializePrayerTimes();
    initializeCommunityFeatures();
    initializeNewMuslimGuide();
});

// Islamic Calendar Features
function initializeIslamicCalendar() {
    const hijriDateElement = document.getElementById('hijriDate');
    const gregorianDateElement = document.getElementById('gregorianDate');
    const currentYearElement = document.getElementById('currentYear');
    
    if (hijriDateElement) {
        updateIslamicDate();
        // Update every hour
        setInterval(updateIslamicDate, 3600000);
    }
}

function updateIslamicDate() {
    const now = new Date();
    const hijriDate = convertToHijri(now);
    
    const hijriDateElement = document.getElementById('hijriDate');
    const gregorianDateElement = document.getElementById('gregorianDate');
    const currentYearElement = document.getElementById('currentYear');
    
    if (hijriDateElement) {
        hijriDateElement.textContent = `${hijriDate.day} ${hijriDate.monthName} ${hijriDate.year} AH`;
    }
    
    if (gregorianDateElement) {
        gregorianDateElement.textContent = now.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
    
    if (currentYearElement) {
        currentYearElement.textContent = hijriDate.year;
    }
}

function convertToHijri(gregorianDate) {
    // Simplified Hijri conversion - in production, use a proper Islamic calendar library
    const islamicMonths = [
        'Muharram', 'Safar', 'Rabi\' al-Awwal', 'Rabi\' al-Thani',
        'Jumada al-Awwal', 'Jumada al-Thani', 'Rajab', 'Sha\'ban',
        'Ramadan', 'Shawwal', 'Dhul Qi\'dah', 'Dhul Hijjah'
    ];
    
    // Approximate conversion (this is simplified - real conversion is more complex)
    const hijriYear = 1446; // Current approximate year
    const hijriMonth = Math.floor(Math.random() * 12) + 1; // Random for demo
    const hijriDay = Math.floor(Math.random() * 29) + 1; // Random for demo
    
    return {
        year: hijriYear,
        month: hijriMonth,
        day: hijriDay,
        monthName: islamicMonths[hijriMonth - 1]
    };
}

// Qibla Finder Features
function initializeQiblaFinder() {
    const qiblaButton = document.getElementById('getLocationBtn');
    const cityButton = document.querySelector('button[onclick*="getQiblaByCity"]');
    
    if (qiblaButton) {
        qiblaButton.addEventListener('click', getCurrentLocation);
    }
    
    if (cityButton) {
        cityButton.addEventListener('click', getQiblaByCity);
    }
    
    // Initialize compass animation
    initializeCompass();
}

function getCurrentLocation() {
    const button = document.getElementById('getLocationBtn');
    const resultsDiv = document.getElementById('compassResults');
    
    // Update button state
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Finding Location...';
    button.disabled = true;
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                const qiblaDirection = calculateQiblaDirection(lat, lng);
                
                updateCompassDisplay(qiblaDirection, lat, lng);
                resultsDiv.style.display = 'block';
                
                // Reset button
                button.innerHTML = '<i class="fas fa-location-arrow"></i> Find My Qibla Direction';
                button.disabled = false;
            },
            function(error) {
                showQiblaError(error);
                button.innerHTML = '<i class="fas fa-location-arrow"></i> Find My Qibla Direction';
                button.disabled = false;
            },
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 60000
            }
        );
    } else {
        showQiblaError('Geolocation is not supported by this browser.');
        button.innerHTML = '<i class="fas fa-location-arrow"></i> Find My Qibla Direction';
        button.disabled = false;
    }
}

function getQiblaByCity() {
    const cityInput = document.getElementById('cityInput');
    const city = cityInput.value.trim();
    
    if (!city) {
        showNotification('Please enter a city name', 'error');
        return;
    }
    
    // Simulate city coordinates (in real app, use geocoding API)
    const cityCoordinates = getCityCoordinates(city);
    
    if (cityCoordinates) {
        const qiblaDirection = calculateQiblaDirection(cityCoordinates.lat, cityCoordinates.lng);
        updateCompassDisplay(qiblaDirection, cityCoordinates.lat, cityCoordinates.lng, city);
        document.getElementById('compassResults').style.display = 'block';
    } else {
        showNotification('City not found. Please try a different city name.', 'error');
    }
}

function getCityCoordinates(city) {
    // Simplified city database - in production, use a proper geocoding service
    const cities = {
        'new york': { lat: 40.7128, lng: -74.0060 },
        'london': { lat: 51.5074, lng: -0.1278 },
        'tokyo': { lat: 35.6762, lng: 139.6503 },
        'sydney': { lat: -33.8688, lng: 151.2093 },
        'dubai': { lat: 25.2048, lng: 55.2708 },
        'istanbul': { lat: 41.0082, lng: 28.9784 },
        'paris': { lat: 48.8566, lng: 2.3522 },
        'berlin': { lat: 52.5200, lng: 13.4050 },
        'madrid': { lat: 40.4168, lng: -3.7038 },
        'rome': { lat: 41.9028, lng: 12.4964 },
        'mumbai': { lat: 19.0760, lng: 72.8777 },
        'delhi': { lat: 28.7041, lng: 77.1025 },
        'cairo': { lat: 30.0444, lng: 31.2357 },
        'riyadh': { lat: 24.7136, lng: 46.6753 },
        'jeddah': { lat: 21.4858, lng: 39.1925 },
        'medina': { lat: 24.5247, lng: 39.5692 },
        'mecca': { lat: 21.4225, lng: 39.8262 }
    };
    
    return cities[city.toLowerCase()];
}

function updateCompassDisplay(qibla, lat, lng, locationName = null) {
    const needle = document.getElementById('qiblaNeedle');
    const directionText = document.getElementById('directionText');
    const degrees = document.getElementById('degrees');
    const distanceKm = document.getElementById('distanceKm');
    const userLocation = document.getElementById('userLocation');
    
    // Rotate needle
    if (needle) {
        needle.style.transform = `rotate(${qibla.degrees}deg)`;
    }
    
    // Update text displays
    if (directionText) directionText.textContent = qibla.direction;
    if (degrees) degrees.textContent = qibla.degrees + '°';
    if (distanceKm) distanceKm.textContent = qibla.distance.toLocaleString() + ' km';
    
    if (userLocation) {
        if (locationName) {
            userLocation.textContent = locationName;
        } else {
            userLocation.textContent = `${lat.toFixed(4)}°, ${lng.toFixed(4)}°`;
        }
    }
}

function initializeCompass() {
    // Add compass animation and interaction
    const compassFace = document.querySelector('.compass-face');
    if (compassFace) {
        compassFace.addEventListener('click', function() {
            this.style.transform = 'scale(1.05)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    }
}

function findQiblaDirection() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                const qiblaDirection = calculateQiblaDirection(lat, lng);
                
                showQiblaResult(qiblaDirection, lat, lng);
            },
            function(error) {
                showQiblaError(error);
            }
        );
    } else {
        showQiblaError('Geolocation is not supported by this browser.');
    }
}

function calculateQiblaDirection(lat, lng) {
    // Kaaba coordinates
    const kaabaLat = 21.4225;
    const kaabaLng = 39.8262;
    
    // Calculate bearing to Kaaba
    const dLng = (kaabaLng - lng) * Math.PI / 180;
    const lat1 = lat * Math.PI / 180;
    const lat2 = kaabaLat * Math.PI / 180;
    
    const y = Math.sin(dLng) * Math.cos(lat2);
    const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLng);
    
    let bearing = Math.atan2(y, x) * 180 / Math.PI;
    bearing = (bearing + 360) % 360;
    
    return {
        degrees: Math.round(bearing),
        direction: getDirectionName(bearing),
        distance: calculateDistance(lat, lng, kaabaLat, kaabaLng)
    };
}

function getDirectionName(bearing) {
    const directions = ['North', 'Northeast', 'East', 'Southeast', 'South', 'Southwest', 'West', 'Northwest'];
    const index = Math.round(bearing / 45) % 8;
    return directions[index];
}

function calculateDistance(lat1, lng1, lat2, lng2) {
    const R = 6371; // Earth's radius in kilometers
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLng/2) * Math.sin(dLng/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return Math.round(R * c);
}

function showQiblaResult(qibla, lat, lng) {
    const resultDiv = document.createElement('div');
    resultDiv.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, var(--dark-green), var(--medium-green));
        color: var(--white);
        padding: 2rem;
        border-radius: 20px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        text-align: center;
        max-width: 400px;
        border: 2px solid var(--gold);
    `;
    
    resultDiv.innerHTML = `
        <div style="font-size: 2rem; margin-bottom: 1rem;">🧭</div>
        <h3 style="color: var(--gold); margin-bottom: 1rem;">Qibla Direction Found!</h3>
        <p><strong>Direction:</strong> ${qibla.direction} (${qibla.degrees}°)</p>
        <p><strong>Distance to Mecca:</strong> ${qibla.distance} km</p>
        <p><strong>Your Location:</strong> ${lat.toFixed(4)}°, ${lng.toFixed(4)}°</p>
        <button onclick="this.parentElement.remove()" style="
            background: var(--gold);
            color: var(--dark-green);
            border: none;
            padding: 0.8rem 1.5rem;
            border-radius: 8px;
            font-weight: 600;
            margin-top: 1rem;
            cursor: pointer;
        ">Close</button>
    `;
    
    document.body.appendChild(resultDiv);
}

function showQiblaError(error) {
    const errorDiv = document.createElement('div');
    errorDiv.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #dc3545, #c82333);
        color: white;
        padding: 2rem;
        border-radius: 20px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        text-align: center;
        max-width: 400px;
    `;
    
    errorDiv.innerHTML = `
        <div style="font-size: 2rem; margin-bottom: 1rem;">⚠️</div>
        <h3 style="margin-bottom: 1rem;">Unable to Find Location</h3>
        <p>Please enable location access or use a compass app to find Qibla direction.</p>
        <button onclick="this.parentElement.remove()" style="
            background: white;
            color: #dc3545;
            border: none;
            padding: 0.8rem 1.5rem;
            border-radius: 8px;
            font-weight: 600;
            margin-top: 1rem;
            cursor: pointer;
        ">Close</button>
    `;
    
    document.body.appendChild(errorDiv);
}

// Prayer Times Features
function initializePrayerTimes() {
    updatePrayerTimes();
    // Update every minute
    setInterval(updatePrayerTimes, 60000);
}

function updatePrayerTimes() {
    const prayerTimes = {
        Fajr: '05:30',
        Dhuhr: '12:30',
        Asr: '15:45',
        Maghrib: '18:20',
        Isha: '19:50'
    };
    
    // Update prayer times display if elements exist
    Object.keys(prayerTimes).forEach(prayer => {
        const element = document.getElementById(`${prayer.toLowerCase()}Time`);
        if (element) {
            element.textContent = prayerTimes[prayer];
        }
    });
    
    // Check if it's time for prayer
    checkPrayerTime(prayerTimes);
}

function checkPrayerTime(prayerTimes) {
    const now = new Date();
    const currentTime = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
    
    Object.keys(prayerTimes).forEach(prayer => {
        if (prayerTimes[prayer] === currentTime) {
            showPrayerNotification(prayer);
        }
    });
}

function showPrayerNotification(prayer) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, var(--gold), var(--gold-light));
        color: var(--dark-green);
        padding: 1rem 1.5rem;
        border-radius: 12px;
        font-weight: 600;
        box-shadow: 0 8px 25px rgba(212, 175, 55, 0.3);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.5s ease;
        max-width: 300px;
    `;
    
    notification.innerHTML = `
        <div style="font-size: 1.2rem; margin-bottom: 0.5rem;">🕌</div>
        <div>It's time for ${prayer} prayer!</div>
        <div style="font-size: 0.9rem; margin-top: 0.5rem;">May Allah accept your prayers</div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Animate out
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 500);
    }, 10000);
}

// Community Features
function initializeCommunityFeatures() {
    // Add interactive features for community page
    const joinButtons = document.querySelectorAll('button[onclick*="Community"], button:contains("Join")');
    joinButtons.forEach(button => {
        button.addEventListener('click', showCommunityModal);
    });
}

function showCommunityModal() {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    modal.innerHTML = `
        <div style="
            background: linear-gradient(135deg, var(--dark-green), var(--medium-green));
            color: var(--white);
            padding: 2rem;
            border-radius: 20px;
            max-width: 500px;
            width: 90%;
            text-align: center;
            border: 2px solid var(--gold);
        ">
            <div style="font-size: 3rem; margin-bottom: 1rem;">🤝</div>
            <h2 style="color: var(--gold); margin-bottom: 1rem;">Join Our Community</h2>
            <p style="margin-bottom: 2rem;">Connect with Muslims worldwide and strengthen your faith together.</p>
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                <button onclick="this.closest('.modal').remove()" style="
                    background: var(--gold);
                    color: var(--dark-green);
                    border: none;
                    padding: 0.8rem 1.5rem;
                    border-radius: 8px;
                    font-weight: 600;
                    cursor: pointer;
                ">Join Now</button>
                <button onclick="this.closest('.modal').remove()" style="
                    background: transparent;
                    color: var(--white);
                    border: 2px solid var(--white);
                    padding: 0.8rem 1.5rem;
                    border-radius: 8px;
                    font-weight: 600;
                    cursor: pointer;
                ">Learn More</button>
            </div>
        </div>
    `;
    
    modal.className = 'modal';
    document.body.appendChild(modal);
}

// New Muslim Guide Features
function initializeNewMuslimGuide() {
    // Add interactive features for new Muslims
    const supportButtons = document.querySelectorAll('button[onclick*="Community"], button:contains("Support")');
    supportButtons.forEach(button => {
        button.addEventListener('click', showSupportModal);
    });
}

function showSupportModal() {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    modal.innerHTML = `
        <div style="
            background: linear-gradient(135deg, var(--dark-green), var(--medium-green));
            color: var(--white);
            padding: 2rem;
            border-radius: 20px;
            max-width: 500px;
            width: 90%;
            text-align: center;
            border: 2px solid var(--gold);
        ">
            <div style="font-size: 3rem; margin-bottom: 1rem;">🌟</div>
            <h2 style="color: var(--gold); margin-bottom: 1rem;">Welcome to Islam!</h2>
            <p style="margin-bottom: 2rem;">We're here to support you on your beautiful journey. Connect with mentors and fellow new Muslims.</p>
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                <button onclick="this.closest('.modal').remove()" style="
                    background: var(--gold);
                    color: var(--dark-green);
                    border: none;
                    padding: 0.8rem 1.5rem;
                    border-radius: 8px;
                    font-weight: 600;
                    cursor: pointer;
                ">Get Support</button>
                <button onclick="this.closest('.modal').remove()" style="
                    background: transparent;
                    color: var(--white);
                    border: 2px solid var(--white);
                    padding: 0.8rem 1.5rem;
                    border-radius: 8px;
                    font-weight: 600;
                    cursor: pointer;
                ">Find a Mentor</button>
            </div>
        </div>
    `;
    
    modal.className = 'modal';
    document.body.appendChild(modal);
}

// Utility Functions
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    const colors = {
        info: 'linear-gradient(135deg, var(--gold), var(--gold-light))',
        success: 'linear-gradient(135deg, #28a745, #20c997)',
        error: 'linear-gradient(135deg, #dc3545, #c82333)',
        warning: 'linear-gradient(135deg, #ffc107, #e0a800)'
    };
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${colors[type]};
        color: ${type === 'info' || type === 'warning' ? 'var(--dark-green)' : 'white'};
        padding: 1rem 1.5rem;
        border-radius: 12px;
        font-weight: 600;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.5s ease;
        max-width: 300px;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Animate out
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 500);
    }, 4000);
}

// Export functions for global use
window.IslamicFeatures = {
    findQiblaDirection,
    updateIslamicDate,
    showNotification,
    showCommunityModal,
    showSupportModal
};
