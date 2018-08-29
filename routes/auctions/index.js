const express = require('express')
const router = express.Router()

const controller = require('./controller.js')

/* ROUTES/VIEW */
router.get('/', controller.get)
router.post('/', controller.post)

router.get('/:id', controller.getAuctionById)

router.get('/user_id/:id', controller.getAuctionByUserId)

router.get('/status/:status', controller.getAuctionByStatus)

module.exports = router