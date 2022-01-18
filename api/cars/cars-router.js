const router = require('express').Router()
const Cars = require('./cars-model')

router.get('/', (req, res) => {
    Cars.getAll()
        .then(cars => {
            res.json(cars)
        })
        .catch(err => {
            res.status(500).json({message: 'Internal Server Error'})
        })
})



module.exports = router
