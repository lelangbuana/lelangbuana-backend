const express = require('express')
const router = express.Router()

const controller = require('./controller.js')

/* ROUTES/VIEW */
router.get('/', controller.get) // GET All Auction Data
router.get('/:auction_id', controller.getById) // GET Auction Data By ID 
router.get('/user_id/:user_id', controller.getByUserId) // GET Auction Data By User ID
router.get('/status/:status', controller.getByStatus) // GET Auction Data By Status

router.post('/', controller.post) // POST Auction Data

router.put('/:auction_id', controller.updateAuction) // UPDATE Auction Data
router.delete('/:auction_id', controller.deleteAuction) // DELETE Auction Data

module.exports = router