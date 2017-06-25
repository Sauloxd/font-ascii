import formPhrase from 'font-ascii'
//or
const formPhrase = require('font-ascii').default

//Usage
// All Random
formPhrase('awesome')

// With config
formPhrase('configuration', {
  typeface: 'Rectangles',
  color: 'cyan',
  verbose: true
})
