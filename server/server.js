const express = require("express");
const db = require("./db");
const Pizza = require("./models/Pizzamodel");
const User = require("./models/Usermodel")
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser")
app.use(cors());

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))
app.get("/", (req, res) => {
  res.send("Server is running");
});
const pizzasRoute = require("./routes/pizzasRoute");
const UserRoute = require("./routes/UserRoute");
const ordersRoute = require("./routes/ordersRoute");

app.use("/api/pizzas/", pizzasRoute);
app.use("/api/users/", UserRoute);
app.use("/api/orders/",ordersRoute);


app.listen(2000, () => {
  console.log("Server running on 2000");
});
