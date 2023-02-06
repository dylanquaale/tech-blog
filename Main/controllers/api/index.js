const router = require('express').Router();
const userRoutes = require('./users-routes.js');
const dashboard = require('./dashboard');

router.use('/users', userRoutes);
router.use('/dashboard', dashboard),

module.exports = router;
