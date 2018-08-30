const express = require('express')
const router = express.Router()

const controller = require('./controller.js')

/* ROUTES/VIEW */
router.get('/', controller.get)
router.post('/', controller.post)

router.get('/:auction_id', controller.getById)

router.get('/user_id/:user_id', controller.getByUserId)

router.get('/status/:status', controller.getByStatus)

module.exports = router