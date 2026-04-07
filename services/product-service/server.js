const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Product Service: MongoDB connected'))
  .catch(err => console.error(err));

app.use('/api/products', require('./routes/products'));

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Product Service running on port ${PORT}`));
