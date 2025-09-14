// Quran Loader - Loads complete Quran data from local files
// This will populate your Quran Reader with all 114 surahs

// Don't overwrite existing complete data if it exists
if (!window.completeQuranFull || Object.keys(window.completeQuranFull).length < 100) {
    window.completeQuranFull = {};
}

// Function to load complete Quran data
async function loadCompleteQuran() {
    try {
        console.log('Loading complete Quran data...');
        
        // Try to load from external API first (has all 114 surahs)
        try {
            console.log('Loading complete Quran from quran-json API...');
            const response = await fetch('https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/quran.json');
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const quranData = await response.json();
            
            console.log('Raw Quran data received from API:', quranData.length, 'surahs');
            
            // Verify we have all 114 surahs
            if (quranData.length !== 114) {
                throw new Error(`Incomplete data: only ${quranData.length} surahs received, expected 114`);
            }
            
            // Transform the data to our format
            const transformedData = {};
            
            quranData.forEach(surah => {
                transformedData[surah.id] = {
                    name: surah.name,
                    english: surah.transliteration,
                    arabic: surah.name_arabic,
                    type: surah.type === 'Meccan' ? 'Meccan' : 'Medinan',
                    verses: surah.total_verses,
                    juz: surah.juz,
                    theme: surah.theme || '',
                    verses_data: surah.verses.map(verse => ({
                        arabic: verse.text,
                        transliteration: verse.transliteration,
                        translation: verse.translation
                    })),
                    tafsir: surah.tafsir || ''
                };
            });
            
            // Update the global variable
            window.completeQuranFull = transformedData;
            
            console.log('Complete Quran loaded successfully from API:', Object.keys(transformedData).length, 'surahs');
            return transformedData;
            
        } catch (apiError) {
            console.warn('Primary API failed, trying backup source:', apiError);
            
            // Try backup API source
            try {
                console.log('Trying backup Quran API...');
                const backupResponse = await fetch('https://api.alquran.cloud/v1/quran/quran-uthmani');
                
                if (backupResponse.ok) {
                    const backupData = await backupResponse.json();
                    const quranData = backupData.data.surahs;
                    
                    console.log('Backup API data received:', quranData.length, 'surahs');
                    
                    if (quranData.length === 114) {
                        // Transform backup data to our format
                        const transformedData = {};
                        
                        quranData.forEach(surah => {
                            transformedData[surah.number] = {
                                name: surah.englishName,
                                english: surah.englishNameTranslation,
                                arabic: surah.name,
                                type: surah.revelationType === 'Meccan' ? 'Meccan' : 'Medinan',
                                verses: surah.numberOfAyahs,
                                juz: surah.juz,
                                theme: '',
                                verses_data: surah.ayahs.map(verse => ({
                                    arabic: verse.text,
                                    transliteration: '', // Not available in this API
                                    translation: '' // Not available in this API
                                })),
                                tafsir: ''
                            };
                        });
                        
                        window.completeQuranFull = transformedData;
                        console.log('Complete Quran loaded from backup API:', Object.keys(transformedData).length, 'surahs');
                        return transformedData;
                    }
                }
            } catch (backupError) {
                console.warn('Backup API also failed:', backupError);
            }
            
            // Check if we have complete local data (more than 100 surahs)
            if (typeof window.completeQuranFull === 'object' && Object.keys(window.completeQuranFull).length > 100) {
                console.log('Using complete local Quran data:', Object.keys(window.completeQuranFull).length, 'surahs');
                return window.completeQuranFull;
            } else {
                console.log('All sources failed, using sample data...');
                return loadSampleQuranData();
            }
        }
        
    } catch (error) {
        console.error('Error loading Quran data:', error);
        console.log('Falling back to local sample data...');
        
        // Fallback to sample data
        return loadSampleQuranData();
    }
}

// Sample Quran data for fallback
function loadSampleQuranData() {
    // Only load sample data if we don't have complete data
    if (!window.completeQuranFull || Object.keys(window.completeQuranFull).length < 100) {
        window.completeQuranFull = {
        1: {
            name: 'Al-Fatihah',
            english: 'The Opening',
            arabic: 'الفاتحة',
            type: 'Meccan',
            verses: 7,
            juz: 1,
            verses_data: [
                {
                    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
                    transliteration: 'Bismillahi-r-Rahmani-r-Raheem',
                    translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.'
                },
                {
                    arabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
                    transliteration: 'Alhamdu lillahi rabbi-l-alameen',
                    translation: '[All] praise is [due] to Allah, Lord of the worlds.'
                },
                {
                    arabic: 'الرَّحْمَٰنِ الرَّحِيمِ',
                    transliteration: 'Ar-Rahmani-r-Raheem',
                    translation: 'The Entirely Merciful, the Especially Merciful.'
                },
                {
                    arabic: 'مَالِكِ يَوْمِ الدِّينِ',
                    transliteration: 'Maliki yawmi-d-deen',
                    translation: 'Sovereign of the Day of Recompense.'
                },
                {
                    arabic: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',
                    transliteration: 'Iyyaka na\'budu wa iyyaka nasta\'een',
                    translation: 'It is You we worship and You we ask for help.'
                },
                {
                    arabic: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ',
                    transliteration: 'Ihdina-s-sirata-l-mustaqeem',
                    translation: 'Guide us to the straight path.'
                },
                {
                    arabic: 'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ',
                    transliteration: 'Sirata-l-ladhina an\'amta \'alayhim ghayri-l-maghdubi \'alayhim wa la-d-dalleen',
                    translation: 'The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray.'
                }
            ]
        },
        112: {
            name: 'Al-Ikhlas',
            english: 'The Sincerity',
            arabic: 'الإخلاص',
            type: 'Meccan',
            verses: 4,
            juz: 30,
            verses_data: [
                {
                    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
                    transliteration: 'Bismillahi-r-Rahmani-r-Raheem',
                    translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.'
                },
                {
                    arabic: 'قُلْ هُوَ اللَّهُ أَحَدٌ',
                    transliteration: 'Qul huwa Allahu ahad',
                    translation: 'Say, "He is Allah, [who is] One,'
                },
                {
                    arabic: 'اللَّهُ الصَّمَدُ',
                    transliteration: 'Allahu-s-samad',
                    translation: 'Allah, the Eternal Refuge.'
                },
                {
                    arabic: 'لَمْ يَلِدْ وَلَمْ يُولَدْ',
                    transliteration: 'Lam yalid wa lam yoolad',
                    translation: 'He neither begets nor is born,'
                },
                {
                    arabic: 'وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ',
                    transliteration: 'Wa lam yakun lahu kufuwan ahad',
                    translation: 'Nor is there to Him any equivalent."'
                }
            ]
        },
        113: {
            name: 'Al-Falaq',
            english: 'The Daybreak',
            arabic: 'الفلق',
            type: 'Meccan',
            verses: 5,
            juz: 30,
            verses_data: [
                {
                    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
                    transliteration: 'Bismillahi-r-Rahmani-r-Raheem',
                    translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.'
                },
                {
                    arabic: 'قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ',
                    transliteration: 'Qul a\'oodhu bi-rabbi-l-falaq',
                    translation: 'Say, "I seek refuge in the Lord of daybreak'
                },
                {
                    arabic: 'مِن شَرِّ مَا خَلَقَ',
                    transliteration: 'Min sharri ma khalaq',
                    translation: 'From the evil of that which He created'
                },
                {
                    arabic: 'وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ',
                    transliteration: 'Wa min sharri ghasiqin idha waqab',
                    translation: 'And from the evil of darkness when it settles'
                },
                {
                    arabic: 'وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ',
                    transliteration: 'Wa min sharri-n-naffathati fi-l-uqad',
                    translation: 'And from the evil of the blowers in knots'
                },
                {
                    arabic: 'وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ',
                    transliteration: 'Wa min sharri hasidin idha hasad',
                    translation: 'And from the evil of an envier when he envies."'
                }
            ]
        },
        114: {
            name: 'An-Nas',
            english: 'The People',
            arabic: 'الناس',
            type: 'Meccan',
            verses: 6,
            juz: 30,
            verses_data: [
                {
                    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
                    transliteration: 'Bismillahi-r-Rahmani-r-Raheem',
                    translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.'
                },
                {
                    arabic: 'قُلْ أَعُوذُ بِرَبِّ النَّاسِ',
                    transliteration: 'Qul a\'oodhu bi-rabbi-n-nas',
                    translation: 'Say, "I seek refuge in the Lord of mankind,'
                },
                {
                    arabic: 'مَلِكِ النَّاسِ',
                    transliteration: 'Maliki-n-nas',
                    translation: 'The Sovereign of mankind,'
                },
                {
                    arabic: 'إِلَٰهِ النَّاسِ',
                    transliteration: 'Ilahi-n-nas',
                    translation: 'The God of mankind,'
                },
                {
                    arabic: 'مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ',
                    transliteration: 'Min sharri-l-waswasi-l-khannas',
                    translation: 'From the evil of the retreating whisperer'
                },
                {
                    arabic: 'الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ',
                    transliteration: 'Al-ladhi yuwaswisu fee sudoori-n-nas',
                    translation: 'Who whispers [evil] into the breasts of mankind'
                },
                {
                    arabic: 'مِنَ الْجِنَّةِ وَالنَّاسِ',
                    transliteration: 'Mina-l-jinnati wa-n-nas',
                    translation: 'From among the jinn and mankind."'
                }
            ]
        }
    };

        console.log('Using sample Quran data:', Object.keys(window.completeQuranFull).length, 'surahs');
        return window.completeQuranFull;
    } else {
        console.log('Complete Quran data already exists:', Object.keys(window.completeQuranFull).length, 'surahs');
        return window.completeQuranFull;
    }
}

// Auto-load the Quran data when the script loads
document.addEventListener('DOMContentLoaded', function() {
    // Check if we already have complete data from complete-quran-all-surahs.js
    if (window.completeQuranAllSurahs && Object.keys(window.completeQuranAllSurahs).length >= 114) {
        console.log('✅ Complete Quran data already loaded from local file:', Object.keys(window.completeQuranAllSurahs).length, 'surahs');
        window.completeQuranFull = window.completeQuranAllSurahs;
        window.dispatchEvent(new CustomEvent('quranDataLoaded'));
        return;
    }

    loadCompleteQuran().then(() => {
        console.log('Quran data ready for use');
        // Trigger a custom event to notify that Quran data is loaded
        window.dispatchEvent(new CustomEvent('quranDataLoaded'));
    }).catch(error => {
        console.error('Error loading Quran data:', error);
        // Still trigger the event with fallback data
        window.dispatchEvent(new CustomEvent('quranDataLoaded'));
    });
});

// Function to verify complete Quran is loaded
function verifyCompleteQuran() {
    console.log('🔍 Verifying Complete Quran...');
    
    if (!window.completeQuranFull || Object.keys(window.completeQuranFull).length === 0) {
        console.error('❌ No Quran data loaded!');
        return false;
    }
    
    const surahs = Object.keys(window.completeQuranFull).map(Number).sort((a, b) => a - b);
    console.log(`📊 Found ${surahs.length} surahs:`, surahs);
    
    // Check for all 114 surahs
    const expectedSurahs = Array.from({length: 114}, (_, i) => i + 1);
    const missingSurahs = expectedSurahs.filter(num => !surahs.includes(num));
    
    if (missingSurahs.length > 0) {
        console.error(`❌ Missing surahs: ${missingSurahs.join(', ')}`);
        return false;
    }
    
    // Check a few key surahs for completeness
    const keySurahs = [1, 2, 3, 112, 113, 114];
    let allComplete = true;
    
    keySurahs.forEach(surahNum => {
        const surah = window.completeQuranFull[surahNum];
        if (!surah || !surah.verses_data || surah.verses_data.length === 0) {
            console.error(`❌ Surah ${surahNum} is incomplete or missing verses`);
            allComplete = false;
        } else {
            console.log(`✅ Surah ${surahNum} (${surah.name}): ${surah.verses_data.length} verses`);
        }
    });
    
    if (allComplete && surahs.length === 114) {
        console.log('🎉 Complete Quran verified! All 114 surahs loaded successfully.');
        return true;
    } else {
        console.error('💥 Quran verification failed! Some surahs may be missing or incomplete.');
        return false;
    }
}

// Export functions
window.loadCompleteQuran = loadCompleteQuran;
window.verifyCompleteQuran = verifyCompleteQuran;
