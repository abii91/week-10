var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

exports.removeProduct = function (product_id) {

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("week8");
    var query = { id: product_id };
    dbo.collection("products").deleteOne(query, function(err, res) {
      if (err) throw err;
      console.log("1 product removed");
      db.close();
    });
  });

};
