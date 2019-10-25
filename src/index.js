import R from 'ramda';
import * as fonts from './fonts';
import sentenceToAsciiAlphabet from './sentenceToAsciiAlphabet';
import concatAsciiLetters from './concatAsciiLetters';

const randomInt = max => Math.floor(Math.random() * max);

export default function formPhrase(sentence, config) {
  if (!sentence) return;

  const typeface = config && config.typeface,
    color = config && config.color,
    verbose = config && config.verbose;

  if (verbose) {
    console.log('Typeface: ', typeface);
    console.log('Color: ', color);
  }
  // If he tries to input an invalid typeface
  if (typeface !== '' && fonts[typeface] === -1)
    throw new Error('INVALID_TYPEFACE');

  const font =
    fonts[typeface] ||
    fonts[Object.keys(fonts)[randomInt(Object.keys(fonts).length)]];

  console.log(
    sentenceToAsciiAlphabet(sentence, font)
      .map(concatAsciiLetters(color))
      .map(R.join('\n'))
      .fold(),
  );
}
