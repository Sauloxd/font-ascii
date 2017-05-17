require('colors')

const typefaces = require('./typefaces')
const _         = require('lodash')
const Promise   = require('bluebird')
const fs        = Promise.promisifyAll(require('fs'))

//ASCII CODES https://websitebuilders.com/tools/html-codes/a-z/

module.exports = {

}
formPhrase('oi', 'Alpha')

function loadFIGletFonts() {
  return typefaces.getAllFonts()
    .then(allFonts => { return allfonts['Featured FIGlet Fonts']})
}

function formPhrase(sentence, font) {
  var characters = checkForSpecialChars(sentence.split(''))
  loadAlphabet(font)
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
        Array.apply(null, Array(dimension.height)).forEach((zero, index) => {
          var incomingChar = asciiChar.split('\n')[index]
          if (phrase[index]) {
            phrase[index].push(incomingChar.red)
          } else {
            phrase[index] = [incomingChar.green]
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
