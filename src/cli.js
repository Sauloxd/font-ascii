#! /usr/bin/env node

var formPhrase  = require('./index').default
var handleArgvs = require('./handleArgvs').default

cliFormPhrase(handleArgvs(process.argv.slice(2)))

function cliFormPhrase(config) {
  formPhrase(config.sentence, config)
}
