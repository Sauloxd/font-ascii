require('colors')

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

const typefaces = require('./typefaces')
const _         = require('lodash')
const Promise   = require('bluebird')
const fs        = Promise.promisifyAll(require('fs'))

//ASCII CODES https://websitebuilders.com/tools/html-codes/a-z/

module.exports = {
  formPhrase
}

formPhrase()

function loadFont() {
  return fs.readFileAsync('./fontIndex.json')
    .then(json => {
      return JSON.parse(json)['Featured FIGlet Fonts']
    })
}

function formPhrase(sentence) {
  var argv = require('minimist')(process.argv.slice(2))
  sentence = argv.s || sentence

  var characters = checkForSpecialChars(sentence.split(''))
  loadFont()
    .then(fonts => {
      return (argv.f) ? argv.f : _.sample(fonts)
    })
    .then(loadAlphabet)
    .then(alphabet => {
      var dimension = {
        height: alphabet.A.split('\n').length,
        width: alphabet.A.split('\n')[0].split('').length
      }
      var asciiArray = _.map(characters, char => {
        //TODO: SPACE STILL NOT WORKING!
        if (char ===  'x20') return _.join(_.map(dimension.height, () => {
          return _.join(_.map(dimension.width, () => { return ' ' }))
        }), '\n')
        return alphabet[char.toUpperCase()]
      })
      var phrase = []
      asciiArray.forEach(function (asciiChar) {
        var randomColor = _.random(9, 15)
        Array.apply(null, Array(dimension.height)).forEach((zero, index) => {
          var incomingChar = asciiChar.split('\n')[index]
          if (phrase[index]) {
            phrase[index].push(incomingChar[colors[randomColor]])
          } else {
            phrase[index] = [incomingChar[colors[randomColor]]]
          }
        })
      })
      return _.map(phrase, (row) => { return _.join(row, '') })
    })
    .then(asciiArray => {
      console.log(_.join(asciiArray, '\n'))
    })
}

function checkForSpecialChars(chars) {
  return _.map(chars, char => {
    switch (char) {
      case ' ':
        return 'x20'
      default:
        return char
    }
  })
}

function loadAlphabet(font) {
  return fs.readFileAsync('fonts/' + font + '.json')
    .then(json => {
      return JSON.parse(json)
    })
    .catch(err => {
      console.log('Sorry we do not have this font: ', font)
    })
}
