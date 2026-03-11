const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const publicAssetsDir = path.join(publicDir, 'assets');
const rootAssetsDir = path.join(__dirname, 'assets');

if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
}
if (!fs.existsSync(publicAssetsDir)) {
    fs.mkdirSync(publicAssetsDir);
}

const logoFile = 'android-chrome-512x512.png';
const srcLogo = path.join(rootAssetsDir, logoFile);
const destLogo = path.join(publicDir, 'logo.png');

if (fs.existsSync(srcLogo)) {
    fs.copyFileSync(srcLogo, destLogo);
    console.log('Logo copied to public/logo.png');
}

// Also copy all assets to public/assets for completeness
const files = fs.readdirSync(rootAssetsDir);
files.forEach(file => {
    const srcPath = path.join(rootAssetsDir, file);
    const destPath = path.join(publicAssetsDir, file);
    if (!fs.lstatSync(srcPath).isDirectory()) {
        fs.copyFileSync(srcPath, destPath);
    }
});

console.log('Finished copying assets to public folder.');
