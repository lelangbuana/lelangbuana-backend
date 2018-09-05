const express = require('express')
const router = express.Router()

const controller = require('./controller.js')

router.get('/', controller.get)
router.get('/parent_id/:parent_category_id', controller.getByParentId)

module.exports = router;