const router = require('express').Router();
const userRoutes = require('./users-routes.js');

router.use('/users', userRoutes);


module.exports = router;
