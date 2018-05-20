let Comment = require("../models/comments");

export function list(req, res) {
  Comment.find().then((comments) => {
    res.json(comments);
  }).catch(err => console.log(err));
}

export function show(req, res) {
  const id = parseInt(req.params.id, 10);

  Comment.findOne({ 'id': id }).then((comment) => {
    res.json(comment);
  }).catch(err => console.log(err));
}

export function create(req, res) {
  Comment.count().then((i) => {
    const comment = req.body;
    comment.id = i + 1;

    const newComment = new Comment(comment);

    newComment.save().then((comment) => {
      res.send(`New comment created: ${comment.body}`)
    }).catch(err => console.log(err));
  });
}
