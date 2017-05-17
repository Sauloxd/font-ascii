var fs = require('fs')

module.export = {
  getAllFonts: getAllFonts
}

function getAllFonts() {
  return fs.readFileAsync('./fontIndex.json')
    .then(fontIndexJson => { return JSON.parse(fontIndexJson) })
}
