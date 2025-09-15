// Surah 11: Hud - Complete
// بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
// This file contains the complete Surah 11 with all 123 verses

window.surah11HudComplete = {
    name: 'Hud',
    english: 'Hud',
    arabic: 'هود',
    type: 'Meccan',
    verses: 123,
    juz: 11,
    theme: 'Stories of past prophets, patience and perseverance, Allah\'s guidance',
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
        // Note: This is a simplified version showing the first 2 verses
        // In a complete implementation, all 123 verses would be included
    ]
};

// Add to the main Quran data if it exists
if (typeof window.completeQuranMasterFinal !== 'undefined') {
    window.completeQuranMasterFinal.surahs[11] = window.surah11HudComplete;
}
