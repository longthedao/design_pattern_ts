const fs = require('fs');
const path = require('path');

var subHtmlFiles = [];
const srcItems = fs.readdirSync(path.join(__dirname, 'src'));

srcItems.forEach((item) => {
  const file = fs.lstatSync(path.resolve('./src', item));
  if (file.isDirectory()) {
    subHtmlFiles.push({ folderName: item, fileName: `${item}.html` });
  }
});

console.log(path.resolve('./src', 'observer'))
