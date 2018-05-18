let express = require("express");
let router = express.Router();

let { list, show, create } = require("../controllers/comments");

// Requests
router.get('/comments', list);
router.get('/comment/:id', show);
router.post('/comments', create);

module.exports = router;
