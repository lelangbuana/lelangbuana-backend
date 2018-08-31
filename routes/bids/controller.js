const models = require('../../models')
const bid = models.bid

const controller = {
    
    //-------------------------------------------------------------------------------------------
    get: (req, res, next) => {
        bid
            .findAll()
            .then(bids => {
                if (bids.length == 0) {
                    res.status(400).send({
                        message: 'Sorry, bid data is empty'
                    })
                    console.log('Sorry, bid data is empty')
                } else if (bids.length > 0) {
                    res.status(200).send({
                        bids
                    })
                    console.log('Yeah! You have some bid data!')
                }
            })
            .catch(error => {
                res.status(400).send({
                    error
                })
            })
    },

    //-------------------------------------------------------------------------------------------
    post: (req, res, next) => {
        bid
            .create({
                auction_id: req.body.auction_id,
                user_id: req.body.user_id,
                bids_nominal: req.body.bids_nominal,
                created_at: new Date()
            })
            .then(newBid => {
                res.status(200).send({
                    newBid
                })
                console.log('You have sent a new bid data!')
            })
            .catch(error => {
                res.status(400).send({
                    error
                })
            })
    },

    //-------------------------------------------------------------------------------------------
    getById: (req, res, next) => {
        const { bid_id }  = req.params
        bid
            .findAll({
                where: {
                    bid_id
                }
            })
            .then(bidData => {
                if (bidData.length == 0) {
                    res.status(400).send({
                        message: 'Sorry, your data is empty.'
                    })
                    console.log('Sorry, bid data is empty.')
                } else if (bidData.length > 0) {
                    res.status(200).send({
                        bidData
                    })
                    console.log('Yeah! You have some bid data!')
                }
            })
            .catch(error => {
                res.status(400).send({
                    error
                })
            })
    },

    //-------------------------------------------------------------------------------------------
    getByUserId: (req, res, next) => {
        const { user_id }  = req.params
        bid
            .findAll({
                where: {
                    user_id
                }
            })
            .then(bidData => {
                if (bidData.length == 0) {
                    res.status(400).send({
                        message: 'Sorry, your data is empty.'
                    })
                    console.log('Sorry, bid data is empty.')
                } else if (bidData.length > 0) {
                    res.status(200).send({
                        bidData
                    })
                    console.log('Yeah! You have some bid data!')
                }
            })
            .catch(error => {
                res.status(400).send({
                    error
                })
            })
    },

    //-------------------------------------------------------------------------------------------
    getByAuctionId: (req, res, next) => {
        const { auction_id } = req.params
        bid
            .findAll({
                where: {
                    auction_id
                }
            })
            .then(bidData => {
                if (bidData.length == 0) {
                    res.status(400).send({
                        message: 'Sorry, your data is empty.'
                    })
                    console.log('Sorry, bid data is empty.')
                } else if (bidData.length > 0) {
                    res.status(200).send({
                        bidData
                    })
                    console.log('Yeah! You have some bid data!')
                }
            })
            .catch(error => {
                res.status(400).send({
                    error
                })
            })
    },

    //-------------------------------------------------------------------------------------------
    updateBid: (req, res, next) => {
        const { bid_id }  = req.params
        bid.update({
                auction_id: req.body.auction_id,
                user_id: req.body.user_id,
                bids_nominal: req.body.bids_nominal,
                created_at: new Date()
            }, {
                where: {
                    bid_id
                }
            })
            .then(bid => {
                res.status(200).send({
                    bid
                })
            })
            .catch(err => {
                res.status(400).send({
                    message: 'Update bid failed'
                })
            })
    },

    //-------------------------------------------------------------------------------------------
    deleteBid: (req, res, next) => {
        const { bid_id }  = req.params
        bid.destroy({
                where: {
                    bid_id
                }
            })
            .then(bid => {
                res.status(200).send({
                    bid
                });
            })
            .catch(err => {
                res.status(400).send({
                    message: 'Delete bid failed'
                })
            })
    }
}

module.exports = controller