import _ from 'colors'
import minimist from 'minimist'
import { sample, random, join, map } from 'lodash'
import * as fonts from './fonts'
import fontIndex from './fontIndex'

const colors = [ 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white', 'gray', 'grey']

//ASCII CODES https://websitebuilders.com/tools/html-codes/a-z/

function loadFont() {
  return Promise.resolve(fontIndex['Featured FIGlet Fonts'])
}

export default function formPhrase(sentence, obj) {
  const typeface = obj && obj.typeface
  const color = obj && obj.color

  if (color && colors.indexOf(color) === -1) throw new Error('INVALID_COLOR')

  const argv = minimist(process.argv.slice(2))
  const characters = checkForSpecialChars((argv.s || sentence).split(''))

  return loadFont()
    .then(mainfont => {
      return fonts[typeface] || sample(fonts)
    })
    .then(font => {
      if (!fonts) throw new Error('INVALID_TYPEFACE')
      return font
    })
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
        const randomColor = sample(colors)
        Array.apply(null, Array(dimension.height)).forEach((zero, index) => {
          const incomingChar = asciiChar.split('\n')[index]
          if (phrase[index]) {
            phrase[index].push(incomingChar[color || randomColor])
          } else {
            phrase[index] = [incomingChar[color || randomColor]]
          }
        })
      })
      return map(phrase, (row) => { return join(row, '') })
    })
    .then(asciiArray => {
      console.log(join(asciiArray, '\n'))
    })
    .catch(e => {
      console.log('Error!', e.message)
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

