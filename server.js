const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
var dbConfig         = require('./config/db');
const app            = express();



const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));


MongoClient.connect(dbConfig.url, (err, database) => {
  if (err) return console.log(err)
  // Make sure you add the database name and not the collection name
  db = database.db("portfolio")
  require('./app/routes')(app, db);
  app.listen(port, () => {
    console.log('We are live on ' + port);
  });
  app.use(function(req, res) {
  	res.status(404).send({url: req.originalUrl + ' not found'})
	});               
})
