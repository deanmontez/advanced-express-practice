let mongoose = require("mongoose");

mongoose.Promise = global.Promise;

let Product = mongoose.model('Product', {
  id: Number,
  name: String,
  description: String
});

module.exports = Product;
