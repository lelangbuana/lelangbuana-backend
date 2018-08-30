const express = require('express');
const router = express.Router();

const controller = require('./controller');
const authController = require('../auth/controller')

router.get('/', controller.get); // GET All Users
router.get('/search', controller.searchUserByUsername); // SEARCH User By Username
router.get('/id/:id', controller.getUserById); // GET User By ID 
router.get('/checktoken', authController.checkToken, authController.get); // GET Token
router.get('/logout', controller.logout); // LOGOUT
router.get('/:username', controller.getUserByUsername); // GET User By Username

router.post('/register', controller.register); // REGISTER User
router.post('/login', controller.login); // LOGIN User

router.put('/:id', controller.updateUser); // UPDATE User
router.delete('/:id', controller.deleteUser); // DELETE User

module.exports = router;