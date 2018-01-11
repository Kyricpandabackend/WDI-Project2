
// const mongoose = require('mongoose')
const Library = require('../db/schema')
const Router = require('express').Router()

Router.get('/', (req, res) => {
  Library
  .find({})
  .then(library => {
    res.render('historie', { librarys: library })
  })
})

Router.get('/:title', (req, res) => {
  Library
  .findOne({title: req.params.title})
  .then(library => {
    console.log(library)
    res.render('present', {msg: library})
    console.log(library)
  }).catch(err => {
    console.log(err)
  })
})

Router.post('/', (req, res) => {
  Library
  .create(req.body.library)
  .then(library => {
    res.redirect(`/librarys/${library.title}`)
  })
})

Router.delete('/:title', (req, res) => {
  Library
  .findOneAndRemove({title: req.params.title})
  .then(() => {
    res.redirect('/librarys')
  })
})

Router.put('/:title', (req, res) => {
  Library
  .findOneAndUpdate({title: req.params.title}, req.body.library, {new: true})
  .then(library => {
    res.redirect(`/librarys/${library.title}`)
  })
})

module.exports = Router