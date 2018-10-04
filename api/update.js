var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

exports.updateProduct = function (product_id, updateData) {

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("week8");
    var myquery = { id: product_id };
    var newvalues = { $set: updateData };
    dbo.collection("products").updateOne(myquery, newvalues, function(err, res) {
      if (err) throw err;
      console.log("1 product updated");
      db.close();
    });
  });

};
