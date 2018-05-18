let contacts = require("../contacts");

export function list(req, res) {
  res.json(contacts);
}

export function show(req, res) {
  const id = parseInt(req.params.id, 10);
  res.json(contacts.find(contact => contact._id === id));
}

export function create(req, res) {
  const contact = req.body;
  contacts.push(contact);
  res.json(contacts);
}
