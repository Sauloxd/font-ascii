import test from 'ava'
import { rectanglesPhrases, rectanglesAsciiLetters } from '../src/fixtures/rectanglePhrase.fixture'
import concatAsciiLetters, { colorLetters } from '../src/concatAsciiLetters'

test('red color', t => {
  t.deepEqual(colorLetters(rectanglesAsciiLetters.noSpaces, 'red'), ['red', 'red', 'red', 'red', 'red', 'red'])
})

test('random colors', t => {
  t.truthy(colorLetters(rectanglesAsciiLetters.noSpaces))
})

test('Concatting Ascii Letters', t => {
  t.deepEqual(concatAsciiLetters(rectanglesAsciiLetters.noSpaces, 'red'), rectanglesPhrases.red)
})
