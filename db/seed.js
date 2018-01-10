
const mongoose = require('./schema')
const seeds = require('./library')
const Library = mongoose.model('Library')

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
