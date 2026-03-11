const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'assets', 'android-chrome-512x512.png');
const dest = path.join(__dirname, 'public', 'logo.png');

if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log('Logo copied to ' + dest);
} else {
    console.error('Source not found: ' + src);
}
