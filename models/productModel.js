const { default: mongoose } = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please add a name"],
      trim: true,
    },
    sku: {
      type: String,
      required: true,
      default: "SKU",
      trim: true,
    },
    category: {
      type: String,
      required: [true, "please add a category"],
      trim: true,
    },
    brand: {
      type: String,
      required: [true, "please add a brand"],
      trim: true,
    },
    color: {
      type: String,
      required: [true, "please add a color"],
      default: "As seen",
      trim: true,
    },
    quantity: {
      type: Number,
      required: [true, "please add a quantity"],
      trim: true,
    },
    sold: {
      type: Number,
      default: 0,
      trim: true,
    },
    regularPrice: {
      type: Number,
      // required: [true, "please add a name"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "please add a price"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "please add a description"],
      trim: true,
    },
    image: {
      type: [String],
    },
    rating: {
      type: [Object],
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
