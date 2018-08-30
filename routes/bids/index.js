const express = require('express')
const router = express.Router()

const controller = require('./controller.js')

/* ROUTES/VIEW */
router.get('/', controller.get) // GET All Bids Data
router.get('/:id', controller.getBidById) // GET Bid Data By ID 
router.get('/user_id/:id', controller.getBidByUserId) // GET Bid Data By User ID
router.get('/auction_id/:id', controller.getBidByAuctionId) // GET Bid Data By Auction ID

router.post('/', controller.post) // POST Bid Data

router.put('/:id', controller.updateBid) // UPDATE Bid Data
router.delete('/:id', controller.deleteBid) // DELETE Bid Data

module.exports = router