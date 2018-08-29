const express = require('express')
const router = express.Router()

const controller = require('./controller.js')

/* ROUTES/VIEW */
router.get('/', controller.get)
router.post('/', controller.post)

router.get('/:id', controller.getBidById)

router.get('/user_id/:id', controller.getBidByUserId)

router.get('/auction_id/:id', controller.getBidByAuctionId)

module.exports = router