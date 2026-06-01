const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Order = require("./models/Order");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb://127.0.0.1:27017/foodordering"
)
.then(() => {
  console.log("MongoDB Connected Successfully");
})
.catch((err) => {
  console.log("MongoDB Connection Error:", err);
});

app.post("/place-order", async (req, res) => {

  try {

    const order = new Order(req.body);

    await order.save();

    res.status(201).json({
      message: "Order Saved Successfully"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});