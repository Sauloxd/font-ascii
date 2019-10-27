const colors = require('colors');
const fs = require('fs');
const path = require('path');
const {
  getFileNames,
  FONT_DIR,
  generateCharMapBasedOn,
} = require('./file-processing-helpers');

const AOL_DIR = path.resolve(FONT_DIR, 'aol/');

const processFile = fileName => {
  console.log(colors.green(`START ${fileName}`));

  const content = fs
    .readFileSync(path.resolve(AOL_DIR, `${fileName}.aol`), 'utf-8')
    .split('\n')
    .map(r => r.replace('\r', ''));

  const contentMetadata = content[0];

  const [charHeight, commentLineHeaderCount] = contentMetadata.split(' ');

  const chars = generateCharMapBasedOn({
    commentLineHeaderCount,
    charHeight,
    content,
  });

  fs.writeFileSync(
    path.resolve(AOL_DIR, `${fileName}.json`),
    JSON.stringify(chars, null, 2),
    'utf-8',
  );

  console.log(colors.yellow(`END ${fileName}`));
};

getFileNames('aol').forEach(fileName => processFile(fileName));
