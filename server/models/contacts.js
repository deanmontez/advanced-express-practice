let mongoose = require("mongoose");

mongoose.Promise = global.Promise;

let Contact = mongoose.model('Contact', {
  id: Number,
  name: String,
  occupation: String,
  avatar: String
});

module.exports = Contact;
