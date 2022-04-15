const router = require('express').Router();
const { notes } = require('../../db/db');
const createNewNote = require('../../lib/note');
const fs = require('fs');


router.get('/notes', (req,res) => {
    res.json(notes.slice(1));
});

router.post('/notes', (req, res) => {
    const note = createNewNote(req.body, notes);
    res.json(note);
    
});

router.get('/notes/:id', (req,res) => {
    res.json(notes[req.params.id]);
});

router.delete('/notes/:id', (req, res) => {
    res.json()
})

module.exports = router;