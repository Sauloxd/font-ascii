import Box from './types/Box';
import R from 'ramda';

const specialChars = {
  EMPTY: ' ',
};

const handlers = {
  [specialChars.EMPTY]: ({ height, width }) =>
    Array(height)
      .fill(0)
      .map(fillEmpty.bind(null, width))
      .join('\n'),
};

function fillEmpty(width) {
  return Array(width)
    .fill(0)
    .map(_ => ' ')
    .join('');
}

function handleAlphabetChar(alphabet, char) {
  return (
    (handlers[char] && handlers[char](dimensions(alphabet))) ||
    alphabet[char.toUpperCase()]
  );
}

export function dimensions(letters, dimension) {
  const letter = letters instanceof Array ? (letters || [])[0] : letters.A;
  const proportion = {
    height: letter.split('\n').length,
    width: letter.split('\n')[0].split('').length,
  };

  return (dimension && proportion[dimension]) || proportion;
}

export default function(sentence, alphabet) {
  return Box(sentence)
    .map(R.split(''))
    .map(R.map(char => handleAlphabetChar(alphabet, char)));
}
