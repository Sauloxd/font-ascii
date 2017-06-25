#! /usr/bin/env node

// var args = require('../args').default
var formPhrase  = require('../index').default
var handleArgvs = require('../handleArgvs').default

cliFormPhrase(handleArgvs(process.argv.slice(2)))

function cliFormPhrase(config) {
  const { sentence, typeface, color, verbose } = config

  formPhrase(sentence, config)
}
