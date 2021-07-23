const express = require("express");
const ordersRouter = express.Router();

let orders = [];

// A GET endpoint /orders to see all entered orders

ordersRouter.get("/", (req, res) => {
  res.json([orders]);
});

// - A POST endpoint /orders to send a new order to the kitchen: the body of the request should be of this form

ordersRouter.post("/", (req, res) => {
  // we are receiving here the new order through the body
  const newOrder = req.body;
  orders = [...orders, newOrder];
  res.json({ order: newOrder });
});

// {order_id : 1,
//  items: [
//     {hamburger_id: 1, quantity: 2},
//     {hamburger_id: 3, quantity: 1},
//     ],
// status: "pending" or "served"
// created_at: 1627020599070
// }
// order_id is a unique id for the newly entered order.
// created_at is when the order has been created: you can use a datetime format or a timestamp.
// The items array contains a list of objects with the hamburger_id of the hamburger to be added to the order and the quantity ordered.

// This endpoint does additional checks and replies with an error message if:
// - the hamburger_id is not valid
// - the quantity ordered is greater than the availability
// The error message should be explicit in what caused the error (e.g Error: Chicken burger availability: 1 - ordered: 2)

module.exports = ordersRouter;
