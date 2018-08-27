const express = require('express');
const router = express.Router();

const controller = require('./controller');

router.get('/', controller.getAllUsers);
router.get('/id/:id', controller.getOneUserById);
router.get('/:username', controller.getOneUserByUsername);
router.get('/search', controller.searchUsersByUsername);
router.post('/', controller.createUser);
router.put('/:id', controller.updateUser);
router.delete('/:id', controller.deleteUser);

module.exports = router;