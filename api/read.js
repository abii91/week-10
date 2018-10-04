var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

exports.readProducts = function (product_id, updateData) {

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("week8");
    dbo.collection("products").findOne({}, function(err, products) {
      if (err) throw err;
      console.log(products);
      db.close();
    });
  });
};
