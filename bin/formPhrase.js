#! /usr/bin/env node

var formPhrase  = require('../dist/index').default
var handleArgvs = require('../dist/handleArgvs').default

cliFormPhrase(handleArgvs(process.argv.slice(2)))

function cliFormPhrase(config) {
  formPhrase(config.sentence, config)
}
