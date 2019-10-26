const fs = require('fs');
const path = require('path');

const FONT_DIR = path.resolve(__dirname, 'fonts/flf/');

const fileNames = fs
  .readdirSync(FONT_DIR)
  .filter(f => f.match(/\.flf$/))
  .map(f => f.replace('.flf', ''));

const processFile = fileName => {
  console.log('START ', fileName);
  const content = fs
    .readFileSync(path.resolve(FONT_DIR, `${fileName}.flf`), 'utf-8')
    .split('\n')
    .map(r => r.replace('\r', ''));

  const contentMetadata = content[0];

  const [
    magicValue,
    height,
    _not,
    _used,
    _variables,
    skipLines,
    _rtol,
  ] = contentMetadata.split(' ');
  const contentWithoutComments = content.slice(Number(skipLines) + 1);
  const chars = contentWithoutComments.reduce(
    (acc, line, index) => {
      if (index !== 0 && index % height === 0) {
        const char = acc.buffer;

        return {
          ...acc,
          ['C' + index / height]: char,
          buffer: [line],
        };
      }

      return {
        ...acc,
        buffer: acc.buffer.concat(line),
      };
    },
    {
      buffer: [],
    },
  );

  // console.log(chars.C59);

  const replaceAt = (string, index, replace) => {
    return string.substring(0, index) + replace + string.substring(index + 1);
  };

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
    path.resolve(FONT_DIR, `${fileName}.json`),
    JSON.stringify(cleanSpecialCharFromChars, null, 2),
    'utf-8',
  );

  console.log('END ', fileName);
};

fileNames.forEach(fileName => processFile(fileName));
