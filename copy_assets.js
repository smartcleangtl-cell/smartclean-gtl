const fs = require('fs');
const path = require('path');

const src = 'C:\\Users\\Malith\\.gemini\\antigravity\\brain\\8c2056cb-935c-494f-9b20-fdb8c2c164d4\\';
const dest = 'C:\\Users\\Malith\\Documents\\GitHub\\smartclean\\assets\\';

const files = [
    ['central_vacuum_motor_unit_1773215391437.png', 'motor_unit.png'],
    ['vacuum_inlet_wall_plate_1773215407579.png', 'inlet_plate.png'],
    ['house_pipe_system_diagram_1773215425243.png', 'pipe_diagram.png'],
    ['large_home_interior_clean_1773215470470.png', 'home_interior.png'],
    ['installation_team_working_1773215492381.png', 'installation_team.png'],
];

files.forEach(([srcFile, destFile]) => {
    const srcPath = path.join(src, srcFile);
    const destPath = path.join(dest, destFile);
    try {
        fs.copyFileSync(srcPath, destPath);
        console.log(`Copied: ${destFile}`);
    } catch (e) {
        console.error(`Failed: ${srcFile} -> ${e.message}`);
    }
});
console.log('Done!');
