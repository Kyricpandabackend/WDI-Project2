const mongoose = require('mongoose')

mongoose.Promise = Promise

mongoose.connect('mongodb://localhost/Historia-Bibliotheca', { useMongoClient: true })

module.exports = mongoose