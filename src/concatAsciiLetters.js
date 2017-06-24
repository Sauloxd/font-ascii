import _ from 'colors'
import { dimensions } from './sentenceToAsciiAlphabet'
import { sample } from 'lodash'


export const colorLetters = (asciiLetters, argColor) => {
  const sampleColors = [ 'red', 'green', 'yellow',
     'blue', 'magenta', 'cyan',
     'white', 'gray', 'grey']

  return Array(dimensions(asciiLetters, 'height')).fill(argColor ||  sample(sampleColors))
}

export default function (asciiLetters, color) {
  const colors = colorLetters(asciiLetters, color)
  return asciiLetters.reduce((acc, letter) => letter.split('\n').map((line, index) => (acc[index] || '') + line[colors[index]]),[])
}
