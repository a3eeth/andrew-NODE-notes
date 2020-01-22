const chalk = require('chalk')
const fs = require('fs')

const book = {
    title: 'mytitle',
    author: 'myauthor'
}

const bookJSON = JSON.stringify(book)
fs.writeFileSync('1-json.json', bookJSON)
console.log(chalk.green.inverse('stringified object \n') +bookJSON)

const parsedBookData = JSON.parse(bookJSON)
console.log(chalk.green.inverse('\n parsed book \n') + parsedBookData.author)

const contentFromFile = fs.readFileSync('1-json.json')
console.log(chalk.red.inverse('\n data buffer from file \n') + contentFromFile)

const contentFromFileToString = contentFromFile.toString()
console.log(chalk.red.inverse('\n data buffer converted to string') + contentFromFileToString)

const toStringParsedToJSON = JSON.parse(contentFromFileToString)
console.log(chalk.red.inverse('\n above passed to JSON.parse() \n') + toStringParsedToJSON)