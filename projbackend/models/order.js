const mongoose = require("mongoose");
const {ObjectID} = mongoose.Schema;

const ProductCartSchema = new mongoose.Schema(
  {
    product: {
      type: ObjectID,
      ref: "Product"
    },
    name: String,
    count: Number,
    price: Number,
  }
);

const ProductCart = mongoose.model("ProductCart", ProductCartSchema);

const orderSchema = new mongoose.Schema(
  {
    products: [ProductCartSchema],
    transaction_id: {},
    amount: {
      type: Number
    },
    addresss: String,
    updated: Date,
    user: {
      type: ObjectID,
      ref: "User"
    }
  },
  {timestamps: true}
);

const Order = mongoose.model("Order", orderSchema);


module.export = {Order, ProductCart}