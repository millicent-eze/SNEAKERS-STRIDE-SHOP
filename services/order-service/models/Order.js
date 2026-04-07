const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  userId: String,
  items: [{ productId: String, name: String, price: Number, qty: Number }],
  total: Number,
  status: { type: String, default: 'confirmed' }
}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema);
