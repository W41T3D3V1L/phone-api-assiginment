const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  isSpam: { type: Boolean, default: false },
});

module.exports = mongoose.model('Contact', contactSchema);
