import _ from 'colors'
import minimist from 'minimist'
import { sample, random, join, map } from 'lodash'
import * as fonts from './fonts'
import fontIndex from './fontIndex'

const colors = {
  9: 'red',
  10: 'green',
  11: 'yellow',
  12: 'blue',
  13: 'magenta',
  14: 'cyan',
  15: 'white',
  16: 'gray',
  17: 'grey',
  18: 'bgBlack',
  19: 'bgRed',
  20: 'bgGreen',
  21: 'bgYellow',
  22: 'bgBlue',
  23: 'bgMagenta',
  24: 'bgCyan',
  25: 'bgWhite',
  26: 'blackBG',
  27: 'redBG',
  28: 'greenBG',
  29: 'yellowBG',
  30: 'blueBG',
  31: 'magentaBG',
  32: 'cyanBG',
  33: 'whiteBG'
}

//ASCII CODES https://websitebuilders.com/tools/html-codes/a-z/

function loadFont() {
  return Promise.resolve(fontIndex['Featured FIGlet Fonts'])
}

export default function formPhrase(sentence, choosenFont) {
  const argv = minimist(process.argv.slice(2))
  const characters = checkForSpecialChars((argv.s || sentence).split(''))

  return loadFont()
    .then(fonts => {
      return choosenFont || ((argv.f) ? argv.f : sample(fonts))
    })
    .then(loadAlphabet)
    .then(alphabet => {
      const dimension = {
        height: alphabet.A.split('\n').length,
        width: alphabet.A.split('\n')[0].split('').length
      }
      const asciiArray = map(characters, char => {
        if (char === 'space') {
          return join(map(new Array(dimension.height), () => {
            return join(map(new Array(dimension.width), () => { return ' ' }), '')
          }), '\n')
        }
        return alphabet[char.toUpperCase()]
      })
      const phrase = []
      asciiArray.forEach(function (asciiChar) {
        const randomColor = random(9, 15)
        Array.apply(null, Array(dimension.height)).forEach((zero, index) => {
          const incomingChar = asciiChar.split('\n')[index]
          if (phrase[index]) {
            phrase[index].push(incomingChar[colors[randomColor]])
          } else {
            phrase[index] = [incomingChar[colors[randomColor]]]
          }
        })
      })
      return map(phrase, (row) => { return join(row, '') })
    })
    .then(asciiArray => {
      console.log(join(asciiArray, '\n'))
    })
    .catch(e => {
      formPhrase('invalid')
    })
}

function checkForSpecialChars(chars) {
  //Dont accept special Chars: its improvable here!
  return map(chars, char => {
    switch (char) {
      case ' ':
        return 'space'
      default:
        return char
    }
  })
}

function loadAlphabet(font) {
  return Promise.resolve(fonts[font])
    .catch(err => {
      console.log('Sorry we do not have this font: ', font)
    })
}
