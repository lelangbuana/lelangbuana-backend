const express = require('express')
const router = express.Router()

const controller = require('./controller.js')

/* ROUTES/VIEW */
router.get('/', controller.get) // GET All Auction Data
router.get('/:id', controller.getAuctionById) // GET Auction Data By ID 
router.get('/user_id/:id', controller.getAuctionByUserId) // GET Auction Data By User ID
router.get('/status/:status', controller.getAuctionByStatus) // GET Auction Data By Status

router.post('/', controller.post) // POST Auction Data

router.put('/:id', controller.updateAuction) // UPDATE Auction Data
router.delete('/:id', controller.deleteAuction) // DELETE Auction Data

module.exports = router