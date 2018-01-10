// dependecnceis
var express = require('express');
var parser = require('body-parser');
var hbs = require('express-handlebars');
var mongoose = require('mongoose');
var app = express();
var bodyParser = require('body-parser')

//mongoose connects
// mongoose.connect('mongodb://localhost/Historia-Bibliotheca')
// var db = mongoose.connection

app.get('/', (req, res) => {
res.send('historyBooks!');
});

app.listen((4001), () => {
  console.log('listening on port 4001')
})