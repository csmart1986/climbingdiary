const router = require('express').Router();


//router.use('/users', require('./users'));
// FIX ME - SET SUPER BROAD
router.use('*', require('./notes'));

router.use((req, res, next) => {
  const error = new Error('Not Found on API server route');
  error.status = 404;
  next(error);
});

module.exports = router;