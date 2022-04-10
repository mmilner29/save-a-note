const router = require('express').Router();
const myNotes = require('../../db/db.json');
const fs = require('fs');

router.get('/notes', (req,res) => {
    res.json(myNotes.slice(1));
});

module.exports = router;