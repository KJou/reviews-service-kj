const router = require('express').Router();
const reviewsController = require('./controllers/reviewsController.js');

router.get('', reviewsController.get);

module.exports = router;
