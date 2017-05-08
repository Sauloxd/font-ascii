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
  getFontList()
    .then(getAlphabetForEveryFont)
    .then((asciiFonts) => {
      fs.writeFileAsync('asciiFontsByGroup.json', JSON.stringify(asciiFonts, null,
      2), 'utf8', 2)
    })
}

function getAlphabetForEveryFont(fontList) {
  console.log('Looking for...')
  console.log(fontList[cte.target])
  return Promise.mapSeries(fontList[cte.target], (fontFace) => {
    console.log('current alphabet: ', cte.alphabet)
    return Promise.mapSeries(cte.alphabet, phantomCrawlForFontByLetter.bind({fontFace:
    fontFace}))
    .then(asciiAlphabet => {
      return _.reduce(asciiAlphabet, (groupedAsciiAlphabet, asciiLetter, index) => {
        groupedAsciiAlphabet[cte.alphabet[index]] = asciiLetter
        return groupedAsciiAlphabet
      }, {}) // => { A: '   __ - ; ', B: 'other bizarre string }
    })
    .then((r) => {console.log('alfabeto inteiro:\n', r); return r})
  })
  .then(asciiFonts => {
    // [{}, {}, ..]
    return _.reduce(asciiFonts, (groupedFontAscii, asciiFont, index) => {
      console.log('asciiFont', fontList)
      console.log('index', index)
      groupedFontAscii[fontList[cte.target][index]] = asciiFont
      return groupedFontAscii
    }, {})
  })
  .then((r) => {console.log('todas as fontes:\n', r); return r})
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
}

function getFontList(body) {
  var fontIndexPath = './fontIndex.json'
  if (!fs.existsSync(fontIndexPath)) {
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
  } else {
    return fs.readFileAsync(fontIndexPath, 'utf8').then(file => { return JSON.parse(file) })
  }
}

