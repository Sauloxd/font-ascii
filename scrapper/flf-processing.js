const colors = require('colors');
const fs = require('fs');
const path = require('path');
const {
  getFileNames,
  FONT_DIR,
  generateCharMapBasedOn,
  replaceAt,
} = require('./file-processing-helpers');

const FLF_DIR = path.resolve(FONT_DIR, 'flf/');

const processFile = fileName => {
  console.log(colors.green(`START ${fileName}`));

  const content = fs
    .readFileSync(path.resolve(FLF_DIR, `${fileName}.flf`), 'utf-8')
    .split('\n')
    .map(r => r.replace('\r', ''));

  const contentMetadata = content[0];

  const [
    magicValue,
    charHeight,
    _not,
    _used,
    _variables,
    commentLineHeaderCount,
    _rtol,
  ] = contentMetadata.split(' ');

  const chars = generateCharMapBasedOn({
    commentLineHeaderCount,
    charHeight,
    content,
  });

  // console.log(chars.C59);

  const removeSymbolsFromLines = (line, index, array) => {
    // Do not remove mindless $ and @ because some fonts may use theses chars
    let result = line;
    const indeOfFirstOccurency = result.indexOf('$');
    result = replaceAt(result, indeOfFirstOccurency, ' ');
    const indeOfLastOccurency = result.lastIndexOf('$');
    result = replaceAt(result, indeOfLastOccurency, ' ');
    result = result.replace('@', ' '); // Baseline has 2@

    if (array.length - 1 === index) {
      result = result.replace('@', ' '); // Baseline has 2@
    }

    return result;
  };

  const cleanSpecialCharFromChars = Object.entries(chars).reduce(
    (cleanedChars, [key, value]) => {
      return {
        ...cleanedChars,
        [key]: value.map(removeSymbolsFromLines),
      };
    },
    {},
  );

  fs.writeFileSync(
    path.resolve(FLF_DIR, `${fileName}.json`),
    JSON.stringify(cleanSpecialCharFromChars, null, 2),
    'utf-8',
  );

  console.log(colors.yellow(`END ${fileName}`));
};

console.log(getFileNames('flf'));
getFileNames('flf').forEach(fileName => processFile(fileName));
