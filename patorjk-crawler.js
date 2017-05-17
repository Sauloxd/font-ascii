'use strict'
var site      = 'http://patorjk.com'
var cte       = require('./constants')
var http      = require('http')
var _         = require('lodash')
var cheerio   = require('cheerio')
var Promise   = require('bluebird')
var urlEncode = require('urlencode')
var fs        = Promise.promisifyAll(require('fs'))
var Horseman  = require('node-horseman')

scavengePatorjk()

function scavengePatorjk() {
  var argv = require('minimist')(process.argv.slice(2))

  getFontList(argv)
    .then(getAlphabetForEveryFont)
}

function getAlphabetForEveryFont(fontList) {
  return Promise.mapSeries(fontList[cte.target], getForEveryAlphabet)
    .then(asciiFonts => {
      return _.reduce(asciiFonts, (groupedFontAscii, asciiFont, index) => {
        groupedFontAscii[fontList[cte.target][index]] = asciiFont
        return groupedFontAscii
      }, {})
    })
}

function getForEveryAlphabet(fontFace) {
  return Promise.mapSeries(cte.alphabet, phantomCrawlForFontByLetter.bind({fontFace:
  fontFace}))
    .then(asciiAlphabet => {
      return _.reduce(asciiAlphabet, (groupedAsciiAlphabet, asciiLetter, index) => {
        groupedAsciiAlphabet[cte.alphabet[index]] = asciiLetter
        return groupedAsciiAlphabet
      }, {}) // => { A: '   __ - ; ', B: 'other bizarre string }
    })
    .then((asciiFont) => {
      return fs.writeFileAsync('fonts/' + fontFace + '.json', JSON.stringify(asciiFont, null, 2), 'utf8', 2)
    })
}

function phantomCrawlForFontByLetter(letter) {
  var self = this
  console.log('Crawling for font face: ', self.fontFace)
  var path = site + '/software/taag/#p=display&f=' + urlEncode(self.fontFace) + '&t=' + letter
  console.log(path)
  var horseman = new Horseman()
  return horseman
    .open(path)
    .text('#taag_output_text')
    .then((result) => { console.log(result); horseman.close(); return result })
    .catch((err) => {
      if (fs.existsSync('fonts/' + self.fontFace + '.json'))
        return fs.unlinkAsync('fonts/' + self.fontFace + '.json')
          .then(() => {
            return fs.writeFileAsync('.checkpoint.json', JSON.stringify({err: err, fontFace: self.fontFace, letter: letter}, null, 2), 'utf8', 2)
          })

      return fs.writeFileAsync('.checkpoint.json', JSON.stringify({err: err, fontFace: self.fontFace, letter: letter}, null, 2), 'utf8', 2)
    })
}

function getFontList(argv) {
  var fontIndexPath = './fontIndex.json'
  if (fs.existsSync(fontIndexPath)) {
    return fs.readFileAsync(fontIndexPath, 'utf8')
      .then(file => {
        const defaultGroup = 'Featured FIGlet Fonts'
        var file = JSON.parse(file)
        var index = (argv.f) ? file[argv.g || defaultGroup].indexOf(argv.f) : 0
        file[argv.group || defaultGroup] = file[argv.group || defaultGroup].slice(index)

        return file
      })
  }

  var path = '/software/taag/#p=display&f=Alpha&t=A' //random Path just to get FontList
  var horseman = new Horseman()
  return horseman
    .open(site + path)
    .html() //TODO: it's improvable
    .then(body => {
      var $ = cheerio.load(body)
      var fontList = _.reduce($('#fontList').children(),
        (fontGroupJson, fontGroup) => {
          fontGroupJson[fontGroup.attribs.label] = _.filter(_.map(fontGroup.children, (fontType) => {
            return $(fontType).text()
          }), (fontType) => { return fontType !== '\n' && !_.isEmpty(fontType) }) //removes \n from array
          return fontGroupJson
        },
        {})

      horseman.close()
      //Saving font to a JSON file
      return fs.writeFileAsync(fontIndexPath, JSON.stringify(fontList, null,
      2), 'utf8', 2).then(() => { return fontList })
    })
}

