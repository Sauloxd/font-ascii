import _ from 'colors'
import minimist from 'minimist'
import { sample, random, join, map } from 'lodash'
import { * as fonts } from './fonts'
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

const readFileAsync = promisify(fs.readFile)

//ASCII CODES https://websitebuilders.com/tools/html-codes/a-z/

function loadFont() {
  return Promise.resolve(fontIndex['Featured FIGlet Fonts'])
}

export default function formPhrase(sentence, choosenFont) {
  var argv = minimist(process.argv.slice(2))
  sentence = argv.s || sentence

  var characters = checkForSpecialChars(sentence.split(''))
  loadFont()
    .then(fonts => {
      return choosenFont || ((argv.f) ? argv.f : sample(fonts))
    })
    .then(loadAlphabet)
    .then(alphabet => {
      var dimension = {
        height: alphabet.A.split('\n').length,
        width: alphabet.A.split('\n')[0].split('').length
      }
      var asciiArray = map(characters, char => {
        //TODO: SPACE STILL NOT WORKING!
        if (char ===  'x20') return join(map(dimension.height, () => {
          return join(map(dimension.width, () => { return ' ' }))
        }), '\n')
        return alphabet[char.toUpperCase()]
      })
      var phrase = []
      asciiArray.forEach(function (asciiChar) {
        var randomColor = random(9, 15)
        Array.apply(null, Array(dimension.height)).forEach((zero, index) => {
          var incomingChar = asciiChar.split('\n')[index]
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
}

function checkForSpecialChars(chars) {
  return map(chars, char => {
    switch (char) {
      case ' ':
        return 'x20'
      default:
        return char
    }
  })
}

function loadAlphabet(font) {
  console.log('font', font)
  return Promise.resolve(fonts[font])
    .catch(err => {
      console.log('Sorry we do not have this font: ', font)
    })
}
