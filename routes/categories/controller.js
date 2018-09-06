const models = require('../../models')
const category = models.category
const auctions = models.auction

const controller = {

    get: (req, res, next) => {
        category
            .findAll({
                include: [{
                    model: auctions
                }]
            })
            .then(categories => {
                if (categories.length == 0) {
                    res.status(400).send({
                        message: 'Sorry, category data is empty'
                    })
                    console.log('Sorry, category data is empty')
                } else if (categories.length > 0) {
                    res.status(200).send(categories)
                    console.log('Yeah! You have some category data!')
                }
            })
            .catch(error => {
                res.status(400).send(error)
                console.log(error)
            })
    },

    getByParentId : (req, res, next) => {
        const { parent_category_id } = req.params
        category
            .findAll({
                where:{
                    parent_category_id
                },
                include: [{
                    model: auctions
                }]
            })
            .then(categories => {
                if (categories.length == 0){
                    res.status(400).send({
                        message: "Category data is empty"
                    })
                }
                else if (categories.length > 0){
                    res.status(200).send(categories)
                }
            })
            .catch(error => {
                res.status(400).send(error)
            })
    },
    
}

module.exports = controller