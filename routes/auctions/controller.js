const models = require('../../models')
const auction = models.auction

const controller = {
    get: (req, res, next) => {
        auction
            .findAll()
            .then(auctions => {
                if (auctions.length == 0){
                    res.status(400).send({message: 'Sorry, your data is empty.'})
                    console.log('Sorry, auction data is empty.')
                }
                else if (auctions.length > 0){
                    res.send({auctions})
                    console.log('Yeah! You have some auction data!')
                }
            })
            .catch(error => {
                res.status(400).send({error})
            })
    },

    post: (req, res, next) => {
        auction
            .create({
                user_id: req.body.user_id,
                title: req.body.title,
                item_condition: req.body.item_condition,
                item_description: req.body.item_description,
                quantity: req.body.quantity,
                start_bid: req.body.start_bid,
                max_bid: req.body.max_bid,
                min_bid: req.body.min_bid,
                bids_multiply: req.body.bids_multiply,
                start_date: req.body.start_date,
                end_date: req.body.end_date,
                item_photo: req.body.item_photo,
                status: req.body.status,
                created_at: new Date()
            })
            .then(newAuction => {
                res.send({newAuction})
                console.log('You have sent a new auction data!')
            })
            .catch(error => {
                res.status(400).send({error})
            })
    },

    getAuctionById: (req, res, next) => {
        const auctionId = req.params.id
        auction
            .findAll({
                where:{
                    auction_id: auctionId
                }
            })
            .then(auctionData => {
                if (auctionData.length == 0){
                    res.status(400).send({message: 'Sorry, your data is empty.'})
                    console.log('Sorry, auction data is empty.')
                }
                else if (auctionData.length > 0){
                    res.send({auctionData})
                    console.log('Yeah! You have some auction data!')
                }
            })
            .catch(error => {
                res.status(400).send({error})
            })
    },

    getAuctionByUserId: (req, res, next) => {
        const userId = req.params.id
        auction
            .findAll({
                where:{
                    user_id: userId
                }
            })
            .then(auctionData => {
                if (auctionData.length == 0){
                    res.status(400).send({message: 'Sorry, your data is empty.'})
                    console.log('Sorry, auction data is empty.')
                }
                else if (auctionData.length > 0){
                    res.send({auctionData})
                    console.log('Yeah! You have some auction data!')
                }
            })
            .catch(error => {
                res.status(400).send({error})
            })
    }
}

module.exports = controller