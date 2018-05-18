let express = require("express");
let comments = require("../comments");
let router = express.Router();

router.get('/comments', function(req, res) {
  res.json(comments);
});

router.get('/comment/:id', function(req, res) {
  const id = parseInt(req.params.id, 10);
  res.json(comments.find(comment => comment._id === id));
});

router.post('/comments', function(req, res) {
  const comment = req.body;
  comments.push(comment);
  res.json(comments);
});

module.exports = router;