const User = require('../models/User');
const Contact = require('../models/Contact');

const searchByName = async (req, res) => {
  try {
    const { query } = req.params;
    const users = await User.find({ name: { $regex: `^${query}`, $options: 'i' } });
    const others = await User.find({ name: { $regex: query, $options: 'i' } }).nin(users);

    res.json([...users, ...others]);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

const searchByPhone = async (req, res) => {
  try {
    const { phone } = req.params;

    const results = await User.find({ phone });
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { searchByName, searchByPhone };
