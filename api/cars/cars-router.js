const Cars = require('./cars-model')
const router = require('express').Router()

router.get('/', (req, res, next) => {
    Cars.getAll()
        .then(cars => {
            res.json(cars)
        })
        .catch(err => {
            next(err)
        })
})



module.exports = router
