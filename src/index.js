import minimist from 'minimist'
import { sample } from 'lodash'
import * as fonts from './fonts'
import fontTypes from './fontIndex'
import sentenceToAsciiAlphabet from './sentenceToAsciiAlphabet'
import concatAsciiLetters from './concatAsciiLetters'

//ASCII CODES https://websitebuilders.com/tools/html-codes/a-z/

export default function formPhrase(sentence, config) {
  try {
    const { typeface, color, verbose } = prepareParams(config, minimist(process.argv.slice(2)))
    if (verbose) {
      console.log('Typeface: ', typeface)
      console.log('Color: ', color)
    }

    // If he tries to input an invalid typeface
    if (fontTypes.indexOf(typeface) === -1 && typeface !== '') throw new Error('INVALID_TYPEFACE')

    //Otherwise use sample
    const font = fontTypes[typeface] || sample(fonts)
    console.log(concatAsciiLetters(sentenceToAsciiAlphabet(sentence, font), color).join('\n'))
  } catch (e) {
    console.log(e)
    //formPhrase('invalid')
  }
}

function prepareParams(config, argv) {
  const { typeface, color, verbose } = config

  return {
    typeface: argv.t || typeface || '',
    color: argv.c || color || '',
    verbose: argv.v || verbose || ''
  }
}
