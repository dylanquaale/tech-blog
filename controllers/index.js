const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');

// connects to my routes using this index
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).end();
  });

module.exports = router;
