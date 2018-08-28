const models = require('../../models');
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = models.user;
const Op = Sequelize.Op;

const controller = {

    //-------------------------------------------------------------------------------------------
    getAllUsers: async (req, res, next) => {
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
    getOneUserById: async (req, res, next) => {
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
    getOneUserByUsername: async (req, res, next) => {
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
                        message: 'User not available'
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
    searchUsersByUsername: async (req, res, next) => {
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
    register: async (req, res, next) => {
        const {
            username,
            password,
            first_name,
            last_name,
            profile_photo,
            email,
            id_card,
            phone_number,
            address,
            city,
            province,
            zip_code,
            country,
            status
        } = req.body
        const saltRounds = 1

        bcrypt
            .hash(password, saltRounds)
            .then(password => {
                return {
                    username,
                    password,
                    first_name,
                    last_name,
                    profile_photo,
                    email,
                    id_card,
                    phone_number,
                    address,
                    city,
                    province,
                    zip_code,
                    country,
                    status
                }
            })
            .then(newUser => {
                User.build(newUser)
                    .save()
                    .then((err, user) => {
                        const response = {
                            message: `User is successfully registered`,
                            username
                        }
                        res.send(response)
                    })
                    .catch(error =>
                        res.status(409).send({
                            error
                        })
                    )
            })
            .catch(error =>
                res.status(500).send({
                    message: `Registration failed`
                })
            )
    },

    // ---------------------------------------------------------------------------
    login: async (req, res, next) => {
        const {
            username,
            password
        } = req.body

        if (username && password) {
            User.findOne({
                username
            }).then(user => {
                bcrypt.compare(password, user.hash).then(response => {
                    if (response) {
                        const token = jwt.sign({
                                iat: Math.floor(Date.now() / 1000) - 30,
                                data: {
                                    user_id: user_id // from mysql
                                }
                            },
                            process.env.JWT_SECRET || 'secret', {
                                expiresIn: '1d'
                            }
                        )

                        res.send({
                            message: `User is successfully logged in`,
                            token
                        })
                    } else {
                        res.send({
                            message: `Username or password is wrong`
                        })
                    }
                })
            })
        } else {
            res.status(400).send({
                message: `Username and password are not provided`
            })
        }
    },

    //-------------------------------------------------------------------------------------------
    updateUser: async (req, res, next) => {
        const user_id = Number(req.params.id)
        User.update({
                username: req.body.username,
                password: req.body.password,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                profile_photo: req.body.profile_photo,
                email: req.body.email,
                id_card: req.body.id_card,
                phone_number: req.body.phone_number,
                address: req.body.address,
                city: req.body.city,
                province: req.body.province,
                zip_code: req.body.zip_code,
                country: req.body.country,
                status: req.body.status,
                created_at: new Date()
            }, {
                where: {
                    user_id: user_id
                }
            })
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
    deleteUser: async (req, res, next) => {
        const user_id = Number(req.params.id)
        User.destroy({
                where: {
                    user_id: user_id
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

    // ---------------------------------------------------------------------------
    logout: async (req, res, next) => {
        res.send({
            message: `User is successfully logged out`
        })
    }
}

module.exports = controller;