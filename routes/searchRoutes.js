const express = require('express');
const { searchByName, searchByPhone } = require('../controllers/searchController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/search/name/:query', authMiddleware, searchByName);
router.get('/search/phone/:phone', authMiddleware, searchByPhone);

module.exports = router;
