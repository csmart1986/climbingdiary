// ROUTE TO SERVE UP ALL NOTES

const router = require("express").Router();
// import models
const { Note, User} = require('../db/models/index');

// // GET /api/notes (get ALL notes)
// router.get('/', async (req, res, next) => {
//     try {
//         const notes = await Note.findAll();
//         res.json(notes);
//     } catch (error) {
//         next(error)
//     }
// });

// GET /api/notes/:noteId (get SINGLE note)
router.get('/', async (req, res, next) => {
    try {
        //const noteId = req.params.campusId;
        const singleNote= await Note.findAll({
            where: {
                userId: 1,
                businessId: "8b4xgDOH4bextUIFJ-megw"
            }
        })
        res.send(singleNote[0].note)
    } catch (error) {
        next(error)
    }
});

// POST /api/notes (add a NEW note)
router.post('/', async (req, res, next) => {
    try {
        res.status(201).send(await Note.create(req.body))
    } catch (error) {
        next(error)
    }
});

// PUT /api/notes(update an existing note)
router.put('/:noteId', async (req, res, next) => {
    try {
        const noteId = req.params.noteId;
        const note = await Note.findByPk(noteId, {
            include: {
                model: User,
            }
        });
        res.send(await note.update(req.body));
    } catch (error) {
        next(error)
    }
});

// DELETE /api/notes (delete SINGLE note based on its id)
router.delete('/:noteId', async (req, res, next) => {
    try {
        const noteToDestroy = await Note.findByPk(req.params.noteId);
        await noteToDestroy.destroy();
        res.send(noteToDestroy);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
