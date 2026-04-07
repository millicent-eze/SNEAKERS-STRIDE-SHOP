const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  image: String,
  stock: Number
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);
