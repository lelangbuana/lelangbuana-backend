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
    }
}

module.exports = controller