const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./routes/routes");

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

// Middleware to parse URL-encoded bodies and JSON bodies
app.use(bodyParser.urlencoded({ extended: true }));
// Middleware to parse JSON bodies
app.use(bodyParser.json());

app.use(router)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});