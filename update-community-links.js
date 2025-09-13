// Script to update all community.html links to community-board.html
const fs = require('fs');
const path = require('path');

const filesToUpdate = [
    'quran.html',
    'islamic-calendar.html',
    'prayer-guide.html',
    'hadiths.html',
    'sunnah.html',
    'seerah.html',
    'qibla-finder.html',
    'basic-arabic.html',
    'faq.html',
    'wudu-guide.html',
    'new-muslims.html'
];

filesToUpdate.forEach(fileName => {
    const filePath = path.join(__dirname, fileName);
    
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Update various patterns of community links
        content = content.replace(/href="\/?community\.html"/g, 'href="community-board.html"');
        content = content.replace(/href="community\.html"/g, 'href="community-board.html"');
        content = content.replace(/window\.location\.href='community\.html'/g, "window.location.href='community-board.html'");
        content = content.replace(/window\.location\.href="community\.html"/g, 'window.location.href="community-board.html"');
        
        fs.writeFileSync(filePath, content);
        console.log(`Updated ${fileName}`);
    } else {
        console.log(`File not found: ${fileName}`);
    }
});

console.log('All community links updated!');
