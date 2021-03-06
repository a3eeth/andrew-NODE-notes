const yargs = require('yargs')
const notes = require('./notes.js')
// const chalk = require('chalk')

// customizing the yargs version
yargs.version('1.p.1')

// add remove read list
// creating add command
yargs.command({
    command: 'add',
    description: 'adding a new note',
    // builder lists all the options the command in question will support
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body: { 
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
        // },
        // date: {
        //     describe: 'note date',
        //     demandOption: true,
        //     type: 'number'
        // }
    },
    handler: function(argv) {
        // console.log('adding a new note ', argv)
        // console.log('title: ' + argv.title + '\nbody: ' + argv.body)
        notes.addNote(argv.title, argv.body)
    }
})
// creating remove command
yargs.command({
    command: 'remove',
    description: 'removing a note',
    // setting up builder to take a required title option - 1
    builder: {
        title: {
            describe: 'describe note title to be removed',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        // console.log('removing note')
        notes.removeNote(argv.title)
    }
})
// creating read command
yargs.command({
    command: 'read',
    desciption: 'reading all notes',
    handler: function() {
        console.log('reading notes')
    }
})
// creating list command
yargs.command({
    command: 'list',
    description: 'listing all notes',
    handler: function() {
        console.log('listing out all the notes')
    }
})


yargs.parse()
// this is needed for the thing to work but above can replace this ^
// console.log(yargs.argv) 