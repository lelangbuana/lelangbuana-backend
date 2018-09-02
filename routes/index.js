const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.status(200).send({
    title: 'Welcome to REST API',
    endpoints: {
      users: '/users',
      auctions: '/auctions',
      bids: '/bids'
    }
  });
});

module.exports = router;