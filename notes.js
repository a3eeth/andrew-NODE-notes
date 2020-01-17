const fs = require('fs')
const chalk = require('chalk')

const getNotes = function () {
    return 'your notes ...'
}

const addNote = function (title, body) {
    const notes = loadNotes()
    // use arrayfilter to check for repeat titles
    const duplicateNotes = notes.filter(
        function(note) {
            return note.title === title
        }
    )
    if(duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('new note added'))
    }
    else {
        console.log(chalk.red.inverse('note title taken'))
    }
}

const removeNote = function(title) {
    const notes = loadNotes()

    // filter out the matching note if any 
    const notesToKeep = notes.filter(
        function(note) {
            return note.title !== title
        }
    )
    if(notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('note removed'))
        saveNotes(notesToKeep)
    }
    else {
        console.log(chalk.red.inverse('no note found'))
    }
}

// resuable function to load notes
const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e) {
        return []
    }
}
// reusable function for saving data 
const saveNotes = function(notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}