const fs = require('fs');
const path = require('path');

const replacements = {
  'text-xs': 'text-[15px] leading-[20px]',
  'text-sm': 'text-[17.5px] leading-[25px]',
  'text-base': 'text-[20px] leading-[30px]',
  'text-lg': 'text-[22.5px] leading-[35px]',
  'text-xl': 'text-[25px] leading-[35px]',
  'text-2xl': 'text-[30px] leading-[40px]',
  'text-3xl': 'text-[37.5px] leading-[45px]',
  'text-4xl': 'text-[45px] leading-[50px]',
  'text-5xl': 'text-[60px] leading-[60px]',
  'text-6xl': 'text-[75px] leading-[75px]',
  'text-7xl': 'text-[90px] leading-[90px]'
};

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Replace standard text classes
    for (const [key, value] of Object.entries(replacements)) {
        // Match boundary right before key (space, quote, or colon) and boundary right after (space, quote)
        const regex = new RegExp(`(?<=^|[\\s"':])${key}(?=$|[\\s"'])`, 'g');
        content = content.replace(regex, value);
    }

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Updated: ' + filePath);
    }
}

function scanDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (file !== 'node_modules' && file !== '.git') {
                scanDir(fullPath);
            }
        } else if (fullPath.endsWith('.html') || fullPath.endsWith('.jsx')) {
            processFile(fullPath);
        }
    }
}

scanDir(process.cwd());
console.log('Scaling replacement complete.');
