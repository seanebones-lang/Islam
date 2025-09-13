// Updated Quran Reader JavaScript Functionality
// Now supports all 114 surahs with complete data

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Quran Reader
    initializeQuranReader();

    function initializeQuranReader() {
        // Surah selector functionality
        const surahSelect = document.getElementById('surahSelect');
        if (surahSelect) {
            surahSelect.addEventListener('change', function() {
                showSurah(this.value);
            });
        }

        // Reading option buttons
        const readingOptions = document.querySelectorAll('.reading-option');
        readingOptions.forEach(option => {
            option.addEventListener('click', function() {
                const view = this.getAttribute('data-view');
                switchView(view);
            });
        });

        // Audio controls
        const playPauseBtn = document.getElementById('playPauseBtn');
        const audioPlayer = document.getElementById('audioPlayer');
        
        if (playPauseBtn && audioPlayer) {
            playPauseBtn.addEventListener('click', toggleAudioPlayback);
            audioPlayer.addEventListener('ended', () => {
                playPauseBtn.innerHTML = '<i class="fas fa-play"></i> Play Audio';
            });
        }

        // Bookmark functionality
        const bookmarkBtn = document.getElementById('bookmarkBtn');
        if (bookmarkBtn) {
            bookmarkBtn.addEventListener('click', toggleBookmark);
        }

        // Share functionality
        const shareBtn = document.getElementById('shareBtn');
        if (shareBtn) {
            shareBtn.addEventListener('click', shareVerse);
        }

        // Copy functionality
        const copyBtn = document.getElementById('copyBtn');
        if (copyBtn) {
            copyBtn.addEventListener('click', copyVerse);
        }

        // Search functionality
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', handleSearch);
        }

        // Keyboard shortcuts
        document.addEventListener('keydown', handleKeyboardShortcuts);

        // Initialize with first surah
        showSurah('1');
        
        // Populate surah selector with all 114 surahs
        populateSurahSelector();
    }

    function populateSurahSelector() {
        const surahSelect = document.getElementById('surahSelect');
        if (!surahSelect) return;

        // Clear existing options
        surahSelect.innerHTML = '';

        // Add all 114 surahs
        const allSurahs = window.getAllSurahs ? window.getAllSurahs() : {};
        
        Object.keys(allSurahs).forEach(surahNum => {
            const surah = allSurahs[surahNum];
            const option = document.createElement('option');
            option.value = surahNum;
            option.textContent = `${surahNum}. ${surah.name} (${surah.english}) - ${surah.verses} verses`;
            surahSelect.appendChild(option);
        });
    }

    function showSurah(surahNumber) {
        const surahData = window.getSurahData ? window.getSurahData(surahNumber) : null;
        
        if (!surahData) {
            showNotification('Surah not found', 'error');
            return;
        }

        // Update surah info
        updateSurahInfo(surahData);
        
        // Update verses display
        updateVersesDisplay(surahData);
        
        // Update navigation
        updateNavigation(surahNumber);
        
        // Reset view to Arabic
        switchView('arabic');
        
        showNotification(`Now reading ${surahData.name}`, 'success');
    }

    function updateSurahInfo(surah) {
        const surahTitle = document.getElementById('surahTitle');
        const surahInfo = document.getElementById('surahInfo');
        
        if (surahTitle) {
            surahTitle.innerHTML = `
                <span class="surah-number">${surah.name}</span>
                <span class="surah-english">${surah.english}</span>
                <span class="surah-arabic">${surah.arabic}</span>
            `;
        }
        
        if (surahInfo) {
            const juzInfo = Array.isArray(surah.juz) ? `Juz ${surah.juz.join(', ')}` : `Juz ${surah.juz}`;
            surahInfo.innerHTML = `
                <div class="info-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${surah.type}</span>
                </div>
                <div class="info-item">
                    <i class="fas fa-list-ol"></i>
                    <span>${surah.verses} verses</span>
                </div>
                <div class="info-item">
                    <i class="fas fa-book"></i>
                    <span>${juzInfo}</span>
                </div>
            `;
        }
    }

    function updateVersesDisplay(surah) {
        const versesContainer = document.getElementById('versesContainer');
        if (!versesContainer) return;

        versesContainer.innerHTML = '';
        
        surah.verses_data.forEach((verse, index) => {
            const verseElement = createVerseElement(verse, index + 1);
            versesContainer.appendChild(verseElement);
        });
    }

    function createVerseElement(verse, verseNumber) {
        const verseDiv = document.createElement('div');
        verseDiv.className = 'verse';
        verseDiv.setAttribute('data-verse', verseNumber);
        
        verseDiv.innerHTML = `
            <div class="verse-header">
                <span class="verse-number">${verseNumber}</span>
                <div class="verse-actions">
                    <button class="action-btn" onclick="playVerse(${verseNumber})" title="Play Audio">
                        <i class="fas fa-play"></i>
                    </button>
                    <button class="action-btn" onclick="bookmarkVerse(${verseNumber})" title="Bookmark">
                        <i class="fas fa-bookmark"></i>
                    </button>
                    <button class="action-btn" onclick="shareVerse(${verseNumber})" title="Share">
                        <i class="fas fa-share"></i>
                    </button>
                </div>
            </div>
            <div class="verse-content">
                <div class="arabic-verse" data-view="arabic">${verse.arabic}</div>
                <div class="transliteration" data-view="transliteration" style="display: none;">${verse.transliteration}</div>
                <div class="translation" data-view="translation" style="display: none;">${verse.translation}</div>
                <div class="tafsir" data-view="tafsir" style="display: none;">
                    <p><em>Tafsir: Detailed explanation of this verse will be available soon.</em></p>
                </div>
            </div>
        `;
        
        return verseDiv;
    }

    function updateNavigation(surahNumber) {
        const prevBtn = document.getElementById('prevSurah');
        const nextBtn = document.getElementById('nextSurah');
        
        if (prevBtn) {
            const prevSurah = parseInt(surahNumber) - 1;
            prevBtn.disabled = prevSurah < 1;
            prevBtn.onclick = prevSurah >= 1 ? () => showSurah(prevSurah.toString()) : null;
        }
        
        if (nextBtn) {
            const nextSurah = parseInt(surahNumber) + 1;
            nextBtn.disabled = nextSurah > 114;
            nextBtn.onclick = nextSurah <= 114 ? () => showSurah(nextSurah.toString()) : null;
        }
    }

    function switchView(view) {
        // Update button states
        document.querySelectorAll('.reading-option').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-view="${view}"]`).classList.add('active');
        
        // Show/hide appropriate content
        document.querySelectorAll('.verse-content > div').forEach(content => {
            content.style.display = content.getAttribute('data-view') === view ? 'block' : 'none';
        });
        
        // Update current view
        window.currentView = view;
    }

    function toggleAudioPlayback() {
        const audioPlayer = document.getElementById('audioPlayer');
        const playPauseBtn = document.getElementById('playPauseBtn');
        
        if (!audioPlayer || !playPauseBtn) return;
        
        if (audioPlayer.paused) {
            // In a real implementation, you would load the appropriate audio file
            audioPlayer.play().then(() => {
                playPauseBtn.innerHTML = '<i class="fas fa-pause"></i> Pause Audio';
            }).catch(error => {
                console.error('Error playing audio:', error);
                showNotification('Audio not available', 'error');
            });
        } else {
            audioPlayer.pause();
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i> Play Audio';
        }
    }

    function toggleBookmark() {
        const currentSurah = document.getElementById('surahSelect').value;
        const bookmarks = JSON.parse(localStorage.getItem('quranBookmarks') || '[]');
        
        const bookmark = {
            surah: currentSurah,
            timestamp: new Date().toISOString()
        };
        
        const existingIndex = bookmarks.findIndex(b => b.surah === currentSurah);
        
        if (existingIndex >= 0) {
            bookmarks.splice(existingIndex, 1);
            showNotification('Bookmark removed', 'info');
        } else {
            bookmarks.push(bookmark);
            showNotification('Bookmark added', 'success');
        }
        
        localStorage.setItem('quranBookmarks', JSON.stringify(bookmarks));
        updateBookmarkButton();
    }

    function updateBookmarkButton() {
        const currentSurah = document.getElementById('surahSelect').value;
        const bookmarks = JSON.parse(localStorage.getItem('quranBookmarks') || '[]');
        const bookmarkBtn = document.getElementById('bookmarkBtn');
        
        if (bookmarkBtn) {
            const isBookmarked = bookmarks.some(b => b.surah === currentSurah);
            bookmarkBtn.innerHTML = isBookmarked ? 
                '<i class="fas fa-bookmark"></i> Remove Bookmark' : 
                '<i class="fas fa-bookmark-o"></i> Add Bookmark';
            bookmarkBtn.classList.toggle('bookmarked', isBookmarked);
        }
    }

    function shareVerse(verseNumber = null) {
        const currentSurah = document.getElementById('surahSelect').value;
        const surahData = window.getSurahData ? window.getSurahData(currentSurah) : null;
        
        if (!surahData) return;
        
        const surahName = surahData.name;
        const shareText = verseNumber ? 
            `Reading ${surahName}, Verse ${verseNumber}` : 
            `Reading ${surahName}`;
        
        if (navigator.share) {
            navigator.share({
                title: 'Quran Reading',
                text: shareText,
                url: window.location.href
            });
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(`${shareText} - ${window.location.href}`);
            showNotification('Link copied to clipboard', 'success');
        }
    }

    function copyVerse(verseNumber = null) {
        const currentSurah = document.getElementById('surahSelect').value;
        const surahData = window.getSurahData ? window.getSurahData(currentSurah) : null;
        
        if (!surahData) return;
        
        if (verseNumber) {
            const verse = surahData.verses_data[verseNumber - 1];
            if (verse) {
                const textToCopy = `${surahData.name} ${verseNumber}\n\n${verse.arabic}\n\n${verse.translation}`;
                navigator.clipboard.writeText(textToCopy);
                showNotification('Verse copied to clipboard', 'success');
            }
        } else {
            // Copy entire surah
            const allVerses = surahData.verses_data.map((verse, index) => 
                `${index + 1}. ${verse.arabic}\n${verse.translation}`
            ).join('\n\n');
            
            const textToCopy = `${surahData.name} (${surahData.english})\n\n${allVerses}`;
            navigator.clipboard.writeText(textToCopy);
            showNotification('Surah copied to clipboard', 'success');
        }
    }

    function handleSearch(event) {
        const query = event.target.value.toLowerCase();
        if (query.length < 2) return;
        
        // Search in current surah
        const verses = document.querySelectorAll('.verse');
        verses.forEach(verse => {
            const arabic = verse.querySelector('.arabic-verse').textContent;
            const translation = verse.querySelector('.translation').textContent;
            
            const matches = arabic.includes(query) || translation.toLowerCase().includes(query);
            verse.style.display = matches ? 'block' : 'none';
            
            if (matches) {
                verse.classList.add('search-highlight');
            } else {
                verse.classList.remove('search-highlight');
            }
        });
    }

    function handleKeyboardShortcuts(event) {
        // Only handle shortcuts when not typing in input fields
        if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') return;
        
        if (event.ctrlKey || event.metaKey) {
            switch(event.key) {
                case '1':
                    event.preventDefault();
                    document.querySelector('[data-view="arabic"]').click();
                    break;
                case '2':
                    event.preventDefault();
                    document.querySelector('[data-view="transliteration"]').click();
                    break;
                case '3':
                    event.preventDefault();
                    document.querySelector('[data-view="translation"]').click();
                    break;
                case '4':
                    event.preventDefault();
                    document.querySelector('[data-view="tafsir"]').click();
                    break;
                case ' ':
                    event.preventDefault();
                    toggleAudioPlayback();
                    break;
            }
        }
    }

    // Global functions for verse actions
    window.playVerse = function(verseNumber) {
        showNotification(`Playing verse ${verseNumber}`, 'info');
        // Audio playback implementation would go here
    };

    window.bookmarkVerse = function(verseNumber) {
        const currentSurah = document.getElementById('surahSelect').value;
        const bookmarks = JSON.parse(localStorage.getItem('quranVerseBookmarks') || '[]');
        
        const bookmark = {
            surah: currentSurah,
            verse: verseNumber,
            timestamp: new Date().toISOString()
        };
        
        const existingIndex = bookmarks.findIndex(b => b.surah === currentSurah && b.verse === verseNumber);
        
        if (existingIndex >= 0) {
            bookmarks.splice(existingIndex, 1);
            showNotification(`Bookmark removed from verse ${verseNumber}`, 'info');
        } else {
            bookmarks.push(bookmark);
            showNotification(`Verse ${verseNumber} bookmarked`, 'success');
        }
        
        localStorage.setItem('quranVerseBookmarks', JSON.stringify(bookmarks));
    };

    window.shareVerse = shareVerse;
    window.copyVerse = copyVerse;

    // Initialize with first surah
    showSurah('1');
    
    console.log('Quran Reader initialized successfully with all 114 surahs');
    showNotification('Welcome to the Complete Quran Reader! All 114 surahs are now available.', 'success');
});

// Islamic greeting when page loads
window.addEventListener('load', function() {
    setTimeout(() => {
        const greetings = [
            "Assalamu Alaikum! Welcome to the complete Quran",
            "Barakallahu feeki for choosing to read all 114 surahs",
            "May Allah bless your complete Quranic journey"
        ];
        
        const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
        
        // Create elegant Islamic greeting
        const greeting = document.createElement('div');
        greeting.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, var(--dark-green), var(--medium-green));
            color: var(--gold);
            padding: 2rem 3rem;
            border-radius: 20px;
            font-size: 1.2rem;
            font-weight: 600;
            text-align: center;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            border: 2px solid var(--gold);
            z-index: 10000;
            opacity: 0;
            transition: all 0.5s ease;
            max-width: 500px;
        `;
        
        greeting.innerHTML = `
            <div style="font-size: 2rem; margin-bottom: 1rem;">🕌</div>
            <div>${randomGreeting}</div>
            <div style="font-size: 0.9rem; margin-top: 1rem; color: var(--highlight-green);">
                <i class="fas fa-heart"></i> All 114 Surahs Available
            </div>
        `;
        
        document.body.appendChild(greeting);
        
        // Fade in
        setTimeout(() => greeting.style.opacity = '1', 100);
        
        // Fade out
        setTimeout(() => {
            greeting.style.opacity = '0';
            setTimeout(() => greeting.remove(), 500);
        }, 4000);
    }, 1000);
});
