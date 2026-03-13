const fs = require('fs');
const files = ['rename_assets.js', 'move_assets.js'];
files.forEach(f => {
    if (fs.existsSync(f)) {
        fs.unlinkSync(f);
        console.log(`Deleted ${f}`);
    }
});
