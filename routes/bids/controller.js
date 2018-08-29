const models = require('../../models')
const bid = models.bid

const controller = {
    get: (req, res, next) => {
        bid
            .findAll()
            .then(bids => {
                if (bids.length == 0){
                    res.status(400).send({message: 'Sorry, bid data is empty'})
                    console.log('Sorry, bid data is empty')
                }
                else if (bids.length > 0) {
                    res.send({bids})
                    console.log('Yeah! You have some auction data!')
                }
            })
            .catch(error => {
                res.status(400).send({error})
            })
    },

    post: (req, res, next) => {
        bid
            .create({
                auction_id: req.body.auction_id,
                user_id: req.body.user_id,
                bids_nominal: req.body.bids_nominal,
                created_at: new Date()
            })
            .then(newBid => {
                res.send({newBid})
                console.log('You have sent a new bid data!')
            })
            .catch(error => {
                res.status(400).send({error})
            })
    },

    getBidById: (req, res, next) => {
        const bidId = req.params.id
        bid
            .findAll({
                where:{
                    bid_id: bidId
                }
            })
            .then(bidData => {
                if (bidData.length == 0){
                    res.status(400).send({message: 'Sorry, your data is empty.'})
                    console.log('Sorry, auction data is empty.')
                }
                else if (bidData.length > 0){
                    res.send({bidData})
                    console.log('Yeah! You have some auction data!')
                }
            })
            .catch(error => {
                res.status(400).send({error})
            })
    },

    getBidByUserId: (req, res, next) => {
        const userId = req.params.id
        bid
            .findAll({
                where:{
                    user_id: userId
                }
            })
            .then(bidData => {
                if (bidData.length == 0){
                    res.status(400).send({message: 'Sorry, your data is empty.'})
                    console.log('Sorry, auction data is empty.')
                }
                else if (bidData.length > 0){
                    res.send({bidData})
                    console.log('Yeah! You have some auction data!')
                }
            })
            .catch(error => {
                res.status(400).send({error})
            })
    },
}

module.exports = controller