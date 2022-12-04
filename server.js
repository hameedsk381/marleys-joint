const express = require("express");

require("dotenv").config();
// const db = require("./configs/db");
// const Pizza = require("./models/Pizzamodel");
// const User = require("./models/Usermodel");
const cors = require("cors");
const app = express();
const PORT = process.env.port || 2000;
const bodyParser = require("body-parser");
const path = require("path");
app.use(cors());

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const pizzasRoute = require("./routes/pizzasRoute");
const UserRoute = require("./routes/UserRoute");
const ordersRoute = require("./routes/ordersRoute");

app.use("/api/pizzas/", pizzasRoute);
app.use("/api/users/", UserRoute);
app.use("/api/orders/", ordersRoute);
app.use(express.static(path.join(__dirname, "./client/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/dist/index.html"));
  (err) => {
    res.status(500).send(err);
  };
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
