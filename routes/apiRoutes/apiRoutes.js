//dependencies, importing notes from database and function to use notes
const router = require('express').Router();
const { notes } = require('../../db/db');
const createNewNote = require('../../lib/note');

//Gets notes and sends them as JSON, removes test note
router.get('/notes', (req,res) => {
    res.json(notes.slice(1));
});
//uses createNewNote functionality for note user saves/posts to db
router.post('/notes', (req, res) => {
    const note = createNewNote(req.body, notes);
    res.json(note);
    
});

// router.get('/notes/:id', (req,res) => {
//     res.json(notes[req.params.id]);
// });

// router.delete('/notes/:id', (req, res) => {
//     res.json()
// })


module.exports = router;