import test from 'ava';
import sentenceToAsciiAlphabet from '../src/sentenceToAsciiAlphabet';
import { Rectangles } from '../src/fonts';
import { rectanglesAsciiLetters } from '../src/fixtures/rectanglePhrase.fixture';

test('Generating Ascii Letters from Sentence', t => {
  const asciiConcated = sentenceToAsciiAlphabet('test', Rectangles).fold();

  t.deepEqual(asciiConcated, rectanglesAsciiLetters.noSpaces);
});

test('Generating Ascii Letters from Sentence with space', t => {
  const asciiConcated = sentenceToAsciiAlphabet('te st', Rectangles).fold();

  t.deepEqual(asciiConcated, rectanglesAsciiLetters.withSpaces);
});
