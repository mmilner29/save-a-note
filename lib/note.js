const fs = require("fs");
const path = require("path");
const myNotes = require('../db/db.json');

function createNewNote(body, noteArray) {
    const note = body;
    noteArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: noteArray}, null, 2)
    );
    return note;
}

module.exports = createNewNote;