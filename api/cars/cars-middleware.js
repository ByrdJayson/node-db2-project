const Cars = require('./cars-model')
const vin = require('vin-validator')
const checkCarId = (req, res, next) => {
  const { id } = req.params
  Cars.getById(id)
    .then(car => {
      if(!car){
        res.status(404).json({message: `car with id ${id} not found`})
      } else {
        next()
      }
    })
}

const checkCarPayload = (req, res, next) => {
  const { vin, make, model, mileage } = req.body

  if(!vin) {
    next({status: 400, message: 'vin is missing!'})
  } else if(!make) {
    res.status(400).json({message: 'make is missing!'})
  } else if(!model) {
    res.status(400).json({message: 'model is missing!'})
  } else if(!mileage){
    res.status(400).json({message: 'mileage is missing!'})
  } else next()
}

const checkVinNumberValid = (req, res, next) => {
  const { vin } = req.body
  Cars.checkVinNumberUnique(vin)
    .then(res => {
      if(res){
        res.status(400).json({message: `vin ${vin} already exists`})
      } else next()
    })
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}
