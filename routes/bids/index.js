const express = require('express')
const router = express.Router()

const controller = require('./controller.js')

/* ROUTES/VIEW */
router.post('/', controller.post)

module.exports = router