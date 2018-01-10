//var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/Historia-Bibliotheca');
//var db = mongoose.connection;


const mongoose = require('./connections')

const librarySchema = new mongoose.Schema({
  title: String,
  date: String,
  genre: String
})

const Library = mongoose.model('Library', libarySchema)

module.exports = Library 