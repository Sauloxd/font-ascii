import _ from 'colors'
import { dimensions } from './sentenceToAsciiAlphabet'
import { sample } from 'lodash'


export const colorLetters = (asciiLetters, argColor) => {
  const sampleColors = [ 'red', 'green', 'yellow',
    'blue', 'magenta', 'cyan',
    'white', 'gray', 'grey']

  return Array(asciiLetters.length).fill(0)
    .map(_ => argColor ||  sample(sampleColors))
}

export default function (asciiLetters, color) {
  const colors = colorLetters(asciiLetters, color)

  return asciiLetters.reduce((acc, letter, widthIndex) => letter.split('\n')
    .map((line, heightIndex) => (acc[heightIndex] || '') + line[colors[widthIndex]]), [])
}
