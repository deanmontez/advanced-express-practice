let express = require("express");
let contacts = require("../contacts");
let router = express.Router();

router.get('/contacts', function(req, res) {
  res.json(contacts);
});

router.get('/contact/:id', function(req, res) {
  const id = parseInt(req.params.id, 10);
  res.json(contacts.find(contact => contact._id === id));
});

router.post('/contacts', function(req, res) {
  const contact = req.body;
  contacts.push(contact);
  res.json(contacts);
});

module.exports = router;