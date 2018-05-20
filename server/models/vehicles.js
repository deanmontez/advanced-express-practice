let mongoose = require("mongoose");

mongoose.Promise = global.Promise;

let Vehicle = mongoose.model('Vehicle', {
  id: Number,
  year: Number,
  make: String,
  model: String
});

module.exports = Vehicle;
