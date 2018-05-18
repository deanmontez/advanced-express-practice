let express = require("express");
let router = express.Router();

let { list, show, create } = require("../controllers/vehicles");

// Requests
router.get('/vehicles', list);
router.get('/vehicle/:id', show);
router.post('/vehicles', create);

module.exports = router;
