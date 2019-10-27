const axios = require('axios');
const fs = require('fs');
const path = require('path');
const allAvailableFontNames = require('./all-available-font-names');
// Code to run in http://patorjk.com/software/taag/#p=display&f=Fire%20Font-k&t=1
// To get all correct font names.
// Array.from(document.querySelector('select#fontList').querySelectorAll('option')).map(o => o.value)

const getUrl = fontName =>
  `http://patorjk.com/software/taag/fonts/${encodeURI(fontName)}`;

const burstsOf = 4;

const splittedFontNames = allAvailableFontNames.reduce(
  (splitted, font, index) => {
    if (index % burstsOf === 0) {
      splitted.push([font]);
    } else {
      splitted[splitted.length - 1].push(font);
    }
    return splitted;
  },
  [],
);

const groupedFontNamePromises = splittedFontNames.reduce(
  (chainedPromises, fontNameGroup) => {
    return chainedPromises.then(() =>
      Promise.all(
        fontNameGroup.map(
          fontName =>
            console.log(`start getting ${fontName}`) ||
            axios({
              method: 'GET',
              url: getUrl(fontName),
              responseType: 'arraybuffer',
            })
              .then(r =>
                fs.writeFileSync(
                  path.resolve(
                    __dirname,
                    `fonts/${fontName.split('.')[1]}/${fontName}`,
                  ),
                  r.data.toString('latin1'),
                  'utf-8',
                ),
              )
              .then(() => console.log(`Finish getting ${fontName}`))
              .catch(
                e =>
                  console.log('Error: ', e) ||
                  fs.appendFileSync(
                    path.resolve(__dirname, `error.log`),
                    fontName + '\n',
                    'utf-8',
                  ),
              ),
        ),
      ),
    );
  },
  Promise.resolve(),
);

groupedFontNamePromises.then(() => console.log('Finished!'));
