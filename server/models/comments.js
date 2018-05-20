let mongoose = require("mongoose");

mongoose.Promise = global.Promise;

let Comment = mongoose.model('Comment', {
  id: Number,
  body: String
});

module.exports = Comment;
