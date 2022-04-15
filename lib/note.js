const fs = require("fs");
const path = require("path");
const { nanoid } = require('nanoid');
const myNotes = require('../db/db.json');



function createNewNote(body, noteArray) {
    let noteId = nanoid(5);
    body.id = noteId;
    const note = body;
    noteArray.push(note);
    // console.log(body);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: noteArray}, null, 2)
    );
    return note;
}

module.exports = createNewNote;