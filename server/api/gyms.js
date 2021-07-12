// GYM API ROUTES
const { combineNotesGyms} = require('./yelpAllGyms');
const router = require("express").Router();

// import models
const { Gym } = require('../db/index');

// POST /api/gyms
router.post('/', async (req, res, next) => {
    try {
        let data = await combineNotesGyms(req.body.location);  // needs to pass logged in user id
        res.send(data);
    }
    catch (error) {
        next(error);
    }
});

module.exports = router;