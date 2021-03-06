let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let commentsRoute = require("./routes/comments");
let contactsRoute = require("./routes/contacts");
let vehiclesRoute = require("./routes/vehicles");
let productsRoute = require("./routes/products");

mongoose.connect("mongodb://admin:password@ds123500.mlab.com:23500/advanced-express-practice");

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());

// Routes
app.use(commentsRoute);
app.use(contactsRoute);
app.use(vehiclesRoute);
app.use(productsRoute);

app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
