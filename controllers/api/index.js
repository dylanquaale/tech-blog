const router = require('express').Router();
const userRoutes = require('./users-routes.js');
const postRoutes = require('./post-routes.js');
const commentRoutes = require('./comment-routes.js');

// index connects ,my api routes

router.use('/users', userRoutes);
router.use('/post', postRoutes)
router.use('/comment', commentRoutes)

module.exports = router;
