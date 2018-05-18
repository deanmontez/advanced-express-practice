let express = require("express");
let router = express.Router();

let { list, show, create } = require("../controllers/products");

// Requests
router.get('/products', list);
router.get('/product/:id', show);
router.post('/products', create);

module.exports = router;
