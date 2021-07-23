const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

const port = 3030;

app.listen(port, () => {
  console.log(`Yipeeeeee the server is running on http://localhost:${port}/`);
});
