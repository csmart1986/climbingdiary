const router = require('express').Router();

// api/users
router.use('/users', require('./users'));
// api/notes
router.use('/notes', require('./notes'));
// api/gyms
router.use('/gyms', require('./gyms'));

// handle 404 error
router.use((req, res, next) => {
  const error = new Error('Not Found on API server route');
  error.status = 404;
  next(error);
});

module.exports = router;