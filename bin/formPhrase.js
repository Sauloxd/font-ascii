#! /usr/bin/env node

var dev = process.env.NODE_ENV === 'development'

var formPhrase  = require(dev ? '../src/index' : '../dist/index').default
var handleArgvs = require(dev ? '../src/handleArgvs' : '../dist/handleArgvs').default

cliFormPhrase(handleArgvs(process.argv.slice(2)))

function cliFormPhrase(config) {
  formPhrase(config.sentence, config)
}
