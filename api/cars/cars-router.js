const Cars = require('./cars-model')
const router = require('express').Router()
const md = require('./cars-middleware')
router.get('/', (req, res, next) => {
    Cars.getAll()
        .then(cars => {
            res.json(cars)
        })
        .catch(err => {
            next(err)
        })
})

router.get('/:id'), md.checkCarId, (req, res, next) => {
    const { id } = req.params
    Cars.getById(id)
        .then(car => {
            res.status(200).json(car)
        })
        .catch(next)
}

router.post('/'), md.checkCarPayload, (req, res, next) => {
    Cars.create(req.body)
        .then(car => {
            res.status(201).json(car)
        })
        .catch(next)
}



module.exports = router
