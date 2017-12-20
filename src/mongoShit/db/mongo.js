// // var mongoose = require("mongoose");
// // mongoose.Promise = global.Promise;mongoose.connect("mongodb://localhost:27017/node-demo");
//
// const mongoose = require('mongoose'),
//       url = 'mongodb://localhost:27017/mydb',
//       options = { server: {socketOptions: {keepAlive: 1}}};
//
// /*
// Use newest Nodejs Promise library
//  */
// mongoose.Promise = global.Promise
//
// mongoose.connect(url, options)
//
// // var MongoClient = require('mongodb').MongoClient
// //   , Server = require('mongodb').Server;
// //
// // var mongoClient = new MongoClient(new Server('localhost', 27017));
// // mongoClient.open(function(err, mongoClient) {
// //   var db1 = mongoClient.db("mydb");
// //
// //   mongoClient.close();
// // });

let MongoClient = require('mongodb').MongoClient

let _db

module.exports = {

  connectToServer(callback) {
    MongoClient.connect('mongodb://localhost:27017/mydb', (err, db) => {
      _db = db
      return callback(err)
    })
  },

  getDb() {
    return _db
  }
}
