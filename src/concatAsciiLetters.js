import _ from 'colors' // Globally inject colors to String Prototype
import { dimensions } from './sentenceToAsciiAlphabet'
import R from 'ramda'

export const colorLetters = (asciiLetters, argColor) => {
  const sampleColors = [ 'red', 'green', 'yellow',
    'blue', 'magenta', 'cyan',
    'white', 'gray', 'grey']

  return Array(asciiLetters.length).fill(0)
    .map(_ => argColor || sampleColors[Math.floor(Math.random() * (sampleColors.length))] || sampleColors[0])
}

export default R.curry(function (color, asciiLetters) {
  const colors = colorLetters(asciiLetters, color)

  return asciiLetters
    .reduce((acc, letter, widthIndex) =>
      letter.split('\n').map((line, heightIndex) => (acc[heightIndex] || '') + line[colors[widthIndex]]), [])
})
