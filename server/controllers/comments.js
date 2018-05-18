let comments = require("../comments");

export function list(req, res) {
  res.json(comments);
}

export function show(req, res) {
  const id = parseInt(req.params.id, 10);
  res.json(comments.find(comment => comment._id === id));
}

export function create(req, res) {
  const comment = req.body;
  comments.push(comment);
  res.json(comments);
}
