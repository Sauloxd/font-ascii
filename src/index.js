import { sample } from 'lodash'
import * as fonts from './fonts'
import sentenceToAsciiAlphabet from './sentenceToAsciiAlphabet'
import concatAsciiLetters from './concatAsciiLetters'
//
//ASCII CODES https://websitebuilders.com/tools/html-codes/a-z/
export default function formPhrase(sentence, config) {
  if (!sentence) return

  const typeface = config && config.typeface,
    color = config && config.color,
    verbose = config && config.verbose

  if (verbose) {
    console.log('Typeface: ', typeface)
    console.log('Color: ', color)
  }
  // If he tries to input an invalid typeface
  if (typeface !== '' && fonts[typeface] === -1) throw new Error('INVALID_TYPEFACE')

  //Otherwise use sample
  const font = fonts[typeface] || sample(fonts)
  console.log(concatAsciiLetters(sentenceToAsciiAlphabet(sentence, font), color).join('\n'))
}
