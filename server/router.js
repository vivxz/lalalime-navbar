const router = require('express').Router();
const controller = require('./controller.js');

router
  .route('/search')
  .get(controller.get)

module.exports = router;