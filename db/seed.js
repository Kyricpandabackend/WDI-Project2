const Library= require('./schema')
const seeds = require('./library.json')
const mongoose = require('../controllers/librarys')

mongoose.Promise = Promise

Library.remove({})
  .then(_ => {
    console.log('cleanDB')
    Library.collection.insert(seeds)
      .then(seededEntries => {
        console.log(seededEntries)
      })
      .then(_ => process.exit())
  })
