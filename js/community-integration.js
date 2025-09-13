// Community Integration Script
// This script ensures all community board links work properly throughout the app

class CommunityIntegration {
    constructor() {
        this.init();
    }

    init() {
        this.setupCommunityLinks();
        this.setupCommunityButtons();
        this.setupCommunityNavigation();
        this.setupCommunitySearch();
    }

    // Setup community links throughout the app
    setupCommunityLinks() {
        // Update all community.html links to community-board.html
        const communityLinks = document.querySelectorAll('a[href*="community.html"]');
        communityLinks.forEach(link => {
            link.href = link.href.replace('community.html', 'community-board.html');
        });

        // Update all community button onclick events
        const communityButtons = document.querySelectorAll('button[onclick*="community.html"]');
        communityButtons.forEach(button => {
            button.onclick = button.onclick.toString().replace('community.html', 'community-board.html');
        });
    }

    // Setup community buttons
    setupCommunityButtons() {
        // Add community buttons to key pages
        this.addCommunityButtonToHomepage();
        this.addCommunityButtonToSubjects();
        this.addCommunityButtonToNewMuslims();
    }

    // Add community button to homepage
    addCommunityButtonToHomepage() {
        const heroButtons = document.querySelector('.hero-buttons');
        if (heroButtons && !heroButtons.querySelector('[href*="community-board"]')) {
            const communityBtn = document.createElement('button');
            communityBtn.className = 'btn-secondary';
            communityBtn.style.background = 'var(--light-green)';
            communityBtn.style.color = 'var(--dark-green)';
            communityBtn.innerHTML = '<i class="fas fa-comments"></i> Join Community';
            communityBtn.onclick = () => window.location.href = 'community-board.html';
            heroButtons.appendChild(communityBtn);
        }
    }

    // Add community button to subjects page
    addCommunityButtonToSubjects() {
        const assessmentCard = document.querySelector('.assessment-card');
        if (assessmentCard && !assessmentCard.querySelector('[href*="community-board"]')) {
            const communityBtn = document.createElement('button');
            communityBtn.className = 'btn-secondary';
            communityBtn.innerHTML = '<i class="fas fa-comments"></i> Join Community Discussion';
            communityBtn.onclick = () => window.location.href = 'community-board.html';
            communityBtn.style.marginTop = '1rem';
            assessmentCard.appendChild(communityBtn);
        }
    }

    // Add community button to new muslims page
    addCommunityButtonToNewMuslims() {
        const sidebarCards = document.querySelectorAll('.sidebar-card');
        sidebarCards.forEach(card => {
            if (card.textContent.includes('Need Support') && !card.querySelector('[href*="community-board"]')) {
                const communityBtn = card.querySelector('button');
                if (communityBtn) {
                    communityBtn.onclick = () => window.location.href = 'community-board.html';
                }
            }
        });
    }

    // Setup community navigation
    setupCommunityNavigation() {
        // Update navigation menus
        const navLinks = document.querySelectorAll('.nav-link[href*="community"]');
        navLinks.forEach(link => {
            link.href = 'community-board.html';
            link.textContent = 'Community';
        });
    }

    // Setup community search
    setupCommunitySearch() {
        const searchInputs = document.querySelectorAll('input[placeholder*="search"], input[placeholder*="Search"]');
        searchInputs.forEach(input => {
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    const searchTerm = input.value.toLowerCase();
                    if (searchTerm.includes('community') || searchTerm.includes('discussion') || searchTerm.includes('forum')) {
                        window.location.href = 'community-board.html';
                    }
                }
            });
        });
    }

    // Add community quick access
    addCommunityQuickAccess() {
        // Add floating community button
        const floatingBtn = document.createElement('div');
        floatingBtn.id = 'community-float-btn';
        floatingBtn.innerHTML = '<i class="fas fa-comments"></i>';
        floatingBtn.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 60px;
            height: 60px;
            background: var(--gold);
            color: var(--dark-green);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            cursor: pointer;
            z-index: 1000;
            box-shadow: 0 4px 20px rgba(0,0,0,0.3);
            transition: all 0.3s ease;
        `;
        
        floatingBtn.addEventListener('mouseenter', () => {
            floatingBtn.style.transform = 'scale(1.1)';
            floatingBtn.style.background = 'var(--gold-light)';
        });
        
        floatingBtn.addEventListener('mouseleave', () => {
            floatingBtn.style.transform = 'scale(1)';
            floatingBtn.style.background = 'var(--gold)';
        });
        
        floatingBtn.addEventListener('click', () => {
            window.location.href = 'community-board.html';
        });
        
        document.body.appendChild(floatingBtn);
    }

    // Add community notifications
    addCommunityNotifications() {
        // Check for new community activity
        this.checkCommunityActivity();
    }

    // Check community activity
    checkCommunityActivity() {
        // In a real app, this would check for new posts, replies, etc.
        const hasNewActivity = Math.random() > 0.7; // Simulate random activity
        
        if (hasNewActivity) {
            this.showCommunityNotification();
        }
    }

    // Show community notification
    showCommunityNotification() {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--gold);
            color: var(--dark-green);
            padding: 1rem 1.5rem;
            border-radius: 10px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.3);
            z-index: 1001;
            cursor: pointer;
            animation: slideInRight 0.3s ease;
        `;
        
        notification.innerHTML = `
            <div style="display: flex; align-items: center; gap: 0.5rem;">
                <i class="fas fa-comments"></i>
                <span>New community activity!</span>
            </div>
        `;
        
        notification.addEventListener('click', () => {
            window.location.href = 'community-board.html';
        });
        
        document.body.appendChild(notification);
        
        // Remove notification after 5 seconds
        setTimeout(() => {
            notification.remove();
        }, 5000);
    }

    // Add community stats to homepage
    addCommunityStats() {
        const heroStats = document.querySelector('.hero-stats');
        if (heroStats) {
            const communityStat = document.createElement('div');
            communityStat.className = 'stat-item';
            communityStat.innerHTML = `
                <div class="stat-number">2.5K+</div>
                <div class="stat-label">Community Members</div>
            `;
            communityStat.style.cursor = 'pointer';
            communityStat.addEventListener('click', () => {
                window.location.href = 'community-board.html';
            });
            heroStats.appendChild(communityStat);
        }
    }
}

// Initialize community integration when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const communityIntegration = new CommunityIntegration();
    
    // Add community quick access after a delay
    setTimeout(() => {
        communityIntegration.addCommunityQuickAccess();
        communityIntegration.addCommunityStats();
    }, 2000);
});

// Global community functions
window.joinCommunity = function() {
    window.location.href = 'community-board.html';
};

window.createTopic = function() {
    window.location.href = 'create-topic.html';
};

window.viewCommunity = function() {
    window.location.href = 'community-board.html';
};

// Add CSS for community notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    #community-float-btn:hover {
        transform: scale(1.1) !important;
    }
    
    .community-link {
        color: var(--gold) !important;
        text-decoration: none;
        transition: all 0.3s ease;
    }
    
    .community-link:hover {
        color: var(--gold-light) !important;
        text-decoration: underline;
    }
`;
document.head.appendChild(style);
