// NOTE API ROUTES
const router = require("express").Router();

// import models
const { Note } = require('../db/index');

// PUT api/notes/:id
router.put('/:businessId', async (req, res, next) => {
    const {note} = req.body;
    console.log('in route')
    try {
      // if note belongs to logged in user
      // req.user === userId &&
      if (req.params.businessId === note.businessId) {
        const noteInDb = await Note.findByPk(note.businessId);
        console.log('NOTE: ', noteInDb)
        const updatedNote = await noteInDb.update(note);
        res.send(updatedNote);
      }
    } catch (error) {
        next(error);
        console.log('error updating note in database')
    }
})

module.exports = router;