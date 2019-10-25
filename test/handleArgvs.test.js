import test from 'ava';
import handleArgvs from '../src/handleArgvs';

test('#handleArgvs should handle typeface and color', t => {
  const allInputTypes = ['Hello', '-t', 'Rectangles', '--color', 'red'];

  t.deepEqual(handleArgvs(allInputTypes), {
    sentence: 'Hello',
    typeface: 'Rectangles',
    color: 'red',
  });
});

test('#handleArgvs should handle only color ', t => {
  const allInputTypes = ['-t', '--color', 'red'];

  t.deepEqual(handleArgvs(allInputTypes), {
    color: 'red',
  });
});

test('#handleArgvs should break when passing invalid flags', t => {
  const invalidInput = ['-invalid'];

  const error = t.throws(_ => t.is(handleArgvs(invalidInput)));

  t.regex(error.message, /INVALID_INPUT/);
});
