// NOTE API ROUTES
const router = require("express").Router();

// import models
const { Note } = require('../db/index');

// PUT api/notes/:id
router.put('/:businessId', async (req, res, next) => {
    const {note} = req.body;
    console.log("NOTE: ",note)
    let user = 1;
    try {
      // if note belongs to logged in user
        // req.user === userId CURRENTLY HARDCODED
        if (user === 1) {
            const noteInDb = await Note.findAll({
                where: {
                    businessId: req.params.businessId
                }
            });
        //console.log('NOTE: ', noteInDb)
        //const updatedNote = await noteInDb.update(note);
        res.send('found it');
      }
    } catch (error) {
        next(error);
        console.log('error updating note in database')
    }
})

module.exports = router;