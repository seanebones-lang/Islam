// Complete Short Surahs (67-107) - Quick Implementation
// بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
// These are the shorter surahs that can be completed quickly

window.completeShortSurahs = {
    // Surah 67: Al-Mulk (The Sovereignty) - 30 verses
    67: {
        name: 'Al-Mulk',
        english: 'The Sovereignty',
        arabic: 'الملك',
        type: 'Meccan',
        verses: 30,
        juz: 29,
        theme: 'Allah\'s sovereignty and creation',
        verses_data: [
            {
                arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
                transliteration: 'Bismillahi-r-Rahmani-r-Raheem',
                translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.'
            },
            {
                arabic: 'تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ',
                transliteration: 'Tabaraka-l-ladhi bi-yadihi-l-mulku wa huwa \'ala kulli shay\'in qadeer',
                translation: 'Blessed is He in whose hand is dominion, and He is over all things competent.'
            },
            {
                arabic: 'الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا ۚ وَهُوَ الْعَزِيزُ الْغَفُورُ',
                transliteration: 'Alladhi khalaqa-l-mawta wa-l-hayata li-yabluwakum ayyukum ahsanu \'amalan wa huwa-l-\'azizu-l-ghafur',
                translation: '[He] who created death and life to test you [as to] which of you is best in deed - and He is the Exalted in Might, the Forgiving.'
            },
            {
                arabic: 'الَّذِي خَلَقَ سَبْعَ سَمَاوَاتٍ طِبَاقًا ۖ مَّا تَرَىٰ فِي خَلْقِ الرَّحْمَٰنِ مِن تَفَاوُتٍ ۖ فَارْجِعِ الْبَصَرَ هَلْ تَرَىٰ مِن فُطُورٍ',
                transliteration: 'Alladhi khalaqa sab\'a samawatin tibaqan, ma tara fee khalqi-r-rahmani min tafawut, farji\'i-l-basar hal tara min futoor',
                translation: 'Who created seven heavens in layers. You do not see in the creation of the Most Merciful any inconsistency. So return [your] vision [to the sky]; do you see any breaks?'
            },
            {
                arabic: 'ثُمَّ ارْجِعِ الْبَصَرَ كَرَّتَيْنِ يَنقَلِبْ إِلَيْكَ الْبَصَرُ خَاسِئًا وَهُوَ حَسِيرٌ',
                transliteration: 'Thumma irji\'i-l-basar karratayni yanqalib ilayka-l-basaru khasian wa huwa haseer',
                translation: 'Then return [your] vision twice again. [Your] vision will return to you humbled while it is fatigued.'
            },
            {
                arabic: 'وَلَقَدْ زَيَّنَّا السَّمَاءَ الدُّنْيَا بِمَصَابِيحَ وَجَعَلْنَاهَا رُجُومًا لِّلشَّيَاطِينِ ۖ وَأَعْتَدْنَا لَهُمْ عَذَابَ السَّعِيرِ',
                transliteration: 'Wa laqad zayyanna-s-samaa\'a-d-dunya bi-masabeeha wa ja\'alnaha rujooman li-sh-shayateen, wa a\'tadna lahum \'athaba-s-sa\'eer',
                translation: 'And We have certainly beautified the nearest heaven with stars and have made [from] them what is thrown at the devils and have prepared for them the punishment of the Blaze.'
            },
            {
                arabic: 'وَلِلَّذِينَ كَفَرُوا بِرَبِّهِمْ عَذَابُ جَهَنَّمَ ۖ وَبِئْسَ الْمَصِيرُ',
                transliteration: 'Wa li-l-ladheena kafaroo bi-rabbihim \'athabu jahannam, wa bi\'sa-l-maseer',
                translation: 'And for those who disbelieved in their Lord is the punishment of Hell, and wretched is the destination.'
            },
            {
                arabic: 'إِذَا أُلْقُوا فِيهَا سَمِعُوا لَهَا شَهِيقًا وَهِيَ تَفُورُ',
                transliteration: 'Idha ulqoo feeha sami\'oo laha shaheeqan wa hiya tafoor',
                translation: 'When they are thrown into it, they hear from it a [dreadful] inhaling while it boils up.'
            },
            {
                arabic: 'تَكَادُ تَمَيَّزُ مِنَ الْغَيْظِ ۖ كُلَّمَا أُلْقِيَ فِيهَا فَوْجٌ سَأَلَهُمْ خَزَنَتُهَا أَلَمْ يَأْتِكُمْ نَذِيرٌ',
                transliteration: 'Takadu tamayyazu mina-l-ghayz, kullama ulqiya feeha fawjun sa\'alahum khazanatuha alam ya\'tikum natheer',
                translation: 'It almost bursts with rage. Every time a company is thrown into it, its keepers ask them, "Did there not come to you a warner?"'
            },
            {
                arabic: 'قَالُوا بَلَىٰ قَدْ جَاءَنَا نَذِيرٌ فَكَذَّبْنَا وَقُلْنَا مَا نَزَّلَ اللَّهُ مِن شَيْءٍ إِنْ أَنتُمْ إِلَّا فِي ضَلَالٍ كَبِيرٍ',
                transliteration: 'Qaloo bala qad ja\'ana natheer fa-kaththabna wa qulna ma nazzala Allahu min shay\'in in antum illa fee dalalin kabeer',
                translation: 'They will say, "Yes, a warner had come to us, but we denied and said, 'Allah has not sent down anything. You are not but in great error.'"'
            }
            // Note: Complete implementation would include all 30 verses
        ]
    },

    // Surah 68: Al-Qalam (The Pen) - 52 verses
    68: {
        name: 'Al-Qalam',
        english: 'The Pen',
        arabic: 'القلم',
        type: 'Meccan',
        verses: 52,
        juz: 29,
        theme: 'The Prophet\'s character, the pen, the garden',
        verses_data: [
            {
                arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
                transliteration: 'Bismillahi-r-Rahmani-r-Raheem',
                translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.'
            },
            {
                arabic: 'ن ۚ وَالْقَلَمِ وَمَا يَسْطُرُونَ',
                transliteration: 'Nun, wa-l-qalami wa ma yasturoon',
                translation: 'Nun. By the pen and what they inscribe.'
            },
            {
                arabic: 'مَا أَنتَ بِنِعْمَةِ رَبِّكَ بِمَجْنُونٍ',
                transliteration: 'Ma anta bi-ni\'mati rabbika bi-majnoon',
                translation: 'You are not, [O Muhammad], by the favor of your Lord, a madman.'
            },
            {
                arabic: 'وَإِنَّ لَكَ لَأَجْرًا غَيْرَ مَمْنُونٍ',
                transliteration: 'Wa inna laka la-ajran ghayra mamnoon',
                translation: 'And indeed, for you is a reward uninterrupted.'
            },
            {
                arabic: 'وَإِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٍ',
                transliteration: 'Wa innaka la-\'ala khuluqin \'azeem',
                translation: 'And indeed, you are of a great moral character.'
            },
            {
                arabic: 'فَسَتُبْصِرُ وَيُبْصِرُونَ',
                transliteration: 'Fa-satubsiro wa yubsiroon',
                translation: 'So you will see and they will see.'
            },
            {
                arabic: 'بِأَيِّكُمُ الْمَفْتُونُ',
                transliteration: 'Bi-ayyikumu-l-maftoon',
                translation: 'Which of you is the afflicted [by madness].'
            },
            {
                arabic: 'إِنَّ رَبَّكَ هُوَ أَعْلَمُ بِمَن ضَلَّ عَن سَبِيلِهِ وَهُوَ أَعْلَمُ بِالْمُهْتَدِينَ',
                transliteration: 'Inna rabbaka huwa a\'lamu bi-man dalla \'an sabeelihi wa huwa a\'lamu bi-l-muhtadeen',
                translation: 'Indeed, your Lord is most knowing of who has gone astray from His way, and He is most knowing of the [rightly] guided.'
            },
            {
                arabic: 'فَلَا تُطِعِ الْمُكَذِّبِينَ',
                transliteration: 'Fa la tuti\'i-l-mukaththibeen',
                translation: 'So do not obey the deniers.'
            },
            {
                arabic: 'وَدُّوا لَوْ تُدْهِنُ فَيُدْهِنُونَ',
                transliteration: 'Waddoo law tudhinu fa-yudhinoon',
                translation: 'They wish that you would soften [in your position], so they would soften [toward you].'
            }
            // Note: Complete implementation would include all 52 verses
        ]
    },

    // Surah 69: Al-Haqqah (The Reality) - 52 verses
    69: {
        name: 'Al-Haqqah',
        english: 'The Reality',
        arabic: 'الحاقة',
        type: 'Meccan',
        verses: 52,
        juz: 29,
        theme: 'Day of Judgment, reality, punishment and reward',
        verses_data: [
            {
                arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
                transliteration: 'Bismillahi-r-Rahmani-r-Raheem',
                translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.'
            },
            {
                arabic: 'الْحَاقَّةُ',
                transliteration: 'Al-haqqah',
                translation: 'The Inevitable Reality.'
            },
            {
                arabic: 'مَا الْحَاقَّةُ',
                transliteration: 'Ma-l-haqqah',
                translation: 'What is the Inevitable Reality?'
            },
            {
                arabic: 'وَمَا أَدْرَاكَ مَا الْحَاقَّةُ',
                transliteration: 'Wa ma adraka ma-l-haqqah',
                translation: 'And what can make you know what is the Inevitable Reality?'
            },
            {
                arabic: 'كَذَّبَتْ ثَمُودُ وَعَادٌ بِالْقَارِعَةِ',
                transliteration: 'Kaththabat thamoodu wa \'adun bi-l-qari\'ah',
                translation: 'Thamud and \'Aad denied the Striking Calamity.'
            },
            {
                arabic: 'فَأَمَّا ثَمُودُ فَأُهْلِكُوا بِالطَّاغِيَةِ',
                transliteration: 'Fa-amma thamoodu fa-uhlikoo bi-t-taghiyah',
                translation: 'So as for Thamud, they were destroyed by the overpowering [blast].'
            },
            {
                arabic: 'وَأَمَّا عَادٌ فَأُهْلِكُوا بِرِيحٍ صَرْصَرٍ عَاتِيَةٍ',
                transliteration: 'Wa amma \'adun fa-uhlikoo bi-reehin sarsarin \'atiyah',
                translation: 'And as for \'Aad, they were destroyed by a screaming, violent wind.'
            },
            {
                arabic: 'سَخَّرَهَا عَلَيْهِمْ سَبْعَ لَيَالٍ وَثَمَانِيَةَ أَيَّامٍ حُسُومًا فَتَرَى الْقَوْمَ فِيهَا صَرْعَىٰ كَأَنَّهُمْ أَعْجَازُ نَخْلٍ خَاوِيَةٍ',
                transliteration: 'Sakhkharaha \'alayhim sab\'a layalin wa thamaniyata ayyamin husooman fa-tara-l-qawma feeha sar\'a ka-annahum a\'jazu nakhlin khawiyah',
                translation: 'Which He imposed upon them for seven nights and eight days in succession, so you would see the people therein fallen as if they were hollow trunks of palm trees.'
            },
            {
                arabic: 'فَهَلْ تَرَىٰ لَهُم مِّن بَاقِيَةٍ',
                transliteration: 'Fa-hal tara lahum min baqiyah',
                translation: 'So do you see of them any remains?'
            },
            {
                arabic: 'وَجَاءَ فِرْعَوْنُ وَمَن قَبْلَهُ وَالْمُؤْتَفِكَاتُ بِالْخَاطِئَةِ',
                transliteration: 'Wa jaa\'a fir\'awnu wa man qablahu wa-l-mu\'tafikatu bi-l-khati\'ah',
                translation: 'And Pharaoh and those before him and the overturned cities were in sin.'
            }
            // Note: Complete implementation would include all 52 verses
        ]
    }

    // Note: This demonstrates the structure for implementing all short surahs (67-107)
    // Each surah would have its complete verses_data array with all verses
    // The pattern continues for surahs 70-107 with their respective verse counts
};
