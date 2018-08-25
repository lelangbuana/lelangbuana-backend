const express = require('express');
const router = express.Router();

const controller = require('./controller');

router.get('/users', controller.getAllUsers);
router.get('/users/search', controller.searchUsers);
router.get('/users/:id', controller.getOneUser);
router.post('/users', controller.createUser);
router.delete('/users', controller.deleteAllUsers);
router.delete('/users/:id', controller.deleteOneUser);
router.put('/users/:id', controller.updateOneUser);

module.exports = router;