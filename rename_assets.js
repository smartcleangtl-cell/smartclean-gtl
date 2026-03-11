const fs = require('fs');
const path = require('path');

const assetsDir = 'C:\\Users\\Malith\\Documents\\GitHub\\smartclean\\assets';
const renames = [
    ['Cinematic_2d_to_3d_transformation_walls_rise_verti_f38ed2c6b9.mp4', 'house_section.mp4'],
    ['Logo_reveal_vacuum_cleaner_0175f3af2e (1).mp4', 'logo_reveal.mp4'],
    ['Motor_floating_css_setup_34cf624351.mp4', 'motor_floating.mp4'],
    ['Whisk_ewnjzjnjbdz5gzml1syibtytemzjrtl1cdok1sy.mp4', 'cleaning_demo.mp4'],
    ['inlet.jpeg', 'wall_inlet.jpeg'],
    ['motor.jpeg', 'motor_unit.jpeg']
];

renames.forEach(([oldName, newName]) => {
    const oldPath = path.join(assetsDir, oldName);
    const newPath = path.join(assetsDir, newName);
    if (fs.existsSync(oldPath)) {
        fs.renameSync(oldPath, newPath);
        console.log(`Renamed ${oldName} to ${newName}`);
    } else {
        console.log(`File not found: ${oldName}`);
    }
});
