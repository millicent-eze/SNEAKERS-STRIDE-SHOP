const router = require('express').Router();
const Product = require('../models/Product');

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get single product
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Seed products (run once to populate your DB)
router.post('/seed', async (req, res) => {
  try {
    const sneakers = [
      { name: "Air Max 90", brand: "Nike", price: 120, image: "/images/airmax.jpg", stock: 50 },
      { name: "Ultraboost 23", brand: "Adidas", price: 180, image: "/images/ultraboost.jpg", stock: 30 },
      { name: "Classic Leather", brand: "Reebok", price: 90, image: "/images/classic.jpg", stock: 40 },
      { name: "Chuck Taylor", brand: "Converse", price: 65, image: "/images/chuck.jpg", stock: 60 },
      { name: "Old Skool", brand: "Vans", price: 75, image: "/images/oldskool.jpg", stock: 45 },
      { name: "Stan Smith", brand: "Adidas", price: 100, image: "/images/stansmith.jpg", stock: 35 }
    ];
    await Product.insertMany(sneakers);
    res.json({ message: 'Products seeded successfully!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
