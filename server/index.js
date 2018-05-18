let express = require("express");
let bodyParser = require("body-parser");
let products = require("./products");
let vehicles = require("./vehicles");

let commentsRoute = require("./routes/comments");
let contactsRoute = require("./routes/contacts");
let vehiclesRoute = require("./routes/vehicles");
let productsRoute = require("./routes/products");

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
