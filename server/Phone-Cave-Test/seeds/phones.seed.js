const mongoose = require('mongoose');
const phones = require ('./../data/phones.json')
const Phone = require('../models/Phone.model')

const MONGO_URI = 'mongodb://127.0.0.1:27017/Phone-Cave-Test'

mongoose
    .connect(MONGO_URI)
    .then( x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch( err => console.error("Error connecting to mongo: ", err))

Phone
    .create(phones)
    .then(phonesFromDB => {
        console.log(`Created ${phonesFromDB.length} phones`)
        mongoose.connection.close()
    })
    .catch(err => console.log(`An error occurred while creating phones from the DB: ${err}`))