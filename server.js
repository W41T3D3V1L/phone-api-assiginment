const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const searchRoutes = require('./routes/searchRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/search', searchRoutes);

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

startServer();
