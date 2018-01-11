// dependecnceis
var express = require('express')
var parser = require('body-parser')
var hbs = require('express-handlebars')
var app = express()
var bodyParser = require('body-parser')
var methodOverride = require('method-override')

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

app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('app-welcome')
})
app.use('/librarys', libraryController)

//app.get("/:name", (req, res) => {
  //res.send(`Welcome to ${req.params.name}`)
//})

app.set('port', process.env.PORT || 4001)

app.listen(app.get('port'), () => {
  console.log(`✅ PORT: ${app.get('port')} 🌟`)
})







//used resources from GA-WDI-WHenpresident and https://zellwk.com/blog/crud-express-mongodb/