const models = require('../../models');
const User = models.User;

const controller = {
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

    searchUsers: () => {
        /* Search User */
    },

    getOneUser: () => {
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

    createUser: () => {
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

    deleteAllUsers: () => {
        /* Delete All User */
    },

    deleteOneUser: () => {
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
    },

    updateOneUser: () => {
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
    }
}

module.exports = controller;