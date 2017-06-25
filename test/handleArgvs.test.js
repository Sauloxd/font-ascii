import test from 'ava'
import handleArgvs from '../src/handleArgvs'

test('Handle Argvs, all inputs types', t => {
  const allInputTypes = ['Hello', '-t', 'Rectangles', '--color', 'red']

  t.deepEqual(handleArgvs(allInputTypes), {
    sentence: 'Hello',
    typeface: 'Rectangles',
    color: 'red'
  })
})

test('Handle Argvs, all inputs types', t => {
  const allInputTypes = ['-t', '--color', 'red']

  t.deepEqual(handleArgvs(allInputTypes), {
    color: 'red'
  })
})

test('Handle Argvs, invalid input', t => {
  const invalidInput = ['-invalid']

  const error = t.throws(_ => t.is(handleArgvs(invalidInput)))

  t.regex( error.message, /INVALID_INPUT/)
})
