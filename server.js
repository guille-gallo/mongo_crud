console.log('May Node be with you')
const express = require('express');
const bodyParser= require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))

var db
MongoClient.connect('mongodb://guille-gallo:cocuchA0303@ds111562.mlab.com:11562/vendedores_nuevos_mascota24', { useNewUrlParser: true }, (err, client) => {
//MongoClient.connect('mongodb://localhost/vendedores_nuevos_mascota24', { useNewUrlParser: true }, (err, client) => {
if (err) return console.log(err)
  db = client.db('vendedores_nuevos_mascota24') // whatever your database name is
  app.listen(3003, () => {
    console.log('listening on 3003')
  })
})


app.get('/', (req, res) => {
  db.collection('vendedores').find().toArray((err, result) => {
    if (err) return console.log(err)
    res.render('index.ejs', {vendedores: result})
  })
})

app.post('/vendedores', (req, res) => {
  db.collection('vendedores').save(req.body, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
})

app.get('/vendedores/:name', (req, res) => {  
  var query = { name: req.params.name };
  db.collection('vendedores').find(query).toArray((err, result) => {
    if (err) return console.log(err)
    console.log("result: ", result)
    res.send(result)
  })
})

app.put('/vendedores', (req, res) => {
  db.collection('vendedores')
  .findOneAndUpdate({name: 'Yoda'}, {
    $set: {
      name: req.body.name,
      id: req.body.id
    }
  }, {
    sort: {_id: -1},
    upsert: true
  }, (err, result) => {
    if (err) return res.send(err)
    res.send(result)
  })
})

app.delete('/vendedores', (req, res) => {
  db.collection('vendedores').findOneAndDelete({name: req.body.name},
  (err, result) => {
    if (err) return res.send(500, err)
    res.send({message: 'A darth vadar quote got deleted'})
  })
})