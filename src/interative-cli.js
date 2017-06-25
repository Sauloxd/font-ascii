import inquirer from 'inquirer'
import formPhrase from './index'

init(inquirer)

function init() {
  return inquirer.prompt({
    message: 'Input a magical phrase: \n',
    type: 'input',
    name: 'phrase'
  })
  .then((action) => {
    return formPhrase(action.phrase)
  })
  .then(_ => init())
  .catch(e => console.log(e))
}

