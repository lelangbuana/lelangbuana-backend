const models = require('../../models');
const Sequelize = require('sequelize');

const User = models.user;
const Op = Sequelize.Op;

const controller = {

    //-------------------------------------------------------------------------------------------
    getAllUsers: (req, res, next) => {
        User.findAll()
            .then(users => {
                res.send({
                    users
                })
            })
            .catch(error => {
                res.status(400).send({
                    error
                })
            })
    },

    //-------------------------------------------------------------------------------------------
    getOneUserById: (req, res, next) => {
        const id = Number(req.params.id);
        User.findById(id)
            .then(user => {
                if (user) {
                    res.send({
                        user
                    })
                } else {
                    res.send({
                        message: 'User not found'
                    })
                }
            })
            .catch(error => {
                res.status(400).send({
                    error
                })
            })

    },

    //-------------------------------------------------------------------------------------------
    getOneUserByUsername: (req, res, next) => {
        const username = req.params.username;
        console.log(username);
        User.findOne({
                where: {
                    username: username
                }
            })
            .then(user => {
                if (user) {
                    res.send({
                        user
                    })
                } else {
                    res.send({
                        message: 'User not found'
                    })
                }
            })
            .catch(error => {
                res.status(400).send({
                    error
                })
            })

    },

    //-------------------------------------------------------------------------------------------
    searchUsersByUsername: (req, res, next) => {
        const searchedUser = String(req.query.q).toLowerCase();
        if (searchedUser) {
            User.findAll({
                    where: {
                        username: {
                            [Op.like]: `%${searchedUser}%`
                        }
                    }
                })
                .then(users => {
                    if (users) {
                        res.status(200).send(users);
                    } else {
                        res.status(400).send(errorMessage('User not found'));
                    }
                })
        } else {
            res.status(400).send(errorMessage('Please fill your keyword'));
        }
    },

    //-------------------------------------------------------------------------------------------
    createUser: (req, res, next) => {
        User.build({
                name: req.body.name,
                username: req.body.username,
                password: req.body.password,
                email: req.body.email,
                createdAt: new Date(),
                updatedAt: new Date()
            })
            .save()
            .then(user => {
                res.send({
                    user
                })
            })
            .catch(err => {
                res.status(400).send({
                    error: err.stack
                })
            })
    },

    //-------------------------------------------------------------------------------------------
    updateUser: (req, res, next) => {
        const id = Number(req.params.id)
        User.update({
                name: req.body.name,
                username: req.body.username,
                password: req.body.password,
                email: req.body.email,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                where: {
                    id: id
                }
            })
            .then(employee => {
                res.send({
                    employee
                })
            })
            .catch(err => {
                res.status(400).send({
                    error: err.stack
                })
            })
    },

    //-------------------------------------------------------------------------------------------
    deleteUser: (req, res, next) => {
        const id = Number(req.params.id)
        User.destroy({
                where: {
                    id: id
                }
            })
            .then(user => {
                res.send({
                    user
                });
            })
            .catch(err => {
                res.status(400).send({
                    error: err.stack
                })
            })
    }
}

module.exports = controller;