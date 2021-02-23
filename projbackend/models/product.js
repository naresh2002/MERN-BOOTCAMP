const mongoose = require("mongoose");
const {ObjectID} = mngoose.Schema;

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 50
    },
    description: {
      type: String,
      trim: true,
      required: true,
      maxlength: 1000
    },
    price: {
      type: Number,
      required: true,
      maxlength: 32,
      trim: true
    },
    category: {
      type: ObjectID,
      ref: "Category",
      required: true
    },
    stock: {
      type: Number
    },
    sold: {
      type: Number,
      default: 0
    },
    photo: {
      data: Buffer,
      contentType: String
    }
  },
  {timestamps: true}
);

module.exports = mongoose.model("Product", productSchema);