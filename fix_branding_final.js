const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const assetsDir = path.join(__dirname, 'assets');

try {
    if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir);
    }
    
    const logoSrc = path.join(assetsDir, 'android-chrome-512x512.png');
    const logoDest = path.join(publicDir, 'logo.png');
    
    if (fs.existsSync(logoSrc)) {
        fs.copyFileSync(logoSrc, logoDest);
        console.log('Logo copied successfully.');
    } else {
        console.error('Logo source not found at: ' + logoSrc);
    }
} catch (err) {
    console.error('Error: ' + err.message);
}
