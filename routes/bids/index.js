const express = require('express')
const router = express.Router()

const controller = require('./controller.js')

/* ROUTES/VIEW */
router.get('/', controller.get) // GET All Bids Data
router.get('/:bid_id', controller.getById) // GET Bid Data By ID 
router.get('/user_id/:user_id', controller.getByUserId) // GET Bid Data By User ID
router.get('/auction_id/:auction_id', controller.getByAuctionId) // GET Bid Data By Auction ID

router.post('/', controller.post) // POST Bid Data

router.put('/:bid_id', controller.updateBid) // UPDATE Bid Data
router.delete('/:bid_id', controller.deleteBid) // DELETE Bid Data

module.exports = router