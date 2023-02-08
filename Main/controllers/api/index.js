const router = require('express').Router();
const userRoutes = require('./users-routes.js');
const postRoutes = require('/post-routes.js');



router.use('/users', userRoutes);
router.use('/post', postRoutes)

module.exports = router;
