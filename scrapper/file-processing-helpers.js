const { resolve } = require('path');
const fs = require('fs');

const FONT_DIR = resolve(__dirname, 'fonts');

const getFileNames = type => {
  if (!['aol', 'flf'].includes(type)) throw new Error('Invalid type');
  console.log(fs.readdirSync(resolve(FONT_DIR, type)));
  console.log(new RegExp(`\.${type}$`));

  return fs
    .readdirSync(resolve(FONT_DIR, type))
    .filter(f => f.match(new RegExp(`\.${type}$`)))
    .map(f => f.replace(`.${type}`, ''));
};

const generateCharMapBasedOn = ({
  commentLineHeaderCount,
  charHeight,
  content,
}) => {
  const contentWithoutComments = content.slice(
    Number(commentLineHeaderCount) + 1,
  );
  const chars = contentWithoutComments.reduce(
    (acc, line, index, array) => {
      const isFirst = index === 0;
      const isLast = array.length - 1 === index;
      const char = acc.buffer;

      if (!isFirst && index % charHeight === 0) {
        return {
          ...acc,
          ['C' + index / charHeight]: char,
          buffer: array.length - 1 === index ? [] : [line],
        };
      }

      // for some reason, AOL last letter is 1 line less than height
      if (isLast) {
        const charNumber = Math.ceil(index / charHeight);

        return {
          ...acc,
          ['C' + charNumber]: fillIfMissingLines(char, charHeight),
          buffer: [],
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

  return chars;
};

const fillIfMissingLines = (char, charHeight) => {
  if (charHeight < char.length)
    throw new Error('Parsed char has more heigh than allowed!', {
      char,
      charHeight,
    });
  let missingLines = charHeight - char.length;
  const filledChar = [...char];
  const newLine = Array(char[0].length)
    .fill(0)
    .map(i => ' ')
    .join('');

  while (missingLines !== 0) {
    filledChar.push(newLine);
    missingLines = missingLines - 1;
  }

  return filledChar;
};

const replaceAt = (string, index, replace) => {
  return string.substring(0, index) + replace + string.substring(index + 1);
};

module.exports = {
  FONT_DIR,
  getFileNames,
  generateCharMapBasedOn,
  replaceAt,
};
