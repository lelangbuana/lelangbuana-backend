const models = require('../../models')
const category = models.category

const controller = {

    get: (req, res, next) => {
        category
            .findAll()
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

    
}

module.exports = controller