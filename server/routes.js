const reviewsController = require('./controllers/reviewsController.js');
const router = require('express').Router();

router.get('', reviewsController.get);

module.exports = router;