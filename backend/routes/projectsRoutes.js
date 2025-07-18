const express = require('express');
const router = express.Router();

// Basic route to test the API
router.get('/', (req, res) => {
  res.json({ message: 'Projects API is running' });
});

module.exports = router;
