const express = require('express');
const router = express.Router();

const controller = require('./controller');
const authController = require('../auth/controller')

router.get('/', controller.get); // GET All Users
router.get('/search', controller.searchByUsername); // SEARCH User By Username
router.get('/id/:user_id', controller.getById); // GET User By ID 
router.get('/checktoken', authController.checkToken, authController.get); // GET Token
router.get('/logout', controller.logout); // LOGOUT
router.get('/:username', controller.getByUsername); // GET User By Username

router.post('/register', controller.register); // REGISTER User
router.post('/login', controller.login); // LOGIN User

router.put('/:user_id', controller.updateUser); // UPDATE User
router.delete('/:user_id', controller.deleteUser); // DELETE User

module.exports = router;