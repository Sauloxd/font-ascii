const colors = require('colors');
const fs = require('fs');
const path = require('path');
const inquierer = require('inquirer');
const { FONT_DIR } = require('./file-processing-helpers');

const NOT_CATEGORIZED = path.resolve(__dirname, 'not-categorized-fonts.json');

const FLF_DIR = path.resolve(FONT_DIR, 'flf/');

const notParsedData = JSON.parse(fs.readFileSync(NOT_CATEGORIZED, 'utf-8'));

notParsedData.flf.fonts.reduce((process, fileName) => {
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
                message: `[${colors.green(charCode)}] - ${index + 1}/${
                  array.length
                }:
${charInLines.join('\n')}
      `,
                type: 'input',
                name: 'char',
              })
              .then(answer => {
                if (answer.char === '') parsedAnswers.emptyChar.push(charCode);
                else parsedAnswers[charCode] = answer.char;
                console.log(parsedAnswers);
                // remove finished font from not-categorized
                // add to categorized
                // make a way to fix typos!
              }),
          );
        }, Promise.resolve())
        .then(() => {
          fs.writeFileSync(
            path.resolve(__dirname, `processed/${fileName}.json`),
            JSON.stringify(parsedAnswers, null, 2),
            'utf-8',
          );
        })
        .then(() => {
          fs.writeFileSync(
            path.resolve(__dirname, 'not-categorized-fonts.json'),
            JSON.stringify(
              Object.assign(notParsedData, {
                flf: {
                  fonts: notParsedData.flf.fonts.filter(
                    name => name !== fileName,
                  ),
                },
              }),
              null,
              2,
            ),
            'utf-8',
          );
          const categorizedFonts = JSON.parse(
            fs.readFileSync(
              path.resolve(__dirname, 'categorized-fonts.json'),
              'utf-8',
            ),
          );
          fs.writeFileSync(
            path.resolve(__dirname, 'categorized-fonts.json'),
            JSON.stringify(
              Object.assign(categorizedFonts, {
                flf: {
                  fonts: categorizedFonts.flf.fonts.concat(fileName),
                },
              }),
              null,
              2,
            ),
            'utf-8',
          );
          console.log(`\n\nFinished Processing ${fileName}\n\n`);
        })
    );
  });
}, Promise.resolve());
