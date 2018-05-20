let Contact = require("../models/contacts");

export function list(req, res) {
  Contact.find().then((contacts) => {
    res.json(contacts);
  }).catch(err => console.log(err));
}

export function show(req, res) {
  const id = parseInt(req.params.id, 10);

  Contact.findOne({ 'id': id }).then((contact) => {
    res.json(contact);
  }).catch(err => console.log(err));
}

export function create(req, res) {
  Contact.count().then((i) => {
    const contact = req.body;
    contact.id = i + 1;

    const newContact = new Contact(contact);

    newContact.save().then((contact) => {
      res.send(`New contact created: ${contact.body}`)
    }).catch(err => console.log(err));
  });
}
