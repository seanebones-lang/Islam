// Script to add mobile menu and notifications to all HTML pages
const fs = require('fs');
const path = require('path');

const htmlFiles = [
    'subjects.html',
    'what-is-islam.html',
    'community-board.html',
    'quran-reader.html',
    'quran.html',
    'hadiths.html',
    'sunnah.html',
    'seerah.html',
    'prayer-guide.html',
    'qibla-finder.html',
    'islamic-calendar.html',
    'new-muslims.html',
    'wudu-guide.html',
    'faq.html',
    'basic-arabic.html'
];

const navActionsHTML = `
            <div class="nav-actions">
                <button class="notification-btn" onclick="toggleNotifications()" title="Notifications">
                    <i class="fas fa-bell"></i>
                    <span class="notification-badge" id="notificationBadge">0</span>
                </button>
                <button class="mobile-menu-btn" onclick="toggleMobileMenu()" title="Menu">
                    <i class="fas fa-bars"></i>
                </button>
            </div>`;

const mobileMenuHTML = `
        <!-- Mobile Menu -->
        <div class="mobile-menu" id="mobileMenu">
            <div class="mobile-menu-content">
                <a href="index.html" class="mobile-nav-link">Home</a>
                <a href="subjects.html" class="mobile-nav-link">Subjects</a>
                <a href="what-is-islam.html" class="mobile-nav-link">About Islam</a>
                <a href="community-board.html" class="mobile-nav-link">Community</a>
                <a href="notifications.html" class="mobile-nav-link">
                    <i class="fas fa-bell"></i> Notifications
                    <span class="notification-count" id="mobileNotificationCount">0</span>
                </a>
                <button class="mobile-nav-btn" onclick="window.location.href='subjects.html'">Get Started</button>
            </div>
        </div>`;

const mobileMenuJS = `
        // Mobile Menu Functions
        function toggleMobileMenu() {
            const mobileMenu = document.getElementById('mobileMenu');
            mobileMenu.classList.toggle('active');
        }

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const mobileMenu = document.getElementById('mobileMenu');
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            
            if (mobileMenu && mobileMenu.classList.contains('active') && 
                !mobileMenu.contains(event.target) && 
                !mobileMenuBtn.contains(event.target)) {
                mobileMenu.classList.remove('active');
            }
        });

        // Notifications Functions
        function toggleNotifications() {
            window.location.href = 'notifications.html';
        }

        function updateNotificationBadge() {
            const notificationCount = localStorage.getItem('notificationCount') || 0;
            const badge = document.getElementById('notificationBadge');
            const mobileCount = document.getElementById('mobileNotificationCount');
            
            if (badge) {
                badge.textContent = notificationCount;
                badge.style.display = notificationCount > 0 ? 'flex' : 'none';
            }
            
            if (mobileCount) {
                mobileCount.textContent = notificationCount;
                mobileCount.style.display = notificationCount > 0 ? 'flex' : 'none';
            }
        }

        // Initialize notifications
        document.addEventListener('DOMContentLoaded', function() {
            updateNotificationBadge();
            setInterval(updateNotificationBadge, 30000);
        });

        // Global functions
        window.toggleMobileMenu = toggleMobileMenu;
        window.toggleNotifications = toggleNotifications;`;

htmlFiles.forEach(fileName => {
    const filePath = path.join(__dirname, fileName);
    
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Add nav-actions after nav-menu
        content = content.replace(
            /(<div class="nav-menu">[\s\S]*?<\/div>)/,
            `$1${navActionsHTML}`
        );
        
        // Add mobile menu after nav closing tag
        content = content.replace(
            /(<\/nav>)/,
            `${mobileMenuHTML}\n    $1`
        );
        
        // Add JavaScript before closing script tag
        content = content.replace(
            /(\s*<\/script>)/,
            `${mobileMenuJS}\n    $1`
        );
        
        fs.writeFileSync(filePath, content);
        console.log(`Updated ${fileName}`);
    } else {
        console.log(`File not found: ${fileName}`);
    }
});

console.log('Mobile menu and notifications added to all pages!');
