var app = require('express')();
var MongoClient = require('mongodb').MongoClient;

require('./api/create.js').createDatabase();
require('./api/create.js').createCollection();
require('./api/add.js').addProducts();
require('./api/update.js').updateProduct(1, {name: "Lays", type: "Chips", description: "Lays" });
require('./api/remove.js').removeProduct(3);
require('./api/read.js').readProducts();

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200/");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader('Access-Control-Allow-Credentials', true);

  next();
});


app.get('/', function (req, res) {

});

var server = app.listen(1337);
