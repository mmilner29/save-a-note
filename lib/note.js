//Dependencies for file system, path module, and nanoid
const fs = require("fs");
const path = require("path");
const { nanoid } = require('nanoid');


//create a note, push it to database, and write it to the page
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
//export module to import and use function elsewhere
module.exports = createNewNote;