// ROUTE TO SERVE UP ALL USERS

const router = require("express").Router();
// import models
const { User, Note} = require('../db/index');

// GET /api/users
router.get('/', async (req, res, next) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        next(error)
    }
});

// GET /api/users/:userId
router.get('/:userId', async (req, res, next) => {
    try {
        const userId = req.params.userId;
        const singleUser = await User.findByPk(userId, {
            include: {
              model: Note
            }
        });
        res.json(singleUser);
    } catch (error) {
        next(error)
    }
});

// POST /api/users (add a NEW user)
router.post('/', async (req, res, next) => {
    try {
        res.status(201).send(await User.create(req.body))
    } catch (error) {
        next(error)
    }
});

// PUT /api/users (update an existing user)
router.put('/:userId', async (req, res, next) => {
    try {
        const userId = req.params.userId;
        const user = await User.findByPk(userId, {
            include: {
              model: Note,
            }
        });
        res.send(await user.update(req.body));
    } catch (error) {
        next(error)
    }
});

// DELETE /api/users (delete SINGLE user based on its id)
router.delete('/:userId', async (req, res, next) => {
    try {
        const userToDestroy = await User.findByPk(req.params.userId);
        await userToDestroy.destroy();
        res.send(userToDestroy);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
