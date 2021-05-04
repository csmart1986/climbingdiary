const { getAllGyms, getSingleGym } = require('./yelp');
const router = require('express').Router();

// all routes automatically start with /api to be routed here

// process a group of routes in their own file
// router.use('/users', require('./users'));

// process an individual GET, POST, PUT, or DELETE route

router.get('/yelp', async (req, res, next) => {
    try {
        let data = await getAllGyms('San Francisco');
        res.send(data);
    }
    catch (error) {
        next(error);
    }
});

router.get('/yelp/:id', async (req, res, next) => {
    try {
        const yelpGymId = "8b4xgDOH4bextUIFJ-megw" //req.params.id;
        let data = await getSingleGym(yelpGymId);
        res.send(data);
    }
    catch (error) {
        next(error);
    }
});

// 404 if the API route doesn't exist
router.use(function (req, res, next) {
    const err = new Error('API route not found.');
    err.status = 404;
    next(err);
}); 

// Server error handler
router.use(function (err, req, res) {
    console.error('API routing error ==>', err);
    console.error('API routing error ==>', err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
})

// export the router
module.exports = router;