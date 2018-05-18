let express = require("express");
let router = express.Router();

let { list, show, create } = require("../controllers/contacts");

// Requests
router.get('/contacts', list);
router.get('/contact/:id', show);
router.post('/contacts', create);

module.exports = router;
