const router = require('express').Router();
const Order = require('../models/Order');

// Place an order
router.post('/', async (req, res) => {
  try {
    const { userId, items, total } = req.body;
    const order = new Order({ userId, items, total, status: 'confirmed' });
    await order.save();
    res.json({ message: 'Order placed!', orderId: order._id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get orders for a user
router.get('/:userId', async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
