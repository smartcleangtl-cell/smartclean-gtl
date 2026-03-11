const fs = require('fs');
const path = require('path');

const root = process.cwd();
const assets = path.join(root, 'assets');
const pub = path.join(root, 'public');

try {
    if (fs.existsSync(assets)) {
        if (!fs.existsSync(pub)) {
            fs.mkdirSync(pub);
        }
        // Copy logo to root of public for easy access as /logo.png
        const logo = path.join(assets, 'android-chrome-512x512.png');
        if (fs.existsSync(logo)) {
            fs.copyFileSync(logo, path.join(pub, 'logo.png'));
        }
        console.log('Success: Logo placed in public/logo.png');
    } else {
        console.error('Assets folder not found');
    }
} catch (e) {
    console.error('Error: ' + e.message);
}
