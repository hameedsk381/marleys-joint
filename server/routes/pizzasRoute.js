const express = require("express");
const router = express.Router();
const Pizza = require("../models/Pizzamodel");

router.get("/getallpizzas", async (req, res) => {
  try {
    const pizzas = await Pizza.find({});
    res.send(pizzas);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});
router.post("/delete", async (req, res) => {
  const pizzaid = req.body.pizzaid;
  try {
    await Pizza.findOneAndDelete({ _id: pizzaid });
    res.status(200).send("Pizza deleted");
  } catch (error) {
    res.status(404).json({ message: error });
  }
});
router.post("/addpizza", async (req, res) => {
  const { pizza } = req.body;

  try {
    const newPizza = new Pizza({
      name: pizza.name,
      image: pizza.image,
      varients: ['small', 'medium', 'large'],
      description: pizza.description,
      category: pizza.category,
      prices: [pizza.prices],
    });
    await newPizza.save();
    res.status(201).send("New Pizza added");
  } catch (error) {
    return res.status(400).json({ message: error.stack });
  }
});

module.exports = router;
