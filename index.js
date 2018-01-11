// dependecnceis
var express = require('express')
var parser = require('body-parser')
var hbs = require('express-handlebars')
var app = express()
var bodyParser = require('body-parser')
const libraryController = require('./controllers/librarys')
//mongoose connects
// mongoose.connect('mongodb://localhost/Historia-Bibliotheca')
// var db = mongoose.connection
app.set('port', process.env.PORT || 4001)

app.set('view engine', 'hbs')
app.engine('.hbs', hbs({
  extname: '.hbs',
  partialsDir: './views/',
  layoutsDir: './views/',
  defaultLayout: 'layout'
}))

app.get('/', (req, res) => {
  res.render('app-welcome')
})
app.use('/librarys', libraryController)

//app.get("/:name", (req, res) => {
  //res.send(`Welcome to ${req.params.name}`)
//})

app.listen((4001), () => {
  console.log('listening on port 4001')
})