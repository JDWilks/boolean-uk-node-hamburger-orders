const express = require("express");
const morgan = require("morgan");
const hamBurgersRouter = require("./resources/hamburgers/router");
const ordersRouter = require("./resources/orders/router");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

const port = 3030;

app.listen(port, () => {
  console.log(`Yipeeeeee the server is running on http://localhost:${port}/`);
});

app.use("/hamburgers", hamBurgersRouter);
app.use("/orders", ordersRouter);
