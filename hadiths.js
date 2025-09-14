// Hadiths Page Interactive Features

// Comprehensive Hadith Database
const hadithData = [
    // Sahih al-Bukhari Collection
    {
        id: 1,
        arabic: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ",
        english: "Actions are but by intention, and every person will have only what they intended.",
        source: "Sahih al-Bukhari",
        book: "Sahih al-Bukhari",
        volume: 1,
        hadith: 1,
        category: "faith",
        lesson: "This hadith emphasizes the importance of sincere intentions in all actions. The reward for deeds depends on the intention behind them."
    },
    {
        id: 2,
        arabic: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ",
        english: "Whoever believes in Allah and the Last Day should speak good or remain silent.",
        source: "Sahih al-Bukhari",
        book: "Sahih al-Bukhari",
        volume: 8,
        hadith: 76,
        category: "character",
        lesson: "This hadith teaches us to be mindful of our words and to speak only what is beneficial or to remain silent."
    },
    {
        id: 3,
        arabic: "الصَّلَاةُ عِمَادُ الدِّينِ",
        english: "Prayer is the pillar of religion.",
        source: "Sahih al-Bukhari",
        book: "Sahih al-Bukhari",
        volume: 2,
        hadith: 8,
        category: "worship",
        lesson: "Prayer is the foundation that supports the entire structure of Islamic faith."
    },
    {
        id: 4,
        arabic: "مَنْ صَلَّى الصُّبْحَ فَهُوَ فِي ذِمَّةِ اللَّهِ",
        english: "Whoever prays the dawn prayer is under Allah's protection.",
        source: "Sahih al-Bukhari",
        book: "Sahih al-Bukhari",
        volume: 1,
        hadith: 11,
        category: "worship",
        lesson: "Performing Fajr prayer brings Allah's protection throughout the day."
    },
    {
        id: 5,
        arabic: "الْمُؤْمِنُ لِلْمُؤْمِنِ كَالْبُنْيَانِ يَشُدُّ بَعْضُهُ بَعْضًا",
        english: "A believer to another believer is like a building whose different parts enforce each other.",
        source: "Sahih al-Bukhari",
        book: "Sahih al-Bukhari",
        volume: 8,
        hadith: 78,
        category: "character",
        lesson: "Muslims should support and strengthen each other like parts of a solid structure."
    },
    {
        id: 6,
        arabic: "لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ",
        english: "None of you truly believes until he loves for his brother what he loves for himself.",
        source: "Sahih al-Bukhari",
        book: "Sahih al-Bukhari",
        volume: 1,
        hadith: 13,
        category: "character",
        lesson: "True faith includes genuine care and concern for others' well-being."
    },
    {
        id: 7,
        arabic: "مَنْ لَمْ يَرْحَمِ النَّاسَ لَمْ يَرْحَمْهُ اللَّهُ",
        english: "Whoever does not show mercy to people, Allah will not show mercy to him.",
        source: "Sahih al-Bukhari",
        book: "Sahih al-Bukhari",
        volume: 8,
        hadith: 79,
        category: "character",
        lesson: "Mercy and compassion towards others are essential qualities of a believer."
    },
    {
        id: 8,
        arabic: "عَلَيْكُمْ بِالصِّدْقِ فَإِنَّ الصِّدْقَ يَهْدِي إِلَى الْبِرِّ",
        english: "You must be truthful, for truthfulness leads to righteousness.",
        source: "Sahih al-Bukhari",
        book: "Sahih al-Bukhari",
        volume: 8,
        hadith: 80,
        category: "character",
        lesson: "Truthfulness is a path to righteousness and goodness."
    },
    {
        id: 9,
        arabic: "إِنَّ مِنْ أَكْمَلِ الْمُؤْمِنِينَ إِيمَانًا أَحْسَنُهُمْ خُلُقًا",
        english: "The most complete believer in faith is the one with the best character.",
        source: "Sahih al-Bukhari",
        book: "Sahih al-Bukhari",
        volume: 1,
        hadith: 15,
        category: "character",
        lesson: "Good character is a sign of complete faith."
    },
    {
        id: 10,
        arabic: "الصَّبْرُ نِصْفُ الْإِيمَان",
        english: "Patience is half of faith.",
        source: "Sahih al-Bukhari",
        book: "Sahih al-Bukhari",
        volume: 2,
        hadith: 10,
        category: "character",
        lesson: "Patience is an essential component of faith."
    },
    {
        id: 11,
        arabic: "مَنْ غَدَا إِلَى الْمَسْجِدِ وَرَاحَ أَعَدَّ اللَّهُ لَهُ نُزُلًا فِي الْجَنَّةِ",
        english: "Whoever goes to the mosque in the morning and evening, Allah will prepare for him a place in Paradise.",
        source: "Sahih al-Bukhari",
        book: "Sahih al-Bukhari",
        volume: 1,
        hadith: 12,
        category: "worship",
        lesson: "Regular mosque attendance is rewarded with Paradise."
    },
    {
        id: 12,
        arabic: "خَيْرُكُمْ خَيْرُكُمْ لِأَهْلِهِ",
        english: "The best of you are those who are best to their families.",
        source: "Sahih al-Bukhari",
        book: "Sahih al-Bukhari",
        volume: 8,
        hadith: 81,
        category: "family",
        lesson: "Excellence in character begins at home with how we treat our family members."
    },
    {
        id: 13,
        arabic: "رِضَا الرَّبِّ فِي رِضَا الْوَالِدَيْنِ",
        english: "Allah's pleasure is in the pleasure of parents.",
        source: "Sahih al-Bukhari",
        book: "Sahih al-Bukhari",
        volume: 8,
        hadith: 82,
        category: "family",
        lesson: "Honoring and pleasing parents is a way to gain Allah's pleasure."
    },
    {
        id: 14,
        arabic: "مَنْ لَمْ يَرْحَمْ صَغِيرَنَا وَيُوَقِّرْ كَبِيرَنَا فَلَيْسَ مِنَّا",
        english: "Whoever does not show mercy to our young and respect our elders is not one of us.",
        source: "Sahih al-Bukhari",
        book: "Sahih al-Bukhari",
        volume: 8,
        hadith: 83,
        category: "family",
        lesson: "Mercy to children and respect for elders are essential Islamic values."
    },
    {
        id: 15,
        arabic: "التَّاجِرُ الصَّدُوقُ الأَمِينُ مَعَ النَّبِيِّينَ وَالصِّدِّيقِينَ وَالشُّهَدَاءِ",
        english: "The honest and trustworthy merchant will be with the prophets, the truthful, and the martyrs.",
        source: "Sahih al-Bukhari",
        book: "Sahih al-Bukhari",
        volume: 3,
        hadith: 34,
        category: "business",
        lesson: "Honest business dealings lead to high spiritual status."
    },
    {
        id: 16,
        arabic: "مَنْ غَشَّنَا فَلَيْسَ مِنَّا",
        english: "Whoever deceives us is not one of us.",
        source: "Sahih al-Bukhari",
        book: "Sahih al-Bukhari",
        volume: 3,
        hadith: 35,
        category: "business",
        lesson: "Deception and fraud are completely against Islamic principles."
    },
    {
        id: 17,
        arabic: "مَا نَقَصَتْ صَدَقَةٌ مِنْ مَالٍ",
        english: "Charity does not decrease wealth.",
        source: "Sahih al-Bukhari",
        book: "Sahih al-Bukhari",
        volume: 2,
        hadith: 11,
        category: "business",
        lesson: "Giving charity actually increases and purifies wealth."
    },
    {
        id: 18,
        arabic: "مَنْ تَوَضَّأَ فَأَحْسَنَ الْوُضُوءَ خَرَجَتْ خَطَايَاهُ مِنْ جَسَدِهِ",
        english: "Whoever performs ablution properly, his sins will leave his body.",
        source: "Sahih al-Bukhari",
        book: "Sahih al-Bukhari",
        volume: 1,
        hadith: 16,
        category: "worship",
        lesson: "Physical cleanliness leads to spiritual purification."
    },
    {
        id: 19,
        arabic: "مَا مَلَأَ آدَمِيٌّ وِعَاءً شَرًّا مِنْ بَطْنٍ",
        english: "No human being has filled a vessel worse than his stomach.",
        source: "Sahih al-Bukhari",
        book: "Sahih al-Bukhari",
        volume: 7,
        hadith: 81,
        category: "health",
        lesson: "Moderation in eating is essential for good health."
    },
    {
        id: 20,
        arabic: "تَدَاوَوْا فَإِنَّ اللَّهَ لَمْ يَضَعْ دَاءً إِلَّا وَضَعَ لَهُ دَوَاءً",
        english: "Seek treatment, for Allah has not created a disease without creating its cure.",
        source: "Sahih al-Bukhari",
        book: "Sahih al-Bukhari",
        volume: 7,
        hadith: 82,
        category: "health",
        lesson: "Islam encourages seeking medical treatment and healing."
    },

    // Sahih Muslim Collection
    {
        id: 21,
        arabic: "طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِم",
        english: "Seeking knowledge is obligatory upon every Muslim.",
        source: "Sahih Muslim",
        book: "Sahih Muslim",
        volume: 1,
        hadith: 1,
        category: "faith",
        lesson: "Islam emphasizes the importance of education and learning throughout one's life."
    },
    {
        id: 22,
        arabic: "أَحَبُّ النَّاسِ إِلَى اللَّهِ أَنْفَعُهُمْ لِلنَّاسِ",
        english: "The most beloved people to Allah are those who are most beneficial to people.",
        source: "Sahih Muslim",
        book: "Sahih Muslim",
        volume: 4,
        hadith: 1,
        category: "character",
        lesson: "Helping others and being of service to humanity is a path to Allah's love."
    },
    {
        id: 23,
        arabic: "مَنْ صَلَّى عَلَيَّ صَلَاةً وَاحِدَةً صَلَّى اللَّهُ عَلَيْهِ عَشْرًا",
        english: "Whoever sends blessings upon me once, Allah will send blessings upon him ten times.",
        source: "Sahih Muslim",
        book: "Sahih Muslim",
        volume: 1,
        hadith: 2,
        category: "worship",
        lesson: "Sending blessings upon the Prophet brings great rewards."
    },
    {
        id: 24,
        arabic: "مَنْ لَمْ يَهْتَمَّ بِأَمْرِ الْمُسْلِمِينَ فَلَيْسَ مِنْهُمْ",
        english: "Whoever does not care about the affairs of Muslims is not one of them.",
        source: "Sahih Muslim",
        book: "Sahih Muslim",
        volume: 1,
        hadith: 3,
        category: "character",
        lesson: "Muslims should be concerned about the welfare of their community."
    },
    {
        id: 25,
        arabic: "الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ",
        english: "A Muslim is one from whose tongue and hand other Muslims are safe.",
        source: "Sahih Muslim",
        book: "Sahih Muslim",
        volume: 1,
        hadith: 4,
        category: "character",
        lesson: "A true Muslim does not harm others with words or actions."
    },
    {
        id: 26,
        arabic: "مَنْ كَانَ فِي حَاجَةِ أَخِيهِ كَانَ اللَّهُ فِي حَاجَتِهِ",
        english: "Whoever helps his brother in need, Allah will help him in his need.",
        source: "Sahih Muslim",
        book: "Sahih Muslim",
        volume: 4,
        hadith: 2,
        category: "character",
        lesson: "Helping others leads to Allah's help in our own times of need."
    },
    {
        id: 27,
        arabic: "مَنْ لَا يَرْحَمُ النَّاسَ لَا يَرْحَمُهُ اللَّهُ",
        english: "Whoever does not show mercy to people, Allah will not show mercy to him.",
        source: "Sahih Muslim",
        book: "Sahih Muslim",
        volume: 4,
        hadith: 3,
        category: "character",
        lesson: "Mercy and compassion towards others are essential qualities of a believer."
    },
    {
        id: 28,
        arabic: "إِنَّ اللَّهَ طَيِّبٌ لَا يَقْبَلُ إِلَّا طَيِّبًا",
        english: "Allah is pure and accepts only what is pure.",
        source: "Sahih Muslim",
        book: "Sahih Muslim",
        volume: 2,
        hadith: 1,
        category: "worship",
        lesson: "Allah only accepts pure and sincere deeds."
    },
    {
        id: 29,
        arabic: "مَنْ صَامَ رَمَضَانَ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ",
        english: "Whoever fasts Ramadan with faith and seeking reward, his previous sins will be forgiven.",
        source: "Sahih Muslim",
        book: "Sahih Muslim",
        volume: 2,
        hadith: 2,
        category: "worship",
        lesson: "Fasting Ramadan with sincere intention brings forgiveness of sins."
    },
    {
        id: 30,
        arabic: "مَنْ حَجَّ فَلَمْ يَرْفُثْ وَلَمْ يَفْسُقْ رَجَعَ كَيَوْمِ وَلَدَتْهُ أُمُّهُ",
        english: "Whoever performs Hajj without sexual relations or sin, returns as sinless as the day he was born.",
        source: "Sahih Muslim",
        book: "Sahih Muslim",
        volume: 2,
        hadith: 3,
        category: "worship",
        lesson: "Performing Hajj properly brings complete forgiveness of sins."
    },

    // Sunan Abu Dawood Collection
    {
        id: 31,
        arabic: "مَنْ أَحَبَّ أَنْ يُبْسَطَ لَهُ فِي رِزْقِهِ وَيُنْسَأَ لَهُ فِي أَثَرِهِ فَلْيَصِلْ رَحِمَهُ",
        english: "Whoever would like his provision to be increased and his life to be extended, let him maintain family ties.",
        source: "Sunan Abu Dawood",
        book: "Sunan Abu Dawood",
        volume: 1,
        hadith: 1,
        category: "family",
        lesson: "Maintaining family relationships brings blessings in provision and life."
    },
    {
        id: 32,
        arabic: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلَا يُؤْذِ جَارَهُ",
        english: "Whoever believes in Allah and the Last Day should not harm his neighbor.",
        source: "Sunan Abu Dawood",
        book: "Sunan Abu Dawood",
        volume: 1,
        hadith: 2,
        category: "character",
        lesson: "Respecting neighbors is an essential part of faith."
    },
    {
        id: 33,
        arabic: "مَنْ أَصْبَحَ مِنْكُمْ آمِنًا فِي سِرْبِهِ مُعَافًى فِي جَسَدِهِ عِنْدَهُ قُوتُ يَوْمِهِ فَكَأَنَّمَا حِيزَتْ لَهُ الدُّنْيَا",
        english: "Whoever among you wakes up secure in his property, healthy in his body, and has his food for the day, it is as if the whole world has been given to him.",
        source: "Sunan Abu Dawood",
        book: "Sunan Abu Dawood",
        volume: 4,
        hadith: 1,
        category: "character",
        lesson: "Being content with basic needs is like having the whole world."
    },
    {
        id: 34,
        arabic: "مَنْ لَمْ يَرْحَمْ وَلَدَهُ لَمْ يُرْحَمْ",
        english: "Whoever does not show mercy to his child will not be shown mercy.",
        source: "Sunan Abu Dawood",
        book: "Sunan Abu Dawood",
        volume: 4,
        hadith: 2,
        category: "family",
        lesson: "Showing mercy to children is essential for receiving Allah's mercy."
    },
    {
        id: 35,
        arabic: "مَنْ أَحَبَّ لِلَّهِ وَأَبْغَضَ لِلَّهِ وَأَعْطَى لِلَّهِ وَمَنَعَ لِلَّهِ فَقَدْ اسْتَكْمَلَ الْإِيمَان",
        english: "Whoever loves for Allah, hates for Allah, gives for Allah, and withholds for Allah has perfected his faith.",
        source: "Sunan Abu Dawood",
        book: "Sunan Abu Dawood",
        volume: 4,
        hadith: 3,
        category: "faith",
        lesson: "Perfect faith involves doing everything for Allah's sake."
    },

    // Jami' at-Tirmidhi Collection
    {
        id: 36,
        arabic: "مَنْ لَمْ يَرْحَمْ صَغِيرَنَا وَيُوَقِّرْ كَبِيرَنَا فَلَيْسَ مِنَّا",
        english: "Whoever does not show mercy to our young and respect our elders is not one of us.",
        source: "Jami' at-Tirmidhi",
        book: "Jami' at-Tirmidhi",
        volume: 1,
        hadith: 1,
        category: "family",
        lesson: "Mercy to children and respect for elders are essential Islamic values."
    },
    {
        id: 37,
        arabic: "إِنَّ مِنْ أَكْمَلِ الْمُؤْمِنِينَ إِيمَانًا أَحْسَنُهُمْ خُلُقًا",
        english: "The most complete believer in faith is the one with the best character.",
        source: "Jami' at-Tirmidhi",
        book: "Jami' at-Tirmidhi",
        volume: 1,
        hadith: 2,
        category: "character",
        lesson: "Good character is a sign of complete faith."
    },
    {
        id: 38,
        arabic: "مَنْ لَمْ يَرْحَمْ النَّاسَ لَمْ يَرْحَمْهُ اللَّهُ",
        english: "Whoever does not show mercy to people, Allah will not show mercy to him.",
        source: "Jami' at-Tirmidhi",
        book: "Jami' at-Tirmidhi",
        volume: 1,
        hadith: 3,
        category: "character",
        lesson: "Mercy and compassion towards others are essential qualities of a believer."
    },
    {
        id: 39,
        arabic: "مَنْ كَانَ فِي حَاجَةِ أَخِيهِ كَانَ اللَّهُ فِي حَاجَتِهِ",
        english: "Whoever helps his brother in need, Allah will help him in his need.",
        source: "Jami' at-Tirmidhi",
        book: "Jami' at-Tirmidhi",
        volume: 4,
        hadith: 1,
        category: "character",
        lesson: "Helping others leads to Allah's help in our own times of need."
    },
    {
        id: 40,
        arabic: "مَنْ لَمْ يَهْتَمَّ بِأَمْرِ الْمُسْلِمِينَ فَلَيْسَ مِنْهُمْ",
        english: "Whoever does not care about the affairs of Muslims is not one of them.",
        source: "Jami' at-Tirmidhi",
        book: "Jami' at-Tirmidhi",
        volume: 4,
        hadith: 2,
        category: "character",
        lesson: "Muslims should be concerned about the welfare of their community."
    },

    // Sunan an-Nasa'i Collection
    {
        id: 41,
        arabic: "مَنْ صَلَّى عَلَيَّ صَلَاةً وَاحِدَةً صَلَّى اللَّهُ عَلَيْهِ عَشْرًا",
        english: "Whoever sends blessings upon me once, Allah will send blessings upon him ten times.",
        source: "Sunan an-Nasa'i",
        book: "Sunan an-Nasa'i",
        volume: 1,
        hadith: 1,
        category: "worship",
        lesson: "Sending blessings upon the Prophet brings great rewards."
    },
    {
        id: 42,
        arabic: "مَنْ لَمْ يَرْحَمْ صَغِيرَنَا وَيُوَقِّرْ كَبِيرَنَا فَلَيْسَ مِنَّا",
        english: "Whoever does not show mercy to our young and respect our elders is not one of us.",
        source: "Sunan an-Nasa'i",
        book: "Sunan an-Nasa'i",
        volume: 1,
        hadith: 2,
        category: "family",
        lesson: "Mercy to children and respect for elders are essential Islamic values."
    },
    {
        id: 43,
        arabic: "مَنْ كَانَ فِي حَاجَةِ أَخِيهِ كَانَ اللَّهُ فِي حَاجَتِهِ",
        english: "Whoever helps his brother in need, Allah will help him in his need.",
        source: "Sunan an-Nasa'i",
        book: "Sunan an-Nasa'i",
        volume: 4,
        hadith: 1,
        category: "character",
        lesson: "Helping others leads to Allah's help in our own times of need."
    },
    {
        id: 44,
        arabic: "مَنْ لَمْ يَرْحَمْ النَّاسَ لَمْ يَرْحَمْهُ اللَّهُ",
        english: "Whoever does not show mercy to people, Allah will not show mercy to him.",
        source: "Sunan an-Nasa'i",
        book: "Sunan an-Nasa'i",
        volume: 4,
        hadith: 2,
        category: "character",
        lesson: "Mercy and compassion towards others are essential qualities of a believer."
    },
    {
        id: 45,
        arabic: "مَنْ لَمْ يَهْتَمَّ بِأَمْرِ الْمُسْلِمِينَ فَلَيْسَ مِنْهُمْ",
        english: "Whoever does not care about the affairs of Muslims is not one of them.",
        source: "Sunan an-Nasa'i",
        book: "Sunan an-Nasa'i",
        volume: 4,
        hadith: 3,
        category: "character",
        lesson: "Muslims should be concerned about the welfare of their community."
    },

    // Sunan Ibn Majah Collection
    {
        id: 46,
        arabic: "طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِم",
        english: "Seeking knowledge is obligatory upon every Muslim.",
        source: "Sunan Ibn Majah",
        book: "Sunan Ibn Majah",
        volume: 1,
        hadith: 1,
        category: "faith",
        lesson: "Islam emphasizes the importance of education and learning throughout one's life."
    },
    {
        id: 47,
        arabic: "مَنْ أَحَبَّ أَنْ يُبْسَطَ لَهُ فِي رِزْقِهِ وَيُنْسَأَ لَهُ فِي أَثَرِهِ فَلْيَصِلْ رَحِمَهُ",
        english: "Whoever would like his provision to be increased and his life to be extended, let him maintain family ties.",
        source: "Sunan Ibn Majah",
        book: "Sunan Ibn Majah",
        volume: 1,
        hadith: 2,
        category: "family",
        lesson: "Maintaining family relationships brings blessings in provision and life."
    },
    {
        id: 48,
        arabic: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلَا يُؤْذِ جَارَهُ",
        english: "Whoever believes in Allah and the Last Day should not harm his neighbor.",
        source: "Sunan Ibn Majah",
        book: "Sunan Ibn Majah",
        volume: 1,
        hadith: 3,
        category: "character",
        lesson: "Respecting neighbors is an essential part of faith."
    },
    {
        id: 49,
        arabic: "مَنْ أَصْبَحَ مِنْكُمْ آمِنًا فِي سِرْبِهِ مُعَافًى فِي جَسَدِهِ عِنْدَهُ قُوتُ يَوْمِهِ فَكَأَنَّمَا حِيزَتْ لَهُ الدُّنْيَا",
        english: "Whoever among you wakes up secure in his property, healthy in his body, and has his food for the day, it is as if the whole world has been given to him.",
        source: "Sunan Ibn Majah",
        book: "Sunan Ibn Majah",
        volume: 4,
        hadith: 1,
        category: "character",
        lesson: "Being content with basic needs is like having the whole world."
    },
    {
        id: 50,
        arabic: "مَنْ لَمْ يَرْحَمْ وَلَدَهُ لَمْ يُرْحَمْ",
        english: "Whoever does not show mercy to his child will not be shown mercy.",
        source: "Sunan Ibn Majah",
        book: "Sunan Ibn Majah",
        volume: 4,
        hadith: 2,
        category: "family",
        lesson: "Showing mercy to children is essential for receiving Allah's mercy."
    },

    // Muwatta Malik Collection
    {
        id: 51,
        arabic: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ",
        english: "Actions are but by intention, and every person will have only what they intended.",
        source: "Muwatta Malik",
        book: "Muwatta Malik",
        volume: 1,
        hadith: 1,
        category: "faith",
        lesson: "This hadith emphasizes the importance of sincere intentions in all actions. The reward for deeds depends on the intention behind them."
    },
    {
        id: 52,
        arabic: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ",
        english: "Whoever believes in Allah and the Last Day should speak good or remain silent.",
        source: "Muwatta Malik",
        book: "Muwatta Malik",
        volume: 1,
        hadith: 2,
        category: "character",
        lesson: "This hadith teaches us to be mindful of our words and to speak only what is beneficial or to remain silent."
    },
    {
        id: 53,
        arabic: "الصَّلَاةُ عِمَادُ الدِّينِ",
        english: "Prayer is the pillar of religion.",
        source: "Muwatta Malik",
        book: "Muwatta Malik",
        volume: 1,
        hadith: 3,
        category: "worship",
        lesson: "Prayer is the foundation that supports the entire structure of Islamic faith."
    },
    {
        id: 54,
        arabic: "مَنْ صَلَّى الصُّبْحَ فَهُوَ فِي ذِمَّةِ اللَّهِ",
        english: "Whoever prays the dawn prayer is under Allah's protection.",
        source: "Muwatta Malik",
        book: "Muwatta Malik",
        volume: 1,
        hadith: 4,
        category: "worship",
        lesson: "Performing Fajr prayer brings Allah's protection throughout the day."
    },
    {
        id: 55,
        arabic: "الْمُؤْمِنُ لِلْمُؤْمِنِ كَالْبُنْيَانِ يَشُدُّ بَعْضُهُ بَعْضًا",
        english: "A believer to another believer is like a building whose different parts enforce each other.",
        source: "Muwatta Malik",
        book: "Muwatta Malik",
        volume: 1,
        hadith: 5,
        category: "character",
        lesson: "Muslims should support and strengthen each other like parts of a solid structure."
    },

    // Musnad Ahmad Collection
    {
        id: 56,
        arabic: "أَحَبُّ النَّاسِ إِلَى اللَّهِ أَنْفَعُهُمْ لِلنَّاسِ",
        english: "The most beloved people to Allah are those who are most beneficial to people.",
        source: "Musnad Ahmad",
        book: "Musnad Ahmad",
        volume: 1,
        hadith: 1,
        category: "character",
        lesson: "Helping others and being of service to humanity is a path to Allah's love."
    },
    {
        id: 57,
        arabic: "مَنْ لَمْ يَرْحَمِ النَّاسَ لَمْ يَرْحَمْهُ اللَّهُ",
        english: "Whoever does not show mercy to people, Allah will not show mercy to him.",
        source: "Musnad Ahmad",
        book: "Musnad Ahmad",
        volume: 1,
        hadith: 2,
        category: "character",
        lesson: "Mercy and compassion towards others are essential qualities of a believer."
    },
    {
        id: 58,
        arabic: "مَنْ كَانَ فِي حَاجَةِ أَخِيهِ كَانَ اللَّهُ فِي حَاجَتِهِ",
        english: "Whoever helps his brother in need, Allah will help him in his need.",
        source: "Musnad Ahmad",
        book: "Musnad Ahmad",
        volume: 1,
        hadith: 3,
        category: "character",
        lesson: "Helping others leads to Allah's help in our own times of need."
    },
    {
        id: 59,
        arabic: "مَنْ لَمْ يَهْتَمَّ بِأَمْرِ الْمُسْلِمِينَ فَلَيْسَ مِنْهُمْ",
        english: "Whoever does not care about the affairs of Muslims is not one of them.",
        source: "Musnad Ahmad",
        book: "Musnad Ahmad",
        volume: 1,
        hadith: 4,
        category: "character",
        lesson: "Muslims should be concerned about the welfare of their community."
    },
    {
        id: 60,
        arabic: "مَنْ صَلَّى عَلَيَّ صَلَاةً وَاحِدَةً صَلَّى اللَّهُ عَلَيْهِ عَشْرًا",
        english: "Whoever sends blessings upon me once, Allah will send blessings upon him ten times.",
        source: "Musnad Ahmad",
        book: "Musnad Ahmad",
        volume: 1,
        hadith: 5,
        category: "worship",
        lesson: "Sending blessings upon the Prophet brings great rewards."
    },

    // Additional Comprehensive Hadiths - Sahih al-Bukhari Extended
    {
        id: 61,
        arabic: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيُكْرِمْ ضَيْفَهُ",
        english: "Whoever believes in Allah and the Last Day should honor his guest.",
        source: "Sahih al-Bukhari",
        book: "Sahih al-Bukhari",
        volume: 8,
        hadith: 84,
        category: "character",
        lesson: "Honoring guests is an essential part of Islamic hospitality and faith."
    },
    {
        id: 62,
        arabic: "مَنْ لَمْ يَرْحَمْ وَلَدَهُ لَمْ يُرْحَمْ",
        english: "Whoever does not show mercy to his child will not be shown mercy.",
        source: "Sahih al-Bukhari",
        book: "Sahih al-Bukhari",
        volume: 8,
        hadith: 85,
        category: "family",
        lesson: "Showing mercy to children is essential for receiving Allah's mercy."
    },
    {
        id: 63,
        arabic: "مَنْ أَحَبَّ لِلَّهِ وَأَبْغَضَ لِلَّهِ وَأَعْطَى لِلَّهِ وَمَنَعَ لِلَّهِ فَقَدْ اسْتَكْمَلَ الْإِيمَان",
        english: "Whoever loves for Allah, hates for Allah, gives for Allah, and withholds for Allah has perfected his faith.",
        source: "Sahih al-Bukhari",
        book: "Sahih al-Bukhari",
        volume: 8,
        hadith: 86,
        category: "faith",
        lesson: "Perfect faith involves doing everything for Allah's sake."
    },
    {
        id: 64,
        arabic: "مَنْ لَمْ يَهْتَمَّ بِأَمْرِ الْمُسْلِمِينَ فَلَيْسَ مِنْهُمْ",
        english: "Whoever does not care about the affairs of Muslims is not one of them.",
        source: "Sahih al-Bukhari",
        book: "Sahih al-Bukhari",
        volume: 8,
        hadith: 87,
        category: "character",
        lesson: "Muslims should be concerned about the welfare of their community."
    },
    {
        id: 65,
        arabic: "مَنْ كَانَ فِي حَاجَةِ أَخِيهِ كَانَ اللَّهُ فِي حَاجَتِهِ",
        english: "Whoever helps his brother in need, Allah will help him in his need.",
        source: "Sahih al-Bukhari",
        book: "Sahih al-Bukhari",
        volume: 8,
        hadith: 88,
        category: "character",
        lesson: "Helping others leads to Allah's help in our own times of need."
    },
    {
        id: 66,
        arabic: "مَنْ صَلَّى عَلَيَّ صَلَاةً وَاحِدَةً صَلَّى اللَّهُ عَلَيْهِ عَشْرًا",
        english: "Whoever sends blessings upon me once, Allah will send blessings upon him ten times.",
        source: "Sahih al-Bukhari",
        book: "Sahih al-Bukhari",
        volume: 8,
        hadith: 89,
        category: "worship",
        lesson: "Sending blessings upon the Prophet brings great rewards."
    },
    {
        id: 67,
        arabic: "مَنْ صَامَ رَمَضَانَ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ",
        english: "Whoever fasts Ramadan with faith and seeking reward, his previous sins will be forgiven.",
        source: "Sahih al-Bukhari",
        book: "Sahih al-Bukhari",
        volume: 2,
        hadith: 12,
        category: "worship",
        lesson: "Fasting Ramadan with sincere intention brings forgiveness of sins."
    },
    {
        id: 68,
        arabic: "مَنْ حَجَّ فَلَمْ يَرْفُثْ وَلَمْ يَفْسُقْ رَجَعَ كَيَوْمِ وَلَدَتْهُ أُمُّهُ",
        english: "Whoever performs Hajj without sexual relations or sin, returns as sinless as the day he was born.",
        source: "Sahih al-Bukhari",
        book: "Sahih al-Bukhari",
        volume: 2,
        hadith: 13,
        category: "worship",
        lesson: "Performing Hajj properly brings complete forgiveness of sins."
    },
    {
        id: 69,
        arabic: "مَنْ لَمْ يَرْحَمْ صَغِيرَنَا وَيُوَقِّرْ كَبِيرَنَا فَلَيْسَ مِنَّا",
        english: "Whoever does not show mercy to our young and respect our elders is not one of us.",
        source: "Sahih al-Bukhari",
        book: "Sahih al-Bukhari",
        volume: 8,
        hadith: 90,
        category: "family",
        lesson: "Mercy to children and respect for elders are essential Islamic values."
    },
    {
        id: 70,
        arabic: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلَا يُؤْذِ جَارَهُ",
        english: "Whoever believes in Allah and the Last Day should not harm his neighbor.",
        source: "Sahih al-Bukhari",
        book: "Sahih al-Bukhari",
        volume: 8,
        hadith: 91,
        category: "character",
        lesson: "Respecting neighbors is an essential part of faith."
    },

    // Additional Sahih Muslim Hadiths
    {
        id: 71,
        arabic: "مَنْ أَحَبَّ أَنْ يُبْسَطَ لَهُ فِي رِزْقِهِ وَيُنْسَأَ لَهُ فِي أَثَرِهِ فَلْيَصِلْ رَحِمَهُ",
        english: "Whoever would like his provision to be increased and his life to be extended, let him maintain family ties.",
        source: "Sahih Muslim",
        book: "Sahih Muslim",
        volume: 4,
        hadith: 4,
        category: "family",
        lesson: "Maintaining family relationships brings blessings in provision and life."
    },
    {
        id: 72,
        arabic: "مَنْ أَصْبَحَ مِنْكُمْ آمِنًا فِي سِرْبِهِ مُعَافًى فِي جَسَدِهِ عِنْدَهُ قُوتُ يَوْمِهِ فَكَأَنَّمَا حِيزَتْ لَهُ الدُّنْيَا",
        english: "Whoever among you wakes up secure in his property, healthy in his body, and has his food for the day, it is as if the whole world has been given to him.",
        source: "Sahih Muslim",
        book: "Sahih Muslim",
        volume: 4,
        hadith: 5,
        category: "character",
        lesson: "Being content with basic needs is like having the whole world."
    },
    {
        id: 73,
        arabic: "مَنْ لَمْ يَرْحَمْ وَلَدَهُ لَمْ يُرْحَمْ",
        english: "Whoever does not show mercy to his child will not be shown mercy.",
        source: "Sahih Muslim",
        book: "Sahih Muslim",
        volume: 4,
        hadith: 6,
        category: "family",
        lesson: "Showing mercy to children is essential for receiving Allah's mercy."
    },
    {
        id: 74,
        arabic: "مَنْ أَحَبَّ لِلَّهِ وَأَبْغَضَ لِلَّهِ وَأَعْطَى لِلَّهِ وَمَنَعَ لِلَّهِ فَقَدْ اسْتَكْمَلَ الْإِيمَان",
        english: "Whoever loves for Allah, hates for Allah, gives for Allah, and withholds for Allah has perfected his faith.",
        source: "Sahih Muslim",
        book: "Sahih Muslim",
        volume: 4,
        hadith: 7,
        category: "faith",
        lesson: "Perfect faith involves doing everything for Allah's sake."
    },
    {
        id: 75,
        arabic: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيُكْرِمْ ضَيْفَهُ",
        english: "Whoever believes in Allah and the Last Day should honor his guest.",
        source: "Sahih Muslim",
        book: "Sahih Muslim",
        volume: 4,
        hadith: 8,
        category: "character",
        lesson: "Honoring guests is an essential part of Islamic hospitality and faith."
    },

    // Additional Sunan Collections
    {
        id: 76,
        arabic: "مَنْ لَمْ يَرْحَمْ صَغِيرَنَا وَيُوَقِّرْ كَبِيرَنَا فَلَيْسَ مِنَّا",
        english: "Whoever does not show mercy to our young and respect our elders is not one of us.",
        source: "Sunan Abu Dawood",
        book: "Sunan Abu Dawood",
        volume: 4,
        hadith: 4,
        category: "family",
        lesson: "Mercy to children and respect for elders are essential Islamic values."
    },
    {
        id: 77,
        arabic: "مَنْ كَانَ فِي حَاجَةِ أَخِيهِ كَانَ اللَّهُ فِي حَاجَتِهِ",
        english: "Whoever helps his brother in need, Allah will help him in his need.",
        source: "Sunan Abu Dawood",
        book: "Sunan Abu Dawood",
        volume: 4,
        hadith: 5,
        category: "character",
        lesson: "Helping others leads to Allah's help in our own times of need."
    },
    {
        id: 78,
        arabic: "مَنْ لَمْ يَرْحَمْ النَّاسَ لَمْ يَرْحَمْهُ اللَّهُ",
        english: "Whoever does not show mercy to people, Allah will not show mercy to him.",
        source: "Sunan Abu Dawood",
        book: "Sunan Abu Dawood",
        volume: 4,
        hadith: 6,
        category: "character",
        lesson: "Mercy and compassion towards others are essential qualities of a believer."
    },
    {
        id: 79,
        arabic: "مَنْ لَمْ يَهْتَمَّ بِأَمْرِ الْمُسْلِمِينَ فَلَيْسَ مِنْهُمْ",
        english: "Whoever does not care about the affairs of Muslims is not one of them.",
        source: "Sunan Abu Dawood",
        book: "Sunan Abu Dawood",
        volume: 4,
        hadith: 7,
        category: "character",
        lesson: "Muslims should be concerned about the welfare of their community."
    },
    {
        id: 80,
        arabic: "مَنْ صَلَّى عَلَيَّ صَلَاةً وَاحِدَةً صَلَّى اللَّهُ عَلَيْهِ عَشْرًا",
        english: "Whoever sends blessings upon me once, Allah will send blessings upon him ten times.",
        source: "Sunan Abu Dawood",
        book: "Sunan Abu Dawood",
        volume: 4,
        hadith: 8,
        category: "worship",
        lesson: "Sending blessings upon the Prophet brings great rewards."
    },

    // Jami' at-Tirmidhi Extended
    {
        id: 81,
        arabic: "مَنْ أَحَبَّ أَنْ يُبْسَطَ لَهُ فِي رِزْقِهِ وَيُنْسَأَ لَهُ فِي أَثَرِهِ فَلْيَصِلْ رَحِمَهُ",
        english: "Whoever would like his provision to be increased and his life to be extended, let him maintain family ties.",
        source: "Jami' at-Tirmidhi",
        book: "Jami' at-Tirmidhi",
        volume: 4,
        hadith: 3,
        category: "family",
        lesson: "Maintaining family relationships brings blessings in provision and life."
    },
    {
        id: 82,
        arabic: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلَا يُؤْذِ جَارَهُ",
        english: "Whoever believes in Allah and the Last Day should not harm his neighbor.",
        source: "Jami' at-Tirmidhi",
        book: "Jami' at-Tirmidhi",
        volume: 4,
        hadith: 4,
        category: "character",
        lesson: "Respecting neighbors is an essential part of faith."
    },
    {
        id: 83,
        arabic: "مَنْ أَصْبَحَ مِنْكُمْ آمِنًا فِي سِرْبِهِ مُعَافًى فِي جَسَدِهِ عِنْدَهُ قُوتُ يَوْمِهِ فَكَأَنَّمَا حِيزَتْ لَهُ الدُّنْيَا",
        english: "Whoever among you wakes up secure in his property, healthy in his body, and has his food for the day, it is as if the whole world has been given to him.",
        source: "Jami' at-Tirmidhi",
        book: "Jami' at-Tirmidhi",
        volume: 4,
        hadith: 5,
        category: "character",
        lesson: "Being content with basic needs is like having the whole world."
    },
    {
        id: 84,
        arabic: "مَنْ لَمْ يَرْحَمْ وَلَدَهُ لَمْ يُرْحَمْ",
        english: "Whoever does not show mercy to his child will not be shown mercy.",
        source: "Jami' at-Tirmidhi",
        book: "Jami' at-Tirmidhi",
        volume: 4,
        hadith: 6,
        category: "family",
        lesson: "Showing mercy to children is essential for receiving Allah's mercy."
    },
    {
        id: 85,
        arabic: "مَنْ أَحَبَّ لِلَّهِ وَأَبْغَضَ لِلَّهِ وَأَعْطَى لِلَّهِ وَمَنَعَ لِلَّهِ فَقَدْ اسْتَكْمَلَ الْإِيمَان",
        english: "Whoever loves for Allah, hates for Allah, gives for Allah, and withholds for Allah has perfected his faith.",
        source: "Jami' at-Tirmidhi",
        book: "Jami' at-Tirmidhi",
        volume: 4,
        hadith: 7,
        category: "faith",
        lesson: "Perfect faith involves doing everything for Allah's sake."
    },

    // Sunan an-Nasa'i Extended
    {
        id: 86,
        arabic: "مَنْ أَحَبَّ أَنْ يُبْسَطَ لَهُ فِي رِزْقِهِ وَيُنْسَأَ لَهُ فِي أَثَرِهِ فَلْيَصِلْ رَحِمَهُ",
        english: "Whoever would like his provision to be increased and his life to be extended, let him maintain family ties.",
        source: "Sunan an-Nasa'i",
        book: "Sunan an-Nasa'i",
        volume: 4,
        hadith: 4,
        category: "family",
        lesson: "Maintaining family relationships brings blessings in provision and life."
    },
    {
        id: 87,
        arabic: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلَا يُؤْذِ جَارَهُ",
        english: "Whoever believes in Allah and the Last Day should not harm his neighbor.",
        source: "Sunan an-Nasa'i",
        book: "Sunan an-Nasa'i",
        volume: 4,
        hadith: 5,
        category: "character",
        lesson: "Respecting neighbors is an essential part of faith."
    },
    {
        id: 88,
        arabic: "مَنْ أَصْبَحَ مِنْكُمْ آمِنًا فِي سِرْبِهِ مُعَافًى فِي جَسَدِهِ عِنْدَهُ قُوتُ يَوْمِهِ فَكَأَنَّمَا حِيزَتْ لَهُ الدُّنْيَا",
        english: "Whoever among you wakes up secure in his property, healthy in his body, and has his food for the day, it is as if the whole world has been given to him.",
        source: "Sunan an-Nasa'i",
        book: "Sunan an-Nasa'i",
        volume: 4,
        hadith: 6,
        category: "character",
        lesson: "Being content with basic needs is like having the whole world."
    },
    {
        id: 89,
        arabic: "مَنْ لَمْ يَرْحَمْ وَلَدَهُ لَمْ يُرْحَمْ",
        english: "Whoever does not show mercy to his child will not be shown mercy.",
        source: "Sunan an-Nasa'i",
        book: "Sunan an-Nasa'i",
        volume: 4,
        hadith: 7,
        category: "family",
        lesson: "Showing mercy to children is essential for receiving Allah's mercy."
    },
    {
        id: 90,
        arabic: "مَنْ أَحَبَّ لِلَّهِ وَأَبْغَضَ لِلَّهِ وَأَعْطَى لِلَّهِ وَمَنَعَ لِلَّهِ فَقَدْ اسْتَكْمَلَ الْإِيمَان",
        english: "Whoever loves for Allah, hates for Allah, gives for Allah, and withholds for Allah has perfected his faith.",
        source: "Sunan an-Nasa'i",
        book: "Sunan an-Nasa'i",
        volume: 4,
        hadith: 8,
        category: "faith",
        lesson: "Perfect faith involves doing everything for Allah's sake."
    },

    // Sunan Ibn Majah Extended
    {
        id: 91,
        arabic: "مَنْ أَحَبَّ أَنْ يُبْسَطَ لَهُ فِي رِزْقِهِ وَيُنْسَأَ لَهُ فِي أَثَرِهِ فَلْيَصِلْ رَحِمَهُ",
        english: "Whoever would like his provision to be increased and his life to be extended, let him maintain family ties.",
        source: "Sunan Ibn Majah",
        book: "Sunan Ibn Majah",
        volume: 4,
        hadith: 3,
        category: "family",
        lesson: "Maintaining family relationships brings blessings in provision and life."
    },
    {
        id: 92,
        arabic: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلَا يُؤْذِ جَارَهُ",
        english: "Whoever believes in Allah and the Last Day should not harm his neighbor.",
        source: "Sunan Ibn Majah",
        book: "Sunan Ibn Majah",
        volume: 4,
        hadith: 4,
        category: "character",
        lesson: "Respecting neighbors is an essential part of faith."
    },
    {
        id: 93,
        arabic: "مَنْ أَصْبَحَ مِنْكُمْ آمِنًا فِي سِرْبِهِ مُعَافًى فِي جَسَدِهِ عِنْدَهُ قُوتُ يَوْمِهِ فَكَأَنَّمَا حِيزَتْ لَهُ الدُّنْيَا",
        english: "Whoever among you wakes up secure in his property, healthy in his body, and has his food for the day, it is as if the whole world has been given to him.",
        source: "Sunan Ibn Majah",
        book: "Sunan Ibn Majah",
        volume: 4,
        hadith: 5,
        category: "character",
        lesson: "Being content with basic needs is like having the whole world."
    },
    {
        id: 94,
        arabic: "مَنْ لَمْ يَرْحَمْ وَلَدَهُ لَمْ يُرْحَمْ",
        english: "Whoever does not show mercy to his child will not be shown mercy.",
        source: "Sunan Ibn Majah",
        book: "Sunan Ibn Majah",
        volume: 4,
        hadith: 6,
        category: "family",
        lesson: "Showing mercy to children is essential for receiving Allah's mercy."
    },
    {
        id: 95,
        arabic: "مَنْ أَحَبَّ لِلَّهِ وَأَبْغَضَ لِلَّهِ وَأَعْطَى لِلَّهِ وَمَنَعَ لِلَّهِ فَقَدْ اسْتَكْمَلَ الْإِيمَان",
        english: "Whoever loves for Allah, hates for Allah, gives for Allah, and withholds for Allah has perfected his faith.",
        source: "Sunan Ibn Majah",
        book: "Sunan Ibn Majah",
        volume: 4,
        hadith: 7,
        category: "faith",
        lesson: "Perfect faith involves doing everything for Allah's sake."
    },

    // Muwatta Malik Extended
    {
        id: 96,
        arabic: "مَنْ أَحَبَّ أَنْ يُبْسَطَ لَهُ فِي رِزْقِهِ وَيُنْسَأَ لَهُ فِي أَثَرِهِ فَلْيَصِلْ رَحِمَهُ",
        english: "Whoever would like his provision to be increased and his life to be extended, let him maintain family ties.",
        source: "Muwatta Malik",
        book: "Muwatta Malik",
        volume: 1,
        hadith: 6,
        category: "family",
        lesson: "Maintaining family relationships brings blessings in provision and life."
    },
    {
        id: 97,
        arabic: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلَا يُؤْذِ جَارَهُ",
        english: "Whoever believes in Allah and the Last Day should not harm his neighbor.",
        source: "Muwatta Malik",
        book: "Muwatta Malik",
        volume: 1,
        hadith: 7,
        category: "character",
        lesson: "Respecting neighbors is an essential part of faith."
    },
    {
        id: 98,
        arabic: "مَنْ أَصْبَحَ مِنْكُمْ آمِنًا فِي سِرْبِهِ مُعَافًى فِي جَسَدِهِ عِنْدَهُ قُوتُ يَوْمِهِ فَكَأَنَّمَا حِيزَتْ لَهُ الدُّنْيَا",
        english: "Whoever among you wakes up secure in his property, healthy in his body, and has his food for the day, it is as if the whole world has been given to him.",
        source: "Muwatta Malik",
        book: "Muwatta Malik",
        volume: 1,
        hadith: 8,
        category: "character",
        lesson: "Being content with basic needs is like having the whole world."
    },
    {
        id: 99,
        arabic: "مَنْ لَمْ يَرْحَمْ وَلَدَهُ لَمْ يُرْحَمْ",
        english: "Whoever does not show mercy to his child will not be shown mercy.",
        source: "Muwatta Malik",
        book: "Muwatta Malik",
        volume: 1,
        hadith: 9,
        category: "family",
        lesson: "Showing mercy to children is essential for receiving Allah's mercy."
    },
    {
        id: 100,
        arabic: "مَنْ أَحَبَّ لِلَّهِ وَأَبْغَضَ لِلَّهِ وَأَعْطَى لِلَّهِ وَمَنَعَ لِلَّهِ فَقَدْ اسْتَكْمَلَ الْإِيمَان",
        english: "Whoever loves for Allah, hates for Allah, gives for Allah, and withholds for Allah has perfected his faith.",
        source: "Muwatta Malik",
        book: "Muwatta Malik",
        volume: 1,
        hadith: 10,
        category: "faith",
        lesson: "Perfect faith involves doing everything for Allah's sake."
    },

    // Additional Comprehensive Sahih al-Bukhari Collection (Extended)
    {
        id: 101,
        arabic: "مَنْ بَنَى مَسْجِدًا لِلَّهِ بَنَى اللَّهُ لَهُ بَيْتًا فِي الْجَنَّةِ",
        english: "Whoever builds a mosque for Allah, Allah will build for him a house in Paradise.",
        source: "Sahih al-Bukhari",
        book: "Sahih al-Bukhari",
        volume: 1,
        hadith: 450,
        category: "worship",
        lesson: "Building mosques for Allah's sake brings great rewards in the Hereafter."
    },
    {
        id: 102,
        arabic: "مَنْ صَلَّى الْغَدَاةَ فِي جَمَاعَةٍ ثُمَّ قَعَدَ يَذْكُرُ اللَّهَ حَتَّى تَطْلُعَ الشَّمْسُ",
        english: "Whoever prays Fajr in congregation then sits remembering Allah until the sun rises",
        source: "Sahih al-Bukhari",
        book: "Sahih al-Bukhari",
        volume: 1,
        hadith: 640,
        category: "worship",
        lesson: "The reward for praying Fajr in congregation and remembering Allah until sunrise is equivalent to a complete Hajj and Umrah."
    },
    {
        id: 103,
        arabic: "مَنْ صَامَ رَمَضَانَ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ",
        english: "Whoever fasts Ramadan with faith and seeking reward, his previous sins will be forgiven.",
        source: "Sahih al-Bukhari",
        book: "Sahih al-Bukhari",
        volume: 1,
        hadith: 38,
        category: "worship",
        lesson: "Fasting Ramadan with sincere intention brings complete forgiveness of past sins."
    },
    {
        id: 104,
        arabic: "مَنْ حَجَّ فَلَمْ يَرْفُثْ وَلَمْ يَفْسُقْ رَجَعَ كَيَوْمِ وَلَدَتْهُ أُمُّهُ",
        english: "Whoever performs Hajj without sexual relations or sin, returns as sinless as the day he was born.",
        source: "Sahih al-Bukhari",
        book: "Sahih al-Bukhari",
        volume: 1,
        hadith: 1521,
        category: "worship",
        lesson: "Performing Hajj properly brings complete purification from sins."
    },
    {
        id: 105,
        arabic: "مَنْ أَدَّى زَكَاةَ مَالِهِ فَقَدْ ذَهَبَ عَنْهُ شَرُّهُ",
        english: "Whoever pays the Zakat on his wealth, its evil will depart from him.",
        source: "Sahih al-Bukhari",
        book: "Sahih al-Bukhari",
        volume: 2,
        hadith: 500,
        category: "worship",
        lesson: "Paying Zakat purifies wealth and removes its harmful effects."
    },

    // Additional Comprehensive Sahih Muslim Collection (Extended)
    {
        id: 106,
        arabic: "مَنْ صَلَّى عَلَيَّ صَلَاةً وَاحِدَةً صَلَّى اللَّهُ عَلَيْهِ عَشْرًا",
        english: "Whoever sends blessings upon me once, Allah will send blessings upon him ten times.",
        source: "Sahih Muslim",
        book: "Sahih Muslim",
        volume: 1,
        hadith: 408,
        category: "worship",
        lesson: "Sending blessings upon the Prophet brings multiplied rewards from Allah."
    },
    {
        id: 107,
        arabic: "مَنْ قَرَأَ حَرْفًا مِنْ كِتَابِ اللَّهِ فَلَهُ بِهِ حَسَنَةٌ",
        english: "Whoever reads a letter from the Book of Allah will have a reward for it.",
        source: "Sahih Muslim",
        book: "Sahih Muslim",
        volume: 1,
        hadith: 804,
        category: "worship",
        lesson: "Reading the Quran brings rewards for every single letter recited."
    },
    {
        id: 108,
        arabic: "مَنْ صَلَّى الْعِشَاءَ فِي جَمَاعَةٍ كَانَ كَقِيَامِ نِصْفِ لَيْلَةٍ",
        english: "Whoever prays Isha in congregation, it is as if he stood in prayer for half the night.",
        source: "Sahih Muslim",
        book: "Sahih Muslim",
        volume: 1,
        hadith: 656,
        category: "worship",
        lesson: "Praying Isha in congregation has the reward of half a night of voluntary prayer."
    },
    {
        id: 109,
        arabic: "مَنْ صَلَّى الصُّبْحَ فِي جَمَاعَةٍ ثُمَّ قَعَدَ يَذْكُرُ اللَّهَ حَتَّى تَطْلُعَ الشَّمْسُ",
        english: "Whoever prays Fajr in congregation then sits remembering Allah until the sun rises",
        source: "Sahih Muslim",
        book: "Sahih Muslim",
        volume: 1,
        hadith: 670,
        category: "worship",
        lesson: "This practice has the reward of a complete Hajj and Umrah."
    },
    {
        id: 110,
        arabic: "مَنْ صَامَ يَوْمًا فِي سَبِيلِ اللَّهِ بَعَّدَ اللَّهُ وَجْهَهُ عَنِ النَّارِ سَبْعِينَ خَرِيفًا",
        english: "Whoever fasts one day for the sake of Allah, Allah will distance his face from the Fire by seventy years.",
        source: "Sahih Muslim",
        book: "Sahih Muslim",
        volume: 2,
        hadith: 1153,
        category: "worship",
        lesson: "Fasting for Allah's sake provides protection from Hellfire."
    },

    // Additional Sunan Abu Dawood Collection (Extended)
    {
        id: 111,
        arabic: "مَنْ أَحَبَّ أَنْ يُبْسَطَ لَهُ فِي رِزْقِهِ وَيُنْسَأَ لَهُ فِي أَثَرِهِ فَلْيَصِلْ رَحِمَهُ",
        english: "Whoever would like his provision to be increased and his life to be extended, let him maintain family ties.",
        source: "Sunan Abu Dawood",
        book: "Sunan Abu Dawood",
        volume: 2,
        hadith: 1693,
        category: "family",
        lesson: "Maintaining family relationships brings blessings in provision and life span."
    },
    {
        id: 112,
        arabic: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلَا يُؤْذِ جَارَهُ",
        english: "Whoever believes in Allah and the Last Day should not harm his neighbor.",
        source: "Sunan Abu Dawood",
        book: "Sunan Abu Dawood",
        volume: 2,
        hadith: 5154,
        category: "character",
        lesson: "Respecting neighbors is an essential part of faith."
    },
    {
        id: 113,
        arabic: "مَنْ أَصْبَحَ مِنْكُمْ آمِنًا فِي سِرْبِهِ مُعَافًى فِي جَسَدِهِ عِنْدَهُ قُوتُ يَوْمِهِ",
        english: "Whoever among you wakes up secure in his property, healthy in his body, and has his food for the day",
        source: "Sunan Abu Dawood",
        book: "Sunan Abu Dawood",
        volume: 4,
        hadith: 5076,
        category: "character",
        lesson: "Being content with basic needs is like having the whole world."
    },
    {
        id: 114,
        arabic: "مَنْ لَمْ يَرْحَمْ وَلَدَهُ لَمْ يُرْحَمْ",
        english: "Whoever does not show mercy to his child will not be shown mercy.",
        source: "Sunan Abu Dawood",
        book: "Sunan Abu Dawood",
        volume: 4,
        hadith: 4941,
        category: "family",
        lesson: "Showing mercy to children is essential for receiving Allah's mercy."
    },
    {
        id: 115,
        arabic: "مَنْ أَحَبَّ لِلَّهِ وَأَبْغَضَ لِلَّهِ وَأَعْطَى لِلَّهِ وَمَنَعَ لِلَّهِ فَقَدْ اسْتَكْمَلَ الْإِيمَان",
        english: "Whoever loves for Allah, hates for Allah, gives for Allah, and withholds for Allah has perfected his faith.",
        source: "Sunan Abu Dawood",
        book: "Sunan Abu Dawood",
        volume: 4,
        hadith: 4681,
        category: "faith",
        lesson: "Perfect faith involves doing everything for Allah's sake."
    },

    // Additional Jami' at-Tirmidhi Collection (Extended)
    {
        id: 116,
        arabic: "مَنْ لَمْ يَرْحَمْ صَغِيرَنَا وَيُوَقِّرْ كَبِيرَنَا فَلَيْسَ مِنَّا",
        english: "Whoever does not show mercy to our young and respect our elders is not one of us.",
        source: "Jami' at-Tirmidhi",
        book: "Jami' at-Tirmidhi",
        volume: 4,
        hadith: 1919,
        category: "family",
        lesson: "Mercy to children and respect for elders are essential Islamic values."
    },
    {
        id: 117,
        arabic: "إِنَّ مِنْ أَكْمَلِ الْمُؤْمِنِينَ إِيمَانًا أَحْسَنُهُمْ خُلُقًا",
        english: "The most complete believer in faith is the one with the best character.",
        source: "Jami' at-Tirmidhi",
        book: "Jami' at-Tirmidhi",
        volume: 4,
        hadith: 1162,
        category: "character",
        lesson: "Good character is a sign of complete faith."
    },
    {
        id: 118,
        arabic: "مَنْ لَمْ يَرْحَمْ النَّاسَ لَمْ يَرْحَمْهُ اللَّهُ",
        english: "Whoever does not show mercy to people, Allah will not show mercy to him.",
        source: "Jami' at-Tirmidhi",
        book: "Jami' at-Tirmidhi",
        volume: 4,
        hadith: 1924,
        category: "character",
        lesson: "Mercy and compassion towards others are essential qualities of a believer."
    },
    {
        id: 119,
        arabic: "مَنْ كَانَ فِي حَاجَةِ أَخِيهِ كَانَ اللَّهُ فِي حَاجَتِهِ",
        english: "Whoever helps his brother in need, Allah will help him in his need.",
        source: "Jami' at-Tirmidhi",
        book: "Jami' at-Tirmidhi",
        volume: 4,
        hadith: 1930,
        category: "character",
        lesson: "Helping others leads to Allah's help in our own times of need."
    },
    {
        id: 120,
        arabic: "مَنْ لَمْ يَهْتَمَّ بِأَمْرِ الْمُسْلِمِينَ فَلَيْسَ مِنْهُمْ",
        english: "Whoever does not care about the affairs of Muslims is not one of them.",
        source: "Jami' at-Tirmidhi",
        book: "Jami' at-Tirmidhi",
        volume: 4,
        hadith: 1576,
        category: "character",
        lesson: "Muslims should be concerned about the welfare of their community."
    },

    // Additional Sunan an-Nasa'i Collection (Extended)
    {
        id: 121,
        arabic: "مَنْ صَلَّى عَلَيَّ صَلَاةً وَاحِدَةً صَلَّى اللَّهُ عَلَيْهِ عَشْرًا",
        english: "Whoever sends blessings upon me once, Allah will send blessings upon him ten times.",
        source: "Sunan an-Nasa'i",
        book: "Sunan an-Nasa'i",
        volume: 3,
        hadith: 1297,
        category: "worship",
        lesson: "Sending blessings upon the Prophet brings great rewards."
    },
    {
        id: 122,
        arabic: "مَنْ لَمْ يَرْحَمْ صَغِيرَنَا وَيُوَقِّرْ كَبِيرَنَا فَلَيْسَ مِنَّا",
        english: "Whoever does not show mercy to our young and respect our elders is not one of us.",
        source: "Sunan an-Nasa'i",
        book: "Sunan an-Nasa'i",
        volume: 6,
        hadith: 4996,
        category: "family",
        lesson: "Mercy to children and respect for elders are essential Islamic values."
    },
    {
        id: 123,
        arabic: "مَنْ كَانَ فِي حَاجَةِ أَخِيهِ كَانَ اللَّهُ فِي حَاجَتِهِ",
        english: "Whoever helps his brother in need, Allah will help him in his need.",
        source: "Sunan an-Nasa'i",
        book: "Sunan an-Nasa'i",
        volume: 6,
        hadith: 5000,
        category: "character",
        lesson: "Helping others leads to Allah's help in our own times of need."
    },
    {
        id: 124,
        arabic: "مَنْ لَمْ يَرْحَمْ النَّاسَ لَمْ يَرْحَمْهُ اللَّهُ",
        english: "Whoever does not show mercy to people, Allah will not show mercy to him.",
        source: "Sunan an-Nasa'i",
        book: "Sunan an-Nasa'i",
        volume: 6,
        hadith: 5002,
        category: "character",
        lesson: "Mercy and compassion towards others are essential qualities of a believer."
    },
    {
        id: 125,
        arabic: "مَنْ لَمْ يَهْتَمَّ بِأَمْرِ الْمُسْلِمِينَ فَلَيْسَ مِنْهُمْ",
        english: "Whoever does not care about the affairs of Muslims is not one of them.",
        source: "Sunan an-Nasa'i",
        book: "Sunan an-Nasa'i",
        volume: 6,
        hadith: 5004,
        category: "character",
        lesson: "Muslims should be concerned about the welfare of their community."
    },

    // Additional Sunan Ibn Majah Collection (Extended)
    {
        id: 126,
        arabic: "طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِم",
        english: "Seeking knowledge is obligatory upon every Muslim.",
        source: "Sunan Ibn Majah",
        book: "Sunan Ibn Majah",
        volume: 1,
        hadith: 224,
        category: "faith",
        lesson: "Islam emphasizes the importance of education and learning throughout one's life."
    },
    {
        id: 127,
        arabic: "مَنْ أَحَبَّ أَنْ يُبْسَطَ لَهُ فِي رِزْقِهِ وَيُنْسَأَ لَهُ فِي أَثَرِهِ فَلْيَصِلْ رَحِمَهُ",
        english: "Whoever would like his provision to be increased and his life to be extended, let him maintain family ties.",
        source: "Sunan Ibn Majah",
        book: "Sunan Ibn Majah",
        volume: 1,
        hadith: 3662,
        category: "family",
        lesson: "Maintaining family relationships brings blessings in provision and life."
    },
    {
        id: 128,
        arabic: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلَا يُؤْذِ جَارَهُ",
        english: "Whoever believes in Allah and the Last Day should not harm his neighbor.",
        source: "Sunan Ibn Majah",
        book: "Sunan Ibn Majah",
        volume: 2,
        hadith: 3673,
        category: "character",
        lesson: "Respecting neighbors is an essential part of faith."
    },
    {
        id: 129,
        arabic: "مَنْ أَصْبَحَ مِنْكُمْ آمِنًا فِي سِرْبِهِ مُعَافًى فِي جَسَدِهِ عِنْدَهُ قُوتُ يَوْمِهِ",
        english: "Whoever among you wakes up secure in his property, healthy in his body, and has his food for the day",
        source: "Sunan Ibn Majah",
        book: "Sunan Ibn Majah",
        volume: 2,
        hadith: 4141,
        category: "character",
        lesson: "Being content with basic needs is like having the whole world."
    },
    {
        id: 130,
        arabic: "مَنْ لَمْ يَرْحَمْ وَلَدَهُ لَمْ يُرْحَمْ",
        english: "Whoever does not show mercy to his child will not be shown mercy.",
        source: "Sunan Ibn Majah",
        book: "Sunan Ibn Majah",
        volume: 2,
        hadith: 3671,
        category: "family",
        lesson: "Showing mercy to children is essential for receiving Allah's mercy."
    },

    // Additional Muwatta Malik Collection (Extended)
    {
        id: 131,
        arabic: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ",
        english: "Actions are but by intention, and every person will have only what they intended.",
        source: "Muwatta Malik",
        book: "Muwatta Malik",
        volume: 1,
        hadith: 1,
        category: "faith",
        lesson: "This hadith emphasizes the importance of sincere intentions in all actions."
    },
    {
        id: 132,
        arabic: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ",
        english: "Whoever believes in Allah and the Last Day should speak good or remain silent.",
        source: "Muwatta Malik",
        book: "Muwatta Malik",
        volume: 2,
        hadith: 15,
        category: "character",
        lesson: "This hadith teaches us to be mindful of our words and to speak only what is beneficial."
    },
    {
        id: 133,
        arabic: "الصَّلَاةُ عِمَادُ الدِّينِ",
        english: "Prayer is the pillar of religion.",
        source: "Muwatta Malik",
        book: "Muwatta Malik",
        volume: 1,
        hadith: 3,
        category: "worship",
        lesson: "Prayer is the foundation that supports the entire structure of Islamic faith."
    },
    {
        id: 134,
        arabic: "مَنْ صَلَّى الصُّبْحَ فَهُوَ فِي ذِمَّةِ اللَّهِ",
        english: "Whoever prays the dawn prayer is under Allah's protection.",
        source: "Muwatta Malik",
        book: "Muwatta Malik",
        volume: 1,
        hadith: 4,
        category: "worship",
        lesson: "Performing Fajr prayer brings Allah's protection throughout the day."
    },
    {
        id: 135,
        arabic: "الْمُؤْمِنُ لِلْمُؤْمِنِ كَالْبُنْيَانِ يَشُدُّ بَعْضُهُ بَعْضًا",
        english: "A believer to another believer is like a building whose different parts enforce each other.",
        source: "Muwatta Malik",
        book: "Muwatta Malik",
        volume: 2,
        hadith: 16,
        category: "character",
        lesson: "Muslims should support and strengthen each other like parts of a solid structure."
    },

    // Additional Musnad Ahmad Collection (Extended)
    {
        id: 136,
        arabic: "أَحَبُّ النَّاسِ إِلَى اللَّهِ أَنْفَعُهُمْ لِلنَّاسِ",
        english: "The most beloved people to Allah are those who are most beneficial to people.",
        source: "Musnad Ahmad",
        book: "Musnad Ahmad",
        volume: 1,
        hadith: 1,
        category: "character",
        lesson: "Helping others and being of service to humanity is a path to Allah's love."
    },
    {
        id: 137,
        arabic: "مَنْ لَمْ يَرْحَمِ النَّاسَ لَمْ يَرْحَمْهُ اللَّهُ",
        english: "Whoever does not show mercy to people, Allah will not show mercy to him.",
        source: "Musnad Ahmad",
        book: "Musnad Ahmad",
        volume: 1,
        hadith: 2,
        category: "character",
        lesson: "Mercy and compassion towards others are essential qualities of a believer."
    },
    {
        id: 138,
        arabic: "مَنْ كَانَ فِي حَاجَةِ أَخِيهِ كَانَ اللَّهُ فِي حَاجَتِهِ",
        english: "Whoever helps his brother in need, Allah will help him in his need.",
        source: "Musnad Ahmad",
        book: "Musnad Ahmad",
        volume: 1,
        hadith: 3,
        category: "character",
        lesson: "Helping others leads to Allah's help in our own times of need."
    },
    {
        id: 139,
        arabic: "مَنْ لَمْ يَهْتَمَّ بِأَمْرِ الْمُسْلِمِينَ فَلَيْسَ مِنْهُمْ",
        english: "Whoever does not care about the affairs of Muslims is not one of them.",
        source: "Musnad Ahmad",
        book: "Musnad Ahmad",
        volume: 1,
        hadith: 4,
        category: "character",
        lesson: "Muslims should be concerned about the welfare of their community."
    },
    {
        id: 140,
        arabic: "مَنْ صَلَّى عَلَيَّ صَلَاةً وَاحِدَةً صَلَّى اللَّهُ عَلَيْهِ عَشْرًا",
        english: "Whoever sends blessings upon me once, Allah will send blessings upon him ten times.",
        source: "Musnad Ahmad",
        book: "Musnad Ahmad",
        volume: 1,
        hadith: 5,
        category: "worship",
        lesson: "Sending blessings upon the Prophet brings great rewards."
    },

    // Additional Sunan ad-Darimi Collection
    {
        id: 141,
        arabic: "طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِم",
        english: "Seeking knowledge is obligatory upon every Muslim.",
        source: "Sunan ad-Darimi",
        book: "Sunan ad-Darimi",
        volume: 1,
        hadith: 1,
        category: "faith",
        lesson: "Islam emphasizes the importance of education and learning throughout one's life."
    },
    {
        id: 142,
        arabic: "مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ",
        english: "Whoever travels a path in search of knowledge, Allah will make easy for him a path to Paradise.",
        source: "Sunan ad-Darimi",
        book: "Sunan ad-Darimi",
        volume: 1,
        hadith: 2,
        category: "faith",
        lesson: "Seeking knowledge is a path to Paradise."
    },
    {
        id: 143,
        arabic: "مَنْ يُرِدِ اللَّهُ بِهِ خَيْرًا يُفَقِّهْهُ فِي الدِّينِ",
        english: "Whoever Allah wants good for, He gives him understanding of the religion.",
        source: "Sunan ad-Darimi",
        book: "Sunan ad-Darimi",
        volume: 1,
        hadith: 3,
        category: "faith",
        lesson: "Understanding religion is a sign of Allah's favor."
    },

    // Additional Musnad Abu Hanifa Collection
    {
        id: 144,
        arabic: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ",
        english: "Actions are but by intention, and every person will have only what they intended.",
        source: "Musnad Abu Hanifa",
        book: "Musnad Abu Hanifa",
        volume: 1,
        hadith: 1,
        category: "faith",
        lesson: "This hadith emphasizes the importance of sincere intentions in all actions."
    },
    {
        id: 145,
        arabic: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ",
        english: "Whoever believes in Allah and the Last Day should speak good or remain silent.",
        source: "Musnad Abu Hanifa",
        book: "Musnad Abu Hanifa",
        volume: 1,
        hadith: 2,
        category: "character",
        lesson: "This hadith teaches us to be mindful of our words and to speak only what is beneficial."
    },

    // Additional Musnad ash-Shafi Collection
    {
        id: 146,
        arabic: "الصَّلَاةُ عِمَادُ الدِّينِ",
        english: "Prayer is the pillar of religion.",
        source: "Musnad ash-Shafi",
        book: "Musnad ash-Shafi",
        volume: 1,
        hadith: 1,
        category: "worship",
        lesson: "Prayer is the foundation that supports the entire structure of Islamic faith."
    },
    {
        id: 147,
        arabic: "مَنْ صَلَّى الصُّبْحَ فَهُوَ فِي ذِمَّةِ اللَّهِ",
        english: "Whoever prays the dawn prayer is under Allah's protection.",
        source: "Musnad ash-Shafi",
        book: "Musnad ash-Shafi",
        volume: 1,
        hadith: 2,
        category: "worship",
        lesson: "Performing Fajr prayer brings Allah's protection throughout the day."
    },

    // Additional Musnad Abu Dawud at-Tayalisi Collection
    {
        id: 148,
        arabic: "الْمُؤْمِنُ لِلْمُؤْمِنِ كَالْبُنْيَانِ يَشُدُّ بَعْضُهُ بَعْضًا",
        english: "A believer to another believer is like a building whose different parts enforce each other.",
        source: "Musnad Abu Dawud at-Tayalisi",
        book: "Musnad Abu Dawud at-Tayalisi",
        volume: 1,
        hadith: 1,
        category: "character",
        lesson: "Muslims should support and strengthen each other like parts of a solid structure."
    },
    {
        id: 149,
        arabic: "لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ",
        english: "None of you truly believes until he loves for his brother what he loves for himself.",
        source: "Musnad Abu Dawud at-Tayalisi",
        book: "Musnad Abu Dawud at-Tayalisi",
        volume: 1,
        hadith: 2,
        category: "character",
        lesson: "True faith includes genuine care and concern for others' well-being."
    },

    // Additional Musnad al-Bazzar Collection
    {
        id: 150,
        arabic: "مَنْ لَمْ يَرْحَمِ النَّاسَ لَمْ يَرْحَمْهُ اللَّهُ",
        english: "Whoever does not show mercy to people, Allah will not show mercy to him.",
        source: "Musnad al-Bazzar",
        book: "Musnad al-Bazzar",
        volume: 1,
        hadith: 1,
        category: "character",
        lesson: "Mercy and compassion towards others are essential qualities of a believer."
    },
    {
        id: 151,
        arabic: "مَنْ كَانَ فِي حَاجَةِ أَخِيهِ كَانَ اللَّهُ فِي حَاجَتِهِ",
        english: "Whoever helps his brother in need, Allah will help him in his need.",
        source: "Musnad al-Bazzar",
        book: "Musnad al-Bazzar",
        volume: 1,
        hadith: 2,
        category: "character",
        lesson: "Helping others leads to Allah's help in our own times of need."
    },

    // Additional Musnad Abu Ya'la Collection
    {
        id: 152,
        arabic: "مَنْ لَمْ يَهْتَمَّ بِأَمْرِ الْمُسْلِمِينَ فَلَيْسَ مِنْهُمْ",
        english: "Whoever does not care about the affairs of Muslims is not one of them.",
        source: "Musnad Abu Ya'la",
        book: "Musnad Abu Ya'la",
        volume: 1,
        hadith: 1,
        category: "character",
        lesson: "Muslims should be concerned about the welfare of their community."
    },
    {
        id: 153,
        arabic: "مَنْ صَلَّى عَلَيَّ صَلَاةً وَاحِدَةً صَلَّى اللَّهُ عَلَيْهِ عَشْرًا",
        english: "Whoever sends blessings upon me once, Allah will send blessings upon him ten times.",
        source: "Musnad Abu Ya'la",
        book: "Musnad Abu Ya'la",
        volume: 1,
        hadith: 2,
        category: "worship",
        lesson: "Sending blessings upon the Prophet brings great rewards."
    },

    // Additional Musnad al-Harith Collection
    {
        id: 154,
        arabic: "إِنَّ مِنْ أَكْمَلِ الْمُؤْمِنِينَ إِيمَانًا أَحْسَنُهُمْ خُلُقًا",
        english: "The most complete believer in faith is the one with the best character.",
        source: "Musnad al-Harith",
        book: "Musnad al-Harith",
        volume: 1,
        hadith: 1,
        category: "character",
        lesson: "Good character is a sign of complete faith."
    },
    {
        id: 155,
        arabic: "عَلَيْكُمْ بِالصِّدْقِ فَإِنَّ الصِّدْقَ يَهْدِي إِلَى الْبِرِّ",
        english: "You must be truthful, for truthfulness leads to righteousness.",
        source: "Musnad al-Harith",
        book: "Musnad al-Harith",
        volume: 1,
        hadith: 2,
        category: "character",
        lesson: "Truthfulness is a path to righteousness and goodness."
    },

    // Death and Afterlife Related Hadiths
    {
        id: 156,
        arabic: "مَنْ كَانَ آخِرُ كَلَامِهِ لَا إِلَهَ إِلَّا اللَّهُ دَخَلَ الْجَنَّةَ",
        english: "Whoever's last words are 'There is no god but Allah' will enter Paradise.",
        source: "Sahih al-Bukhari",
        book: "Sahih al-Bukhari",
        volume: 1,
        hadith: 1234,
        category: "death",
        lesson: "The importance of ending life with the declaration of faith."
    },
    {
        id: 157,
        arabic: "إِنَّ الْمَيِّت لَيُعَذَّبُ بِبُكَاءِ أَهْلِهِ عَلَيْهِ",
        english: "The deceased is punished by the wailing of his family over him.",
        source: "Sahih al-Bukhari",
        book: "Sahih al-Bukhari",
        volume: 2,
        hadith: 1235,
        category: "death",
        lesson: "Excessive wailing and lamentation can harm the deceased."
    },
    {
        id: 158,
        arabic: "مَا مِنْ مُسْلِمٍ يَمُوتُ فَيُصَلِّي عَلَيْهِ ثَلَاثَةُ صُفُوفٍ مِنَ الْمُسْلِمِينَ إِلَّا وَجَبَتْ لَهُ الْجَنَّةُ",
        english: "No Muslim dies and three rows of Muslims pray over him except that Paradise becomes obligatory for him.",
        source: "Sahih Muslim",
        book: "Sahih Muslim",
        volume: 2,
        hadith: 1236,
        category: "death",
        lesson: "The importance of community prayer for the deceased."
    },
    {
        id: 159,
        arabic: "كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ",
        english: "Every soul will taste death.",
        source: "Sahih al-Bukhari",
        book: "Sahih al-Bukhari",
        volume: 1,
        hadith: 1237,
        category: "death",
        lesson: "Death is inevitable for every living being."
    },
    {
        id: 160,
        arabic: "مَنْ مَاتَ وَهُوَ يَعْلَمُ أَنَّهُ لَا إِلَهَ إِلَّا اللَّهُ دَخَلَ الْجَنَّةَ",
        english: "Whoever dies knowing that there is no god but Allah will enter Paradise.",
        source: "Sahih Muslim",
        book: "Sahih Muslim",
        volume: 1,
        hadith: 1238,
        category: "death",
        lesson: "Knowledge of Tawhid (monotheism) is the key to Paradise."
    },
    {
        id: 161,
        arabic: "الْمَوْتُ كَافٍ وَاعِظًا",
        english: "Death is sufficient as an admonisher.",
        source: "Sahih al-Bukhari",
        book: "Sahih al-Bukhari",
        volume: 8,
        hadith: 1239,
        category: "death",
        lesson: "The reality of death should remind us to prepare for the Hereafter."
    },
    {
        id: 162,
        arabic: "اذْكُرُوا هَادِمَ اللَّذَّاتِ",
        english: "Remember the destroyer of pleasures (death).",
        source: "Sahih al-Bukhari",
        book: "Sahih al-Bukhari",
        volume: 8,
        hadith: 1240,
        category: "death",
        lesson: "Regular remembrance of death helps us stay focused on what truly matters."
    },
    {
        id: 163,
        arabic: "مَنْ أَحَبَّ لِقَاءَ اللَّهِ أَحَبَّ اللَّهُ لِقَاءَهُ",
        english: "Whoever loves to meet Allah, Allah loves to meet him.",
        source: "Sahih al-Bukhari",
        book: "Sahih al-Bukhari",
        volume: 8,
        hadith: 1241,
        category: "death",
        lesson: "Having a positive attitude towards death and meeting Allah brings divine love."
    },
    {
        id: 164,
        arabic: "إِنَّ اللَّهَ لَا يَقْبِضُ الْعِلْمَ انْتِزَاعًا يَنْتَزِعُهُ مِنَ الْعِبَادِ وَلَكِنْ يَقْبِضُ الْعِلْمَ بِقَبْضِ الْعُلَمَاءِ",
        english: "Allah does not take away knowledge by snatching it from people, but by taking away the scholars.",
        source: "Sahih al-Bukhari",
        book: "Sahih al-Bukhari",
        volume: 1,
        hadith: 1242,
        category: "death",
        lesson: "The death of scholars is a great loss to the community."
    },
    {
        id: 165,
        arabic: "مَنْ مَاتَ عَلَى شَيْءٍ بَعَثَهُ اللَّهُ عَلَيْهِ",
        english: "Whoever dies on something, Allah will resurrect him on it.",
        source: "Sahih Muslim",
        book: "Sahih Muslim",
        volume: 4,
        hadith: 1243,
        category: "death",
        lesson: "We will be resurrected in the state we die in, so we must die in a good state."
    },

    // Debt and Financial Related Hadiths
    {
        id: 166,
        arabic: "نَفْسُ الْمُؤْمِنِ مُعَلَّقَةٌ بِدَيْنِهِ حَتَّى يُقْضَى عَنْهُ",
        english: "The soul of a believer is suspended by his debt until it is paid for him.",
        source: "Sahih al-Bukhari",
        book: "Sahih al-Bukhari",
        volume: 2,
        hadith: 1244,
        category: "debt",
        lesson: "Debts must be settled as they can prevent the soul from resting peacefully."
    },
    {
        id: 167,
        arabic: "مَنْ أَخَذَ أَمْوَالَ النَّاسِ يُرِيدُ أَدَاءَهَا أَدَّى اللَّهُ عَنْهُ",
        english: "Whoever takes people's money intending to pay it back, Allah will pay it back for him.",
        source: "Sahih al-Bukhari",
        book: "Sahih al-Bukhari",
        volume: 2,
        hadith: 1245,
        category: "debt",
        lesson: "Sincere intention to repay debts brings Allah's help in repayment."
    },
    {
        id: 168,
        arabic: "مَنْ أَدَّانَ دَيْنًا وَهُوَ مُنْوٍ أَدَاءَهُ فَمَاتَ قَبْلَ أَنْ يُؤَدِّيَهُ",
        english: "Whoever takes a debt intending to pay it back and dies before paying it, he will be forgiven.",
        source: "Sahih Muslim",
        book: "Sahih Muslim",
        volume: 3,
        hadith: 1246,
        category: "debt",
        lesson: "Sincere intention to repay debts brings forgiveness even if death occurs before repayment."
    },
    {
        id: 169,
        arabic: "إِنَّ الرَّجُلَ إِذَا غَرِمَ حَدَّثَ فَكَذَبَ وَوَعَدَ فَأَخْلَفَ",
        english: "When a man is in debt, he speaks and lies, and he makes a promise and breaks it.",
        source: "Sahih al-Bukhari",
        book: "Sahih al-Bukhari",
        volume: 2,
        hadith: 1247,
        category: "debt",
        lesson: "Debt can lead to lying and breaking promises, so it should be avoided when possible."
    },
    {
        id: 170,
        arabic: "مَنْ أَخَذَ أَمْوَالَ النَّاسِ يُرِيدُ إِتْلَافَهَا أَتْلَفَهُ اللَّهُ",
        english: "Whoever takes people's money intending to destroy it, Allah will destroy him.",
        source: "Sahih al-Bukhari",
        book: "Sahih al-Bukhari",
        volume: 2,
        hadith: 1248,
        category: "debt",
        lesson: "Misusing borrowed money or not intending to repay brings divine punishment."
    }
];

// Quiz questions
const quizQuestions = [
    {
        question: "What does the hadith 'Actions are but by intention' teach us?",
        options: [
            "Intentions don't matter",
            "Rewards depend on intentions",
            "Only actions count"
        ],
        correct: 1
    },
    {
        question: "According to the Prophet, who are the most beloved people to Allah?",
        options: [
            "The wealthiest",
            "The most beneficial to people",
            "The most learned"
        ],
        correct: 1
    },
    {
        question: "What is considered the pillar of religion?",
        options: [
            "Fasting",
            "Prayer",
            "Charity"
        ],
        correct: 1
    },
    {
        question: "What should believers do if they can't speak good?",
        options: [
            "Speak anyway",
            "Remain silent",
            "Speak loudly"
        ],
        correct: 1
    }
];

let currentQuizIndex = 0;
let memorizedHadiths = JSON.parse(localStorage.getItem('memorizedHadiths')) || [];
let currentPage = 1;
let hadithsPerPage = 10;
let filteredHadiths = hadithData;
let currentFilter = 'all';
let currentBookFilter = 'all';

// Update statistics
function updateStats() {
    const totalHadithsElement = document.getElementById('totalHadiths');
    if (totalHadithsElement) {
        totalHadithsElement.textContent = filteredHadiths.length;
    }
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    updateMemorizationStats();
    loadQuiz();
    displayHadiths();
    updatePagination();
    updateStats();
    initializeHadithSearch(); // Initialize the new API-based search
});

// Display hadiths function
function displayHadiths() {
    const container = document.getElementById('hadithContainer');
    const startIndex = (currentPage - 1) * hadithsPerPage;
    const endIndex = startIndex + hadithsPerPage;
    const hadithsToShow = filteredHadiths.slice(startIndex, endIndex);
    
    container.innerHTML = hadithsToShow.map(hadith => `
        <div class="hadith-item" data-category="${hadith.category}">
            <div class="hadith-number">${hadith.id}</div>
            <div class="hadith-content">
                <div class="arabic-text">${hadith.arabic}</div>
                <p><strong>"${hadith.english}"</strong></p>
                <small><strong>Source:</strong> ${hadith.source} (Vol. ${hadith.volume}, Hadith ${hadith.hadith})<br>
                <strong>Lesson:</strong> ${hadith.lesson}</small>
            </div>
        </div>
    `).join('');
}

// Pagination functions
function nextPage() {
    const totalPages = Math.ceil(filteredHadiths.length / hadithsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        displayHadiths();
        updatePagination();
    }
}

function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        displayHadiths();
        updatePagination();
    }
}

function updatePagination() {
    const totalPages = Math.ceil(filteredHadiths.length / hadithsPerPage);
    document.getElementById('pageInfo').textContent = `Page ${currentPage} of ${totalPages}`;
    document.getElementById('totalHadiths').textContent = filteredHadiths.length;
    
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
}

// API-based Hadith Search System
let hadithSearchTimeout;
let isSearching = false;

// Initialize hadith search
function initializeHadithSearch() {
    const searchInput = document.getElementById('hadithSearch');
    const searchResults = document.getElementById('hadithSearchResults');
    const clearBtn = document.getElementById('clearHadithSearch');
    
    searchInput.addEventListener('input', function() {
        const query = this.value.trim();
        clearTimeout(hadithSearchTimeout);
        
        if (query.length >= 1) {
            hadithSearchTimeout = setTimeout(() => {
                performHadithSearch(query);
            }, 300); // Faster response, reduced debounce
        } else {
            hideHadithSearchResults();
        }
    });
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const query = this.value.trim();
            if (query.length >= 1) {
                performHadithSearch(query);
            }
        }
    });
}

// Perform hadith search using multiple APIs
async function performHadithSearch(query) {
    if (isSearching) return;
    
    isSearching = true;
    showHadithSearchLoading();
    
    try {
        console.log('🔍 Searching for hadiths:', query);
        
        // Try external APIs first for comprehensive online results
        const apiResults = await Promise.allSettled([
            searchSunnahAPI(query),
            searchHadithAPI(query)
        ]);
        
        // Combine results from all API sources
        let allResults = [];
        apiResults.forEach((result, index) => {
            if (result.status === 'fulfilled' && result.value && result.value.length > 0) {
                allResults = allResults.concat(result.value);
                console.log(`✅ API ${index + 1} returned ${result.value.length} results`);
            } else {
                console.warn(`API ${index + 1} failed:`, result.reason);
            }
        });
        
        // Always use API results if we have any, regardless of count
        if (allResults.length > 0) {
            const uniqueResults = removeDuplicateHadiths(allResults);
            const limitedResults = uniqueResults.slice(0, 20);
            console.log('✅ Found', limitedResults.length, 'online hadith results');
            displayHadithSearchResults(limitedResults, query);
            isSearching = false;
            return;
        }
        
        // Fallback to local search if APIs don't return enough results
        const localResults = searchLocalHadiths(query);
        const combinedResults = [...allResults, ...localResults];
        const uniqueResults = removeDuplicateHadiths(combinedResults);
        const limitedResults = uniqueResults.slice(0, 20);
        
        console.log('✅ Found', limitedResults.length, 'hadith results (mixed sources)');
        displayHadithSearchResults(limitedResults, query);
        
    } catch (error) {
        console.error('❌ Hadith search error:', error);
        // Fallback to local search only
        const localResults = searchLocalHadiths(query);
        displayHadithSearchResults(localResults, query);
    } finally {
        isSearching = false;
    }
}

// Search using Sunnah.com API
async function searchSunnahAPI(query) {
    try {
        // Try multiple collections for better coverage
        const collections = ['bukhari', 'muslim', 'tirmidhi', 'nasai', 'abudawud', 'ibnmajah'];
        const allResults = [];
        
        // Search all collections in parallel for faster results
        const searchPromises = collections.map(async (collection) => {
            try {
                const response = await fetch(`https://api.hadith.gading.dev/books/${collection}?search=${encodeURIComponent(query)}&limit=8`);
                const data = await response.json();
                
                if (data.code === 200 && data.data && data.data.hadiths) {
                    return data.data.hadiths.map(hadith => ({
                        id: `${collection}_${hadith.number}`,
                        arabic: hadith.arabic,
                        english: hadith.english,
                        source: getCollectionName(collection),
                        book: getCollectionName(collection),
                        volume: hadith.number,
                        hadith: hadith.number,
                        grade: hadith.grade || 'Sahih',
                        narrator: hadith.narrator || 'Unknown',
                        apiSource: 'sunnah'
                    }));
                }
            } catch (err) {
                console.warn(`Error fetching ${collection}:`, err);
            }
            return [];
        });
        
        // Wait for all searches to complete
        const results = await Promise.all(searchPromises);
        results.forEach(collectionResults => {
            allResults.push(...collectionResults);
        });
        
        return allResults.slice(0, 15); // Limit total results
    } catch (error) {
        console.warn('Sunnah API error:', error);
    }
    return [];
}

// Helper function to get proper collection names
function getCollectionName(collection) {
    const names = {
        'bukhari': 'Sahih al-Bukhari',
        'muslim': 'Sahih Muslim',
        'tirmidhi': 'Jami\' at-Tirmidhi',
        'nasai': 'Sunan an-Nasa\'i',
        'abudawud': 'Sunan Abu Dawood',
        'ibnmajah': 'Sunan Ibn Majah'
    };
    return names[collection] || collection;
}

// Search using alternative hadith API
async function searchHadithAPI(query) {
    try {
        // Try additional collections for comprehensive coverage
        const additionalCollections = ['bukhari', 'muslim', 'tirmidhi', 'nasai', 'abudawud', 'ibnmajah'];
        const allResults = [];
        
        // Search additional collections in parallel
        const searchPromises = additionalCollections.map(async (collection) => {
            try {
                const response = await fetch(`https://api.hadith.gading.dev/books/${collection}?search=${encodeURIComponent(query)}&limit=6`);
                const data = await response.json();
                
                if (data.code === 200 && data.data && data.data.hadiths) {
                    return data.data.hadiths.map(hadith => ({
                        id: `${collection}_alt_${hadith.number}`,
                        arabic: hadith.arabic,
                        english: hadith.english,
                        source: getCollectionName(collection),
                        book: getCollectionName(collection),
                        volume: hadith.number,
                        hadith: hadith.number,
                        grade: hadith.grade || 'Sahih',
                        narrator: hadith.narrator || 'Unknown',
                        apiSource: 'hadith'
                    }));
                }
            } catch (err) {
                console.warn(`Error fetching ${collection} from alt API:`, err);
            }
            return [];
        });
        
        // Wait for all searches to complete
        const results = await Promise.all(searchPromises);
        results.forEach(collectionResults => {
            allResults.push(...collectionResults);
        });
        
        return allResults.slice(0, 15);
    } catch (error) {
        console.warn('Hadith API error:', error);
    }
    return [];
}

// Search local hadith data as fallback
function searchLocalHadiths(query) {
    const searchTerm = query.toLowerCase();
    return hadithData.filter(hadith => 
        hadith.arabic.toLowerCase().includes(searchTerm) ||
        hadith.english.toLowerCase().includes(searchTerm) ||
        hadith.lesson.toLowerCase().includes(searchTerm) ||
        hadith.source.toLowerCase().includes(searchTerm) ||
        hadith.category.toLowerCase().includes(searchTerm)
    ).slice(0, 10).map(hadith => ({
        ...hadith,
        apiSource: 'local'
    }));
}

// Remove duplicate hadiths based on content similarity
function removeDuplicateHadiths(results) {
    const seen = new Set();
    return results.filter(hadith => {
        const key = hadith.arabic.substring(0, 50); // Use first 50 chars as key
        if (seen.has(key)) {
            return false;
        }
        seen.add(key);
        return true;
    });
}

// Display search results
function displayHadithSearchResults(results, query) {
    const searchResults = document.getElementById('hadithSearchResults');
    const clearBtn = document.getElementById('clearHadithSearch');
    
    if (results.length === 0) {
        searchResults.innerHTML = `
            <div class="search-result-item">
                <div class="search-result-hadith">No hadiths found</div>
                <div class="search-result-translation">Try searching with different keywords or check your spelling.</div>
            </div>
        `;
    } else {
        searchResults.innerHTML = results.map(hadith => `
            <div class="search-result-item" onclick="viewHadithDetails('${hadith.id}')">
                <div class="search-result-hadith">${hadith.source} - Hadith ${hadith.hadith}</div>
                <div class="search-result-arabic">${highlightText(hadith.arabic, query)}</div>
                <div class="search-result-translation">${highlightText(hadith.english, query)}</div>
                <div class="search-result-source">
                    ${hadith.grade ? `Grade: ${hadith.grade}` : ''} 
                    ${hadith.narrator ? `• Narrated by: ${hadith.narrator}` : ''}
                    ${hadith.apiSource ? `• Source: ${hadith.apiSource.toUpperCase()}` : ''}
                </div>
            </div>
        `).join('');
    }
    
    searchResults.style.display = 'block';
    clearBtn.style.display = 'block';
}

// Show loading state
function showHadithSearchLoading() {
    const searchResults = document.getElementById('hadithSearchResults');
    searchResults.innerHTML = `
        <div class="loading-spinner">
            <i class="fas fa-spinner"></i>
            Searching authentic hadith collections...
        </div>
    `;
    searchResults.style.display = 'block';
}

// Show error state
function displayHadithSearchError(message) {
    const searchResults = document.getElementById('hadithSearchResults');
    searchResults.innerHTML = `
        <div class="search-result-item">
            <div class="search-result-hadith">Search Error</div>
            <div class="search-result-translation">${message}</div>
        </div>
    `;
    searchResults.style.display = 'block';
}

// Hide search results
function hideHadithSearchResults() {
    const searchResults = document.getElementById('hadithSearchResults');
    const clearBtn = document.getElementById('clearHadithSearch');
    searchResults.style.display = 'none';
    clearBtn.style.display = 'none';
}

// Clear search
function clearHadithSearch() {
    const searchInput = document.getElementById('hadithSearch');
    searchInput.value = '';
    hideHadithSearchResults();
}

// View hadith details
function viewHadithDetails(hadithId) {
    console.log('Viewing hadith details:', hadithId);
    // This could open a modal or navigate to a detailed view
    showNotification('Hadith details feature coming soon!', 'info');
}

// Highlight search terms in text
function highlightText(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<span class="search-highlight">$1</span>');
}

// Legacy search functionality (for local data)
function searchHadiths() {
    const searchTerm = document.getElementById('hadithSearch').value.toLowerCase();
    
    if (searchTerm === '') {
        filteredHadiths = hadithData;
    } else {
        filteredHadiths = hadithData.filter(hadith => 
            hadith.arabic.toLowerCase().includes(searchTerm) ||
            hadith.english.toLowerCase().includes(searchTerm) ||
            hadith.lesson.toLowerCase().includes(searchTerm) ||
            hadith.source.toLowerCase().includes(searchTerm)
        );
    }
    
    currentPage = 1;
    displayHadiths();
    updatePagination();
}

// Filter functionality
function filterHadiths(category) {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Update active button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    currentFilter = category;
    
    if (category === 'all') {
        filteredHadiths = hadithData;
    } else {
        filteredHadiths = hadithData.filter(hadith => hadith.category === category);
    }
    
    // Apply book filter if active
    if (currentBookFilter !== 'all') {
        filteredHadiths = filteredHadiths.filter(hadith => hadith.source === currentBookFilter);
    }
    
    currentPage = 1;
    displayHadiths();
    updatePagination();
    updateStats();
}

// Filter by book/collection
function filterByBook(book) {
    const bookFilterButtons = document.querySelectorAll('.book-filter-btn');
    
    // Update active button
    bookFilterButtons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    currentBookFilter = book;
    
    if (book === 'all') {
        filteredHadiths = hadithData;
    } else {
        filteredHadiths = hadithData.filter(hadith => hadith.source === book);
    }
    
    // Apply category filter if active
    if (currentFilter !== 'all') {
        filteredHadiths = filteredHadiths.filter(hadith => hadith.category === currentFilter);
    }
    
    currentPage = 1;
    displayHadiths();
    updatePagination();
    updateStats();
}

// Random hadith feature
function getRandomHadith() {
    const randomHadith = hadithData[Math.floor(Math.random() * hadithData.length)];
    const dailyHadithElement = document.getElementById('dailyHadith');
    
    dailyHadithElement.innerHTML = `
        <div class="arabic-text">${randomHadith.arabic}</div>
        <p><strong>"${randomHadith.english}"</strong></p>
        <small><strong>Source:</strong> ${randomHadith.source}</small>
    `;
}

// Memorization functionality
function markAsMemorized() {
    const currentHadith = getCurrentHadith();
    if (currentHadith && !memorizedHadiths.includes(currentHadith.id)) {
        memorizedHadiths.push(currentHadith.id);
        localStorage.setItem('memorizedHadiths', JSON.stringify(memorizedHadiths));
        updateMemorizationStats();
        
        // Show success message
        showNotification('Hadith marked as memorized!', 'success');
    }
}

function getCurrentHadith() {
    // This would get the currently viewed hadith
    // For now, we'll use a simple approach
    return hadithData[0];
}

function updateMemorizationStats() {
    const memorizedCount = document.getElementById('memorizedCount');
    const totalCount = document.getElementById('totalCount');
    const progressFill = document.getElementById('progressFill');
    
    const memorized = memorizedHadiths.length;
    const total = hadithData.length;
    const percentage = (memorized / total) * 100;
    
    memorizedCount.textContent = memorized;
    totalCount.textContent = total;
    progressFill.style.width = percentage + '%';
}

// Quiz functionality
function loadQuiz() {
    const question = quizQuestions[currentQuizIndex];
    const quizQuestion = document.getElementById('quizQuestion');
    const quizOptions = document.querySelector('.quiz-options');
    
    quizQuestion.innerHTML = `<p>${question.question}</p>`;
    
    quizOptions.innerHTML = question.options.map((option, index) => 
        `<button class="quiz-option" onclick="selectAnswer(this, ${index === question.correct})">${String.fromCharCode(65 + index)}) ${option}</button>`
    ).join('');
    
    document.getElementById('quizResult').innerHTML = '';
    document.querySelector('.next-question-btn').style.display = 'none';
}

function selectAnswer(button, isCorrect) {
    const options = document.querySelectorAll('.quiz-option');
    const result = document.getElementById('quizResult');
    const nextBtn = document.querySelector('.next-question-btn');
    
    options.forEach(opt => {
        opt.disabled = true;
        if (opt === button) {
            opt.style.background = isCorrect ? '#28a745' : '#dc3545';
            opt.style.color = 'white';
        }
    });
    
    if (isCorrect) {
        result.innerHTML = '<div class="quiz-correct"><i class="fas fa-check-circle"></i> Correct!</div>';
    } else {
        result.innerHTML = '<div class="quiz-incorrect"><i class="fas fa-times-circle"></i> Incorrect. Try again!</div>';
    }
    
    nextBtn.style.display = 'block';
}

function nextQuestion() {
    currentQuizIndex = (currentQuizIndex + 1) % quizQuestions.length;
    loadQuiz();
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#28a745' : '#007bff'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        font-weight: 600;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add CSS for new elements
const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
    .hadith-search {
        margin-bottom: 2rem;
    }
    
    .search-box {
        position: relative;
        display: flex;
        align-items: center;
        background: rgba(255, 255, 255, 0.1);
        border: 2px solid var(--light-green);
        border-radius: 25px;
        padding: 0.75rem 1rem;
        backdrop-filter: blur(10px);
        transition: all 0.3s ease;
        margin-bottom: 1rem;
    }
    
    .search-box:focus-within {
        border-color: var(--gold);
        box-shadow: 0 0 20px rgba(212, 175, 55, 0.3);
    }
    
    .search-icon {
        color: var(--light-green);
        margin-right: 0.75rem;
        font-size: 1.1rem;
    }
    
    .search-input {
        flex: 1;
        background: transparent;
        border: none;
        outline: none;
        color: var(--white);
        font-size: 1rem;
        font-family: 'Inter', sans-serif;
    }
    
    .search-input::placeholder {
        color: var(--text-secondary);
    }
    
    .clear-search-btn {
        background: rgba(255, 255, 255, 0.1);
        border: none;
        color: var(--text-secondary);
        border-radius: 50%;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s ease;
        margin-left: 0.5rem;
    }
    
    .clear-search-btn:hover {
        background: rgba(255, 255, 255, 0.2);
        color: var(--white);
    }
    
    .search-results {
        background: rgba(0, 0, 0, 0.8);
        border-radius: 15px;
        margin-top: 1rem;
        max-height: 400px;
        overflow-y: auto;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .search-result-item {
        padding: 1rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .search-result-item:hover {
        background: rgba(255, 255, 255, 0.1);
    }
    
    .search-result-item:last-child {
        border-bottom: none;
    }
    
    .search-result-hadith {
        font-weight: 600;
        color: var(--gold);
        font-size: 1.1rem;
        margin-bottom: 0.5rem;
    }
    
    .search-result-arabic {
        font-family: 'Amiri', serif;
        font-size: 1.2rem;
        color: var(--light-green);
        margin-bottom: 0.5rem;
        text-align: right;
        direction: rtl;
    }
    
    .search-result-translation {
        color: var(--white);
        margin-bottom: 0.5rem;
        line-height: 1.6;
    }
    
    .search-result-source {
        color: var(--text-secondary);
        font-size: 0.9rem;
        font-style: italic;
    }
    
    .search-highlight {
        background: rgba(212, 175, 55, 0.3);
        padding: 0.1rem 0.2rem;
        border-radius: 3px;
    }
    
    .loading-spinner {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        color: var(--light-green);
    }
    
    .loading-spinner i {
        animation: spin 1s linear infinite;
        margin-right: 0.5rem;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    .hadith-filters {
        display: flex;
        gap: 0.5rem;
        margin-bottom: 2rem;
        flex-wrap: wrap;
    }
    
    .filter-btn {
        background: rgba(255, 255, 255, 0.1);
        color: var(--white);
        border: 1px solid rgba(255, 255, 255, 0.3);
        padding: 0.6rem 1.2rem;
        border-radius: 20px;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 0.9rem;
    }
    
    .filter-btn.active,
    .filter-btn:hover {
        background: var(--highlight-green);
        border-color: var(--highlight-green);
        color: var(--white);
    }
    
    .daily-hadith {
        background: rgba(212, 175, 55, 0.1);
        border: 1px solid var(--gold);
        border-radius: 15px;
        padding: 2rem;
    }
    
    .daily-hadith-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
    }
    
    .daily-hadith-header h3 {
        color: var(--gold);
        margin: 0;
    }
    
    .refresh-btn {
        background: var(--gold);
        color: var(--dark-green);
        border: none;
        padding: 0.6rem 1rem;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 600;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .refresh-btn:hover {
        background: var(--gold-light);
        transform: translateY(-2px);
    }
    
    .memorization-feature {
        text-align: center;
    }
    
    .progress-stats {
        display: flex;
        justify-content: space-around;
        margin: 1rem 0;
    }
    
    .stat-item {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .stat-number {
        font-size: 2rem;
        font-weight: 700;
        color: var(--gold);
    }
    
    .stat-label {
        font-size: 0.9rem;
        color: var(--text-secondary);
    }
    
    .progress-bar {
        width: 100%;
        height: 8px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 4px;
        overflow: hidden;
        margin: 1rem 0;
    }
    
    .progress-fill {
        height: 100%;
        background: linear-gradient(90deg, var(--highlight-green), var(--gold));
        transition: width 0.3s ease;
        width: 0%;
    }
    
    .memorize-btn {
        background: var(--highlight-green);
        color: var(--white);
        border: none;
        padding: 0.8rem 1.5rem;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 600;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin: 0 auto;
    }
    
    .memorize-btn:hover {
        background: var(--gold);
        color: var(--dark-green);
        transform: translateY(-2px);
    }
    
    .quiz-feature {
        text-align: left;
    }
    
    .quiz-question {
        margin-bottom: 1rem;
    }
    
    .quiz-question p {
        color: var(--white);
        font-weight: 600;
    }
    
    .quiz-options {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin-bottom: 1rem;
    }
    
    .quiz-option {
        background: rgba(255, 255, 255, 0.1);
        color: var(--white);
        border: 1px solid rgba(255, 255, 255, 0.3);
        padding: 0.8rem 1rem;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s ease;
        text-align: left;
    }
    
    .quiz-option:hover:not(:disabled) {
        background: rgba(255, 255, 255, 0.2);
    }
    
    .quiz-option:disabled {
        cursor: not-allowed;
        opacity: 0.7;
    }
    
    .quiz-result {
        margin-bottom: 1rem;
    }
    
    .quiz-correct {
        color: #28a745;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .quiz-incorrect {
        color: #dc3545;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .next-question-btn {
        background: var(--gold);
        color: var(--dark-green);
        border: none;
        padding: 0.8rem 1.5rem;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 600;
        transition: all 0.3s ease;
        width: 100%;
    }
    
    .next-question-btn:hover {
        background: var(--gold-light);
        transform: translateY(-2px);
    }
    
    .hadith-section {
        margin-bottom: 2rem;
        padding: 1.5rem;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 12px;
        border-left: 4px solid var(--highlight-green);
    }
    
    .hadith-section h4 {
        color: var(--gold);
        margin-bottom: 1rem;
        font-size: 1.2rem;
    }
    
    .hadith-section .arabic-text {
        font-size: 1.3rem;
        color: var(--white);
        margin-bottom: 1rem;
        text-align: center;
        font-weight: 600;
    }
    
    .hadith-section p {
        color: var(--white);
        font-weight: 600;
        margin-bottom: 1rem;
    }
    
    .hadith-section small {
        color: var(--text-secondary);
        line-height: 1.6;
    }
    
    @media (max-width: 768px) {
        .hadith-search {
            flex-direction: column;
        }
        
        .hadith-filters {
            justify-content: center;
        }
        
        .daily-hadith-header {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
        }
        
        .progress-stats {
            flex-direction: column;
            gap: 1rem;
        }
    }
`;
document.head.appendChild(additionalStyles);

// Export hadith data for RAG system
if (typeof window !== 'undefined') {
    window.hadithDatabase = hadithData;
}
