// Regenerate images.txt from data.js:  node source/images_list.js
const fs = require('fs'), path = require('path');
eval(fs.readFileSync(path.join(__dirname, 'data.js'), 'utf8') + ';global.D=SM_DATA');
const rows = new Map(fs.readFileSync(path.join(__dirname, '..', 'images.txt'), 'utf8').split('\n').filter(Boolean).map(l => l.split('\t')));
for (const [src, fb] of D.ALL()) if (fb) rows.set(src, fb);
fs.writeFileSync(path.join(__dirname, '..', 'images.txt'), [...rows].map(([a, b]) => a + '\t' + b).join('\n') + '\n');
console.log(rows.size, 'images listed');
