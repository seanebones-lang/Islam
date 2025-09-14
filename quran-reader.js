// Quran Reader JavaScript Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Quran Reader
    initializeQuranReader();
    
    // Use complete Quran data from external file
    // The surahData will be replaced with completeQuranData from complete-quran-data.js
    let surahData = window.completeQuranData || {
        1: { 
            name: 'Al-Fatihah', 
            english: 'The Opening', 
            arabic: 'الفاتحة',
            type: 'Meccan', 
            verses: 7,
            verses_data: [
                {
                    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
                    transliteration: 'Bismillahi-r-Rahmani-r-Raheem',
                    translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.'
                },
                {
                    arabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
                    transliteration: 'Alhamdu lillahi rabbi-l-alameen',
                    translation: '[All] praise is [due] to Allah, Lord of the worlds -'
                },
                {
                    arabic: 'الرَّحْمَٰنِ الرَّحِيمِ',
                    transliteration: 'Ar-Rahmani-r-Raheem',
                    translation: 'The Entirely Merciful, the Especially Merciful,'
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
                    translation: 'Guide us to the straight path -'
                },
                {
                    arabic: 'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ',
                    transliteration: 'Sirata-l-ladhina an\'amta \'alayhim ghayri-l-maghdubi \'alayhim wa la-d-dalleen',
                    translation: 'The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray.'
                }
            ],
            tafsir: 'Al-Fatihah is the opening chapter of the Quran and is considered the essence of the entire book. It establishes the fundamental relationship between Allah and His creation, emphasizing His mercy, sovereignty, and the importance of seeking guidance. This surah is recited in every unit of prayer, making it the most frequently recited chapter in the Quran.'
        },
        2: { 
            name: 'Al-Baqarah', 
            english: 'The Cow', 
            arabic: 'البقرة',
            type: 'Medinan', 
            verses: 286,
            verses_data: [
                {
                    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
                    transliteration: 'Bismillahi-r-Rahmani-r-Raheem',
                    translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.'
                },
                {
                    arabic: 'الم',
                    transliteration: 'Alif Lam Meem',
                    translation: 'Alif, Lam, Meem.'
                },
                {
                    arabic: 'ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِّلْمُتَّقِينَ',
                    transliteration: 'Thalika-l-kitabu la rayba feehi hudan li-l-muttaqeen',
                    translation: 'This is the Book about which there is no doubt, a guidance for those conscious of Allah -'
                },
                {
                    arabic: 'الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنفِقُونَ',
                    transliteration: 'Alladhina yu\'minoona bi-l-ghaybi wa yuqeemoona-s-salata wa mimma razaqnahum yunfiqoon',
                    translation: 'Who believe in the unseen, establish prayer, and spend out of what We have provided for them,'
                },
                {
                    arabic: 'وَالَّذِينَ يُؤْمِنُونَ بِمَا أُنزِلَ إِلَيْكَ وَمَا أُنزِلَ مِن قَبْلِكَ وَبِالْآخِرَةِ هُمْ يُوقِنُونَ',
                    transliteration: 'Wa-l-ladhina yu\'minoona bima unzila ilayka wa ma unzila min qablika wa bi-l-akhirati hum yooqinoon',
                    translation: 'And who believe in what has been revealed to you, [O Muhammad], and what was revealed before you, and of the Hereafter they are certain [in faith].'
                }
            ],
            tafsir: 'Al-Baqarah is the longest chapter in the Quran and was revealed in Medina. It covers various aspects of Islamic law, faith, and guidance. The surah begins with the story of the cow (hence the name) and includes the famous Ayat al-Kursi (Verse of the Throne). It establishes the foundation of Islamic belief and practice.'
        },
        3: { 
            name: 'Ali Imran', 
            english: 'Family of Imran', 
            arabic: 'آل عمران',
            type: 'Medinan', 
            verses: 200,
            verses_data: [
                {
                    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
                    transliteration: 'Bismillahi-r-Rahmani-r-Raheem',
                    translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.'
                },
                {
                    arabic: 'الم',
                    transliteration: 'Alif Lam Meem',
                    translation: 'Alif, Lam, Meem.'
                },
                {
                    arabic: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ',
                    transliteration: 'Allahu la ilaha illa huwa-l-hayyu-l-qayyoom',
                    translation: 'Allah - there is no deity except Him, the Ever-Living, the Sustainer of existence.'
                }
            ],
            tafsir: 'Ali Imran focuses on the family of Imran (the father of Mary) and emphasizes the unity of divine revelation. It discusses the relationship between Islam and previous Abrahamic religions, the importance of knowledge, and the concept of divine guidance through prophets.'
        },
        4: { 
            name: 'An-Nisa', 
            english: 'The Women', 
            arabic: 'النساء',
            type: 'Medinan', 
            verses: 176,
            verses_data: [
                {
                    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
                    transliteration: 'Bismillahi-r-Rahmani-r-Raheem',
                    translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.'
                },
                {
                    arabic: 'يَا أَيُّهَا النَّاسُ اتَّقُوا رَبَّكُمُ الَّذِي خَلَقَكُم مِّن نَّفْسٍ وَاحِدَةٍ وَخَلَقَ مِنْهَا زَوْجَهَا وَبَثَّ مِنْهُمَا رِجَالًا كَثِيرًا وَنِسَاءً ۚ وَاتَّقُوا اللَّهَ الَّذِي تَسَاءَلُونَ بِهِ وَالْأَرْحَامَ ۚ إِنَّ اللَّهَ كَانَ عَلَيْكُمْ رَقِيبًا',
                    transliteration: 'Ya ayyuha-n-nasu-ttaqoo rabbakumu-l-ladhi khalaqakum min nafsin wahidatin wa khalaqa minha zawjaha wa baththa minhuma rijalan katheeran wa nisa\'an wa-ttaqoo-llaha-l-ladhi tasaa\'aloona bihi wa-l-arhama inna-llaha kana \'alaykum raqeeba',
                    translation: 'O mankind, fear your Lord, who created you from one soul and created from it its mate and dispersed from both of them many men and women. And fear Allah, through whom you ask one another, and the wombs. Indeed Allah is ever, over you, an Observer.'
                }
            ],
            tafsir: 'An-Nisa deals extensively with women\'s rights, family law, inheritance, and social justice. It establishes the principle of equality between men and women while recognizing their different roles and responsibilities in society.'
        },
        5: { 
            name: 'Al-Maidah', 
            english: 'The Table Spread', 
            arabic: 'المائدة',
            type: 'Medinan', 
            verses: 120,
            verses_data: [
                {
                    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
                    transliteration: 'Bismillahi-r-Rahmani-r-Raheem',
                    translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.'
                },
                {
                    arabic: 'يَا أَيُّهَا الَّذِينَ آمَنُوا أَوْفُوا بِالْعُقُودِ ۚ أُحِلَّتْ لَكُم بَهِيمَةُ الْأَنْعَامِ إِلَّا مَا يُتْلَىٰ عَلَيْكُمْ غَيْرَ مُحِلِّي الصَّيْدِ وَأَنتُمْ حُرُمٌ ۗ إِنَّ اللَّهَ يَحْكُمُ مَا يُرِيدُ',
                    transliteration: 'Ya ayyuha-l-ladhina amanoo awfoo bi-l-\'uqood uhillat lakum baheematu-l-an\'ami illa ma yutla \'alaykum ghayra muhilli-s-saydi wa antum hurum inna-llaha yahkumu ma yureed',
                    translation: 'O you who have believed, fulfill [your] obligations. Lawful for you are the animals of grazing livestock except those that are recited to you [in this Qur\'an] - hunting not being permitted while you are in the state of ihram. Indeed, Allah ordains what He intends.'
                }
            ],
            tafsir: 'Al-Maidah contains important dietary laws, legal principles, and the story of the table spread (maidah) requested by the disciples of Jesus. It emphasizes the importance of fulfilling covenants and following divine guidance.'
        },
        6: { 
            name: 'Al-An\'am', 
            english: 'The Cattle', 
            arabic: 'الأنعام',
            type: 'Meccan', 
            verses: 165,
            verses_data: [
                {
                    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
                    transliteration: 'Bismillahi-r-Rahmani-r-Raheem',
                    translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.'
                },
                {
                    arabic: 'الْحَمْدُ لِلَّهِ الَّذِي خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ وَجَعَلَ الظُّلُمَاتِ وَالنُّورَ ۖ ثُمَّ الَّذِينَ كَفَرُوا بِرَبِّهِمْ يَعْدِلُونَ',
                    transliteration: 'Alhamdu lillahi-l-ladhi khalaqa-s-samawati wa-l-arda wa ja\'ala-z-zulumati wa-n-noor thumma-l-ladhina kafaroo bi rabbihim ya\'diloon',
                    translation: '[All] praise is [due] to Allah, who created the heavens and the earth and made the darkness and the light. Then those who disbelieve equate [others] with their Lord.'
                }
            ],
            tafsir: 'Al-An\'am deals with the concept of monotheism and the rejection of polytheism. It emphasizes Allah\'s unity and the importance of following His guidance rather than the practices of ancestors.'
        },
        7: { 
            name: 'Al-A\'raf', 
            english: 'The Heights', 
            arabic: 'الأعراف',
            type: 'Meccan', 
            verses: 206,
            verses_data: [
                {
                    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
                    transliteration: 'Bismillahi-r-Rahmani-r-Raheem',
                    translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.'
                },
                {
                    arabic: 'المص',
                    transliteration: 'Alif Lam Meem Sad',
                    translation: 'Alif, Lam, Meem, Sad.'
                }
            ],
            tafsir: 'Al-A\'raf discusses the story of Adam and Eve, the concept of good and evil, and the importance of following divine guidance. It emphasizes the consequences of disobedience and the mercy of Allah.'
        },
        8: { 
            name: 'Al-Anfal', 
            english: 'The Spoils of War', 
            arabic: 'الأنفال',
            type: 'Medinan', 
            verses: 75,
            verses_data: [
                {
                    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
                    transliteration: 'Bismillahi-r-Rahmani-r-Raheem',
                    translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.'
                },
                {
                    arabic: 'يَسْأَلُونَكَ عَنِ الْأَنفَالِ ۖ قُلِ الْأَنفَالُ لِلَّهِ وَالرَّسُولِ ۖ فَاتَّقُوا اللَّهَ وَأَصْلِحُوا ذَاتَ بَيْنِكُمْ ۖ وَأَطِيعُوا اللَّهَ وَرَسُولَهُ إِن كُنتُم مُّؤْمِنِينَ',
                    transliteration: 'Yas\'aloonaka \'ani-l-anfali quli-l-anfalu lillahi wa-r-rasooli fa-ttaqoo-llaha wa aslihoo dhat baynikum wa atee\'oo-llaha wa rasoolahu in kuntum mu\'mineen',
                    translation: 'They ask you, [O Muhammad], about the bounties [of war]. Say, "The [decision concerning] bounties is for Allah and [His] Messenger." So fear Allah and amend that which is between you and obey Allah and His Messenger, if you should be believers.'
                }
            ],
            tafsir: 'Al-Anfal deals with the spoils of war and the Battle of Badr. It establishes principles of warfare, distribution of wealth, and the importance of unity among believers.'
        },
        9: { 
            name: 'At-Tawbah', 
            english: 'The Repentance', 
            arabic: 'التوبة',
            type: 'Medinan', 
            verses: 129,
            verses_data: [
                {
                    arabic: 'بَرَاءَةٌ مِّنَ اللَّهِ وَرَسُولِهِ إِلَى الَّذِينَ عَاهَدتُّم مِّنَ الْمُشْرِكِينَ',
                    transliteration: 'Bara\'atun mina-llahi wa rasoolihi ila-l-ladhina \'ahadtum mina-l-mushrikeen',
                    translation: '[This is] a declaration of disassociation, from Allah and His Messenger, to those with whom you had made a treaty among the polytheists.'
                }
            ],
            tafsir: 'At-Tawbah (also known as Bara\'ah) deals with the breaking of treaties with polytheists and the establishment of clear boundaries between believers and non-believers. It emphasizes the importance of loyalty to Allah and His Messenger.'
        },
        10: { 
            name: 'Yunus', 
            english: 'Jonah', 
            arabic: 'يونس',
            type: 'Meccan', 
            verses: 109,
            verses_data: [
                {
                    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
                    transliteration: 'Bismillahi-r-Rahmani-r-Raheem',
                    translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.'
                },
                {
                    arabic: 'الر ۚ تِلْكَ آيَاتُ الْكِتَابِ الْحَكِيمِ',
                    transliteration: 'Alif Lam Ra tilka ayatu-l-kitabi-l-hakeem',
                    translation: 'Alif, Lam, Ra. These are the verses of the wise Book.'
                }
            ],
            tafsir: 'Yunus tells the story of Prophet Jonah and emphasizes the mercy of Allah and the importance of repentance. It discusses the signs of Allah in creation and the consequences of disbelief.'
        },
        11: { 
            name: 'Hud', 
            english: 'Hud', 
            arabic: 'هود',
            type: 'Meccan', 
            verses: 123,
            verses_data: [
                {
                    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
                    transliteration: 'Bismillahi-r-Rahmani-r-Raheem',
                    translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.'
                },
                {
                    arabic: 'الر ۚ كِتَابٌ أُحْكِمَتْ آيَاتُهُ ثُمَّ فُصِّلَتْ مِن لَّدُنْ حَكِيمٍ خَبِيرٍ',
                    transliteration: 'Alif Lam Ra kitabun uhkimat ayatuhu thumma fussilat min ladun hakeemin khabeer',
                    translation: 'Alif, Lam, Ra. [This is] a Book whose verses are perfected and then presented in detail from [one who is] Wise and Acquainted.'
                }
            ],
            tafsir: 'Hud tells the story of Prophet Hud and other prophets, emphasizing the consequences of disobedience and the mercy of Allah. It discusses the importance of following divine guidance.'
        },
        12: { 
            name: 'Yusuf', 
            english: 'Joseph', 
            arabic: 'يوسف',
            type: 'Meccan', 
            verses: 111,
            verses_data: [
                {
                    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
                    transliteration: 'Bismillahi-r-Rahmani-r-Raheem',
                    translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.'
                },
                {
                    arabic: 'الر ۚ تِلْكَ آيَاتُ الْكِتَابِ الْمُبِينِ',
                    transliteration: 'Alif Lam Ra tilka ayatu-l-kitabi-l-mubeen',
                    translation: 'Alif, Lam, Ra. These are the verses of the clear Book.'
                }
            ],
            tafsir: 'Yusuf tells the complete story of Prophet Joseph, emphasizing themes of patience, forgiveness, and divine wisdom. It is considered one of the most beautiful stories in the Quran.'
        },
        13: { 
            name: 'Ar-Ra\'d', 
            english: 'The Thunder', 
            arabic: 'الرعد',
            type: 'Medinan', 
            verses: 43,
            verses_data: [
                {
                    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
                    transliteration: 'Bismillahi-r-Rahmani-r-Raheem',
                    translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.'
                },
                {
                    arabic: 'المر ۚ تِلْكَ آيَاتُ الْكِتَابِ ۗ وَالَّذِي أُنزِلَ إِلَيْكَ مِن رَّبِّكَ الْحَقُّ وَلَٰكِنَّ أَكْثَرَ النَّاسِ لَا يُؤْمِنُونَ',
                    transliteration: 'Alif Lam Meem Ra tilka ayatu-l-kitab wa-l-ladhi unzila ilayka min rabbika-l-haqqu wa lakinna akthara-n-nasi la yu\'minoon',
                    translation: 'Alif, Lam, Meem, Ra. These are the verses of the Book. And what has been revealed to you from your Lord is the truth, but most of the people do not believe.'
                }
            ],
            tafsir: 'Ar-Ra\'d discusses the signs of Allah in nature, particularly the phenomenon of thunder and lightning, and emphasizes the power and wisdom of Allah in creation.'
        },
        14: { 
            name: 'Ibrahim', 
            english: 'Abraham', 
            arabic: 'إبراهيم',
            type: 'Meccan', 
            verses: 52,
            verses_data: [
                {
                    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
                    transliteration: 'Bismillahi-r-Rahmani-r-Raheem',
                    translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.'
                },
                {
                    arabic: 'الر ۚ كِتَابٌ أَنزَلْنَاهُ إِلَيْكَ لِتُخْرِجَ النَّاسَ مِنَ الظُّلُمَاتِ إِلَى النُّورِ بِإِذْنِ رَبِّهِمْ إِلَىٰ صِرَاطِ الْعَزِيزِ الْحَمِيدِ',
                    transliteration: 'Alif Lam Ra kitabun anzalnahu ilayka li-tukhrija-n-nasa mina-z-zulumati ila-n-noori bi-idhni rabbihim ila sirati-l-\'azeezi-l-hameed',
                    translation: 'Alif, Lam, Ra. [This is] a Book which We have revealed to you, [O Muhammad], that you might bring mankind out of darknesses into the light by permission of their Lord - to the path of the Exalted in Might, the Praiseworthy.'
                }
            ],
            tafsir: 'Ibrahim discusses the story of Prophet Abraham and his supplications. It emphasizes the importance of monotheism and the consequences of polytheism.'
        },
        15: { 
            name: 'Al-Hijr', 
            english: 'The Rocky Tract', 
            arabic: 'الحجر',
            type: 'Meccan', 
            verses: 99,
            verses_data: [
                {
                    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
                    transliteration: 'Bismillahi-r-Rahmani-r-Raheem',
                    translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.'
                },
                {
                    arabic: 'الر ۚ تِلْكَ آيَاتُ الْكِتَابِ وَقُرْآنٍ مُّبِينٍ',
                    transliteration: 'Alif Lam Ra tilka ayatu-l-kitab wa qur\'anin mubeen',
                    translation: 'Alif, Lam, Ra. These are the verses of the Book and a clear Qur\'an.'
                }
            ],
            tafsir: 'Al-Hijr discusses the story of the people of Thamud and the destruction of the cities of Sodom and Gomorrah. It emphasizes the consequences of disobedience and the protection of the Quran.'
        },
        16: { 
            name: 'An-Nahl', 
            english: 'The Bee', 
            arabic: 'النحل',
            type: 'Meccan', 
            verses: 128,
            verses_data: [
                {
                    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
                    transliteration: 'Bismillahi-r-Rahmani-r-Raheem',
                    translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.'
                },
                {
                    arabic: 'أَتَىٰ أَمْرُ اللَّهِ فَلَا تَسْتَعْجِلُوهُ ۚ سُبْحَانَهُ وَتَعَالَىٰ عَمَّا يُشْرِكُونَ',
                    transliteration: 'Ata amru-llahi fala tasta\'jilooh subhanahu wa ta\'ala \'amma yushrikoon',
                    translation: 'The command of Allah is coming, so be not impatient for it. Exalted is He and high above what they associate with Him.'
                }
            ],
            tafsir: 'An-Nahl discusses the signs of Allah in nature, particularly the bee and its honey, and emphasizes the blessings and guidance provided by Allah.'
        },
        17: { 
            name: 'Al-Isra', 
            english: 'The Night Journey', 
            arabic: 'الإسراء',
            type: 'Meccan', 
            verses: 111,
            verses_data: [
                {
                    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
                    transliteration: 'Bismillahi-r-Rahmani-r-Raheem',
                    translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.'
                },
                {
                    arabic: 'سُبْحَانَ الَّذِي أَسْرَىٰ بِعَبْدِهِ لَيْلًا مِّنَ الْمَسْجِدِ الْحَرَامِ إِلَى الْمَسْجِدِ الْأَقْصَى الَّذِي بَارَكْنَا حَوْلَهُ لِنُرِيَهُ مِنْ آيَاتِنَا ۚ إِنَّهُ هُوَ السَّمِيعُ الْبَصِيرُ',
                    transliteration: 'Subhana-l-ladhi asra bi \'abdihi laylan mina-l-masjidi-l-harami ila-l-masjidi-l-aqsa-l-ladhi barakna hawlahu li-nuriyahu min ayatina innahu huwa-s-samee\'u-l-baseer',
                    translation: 'Exalted is He who took His Servant by night from al-Masjid al-Haram to al-Masjid al-Aqsa, whose surroundings We have blessed, to show him of Our signs. Indeed, He is the Hearing, the Seeing.'
                }
            ],
            tafsir: 'Al-Isra discusses the Night Journey (Isra) of Prophet Muhammad from Mecca to Jerusalem and his ascension to the heavens (Mi\'raj). It emphasizes the power and wisdom of Allah.'
        },
        18: { 
            name: 'Al-Kahf', 
            english: 'The Cave', 
            arabic: 'الكهف',
            type: 'Meccan', 
            verses: 110,
            verses_data: [
                {
                    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
                    transliteration: 'Bismillahi-r-Rahmani-r-Raheem',
                    translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.'
                },
                {
                    arabic: 'الْحَمْدُ لِلَّهِ الَّذِي أَنزَلَ عَلَىٰ عَبْدِهِ الْكِتَابَ وَلَمْ يَجْعَل لَّهُ عِوَجًا ۜ',
                    transliteration: 'Alhamdu lillahi-l-ladhi anzala \'ala \'abdihi-l-kitaba wa lam yaj\'al lahu \'iwaja',
                    translation: '[All] praise is [due] to Allah, who has sent down upon His Servant the Book and has not made therein any deviance.'
                }
            ],
            tafsir: 'Al-Kahf tells the story of the People of the Cave and other parables. It emphasizes the importance of faith, patience, and the protection of Allah for those who believe.'
        },
        19: { 
            name: 'Maryam', 
            english: 'Mary', 
            arabic: 'مريم',
            type: 'Meccan', 
            verses: 98,
            verses_data: [
                {
                    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
                    transliteration: 'Bismillahi-r-Rahmani-r-Raheem',
                    translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.'
                },
                {
                    arabic: 'كهيعص',
                    transliteration: 'Kaf Ha Ya \'Ayn Sad',
                    translation: 'Kaf, Ha, Ya, \'Ayn, Sad.'
                }
            ],
            tafsir: 'Maryam tells the story of Mary, the mother of Jesus, and emphasizes the miraculous birth of Jesus. It discusses the concept of divine power and the importance of faith.'
        },
        20: { 
            name: 'Ta-Ha', 
            english: 'Ta-Ha', 
            arabic: 'طه',
            type: 'Meccan', 
            verses: 135,
            verses_data: [
                {
                    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
                    transliteration: 'Bismillahi-r-Rahmani-r-Raheem',
                    translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.'
                },
                {
                    arabic: 'طه',
                    transliteration: 'Ta Ha',
                    translation: 'Ta, Ha.'
                },
                {
                    arabic: 'مَا أَنزَلْنَا عَلَيْكَ الْقُرْآنَ لِتَشْقَىٰ',
                    transliteration: 'Ma anzalna \'alayka-l-qur\'ana li-tashqa',
                    translation: 'We have not sent down to you the Qur\'an that you be distressed'
                }
            ],
            tafsir: 'Ta-Ha tells the story of Prophet Moses and his encounter with Pharaoh. It emphasizes the power of Allah, the importance of following divine guidance, and the consequences of arrogance and disbelief.'
        },
        21: { 
            name: 'Al-Anbiya', 
            english: 'The Prophets', 
            arabic: 'الأَنْبِيَاء',
            type: 'Meccan', 
            verses: 112,
            verses_data: [
                {
                    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
                    transliteration: 'Bismillahi-r-Rahmani-r-Raheem',
                    translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.'
                },
                {
                    arabic: 'اقْتَرَبَ لِلنَّاسِ حِسَابُهُمْ وَهُمْ فِي غَفْلَةٍ مُّعْرِضُونَ',
                    transliteration: 'Iqtaraba li-an-nasi hisabuhum wa hum fi ghaflatin mu\'ridun',
                    translation: 'The time of their account has approached for the people, while they are in heedlessness turning away'
                }
            ],
            tafsir: 'Al-Anbiya discusses the stories of various prophets and emphasizes the approaching Day of Judgment. It highlights the consequences of heedlessness and the importance of following divine guidance.'
        },
        22: { 
            name: 'Al-Hajj', 
            english: 'The Pilgrimage', 
            arabic: 'الحَجّ',
            type: 'Medinan', 
            verses: 78,
            verses_data: [
                {
                    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
                    transliteration: 'Bismillahi-r-Rahmani-r-Raheem',
                    translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.'
                },
                {
                    arabic: 'يَا أَيُّهَا النَّاسُ اتَّقُوا رَبَّكُمْ ۚ إِنَّ زَلْزَلَةَ السَّاعَةِ شَيْءٌ عَظِيمٌ',
                    transliteration: 'Ya ayyuha an-nasu ittaqu rabbakum, inna zalzalata as-sa\'ati shay\'un \'azim',
                    translation: 'O mankind, fear your Lord. Indeed, the convulsion of the [final] Hour is a terrible thing'
                }
            ],
            tafsir: 'Al-Hajj discusses the pilgrimage to Mecca and contains important guidance about faith, worship, and the Day of Judgment. It emphasizes the importance of fearing Allah and preparing for the Hereafter.'
        },
        25: { 
            name: 'Al-Furqan', 
            english: 'The Criterion', 
            arabic: 'الفُرْقَان',
            type: 'Meccan', 
            verses: 77,
            verses_data: [
                {
                    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
                    transliteration: 'Bismillahi-r-Rahmani-r-Raheem',
                    translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.'
                },
                {
                    arabic: 'تَبَارَكَ الَّذِي نَزَّلَ الْفُرْقَانَ عَلَىٰ عَبْدِهِ لِيَكُونَ لِلْعَالَمِينَ نَذِيرًا',
                    transliteration: 'Tabaraka alladhi nazzala al-furqana \'ala \'abdihi liyakuna li-al-\'alamina nadhira',
                    translation: 'Blessed is He who sent down the Criterion upon His Servant that he may be to the worlds a warner'
                }
            ],
            tafsir: 'Al-Furqan discusses the Quran as the criterion between truth and falsehood, and addresses the objections of disbelievers. It emphasizes the divine origin of the Quran and the role of Prophet Muhammad as a warner.'
        },
        36: { 
            name: 'Ya-Sin', 
            english: 'Ya-Sin', 
            arabic: 'يٰس',
            type: 'Meccan', 
            verses: 83,
            verses_data: [
                {
                    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
                    transliteration: 'Bismillahi-r-Rahmani-r-Raheem',
                    translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.'
                },
                {
                    arabic: 'يس',
                    transliteration: 'Ya-Sin',
                    translation: 'Ya, Sin.'
                },
                {
                    arabic: 'وَالْقُرْآنِ الْحَكِيمِ',
                    transliteration: 'Wa al-qurani al-hakim',
                    translation: 'By the wise Qur\'an'
                }
            ],
            tafsir: 'Ya-Sin is known as the "Heart of the Quran" and contains profound spiritual guidance. It emphasizes the wisdom of the Quran and the importance of following divine guidance.'
        },
        40: { 
            name: 'Ghafir', 
            english: 'The Forgiver', 
            arabic: 'غَافِر',
            type: 'Meccan', 
            verses: 85,
            verses_data: [
                {
                    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
                    transliteration: 'Bismillahi-r-Rahmani-r-Raheem',
                    translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.'
                },
                {
                    arabic: 'حم',
                    transliteration: 'Ha-Mim',
                    translation: 'Ha, Meem.'
                },
                {
                    arabic: 'تَنزِيلُ الْكِتَابِ مِنَ اللَّهِ الْعَزِيزِ الْعَلِيمِ',
                    transliteration: 'Tanzilu-l-kitabi mina Allahi-l-\'azizi-l-\'aleem',
                    translation: '[This is] the revelation of the Book from Allah, the Exalted in Might, the Knowing'
                }
            ],
            tafsir: 'Ghafir emphasizes Allah\'s attribute of forgiveness and contains stories of previous nations and their prophets. It highlights the importance of seeking Allah\'s forgiveness and following divine guidance.'
        },
        50: { 
            name: 'Qaf', 
            english: 'Qaf', 
            arabic: 'ق',
            type: 'Meccan', 
            verses: 45,
            verses_data: [
                {
                    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
                    transliteration: 'Bismillahi-r-Rahmani-r-Raheem',
                    translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.'
                },
                {
                    arabic: 'ق ۚ وَالْقُرْآنِ الْمَجِيدِ',
                    transliteration: 'Qaf wa-l-Qur\'ani-l-majeed',
                    translation: 'Qaf. By the honored Qur\'an...'
                }
            ],
            tafsir: 'Qaf discusses the resurrection and the power of Allah. It emphasizes that Allah has complete knowledge of everything and that resurrection is not difficult for Him.'
        },
        55: { 
            name: 'Ar-Rahman', 
            english: 'The Most Merciful', 
            arabic: 'الرَّحْمَٰن',
            type: 'Medinan', 
            verses: 78,
            verses_data: [
                {
                    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
                    transliteration: 'Bismillahi-r-Rahmani-r-Raheem',
                    translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.'
                },
                {
                    arabic: 'الرَّحْمَٰنُ',
                    transliteration: 'Ar-Rahman',
                    translation: 'The Most Merciful'
                },
                {
                    arabic: 'عَلَّمَ الْقُرْآنَ',
                    transliteration: '\'Allama-l-Qur\'an',
                    translation: 'Taught the Qur\'an'
                }
            ],
            tafsir: 'Ar-Rahman emphasizes Allah\'s infinite mercy and the countless blessings He has bestowed upon His creation. The refrain "So which of the favors of your Lord would you deny?" appears throughout the surah.'
        },
        67: { 
            name: 'Al-Mulk', 
            english: 'The Sovereignty', 
            arabic: 'الْمُلْك',
            type: 'Meccan', 
            verses: 30,
            verses_data: [
                {
                    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
                    transliteration: 'Bismillahi-r-Rahmani-r-Raheem',
                    translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.'
                },
                {
                    arabic: 'تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ',
                    transliteration: 'Tabaraka-lladhi bi-yadihi-l-mulku wa huwa \'ala kulli shay\'in qadeer',
                    translation: 'Blessed is He in whose hand is dominion, and He is over all things competent -'
                }
            ],
            tafsir: 'Al-Mulk discusses Allah\'s sovereignty over all creation and the perfection of His creation. It emphasizes that Allah has power over everything and that His creation is flawless.'
        },
        78: { 
            name: 'An-Naba', 
            english: 'The Tidings', 
            arabic: 'النَّبَأ',
            type: 'Meccan', 
            verses: 40,
            verses_data: [
                {
                    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
                    transliteration: 'Bismillahi-r-Rahmani-r-Raheem',
                    translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.'
                },
                {
                    arabic: 'عَمَّ يَتَسَاءَلُونَ',
                    transliteration: '\'Amma yatasaa\'alun',
                    translation: 'About what are they asking one another?'
                }
            ],
            tafsir: 'An-Naba discusses the great news of the Day of Judgment and the signs of Allah in creation. It emphasizes that the Day of Judgment is approaching and warns against heedlessness.'
        },
        80: { 
            name: 'Abasa', 
            english: 'He Frowned', 
            arabic: 'عَبَسَ',
            type: 'Meccan', 
            verses: 42,
            verses_data: [
                {
                    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
                    transliteration: 'Bismillahi-r-Rahmani-r-Raheem',
                    translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.'
                },
                {
                    arabic: 'عَبَسَ وَتَوَلَّىٰ',
                    transliteration: 'Abasa wa tawalla',
                    translation: 'He frowned and turned away'
                }
            ],
            tafsir: 'Abasa was revealed when the Prophet (peace be upon him) was speaking to some Quraysh leaders, and a blind man named Abdullah ibn Umm Maktum came to him seeking knowledge. The Prophet frowned and turned away from him to continue his conversation with the wealthy leaders.'
        },
        81: { 
            name: 'At-Takwir', 
            english: 'The Overthrowing', 
            arabic: 'التَّكْوِير',
            type: 'Meccan', 
            verses: 29,
            verses_data: [
                {
                    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
                    transliteration: 'Bismillahi-r-Rahmani-r-Raheem',
                    translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.'
                },
                {
                    arabic: 'إِذَا الشَّمْسُ كُوِّرَتْ',
                    transliteration: 'Idha-sh-shamsu kuwirat',
                    translation: 'When the sun is wrapped up [in darkness]'
                }
            ],
            tafsir: 'At-Takwir describes the events of the Day of Judgment when the sun will be wrapped up, stars will fall, and the earth will be shaken. It emphasizes the power of Allah and the reality of the Hereafter.'
        },
        82: { 
            name: 'Al-Infitar', 
            english: 'The Cleaving', 
            arabic: 'الانْفِطَار',
            type: 'Meccan', 
            verses: 19,
            verses_data: [
                {
                    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
                    transliteration: 'Bismillahi-r-Rahmani-r-Raheem',
                    translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.'
                },
                {
                    arabic: 'إِذَا السَّمَاءُ انفَطَرَتْ',
                    transliteration: 'Idha-s-sama\'u-nfatrat',
                    translation: 'When the sky breaks apart'
                }
            ],
            tafsir: 'Al-Infitar describes the events of the Day of Judgment when the sky will break apart, stars will scatter, and graves will be overturned. It emphasizes the reality of resurrection and accountability.'
        },
        83: { 
            name: 'Al-Mutaffifin', 
            english: 'The Defrauding', 
            arabic: 'الْمُطَفِّفِينَ',
            type: 'Meccan', 
            verses: 36,
            verses_data: [
                {
                    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
                    transliteration: 'Bismillahi-r-Rahmani-r-Raheem',
                    translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.'
                },
                {
                    arabic: 'وَيْلٌ لِّلْمُطَفِّفِينَ',
                    transliteration: 'Waylun li-l-mutaffifin',
                    translation: 'Woe to those who give less [than due]'
                }
            ],
            tafsir: 'Al-Mutaffifin warns against giving short measure and cheating in business transactions. It emphasizes the importance of fairness and justice in all dealings.'
        },
        84: { 
            name: 'Al-Inshiqaq', 
            english: 'The Sundering', 
            arabic: 'الانْشِقَاق',
            type: 'Meccan', 
            verses: 25,
            verses_data: [
                {
                    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
                    transliteration: 'Bismillahi-r-Rahmani-r-Raheem',
                    translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.'
                },
                {
                    arabic: 'إِذَا السَّمَاءُ انشَقَّتْ',
                    transliteration: 'Idha-s-sama\'u-nshaqqat',
                    translation: 'When the sky has split [open]'
                }
            ],
            tafsir: 'Al-Inshiqaq describes the events of the Day of Judgment when the sky will split open and the earth will be extended. It emphasizes the reality of resurrection and the different fates of the righteous and the wicked.'
        },
        85: { 
            name: 'Al-Buruj', 
            english: 'The Constellations', 
            arabic: 'البُرُوج',
            type: 'Meccan', 
            verses: 22,
            verses_data: [
                {
                    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
                    transliteration: 'Bismillahi-r-Rahmani-r-Raheem',
                    translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.'
                },
                {
                    arabic: 'وَالسَّمَاءِ ذَاتِ الْبُرُوجِ',
                    transliteration: 'Wa-s-sama\'i dhati-l-buruj',
                    translation: 'By the sky containing great stars'
                }
            ],
            tafsir: 'Al-Buruj discusses the story of the people of the trench who persecuted believers, and warns about the consequences of oppressing the faithful. It emphasizes Allah\'s justice and the reality of the Hereafter.'
        },
        87: { 
            name: 'Al-A\'la', 
            english: 'The Most High', 
            arabic: 'الأَعْلَىٰ',
            type: 'Meccan', 
            verses: 19,
            verses_data: [
                {
                    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
                    transliteration: 'Bismillahi-r-Rahmani-r-Raheem',
                    translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.'
                },
                {
                    arabic: 'سَبِّحِ اسْمَ رَبِّكَ الْأَعْلَى',
                    transliteration: 'Sabbihi-sma rabbika-l-a\'la',
                    translation: 'Exalt the name of your Lord, the Most High'
                }
            ],
            tafsir: 'Al-A\'la emphasizes the exaltation of Allah\'s name and describes His creative power. It highlights the importance of remembering Allah and following His guidance.'
        },
        89: { 
            name: 'Al-Fajr', 
            english: 'The Dawn', 
            arabic: 'الفَجْر',
            type: 'Meccan', 
            verses: 30,
            verses_data: [
                {
                    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
                    transliteration: 'Bismillahi-r-Rahmani-r-Raheem',
                    translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.'
                },
                {
                    arabic: 'وَالْفَجْرِ',
                    transliteration: 'Wa-l-fajr',
                    translation: 'By the dawn'
                }
            ],
            tafsir: 'Al-Fajr discusses the fate of previous nations like \'Aad, Thamud, and Pharaoh, and warns about the consequences of oppression and corruption. It emphasizes the importance of caring for orphans and the poor.'
        },
        91: { 
            name: 'Ash-Shams', 
            english: 'The Sun', 
            arabic: 'الشَّمْس',
            type: 'Meccan', 
            verses: 15,
            verses_data: [
                {
                    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
                    transliteration: 'Bismillahi-r-Rahmani-r-Raheem',
                    translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.'
                },
                {
                    arabic: 'وَالشَّمْسِ وَضُحَاهَا',
                    transliteration: 'Wa-sh-shamsi wa duhaha',
                    translation: 'By the sun and its brightness'
                }
            ],
            tafsir: 'Ash-Shams discusses the story of the people of Thamud and their rejection of Prophet Salih. It emphasizes the importance of purifying the soul and following divine guidance.'
        },
        97: { 
            name: 'Al-Qadr', 
            english: 'The Power', 
            arabic: 'الْقَدْر',
            type: 'Meccan', 
            verses: 5,
            verses_data: [
                {
                    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
                    transliteration: 'Bismillahi-r-Rahmani-r-Raheem',
                    translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.'
                },
                {
                    arabic: 'إِنَّا أَنزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ',
                    transliteration: 'Inna anzalnahu fi laylati-l-qadr',
                    translation: 'Indeed, We sent the Qur\'an down during the Night of Decree.'
                }
            ],
            tafsir: 'Al-Qadr describes the Night of Decree (Laylat al-Qadr), which is better than a thousand months. It emphasizes the immense value and blessing of this special night during Ramadan.'
        },
        103: { 
            name: 'Al-Asr', 
            english: 'The Time', 
            arabic: 'الْعَصْر',
            type: 'Meccan', 
            verses: 3,
            verses_data: [
                {
                    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
                    transliteration: 'Bismillahi-r-Rahmani-r-Raheem',
                    translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.'
                },
                {
                    arabic: 'وَالْعَصْرِ',
                    transliteration: 'Wa-l-\'asr',
                    translation: 'By time'
                }
            ],
            tafsir: 'Al-Asr provides a complete formula for success: faith, good deeds, mutual advice for truth, and mutual advice for patience. It emphasizes that true success requires both individual and communal responsibilities.'
        },
        108: { 
            name: 'Al-Kawthar', 
            english: 'The Abundance', 
            arabic: 'الْكَوْثَر',
            type: 'Meccan', 
            verses: 3,
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
                }
            ],
            tafsir: 'Al-Kawthar was revealed to console Prophet Muhammad (peace be upon him) after the death of his sons. It promises him abundant good and instructs him to pray and sacrifice to Allah alone.'
        },
        109: { 
            name: 'Al-Kafirun', 
            english: 'The Disbelievers', 
            arabic: 'الْكَافِرُونَ',
            type: 'Meccan', 
            verses: 6,
            verses_data: [
                {
                    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
                    transliteration: 'Bismillahi-r-Rahmani-r-Raheem',
                    translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.'
                },
                {
                    arabic: 'قُلْ يَا أَيُّهَا الْكَافِرُونَ',
                    transliteration: 'Qul ya ayyuha-l-kafirun',
                    translation: 'Say, "O disbelievers'
                }
            ],
            tafsir: 'Al-Kafirun establishes clear boundaries between Islam and other religions. It emphasizes that there can be no compromise in matters of faith and that each person is responsible for their own religion.'
        },
        112: { 
            name: 'Al-Ikhlas', 
            english: 'The Sincerity', 
            arabic: 'الإِخْلاص',
            type: 'Meccan', 
            verses: 4,
            verses_data: [
                {
                    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
                    transliteration: 'Bismillahi-r-Rahmani-r-Raheem',
                    translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.'
                },
                {
                    arabic: 'قُلْ هُوَ اللَّهُ أَحَدٌ',
                    transliteration: 'Qul huwa Allahu ahad',
                    translation: 'Say, "He is Allah, [who is] One'
                }
            ],
            tafsir: 'Al-Ikhlas is considered equivalent to one-third of the Quran. It establishes the fundamental principle of Islamic monotheism - Allah is One, Eternal, and has no equal.'
        },
        113: { 
            name: 'Al-Falaq', 
            english: 'The Daybreak', 
            arabic: 'الفَلَق',
            type: 'Meccan', 
            verses: 5,
            verses_data: [
                {
                    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
                    transliteration: 'Bismillahi-r-Rahmani-r-Raheem',
                    translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.'
                },
                {
                    arabic: 'قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ',
                    transliteration: 'Qul a\'udhu bi rabbi-l-falaq',
                    translation: 'Say, "I seek refuge in the Lord of daybreak'
                }
            ],
            tafsir: 'Al-Falaq is a supplication seeking Allah\'s protection from various forms of evil, including the evil of darkness, witchcraft, and envy. It emphasizes seeking refuge in Allah from all harm.'
        },
        114: { 
            name: 'An-Nas', 
            english: 'Mankind', 
            arabic: 'النَّاس',
            type: 'Meccan', 
            verses: 6,
            verses_data: [
                {
                    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
                    transliteration: 'Bismillahi-r-Rahmani-r-Raheem',
                    translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.'
                },
                {
                    arabic: 'قُلْ أَعُوذُ بِرَبِّ النَّاسِ',
                    transliteration: 'Qul a\'udhu bi rabbi-n-nas',
                    translation: 'Say, "I seek refuge in the Lord of mankind'
                }
            ],
            tafsir: 'An-Nas seeks Allah\'s protection from the evil whisperer (Satan) who whispers in the hearts of both jinn and mankind. It emphasizes seeking refuge in Allah from all forms of evil influence.'
        },
        26: { name: 'Ash-Shu\'ara', english: 'The Poets', type: 'Meccan', verses: 227 },
        27: { name: 'An-Naml', english: 'The Ant', type: 'Meccan', verses: 93 },
        28: { name: 'Al-Qasas', english: 'The Stories', type: 'Meccan', verses: 88 },
        29: { name: 'Al-Ankabut', english: 'The Spider', type: 'Meccan', verses: 69 },
        30: { name: 'Ar-Rum', english: 'The Romans', type: 'Meccan', verses: 60 },
        31: { name: 'Luqman', english: 'Luqman', type: 'Meccan', verses: 34 },
        32: { name: 'As-Sajda', english: 'The Prostration', type: 'Meccan', verses: 30 },
        33: { name: 'Al-Ahzab', english: 'The Combined Forces', type: 'Medinan', verses: 73 },
        34: { name: 'Saba', english: 'Sheba', type: 'Meccan', verses: 54 },
        35: { name: 'Fatir', english: 'Originator', type: 'Meccan', verses: 45 },
        36: { name: 'Ya-Sin', english: 'Ya-Sin', type: 'Meccan', verses: 83 },
        37: { name: 'As-Saffat', english: 'Those Ranged in Rows', type: 'Meccan', verses: 182 },
        38: { name: 'Sad', english: 'Sad', type: 'Meccan', verses: 88 },
        39: { name: 'Az-Zumar', english: 'The Troops', type: 'Meccan', verses: 75 },
        40: { name: 'Ghafir', english: 'The Forgiver', type: 'Meccan', verses: 85 },
        41: { name: 'Fussilat', english: 'Explained in Detail', type: 'Meccan', verses: 54 },
        42: { name: 'Ash-Shura', english: 'The Consultation', type: 'Meccan', verses: 53 },
        43: { name: 'Az-Zukhruf', english: 'The Ornaments of Gold', type: 'Meccan', verses: 89 },
        44: { name: 'Ad-Dukhan', english: 'The Smoke', type: 'Meccan', verses: 59 },
        45: { name: 'Al-Jathiyah', english: 'The Crouching', type: 'Meccan', verses: 37 },
        46: { name: 'Al-Ahqaf', english: 'The Wind-Curved Sandhills', type: 'Meccan', verses: 35 },
        47: { name: 'Muhammad', english: 'Muhammad', type: 'Medinan', verses: 38 },
        48: { name: 'Al-Fath', english: 'The Victory', type: 'Medinan', verses: 29 },
        49: { name: 'Al-Hujurat', english: 'The Rooms', type: 'Medinan', verses: 18 },
        50: { name: 'Qaf', english: 'Qaf', type: 'Meccan', verses: 45 },
        51: { name: 'Adh-Dhariyat', english: 'The Scatterers', type: 'Meccan', verses: 60 },
        52: { name: 'At-Tur', english: 'The Mount', type: 'Meccan', verses: 49 },
        53: { name: 'An-Najm', english: 'The Star', type: 'Meccan', verses: 62 },
        54: { name: 'Al-Qamar', english: 'The Moon', type: 'Meccan', verses: 55 },
        55: { name: 'Ar-Rahman', english: 'The Most Merciful', type: 'Medinan', verses: 78 },
        56: { name: 'Al-Waqi\'ah', english: 'The Event', type: 'Meccan', verses: 96 },
        57: { name: 'Al-Hadid', english: 'The Iron', type: 'Medinan', verses: 29 },
        58: { name: 'Al-Mujadila', english: 'The Disputation', type: 'Medinan', verses: 22 },
        59: { name: 'Al-Hashr', english: 'The Gathering', type: 'Medinan', verses: 24 },
        60: { name: 'Al-Mumtahanah', english: 'She That Is to Be Examined', type: 'Medinan', verses: 13 },
        61: { name: 'As-Saff', english: 'The Ranks', type: 'Medinan', verses: 14 },
        62: { name: 'Al-Jumu\'ah', english: 'Friday', type: 'Medinan', verses: 11 },
        63: { name: 'Al-Munafiqun', english: 'The Hypocrites', type: 'Medinan', verses: 11 },
        64: { name: 'At-Taghabun', english: 'The Mutual Disillusion', type: 'Medinan', verses: 18 },
        65: { name: 'At-Talaq', english: 'The Divorce', type: 'Medinan', verses: 12 },
        66: { name: 'At-Tahrim', english: 'The Prohibition', type: 'Medinan', verses: 12 },
        67: { name: 'Al-Mulk', english: 'The Sovereignty', type: 'Meccan', verses: 30 },
        68: { name: 'Al-Qalam', english: 'The Pen', type: 'Meccan', verses: 52 },
        69: { name: 'Al-Haqqah', english: 'The Inevitable', type: 'Meccan', verses: 52 },
        70: { name: 'Al-Ma\'arij', english: 'The Ascending Stairways', type: 'Meccan', verses: 44 },
        71: { name: 'Nuh', english: 'Noah', type: 'Meccan', verses: 28 },
        72: { name: 'Al-Jinn', english: 'The Jinn', type: 'Meccan', verses: 28 },
        73: { name: 'Al-Muzzammil', english: 'The Enshrouded One', type: 'Meccan', verses: 20 },
        74: { name: 'Al-Muddaththir', english: 'The Cloaked One', type: 'Meccan', verses: 56 },
        75: { name: 'Al-Qiyamah', english: 'The Resurrection', type: 'Meccan', verses: 40 },
        76: { name: 'Al-Insan', english: 'The Human', type: 'Medinan', verses: 31 },
        77: { name: 'Al-Mursalat', english: 'The Emissaries', type: 'Meccan', verses: 50 },
        78: { name: 'An-Naba', english: 'The Tidings', type: 'Meccan', verses: 40 },
        79: { name: 'An-Nazi\'at', english: 'Those Who Drag Forth', type: 'Meccan', verses: 46 },
        80: { name: 'Abasa', english: 'He Frowned', type: 'Meccan', verses: 42 },
        81: { name: 'At-Takwir', english: 'The Overthrowing', type: 'Meccan', verses: 29 },
        82: { name: 'Al-Infitar', english: 'The Cleaving', type: 'Meccan', verses: 19 },
        83: { name: 'Al-Mutaffifin', english: 'Those Who Deal in Fraud', type: 'Meccan', verses: 36 },
        84: { name: 'Al-Inshiqaq', english: 'The Splitting Open', type: 'Meccan', verses: 25 },
        85: { name: 'Al-Buruj', english: 'The Constellations', type: 'Meccan', verses: 22 },
        86: { name: 'At-Tariq', english: 'The Night-Comer', type: 'Meccan', verses: 17 },
        87: { name: 'Al-A\'la', english: 'The Most High', type: 'Meccan', verses: 19 },
        88: { name: 'Al-Ghashiyah', english: 'The Overwhelming', type: 'Meccan', verses: 26 },
        89: { name: 'Al-Fajr', english: 'The Dawn', type: 'Meccan', verses: 30 },
        90: { name: 'Al-Balad', english: 'The City', type: 'Meccan', verses: 20 },
        91: { name: 'Ash-Shams', english: 'The Sun', type: 'Meccan', verses: 15 },
        92: { name: 'Al-Layl', english: 'The Night', type: 'Meccan', verses: 21 },
        93: { name: 'Ad-Duha', english: 'The Morning Hours', type: 'Meccan', verses: 11 },
        94: { name: 'Ash-Sharh', english: 'The Relief', type: 'Meccan', verses: 8 },
        95: { name: 'At-Tin', english: 'The Fig', type: 'Meccan', verses: 8 },
        96: { name: 'Al-Alaq', english: 'The Clot', type: 'Meccan', verses: 19 },
        97: { name: 'Al-Qadr', english: 'The Power', type: 'Meccan', verses: 5 },
        98: { name: 'Al-Bayyinah', english: 'The Clear Evidence', type: 'Medinan', verses: 8 },
        99: { name: 'Az-Zalzalah', english: 'The Earthquake', type: 'Medinan', verses: 8 },
        100: { name: 'Al-Adiyat', english: 'The Coursers', type: 'Meccan', verses: 11 },
        101: { name: 'Al-Qari\'ah', english: 'The Striking Hour', type: 'Meccan', verses: 11 },
        102: { name: 'At-Takathur', english: 'The Rivalry in Worldly Increase', type: 'Meccan', verses: 8 },
        103: { name: 'Al-Asr', english: 'The Time', type: 'Meccan', verses: 3 },
        104: { name: 'Al-Humazah', english: 'The Slanderer', type: 'Meccan', verses: 9 },
        105: { name: 'Al-Fil', english: 'The Elephant', type: 'Meccan', verses: 5 },
        106: { name: 'Quraysh', english: 'Quraysh', type: 'Meccan', verses: 4 },
        107: { name: 'Al-Ma\'un', english: 'The Small Kindnesses', type: 'Meccan', verses: 7 },
        108: { name: 'Al-Kawthar', english: 'The Abundance', type: 'Meccan', verses: 3 },
        109: { name: 'Al-Kafirun', english: 'The Disbelievers', type: 'Meccan', verses: 6 },
        110: { name: 'An-Nasr', english: 'The Divine Support', type: 'Medinan', verses: 3 },
        111: { name: 'Al-Masad', english: 'The Palm Fiber', type: 'Meccan', verses: 5 },
        112: { name: 'Al-Ikhlas', english: 'The Sincerity', type: 'Meccan', verses: 4 },
        113: { name: 'Al-Falaq', english: 'The Daybreak', type: 'Meccan', verses: 5 },
        114: { name: 'An-Nas', english: 'Mankind', type: 'Meccan', verses: 6 }
    };

    function initializeQuranReader() {
        // Surah selector functionality
        const surahSelect = document.getElementById('surahSelect');
        if (surahSelect) {
            surahSelect.addEventListener('change', function() {
                showSurah(this.value);
            });
        }

        // Reading option buttons
        const optionBtns = document.querySelectorAll('.option-btn');
        optionBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                optionBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                
                // Apply view filter
                applyViewFilter(this.dataset.view);
            });
        });

        // Audio controls
        const playButton = document.getElementById('playButton');
        if (playButton) {
            playButton.addEventListener('click', function() {
                toggleAudioPlayback();
            });
        }

        // Verse hover effects
        addVerseInteractivity();
    }

    function showSurah(surahNumber) {
        // Hide all surah containers
        const allSurahs = document.querySelectorAll('.surah-container');
        allSurahs.forEach(surah => {
            surah.style.display = 'none';
        });

        // Show selected surah
        const selectedSurah = document.getElementById(`surah-${surahNumber}`);
        if (selectedSurah) {
            selectedSurah.style.display = 'block';
        } else {
            // If surah doesn't exist, show placeholder
            showSurahPlaceholder(surahNumber);
        }

        // Smooth scroll to content
        document.getElementById('quranContent').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    function showSurahPlaceholder(surahNumber) {
        const content = document.getElementById('quranContent');
        const surah = surahData[surahNumber];
        
        if (surah && surah.verses_data && surah.verses_data.length > 0) {
            // Check if this is placeholder data
            const isPlaceholder = surah.verses_data[0] && surah.verses_data[0].arabic.includes('[Arabic text for verse');
            
            // Generate complete surah HTML with verses
            let versesHTML = '';
            if (isPlaceholder) {
                // Show a message that this surah is coming soon
                versesHTML = `
                    <div class="content-card" style="text-align: center; padding: 3rem; margin: 2rem 0;">
                        <h3 style="color: var(--gold); margin-bottom: 1rem;">
                            <i class="fas fa-tools"></i> Surah Coming Soon
                        </h3>
                        <p style="color: var(--text-secondary); font-size: 1.1rem; margin-bottom: 2rem;">
                            ${surah.name} (${surah.english}) - ${surah.verses} verses<br>
                            <small>Complete Arabic text, transliteration, and translation will be available soon.</small>
                        </p>
                        <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                            <button class="btn-primary" onclick="showSurah(1)">
                                <i class="fas fa-book-open"></i> Read Al-Fatihah
                            </button>
                            <button class="btn-secondary" onclick="showSurah(2)">
                                <i class="fas fa-book"></i> Read Al-Baqarah
                            </button>
                            <button class="btn-outline" onclick="window.location.href='subjects.html'">
                                <i class="fas fa-graduation-cap"></i> Explore Other Subjects
                            </button>
                        </div>
                    </div>
                `;
            } else {
                // Show actual verses
                surah.verses_data.forEach((verse, index) => {
                    versesHTML += `
                        <div class="verse-block">
                            <div class="verse-number">${index + 1}</div>
                            <div class="verse-content">
                                <div class="arabic-verse">${verse.arabic}</div>
                                <div class="transliteration">${verse.transliteration ?? ''}</div>
                                <div class="english-translation">${verse.translation ?? ''}</div>
                            </div>
                        </div>
                    `;
                });
            }

            const surahHTML = `
                <div class="surah-container" id="surah-${surahNumber}">
                    <div class="surah-header">
                        <div class="surah-info">
                            <h2 class="surah-name-arabic">${surah.arabic}</h2>
                            <h3 class="surah-name-english">${surah.name} (${surah.english})</h3>
                            <div class="surah-details">
                                <span class="revelation-type">${surah.type}</span>
                                <span class="ayah-count">${surah.verses} Verses</span>
                            </div>
                        </div>
                        <div class="bismillah">
                            <div class="arabic-text">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</div>
                            <div class="transliteration">Bismillahi-r-Rahmani-r-Raheem</div>
                            <div class="translation">In the name of Allah, the Entirely Merciful, the Especially Merciful.</div>
                        </div>
                    </div>
                    <div class="verses-container">
                        ${versesHTML}
                    </div>
                    ${surah.tafsir ? `
                        <div class="tafsir-section" style="margin-top: 2rem; padding: 2rem; background: rgba(255, 255, 255, 0.05); border-radius: 15px; border-left: 4px solid var(--gold);">
                            <h3 style="color: var(--gold); margin-bottom: 1rem;">
                                <i class="fas fa-book-open"></i> Tafsir (Explanation)
                            </h3>
                            <p style="color: var(--text-secondary); line-height: 1.7; font-size: 1.1rem;">
                                ${surah.tafsir}
                            </p>
                        </div>
                    ` : ''}
                </div>
            `;
            
            content.innerHTML = surahHTML;
        } else if (surah) {
            // Fallback for surahs without detailed data
            const placeholderHTML = `
                <div class="surah-container" id="surah-${surahNumber}">
                    <div class="surah-header">
                        <div class="surah-info">
                            <h2 class="surah-name-arabic">سُورَة ${surah.name}</h2>
                            <h3 class="surah-name-english">${surah.name} (${surah.english})</h3>
                            <div class="surah-details">
                                <span class="revelation-type">${surah.type}</span>
                                <span class="ayah-count">${surah.verses} Verses</span>
                            </div>
                        </div>
                        <div class="bismillah">
                            <div class="arabic-text">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</div>
                            <div class="transliteration">Bismillahi-r-Rahmani-r-Raheem</div>
                            <div class="translation">In the name of Allah, the Entirely Merciful, the Especially Merciful.</div>
                        </div>
                    </div>
                    <div class="verses-container">
                        <div class="content-card" style="text-align: center; padding: 3rem;">
                            <h3 style="color: var(--gold); margin-bottom: 1rem;">
                                <i class="fas fa-tools"></i> Coming Soon
                            </h3>
                            <p style="color: var(--text-secondary); font-size: 1.1rem;">
                                This Surah will be available soon with complete Arabic text, transliteration, and Sahih International translation.
                            </p>
                            <div style="margin-top: 2rem;">
                                <button class="btn-primary" onclick="window.location.href='subjects.html'">
                                    Explore Other Subjects
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            content.innerHTML = placeholderHTML;
        }
    }

    function applyViewFilter(view) {
        const verses = document.querySelectorAll('.verse-content');
        
        verses.forEach(verse => {
            const arabic = verse.querySelector('.arabic-verse');
            const transliteration = verse.querySelector('.transliteration');
            const translation = verse.querySelector('.english-translation');
            const tafsir = verse.querySelector('.tafsir-content');
            
            // Reset display
            if (arabic) arabic.style.display = 'block';
            if (transliteration) transliteration.style.display = 'block';
            if (translation) translation.style.display = 'block';
            if (tafsir) tafsir.style.display = 'none'; // Tafsir hidden by default
            
            // Apply filter
            switch(view) {
                case 'arabic':
                    if (transliteration) transliteration.style.display = 'none';
                    if (translation) translation.style.display = 'none';
                    if (tafsir) tafsir.style.display = 'none';
                    break;
                case 'translation':
                    if (arabic) arabic.style.display = 'none';
                    if (transliteration) transliteration.style.display = 'none';
                    if (tafsir) tafsir.style.display = 'none';
                    break;
                case 'tafsir':
                    if (tafsir) tafsir.style.display = 'block';
                    break;
                case 'all':
                default:
                    // Show all - already set above
                    break;
            }
        });

        // Also apply to Bismillah
        const bismillah = document.querySelector('.bismillah');
        if (bismillah) {
            const arabicText = bismillah.querySelector('.arabic-text');
            const transliterationText = bismillah.querySelector('.transliteration');
            const translationText = bismillah.querySelector('.translation');
            
            // Reset
            if (arabicText) arabicText.style.display = 'block';
            if (transliterationText) transliterationText.style.display = 'block';
            if (translationText) translationText.style.display = 'block';
            
            switch(view) {
                case 'arabic':
                    if (transliterationText) transliterationText.style.display = 'none';
                    if (translationText) translationText.style.display = 'none';
                    break;
                case 'translation':
                    if (arabicText) arabicText.style.display = 'none';
                    if (transliterationText) transliterationText.style.display = 'none';
                    break;
                case 'tafsir':
                    if (arabicText) arabicText.style.display = 'none';
                    if (transliterationText) transliterationText.style.display = 'none';
                    if (translationText) translationText.style.display = 'none';
                    break;
            }
        }

        // Handle tafsir section visibility
        const tafsirSection = document.querySelector('.tafsir-section');
        if (tafsirSection) {
            if (view === 'tafsir') {
                tafsirSection.style.display = 'block';
            } else {
                tafsirSection.style.display = 'none';
            }
        }

        // Handle tafsir sections
        const tafsirSections = document.querySelectorAll('.tafsir-section');
        tafsirSections.forEach(tafsir => {
            if (view === 'tafsir') {
                tafsir.style.display = 'block';
            } else {
                tafsir.style.display = 'none';
            }
        });
    }

    function addVerseInteractivity() {
        const verseBlocks = document.querySelectorAll('.verse-block');
        
        verseBlocks.forEach(verse => {
            verse.addEventListener('click', function() {
                // Highlight selected verse
                verseBlocks.forEach(v => v.classList.remove('selected'));
                this.classList.add('selected');
                
                // Copy verse to clipboard (optional feature)
                const arabicText = this.querySelector('.arabic-verse')?.textContent;
                const translation = this.querySelector('.english-translation')?.textContent;
                
                if (arabicText && translation) {
                    const verseText = `${arabicText}\n\n${translation}`;
                    
                    // Show tooltip or notification
                    showTooltip(this, 'Verse selected - Right click to copy');
                }
            });

            // Add context menu for copying
            verse.addEventListener('contextmenu', function(e) {
                e.preventDefault();
                copyVerseToClipboard(this);
            });
        });
    }

    function copyVerseToClipboard(verseElement) {
        const arabicText = verseElement.querySelector('.arabic-verse')?.textContent;
        const transliteration = verseElement.querySelector('.transliteration')?.textContent;
        const translation = verseElement.querySelector('.english-translation')?.textContent;
        const verseNumber = verseElement.querySelector('.verse-number')?.textContent;
        
        const fullText = `Verse ${verseNumber}:\n${arabicText}\n\n${transliteration}\n\n${translation}`;
        
        navigator.clipboard.writeText(fullText).then(() => {
            showNotification('Verse copied to clipboard!');
        }).catch(() => {
            showNotification('Unable to copy verse');
        });
    }

    function toggleAudioPlayback() {
        const playButton = document.getElementById('playButton');
        const icon = playButton.querySelector('i');
        
        if (icon.classList.contains('fa-play')) {
            // Start playing
            icon.classList.remove('fa-play');
            icon.classList.add('fa-pause');
            playButton.innerHTML = '<i class="fas fa-pause"></i> Pause Recitation';
            
            // Simulate audio playback (in real implementation, you'd use actual audio)
            showNotification('Audio recitation started - This feature will be fully implemented soon');
            
            // Reset after 3 seconds for demo
            setTimeout(() => {
                if (icon.classList.contains('fa-pause')) {
                    icon.classList.remove('fa-pause');
                    icon.classList.add('fa-play');
                    playButton.innerHTML = '<i class="fas fa-play"></i> Play Recitation';
                }
            }, 3000);
        } else {
            // Stop playing
            icon.classList.remove('fa-pause');
            icon.classList.add('fa-play');
            playButton.innerHTML = '<i class="fas fa-play"></i> Play Recitation';
        }
    }

    function showTooltip(element, message) {
        // Create tooltip element
        const tooltip = document.createElement('div');
        tooltip.className = 'verse-tooltip';
        tooltip.textContent = message;
        tooltip.style.cssText = `
            position: absolute;
            background: var(--gold);
            color: var(--dark-green);
            padding: 0.5rem 1rem;
            border-radius: 8px;
            font-size: 0.9rem;
            font-weight: 600;
            z-index: 1000;
            white-space: nowrap;
            opacity: 0;
            transition: opacity 0.3s ease;
            pointer-events: none;
        `;
        
        document.body.appendChild(tooltip);
        
        // Position tooltip
        const rect = element.getBoundingClientRect();
        tooltip.style.left = rect.left + 'px';
        tooltip.style.top = (rect.top - tooltip.offsetHeight - 10) + 'px';
        
        // Show and hide tooltip
        setTimeout(() => tooltip.style.opacity = '1', 10);
        setTimeout(() => {
            tooltip.style.opacity = '0';
            setTimeout(() => tooltip.remove(), 300);
        }, 2000);
    }

    function showNotification(message) {
        // Create notification
        const notification = document.createElement('div');
        notification.className = 'quran-notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: linear-gradient(135deg, var(--gold), var(--gold-light));
            color: var(--dark-green);
            padding: 1rem 1.5rem;
            border-radius: 12px;
            font-weight: 600;
            box-shadow: 0 8px 25px rgba(212, 175, 55, 0.4);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.5s ease;
            max-width: 300px;
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Animate out and remove
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 500);
        }, 3000);
    }

    // Add CSS for selected verse and tafsir
    const style = document.createElement('style');
    style.textContent = `
        .verse-block.selected {
            background: rgba(212, 175, 55, 0.1) !important;
            border-left-color: var(--gold) !important;
            border-left-width: 6px !important;
            transform: translateX(10px) !important;
        }
        
        .verse-block {
            cursor: pointer;
        }
        
        .verse-block:hover {
            cursor: pointer;
        }
        
        .tafsir {
            background: linear-gradient(135deg, #f8f9fa, #e9ecef);
            border: 1px solid #dee2e6;
            border-radius: 8px;
            padding: 1rem;
            margin-top: 0.75rem;
            font-size: 0.9rem;
            line-height: 1.6;
            color: #495057;
            font-style: italic;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        .tafsir::before {
            content: "💡 Tafsir: ";
            font-weight: 600;
            color: var(--gold);
            font-style: normal;
        }
    `;
    document.head.appendChild(style);

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey || e.metaKey) {
            switch(e.key) {
                case '1':
                    e.preventDefault();
                    document.querySelector('[data-view="all"]').click();
                    break;
                case '2':
                    e.preventDefault();
                    document.querySelector('[data-view="arabic"]').click();
                    break;
                case '3':
                    e.preventDefault();
                    document.querySelector('[data-view="translation"]').click();
                    break;
                case '4':
                    e.preventDefault();
                    document.querySelector('[data-view="tafsir"]').click();
                    break;
                case ' ':
                    e.preventDefault();
                    toggleAudioPlayback();
                    break;
            }
        }
    });

    // Initialize with first surah
    showSurah('1');
    
    console.log('Quran Reader initialized successfully');
    showNotification('Welcome to the Quran Reader! Use Ctrl+1/2/3/4 for view options, Ctrl+Space for audio');
});

// Islamic greeting when page loads
window.addEventListener('load', function() {
    setTimeout(() => {
        const greetings = [
            "Assalamu Alaikum! Welcome to Quran study",
            "Barakallahu feeki for choosing to read the Quran",
            "May Allah bless your Quranic journey"
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
            max-width: 400px;
        `;
        
        greeting.innerHTML = `
            <div style="font-size: 2rem; margin-bottom: 1rem;">🕌</div>
            <div>${randomGreeting}</div>
            <div style="font-size: 0.9rem; margin-top: 1rem; color: var(--highlight-green);">
                <i class="fas fa-heart"></i> Islamic Learning Companion
            </div>
        `;
        
        document.body.appendChild(greeting);
        
        // Fade in
        setTimeout(() => greeting.style.opacity = '1', 100);
        
        // Fade out
        setTimeout(() => {
            greeting.style.opacity = '0';
            setTimeout(() => greeting.remove(), 500);
        }, 3000);
    }, 1000);

    // Function to load complete Quran data when available
    function loadCompleteQuranData() {
        if (window.getSurahData && window.allSurahsMetadata) {
            // Use the getSurahData function which provides fallback data for all surahs
            surahData = {};
            for (let i = 1; i <= 114; i++) {
                surahData[i] = window.getSurahData(i);
            }
            console.log('Complete Quran data loaded successfully! All 114 surahs available.');
            showNotification('Complete Quran data loaded - All 114 surahs available!', 'success');
            
            // Update the surah selector with all options
            updateSurahSelector();
        } else {
            // Try again after a short delay
            setTimeout(loadCompleteQuranData, 500);
        }
    }

    // Function to update surah selector with all available surahs
    function updateSurahSelector() {
        const surahSelect = document.getElementById('surahSelect');
        if (surahSelect && surahData) {
            // Clear existing options
            surahSelect.innerHTML = '';
            
            // Add all surahs from the complete data
            for (let i = 1; i <= 114; i++) {
                if (surahData[i]) {
                    const option = document.createElement('option');
                    option.value = i;
                    option.textContent = `${i}. ${surahData[i].name} (${surahData[i].english})`;
                    surahSelect.appendChild(option);
                }
            }
        }
    }

    // Start loading complete Quran data
    loadCompleteQuranData();
    
    // Make functions available globally for testing
    window.showSurah = showSurah;
    window.surahData = surahData;
});

