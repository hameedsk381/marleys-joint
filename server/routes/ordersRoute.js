const express = require("express");
const router = express.Router();
const stripe = require("stripe")(
  "sk_test_51M7Z1PSDlFcN5MoKv20zj30iVzxvTQX5GQLyItXt5W8qbPl9LhOkqgz0q4oyVifMBx5K6I4n2PtM3cbkWRCEh2lt002ULGqUr1"
);
const { v4: uuidv4 } = require("uuid");
const Order = require("../models/orderModel");

router.post("/placeorder", async (req, res) => {
  const { token, subtotal, currentUser, cartItems } = req.body;
  try {
    // const customer = await stripe.customers.create({
    //   email: token.email,
    //   source: token.id,
    // });
    // const payment = await stripe.charges.create(
    //   {
    //     amount: subtotal * 100,
    //     currency: "inr",
    //     customer: customer.id,
    //     receipt_email: token.email,
    //   },
    //   {
    //     idempotencyKey: uuidv4(),
    //   }
    // );

    const neworder = new Order({
      name: currentUser.name,

      email: currentUser.email,
      userid: currentUser._id,
      orderItems: cartItems,
      orderAmount: subtotal,
      shippingAddress: {
        street: token.card.address_line1,
        city: token.card.address_city,
        country: token.card.address_country,
        pincode: token.card.address_zip,
      },
    });

    neworder.save();
    // res.send("Payment Success");
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong" + error });
  }
});
router.post("/getuserorders", async (req, res) => {
  const { userid } = req.body;
  try {
    const orders = await Order.find({ userid: userid });
    res.send(orders);
  } catch (error) {
    return res.status(400).json({ message: "something went wrong" });
  }
});

router.get("/getallorder", async (req, res) => {
  try {
    const orders = await Order.find({});
    res.send(orders);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});
router.post("/deliver", async (req, res) => {
  const orderid = req.body.orderid
  try {
    const order = await Order.findByIdAndUpdate(orderid,{isDelivered : true});
  
    res.status(201).send(order,"order delivered successfully-");
    
  } catch (error) {
    return res.status(400).json({ error : error.stack });
  }
});
module.exports = router;
