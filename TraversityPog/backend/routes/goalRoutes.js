// Stops working when I try to import this file...
const express = require('express');
const router = express.Router();

router.get('/api/goals', (req, res) => {
  res.status(200).json({ key: "My value yey" });
});

module.exports = router;