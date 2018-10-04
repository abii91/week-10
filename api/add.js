
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

exports.addProducts = function () {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("week8");

    var products = [
      { id: 1, name: "kubernetes", price:1000, type: "Automation server", description: "For load balancer" },
      { id: 2, name: "Cadbury snacks", price:3600, type: "Snacks", description: "Snacks" },
      { id: 3, name: "Cadbury Fingers", price:4600, type: "Snacks", description: "Snacks" },
      { id: 4, name: "Malt-O-Meal", price:5000, type: "Breakfast", description: "Malt-O-Meal" },
      { id: 5, name: "Cheetos", price:1500, type: "Chips", description: "Cheetosr" }
    ];

    dbo.collection("products").insertMany(products, function(err, res) {
      if (err) throw err;
      console.log("products inserted");
      db.close();
    });
  });
};
