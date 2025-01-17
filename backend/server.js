const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./routes/routes");

const app = express();
const port = process.env.PORT || 2121;

app.use(express());
app.use(express.json());
app.use(cors());

app.use(router)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});