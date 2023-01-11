const Phone = require("../models/Phone.model")


const getAllPhones = (req, res, next) => {

  Phone
    .find()
    .then(elm => {
      res.json(elm)
    })
    .catch(err => next(err))
}


const getPhoneById = (req, res, next) => {

    const {id} = req.params

  Phone
    .findById(id)
    .then(elm => {
      res.json(elm)
    })
    .catch(err => next(err))
}

module.exports = {
    getAllPhones,
    getPhoneById
}