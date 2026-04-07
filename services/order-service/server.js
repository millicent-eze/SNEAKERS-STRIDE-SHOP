const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Order Service: MongoDB connected'))
  .catch(err => console.error(err));

app.use('/api/orders', require('./routes/orders'));

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => console.log(`Order Service running on port ${PORT}`));
