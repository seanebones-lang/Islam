// Complete Holy Quran Master File - All 114 Surahs
// بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
// This file combines all complete surahs and provides the framework for missing ones

window.completeQuranMasterFinal = {
    // Import and merge from existing complete files
    init: function() {
        // Merge complete surahs from existing files
        if (typeof window.surahAnNisaComplete !== 'undefined') {
            this.surahs[4] = window.surahAnNisaComplete;
        }
        
        if (typeof window.completeSurah5 !== 'undefined') {
            this.surahs[5] = window.completeSurah5;
        }
        
        if (typeof window.completeSurah7 !== 'undefined') {
            this.surahs[7] = window.completeSurah7;
        }
        
        if (typeof window.completeQuran114Full !== 'undefined') {
            // Merge complete surahs from 114-full
            Object.assign(this.surahs, window.completeQuran114Full);
        }
        
        if (typeof window.completeQuranAllSurahs !== 'undefined') {
            // Merge complete surahs from all-surahs
            Object.assign(this.surahs, window.completeQuranAllSurahs);
        }
        
        // Add complete surahs that we know are complete
        this.addCompleteSurahs();
    },

    // Add all complete surahs
    addCompleteSurahs: function() {
        // Surah 1: Al-Fatihah (Complete)
        this.surahs[1] = {
            name: 'Al-Fatihah',
            english: 'The Opening',
            arabic: 'الفاتحة',
            type: 'Meccan',
            verses: 7,
            juz: 1,
            theme: 'Praise of Allah, seeking guidance',
            verses_data: [
                {
                    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
                    transliteration: 'Bismillahi-r-Rahmani-r-Raheem',
                    translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.'
                },
                {
                    arabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
                    transliteration: 'Al-hamdu lillahi rabbi-l-alameen',
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
                    transliteration: 'Sirata-l-ladheena an\'amta \'alayhim ghayri-l-maghdoobi \'alayhim wa la-d-dalleen',
                    translation: 'The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray.'
                }
            ]
        };

        // Surah 108: Al-Kawthar (Complete)
        this.surahs[108] = {
            name: 'Al-Kawthar',
            english: 'The Abundance',
            arabic: 'الكوثر',
            type: 'Meccan',
            verses: 3,
            juz: 30,
            theme: 'Allah\'s abundance to the Prophet',
            verses_data: [
                {
                    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
                    transliteration: 'Bismillahi-r-Rahmani-r-Raheem',
                    translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.'
                },
                {
                    arabic: 'إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ',
                    transliteration: 'Inna a\'tayna-ka-l-kawthar',
                    translation: 'Indeed, We have granted you, [O Muhammad], al-Kawthar.'
                },
                {
                    arabic: 'فَصَلِّ لِرَبِّكَ وَانْحَرْ',
                    transliteration: 'Fa-salli li-rabbika wa-nhar',
                    translation: 'So pray to your Lord and sacrifice [to Him alone].'
                },
                {
                    arabic: 'إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ',
                    transliteration: 'Inna shani\'a-ka huwa-l-abtar',
                    translation: 'Indeed, your enemy is the one cut off.'
                }
            ]
        };

        // Surah 109: Al-Kafirun (Complete)
        this.surahs[109] = {
            name: 'Al-Kafirun',
            english: 'The Disbelievers',
            arabic: 'الكافرون',
            type: 'Meccan',
            verses: 6,
            juz: 30,
            theme: 'Rejection of polytheism',
            verses_data: [
                {
                    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
                    transliteration: 'Bismillahi-r-Rahmani-r-Raheem',
                    translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.'
                },
                {
                    arabic: 'قُلْ يَا أَيُّهَا الْكَافِرُونَ',
                    transliteration: 'Qul ya ayyuha-l-kafiroon',
                    translation: 'Say, "O disbelievers,'
                },
                {
                    arabic: 'لَا أَعْبُدُ مَا تَعْبُدُونَ',
                    transliteration: 'La a\'budu ma ta\'budoon',
                    translation: 'I do not worship what you worship.'
                },
                {
                    arabic: 'وَلَا أَنْتُمْ عَابِدُونَ مَا أَعْبُدُ',
                    transliteration: 'Wa la antum \'abidoon ma a\'bud',
                    translation: 'Nor are you worshippers of what I worship.'
                },
                {
                    arabic: 'وَلَا أَنَا عَابِدٌ مَا عَبَدتُّمْ',
                    transliteration: 'Wa la ana \'abidun ma \'abadtum',
                    translation: 'Nor will I be a worshipper of what you worship.'
                },
                {
                    arabic: 'وَلَا أَنْتُمْ عَابِدُونَ مَا أَعْبُدُ',
                    transliteration: 'Wa la antum \'abidoon ma a\'bud',
                    translation: 'Nor will you be worshippers of what I worship.'
                },
                {
                    arabic: 'لَكُمْ دِينُكُمْ وَلِيَ دِينِ',
                    transliteration: 'Lakum deenukum wa liya deen',
                    translation: 'For you is your religion, and for me is my religion."'
                }
            ]
        };

        // Surah 110: An-Nasr (Complete)
        this.surahs[110] = {
            name: 'An-Nasr',
            english: 'The Divine Support',
            arabic: 'النصر',
            type: 'Medinan',
            verses: 3,
            juz: 30,
            theme: 'Victory and success',
            verses_data: [
                {
                    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
                    transliteration: 'Bismillahi-r-Rahmani-r-Raheem',
                    translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.'
                },
                {
                    arabic: 'إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ',
                    transliteration: 'Idha ja\'a nasru-llahi wa-l-fath',
                    translation: 'When the victory of Allah has come and the conquest,'
                },
                {
                    arabic: 'وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا',
                    transliteration: 'Wa ra\'ayta-n-nasa yadkhuloona fee deeni-llahi afwaja',
                    translation: 'And you see the people entering into the religion of Allah in multitudes,'
                },
                {
                    arabic: 'فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ ۚ إِنَّهُ كَانَ تَوَّابًا',
                    transliteration: 'Fa-sabbih bi-hamdi rabbika wa-staghfirhu innahu kana tawwaba',
                    translation: 'Then exalt [Him] with praise of your Lord and ask forgiveness of Him. Indeed, He is ever Accepting of repentance.'
                }
            ]
        };

        // Surah 111: Al-Masad (Complete)
        this.surahs[111] = {
            name: 'Al-Masad',
            english: 'The Palm Fiber',
            arabic: 'المسد',
            type: 'Meccan',
            verses: 5,
            juz: 30,
            theme: 'Condemnation of Abu Lahab',
            verses_data: [
                {
                    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
                    transliteration: 'Bismillahi-r-Rahmani-r-Raheem',
                    translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.'
                },
                {
                    arabic: 'تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ',
                    transliteration: 'Tabbat yada abi lahabin wa tabb',
                    translation: 'May the hands of Abu Lahab be ruined, and ruined is he.'
                },
                {
                    arabic: 'مَا أَغْنَىٰ عَنْهُ مَالُهُ وَمَا كَسَبَ',
                    transliteration: 'Ma aghna \'anhu maluhu wa ma kasab',
                    translation: 'His wealth will not avail him or that which he gained.'
                },
                {
                    arabic: 'سَيَصْلَىٰ نَارًا ذَاتَ لَهَبٍ',
                    transliteration: 'Sa-yasla naran thata lahab',
                    translation: 'He will [enter to] burn in a Fire of [blazing] flame'
                },
                {
                    arabic: 'وَامْرَأَتُهُ حَمَّالَةَ الْحَطَبِ',
                    transliteration: 'Wa-mra\'atuhu hammalata-l-hatab',
                    translation: 'And his wife [as well] - the carrier of firewood.'
                },
                {
                    arabic: 'فِي جِيدِهَا حَبْلٌ مِّن مَّسَدٍ',
                    transliteration: 'Fee jeediha hablun min masad',
                    translation: 'Around her neck is a rope of [twisted] fiber.'
                }
            ]
        };

        // Surah 112: Al-Ikhlas (Complete)
        this.surahs[112] = {
            name: 'Al-Ikhlas',
            english: 'The Sincerity',
            arabic: 'الإخلاص',
            type: 'Meccan',
            verses: 4,
            juz: 30,
            theme: 'Oneness of Allah',
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
        };

        // Surah 113: Al-Falaq (Complete)
        this.surahs[113] = {
            name: 'Al-Falaq',
            english: 'The Daybreak',
            arabic: 'الفلق',
            type: 'Meccan',
            verses: 5,
            juz: 30,
            theme: 'Seeking protection from evil',
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
                    transliteration: 'Wa min sharri-n-naffathati fi-l-\'uqad',
                    translation: 'And from the evil of the blowers in knots'
                },
                {
                    arabic: 'وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ',
                    transliteration: 'Wa min sharri hasidin idha hasad',
                    translation: 'And from the evil of an envier when he envies."'
                }
            ]
        };

        // Surah 114: An-Nas (Complete)
        this.surahs[114] = {
            name: 'An-Nas',
            english: 'The Mankind',
            arabic: 'الناس',
            type: 'Meccan',
            verses: 6,
            juz: 30,
            theme: 'Seeking protection from Satan',
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
                    transliteration: 'Alladhee yuwaswisu fee sudoori-n-nas',
                    translation: 'Who whispers [evil] into the breasts of mankind'
                },
                {
                    arabic: 'مِنَ الْجِنَّةِ وَالنَّاسِ',
                    transliteration: 'Mina-l-jinnati wa-n-nas',
                    translation: 'From among the jinn and mankind."'
                }
            ]
        };
    },

    // Surahs object to store all complete surahs
    surahs: {},

    // Get surah by number
    getSurah: function(number) {
        return this.surahs[number] || null;
    },

    // Get all complete surahs
    getAllSurahs: function() {
        return this.surahs;
    },

    // Check if surah is complete
    isSurahComplete: function(number) {
        const surah = this.surahs[number];
        if (!surah) return false;
        return surah.verses_data && surah.verses_data.length === surah.verses;
    },

    // Get completion status
    getCompletionStatus: function() {
        const complete = [];
        const incomplete = [];
        
        for (let i = 1; i <= 114; i++) {
            if (this.isSurahComplete(i)) {
                complete.push(i);
            } else {
                incomplete.push(i);
            }
        }
        
        return {
            complete: complete,
            incomplete: incomplete,
            totalComplete: complete.length,
            totalIncomplete: incomplete.length,
            completionPercentage: Math.round((complete.length / 114) * 100)
        };
    }
};

// Initialize the complete Quran
window.completeQuranMasterFinal.init();
