const colors = require('colors');
const fs = require('fs');
const path = require('path');
const inquierer = require('inquirer');
const { FONT_DIR } = require('./file-processing-helpers');

const NOT_CATEGORIZED = path.resolve(__dirname, 'not-categorized-fonts.json');

const FLF_DIR = path.resolve(FONT_DIR, 'flf/');

const { flf, aol } = JSON.parse(fs.readFileSync(NOT_CATEGORIZED, 'utf-8'));

flf.fonts.reduce((process, fileName) => {
  return process.then(() => {
    const fontData = JSON.parse(
      fs.readFileSync(
        path.resolve(FLF_DIR, fileName.replace('.flf', '.json')),
        'utf-8',
      ),
    );

    const { buffer, ...chars } = fontData;

    const parsedAnswers = {
      emptyChar: [],
    };

    console.log('Start processing ', fileName);
    const initialCount = Object.keys(chars).length;
    const removeEmptyChar = [
      (acc, [charCode, charInLines]) => {
        if (charInLines.join('').trim() === '') {
          parsedAnswers.emptyChar.push(charCode);
          return acc;
        }

        return [...acc, [charCode, charInLines]];
      },
      [],
    ];
    return (
      Object.entries(chars)
        .reduce(...removeEmptyChar)
        // .map(a => {
        //   console.log(a);
        //   return a;
        // })
        .reduce((chainedPromises, [charCode, charInLines], index, array) => {
          return chainedPromises.then(() =>
            inquierer
              .prompt({
                message: `[${colors.green(charCode)}]:
${charInLines.join('\n')}
      `,
                type: 'input',
                name: 'char',
              })
              .then(answer => {
                if (answer.char === '') parsedAnswers.emptyChar.push(charCode);
                else parsedAnswers[charCode] = answer.char;
                console.log(parsedAnswers);
                console.log(`[${index + 1}/${initialCount}]`);
                // remove finished font from not-categorized
                // add to categorized
                // make a way to fix typos!
              }),
          );
        }, Promise.resolve())
    );
  });
}, Promise.resolve());
