const fs = require('fs')

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
        console.log('new note added')
    }
    else {
        console.log('note title taken')
    }
}

const removeNote = function(title) {
    // const notes = loadNotes()
    console.log(title)
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