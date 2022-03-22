// Stops working when I try to import this file...
const express = require('express');
const router = express.Router();
const { getGoals } = require('../controllers/goalController');

router.get('/', getGoals);

router.post('/', (req, res) => {
  res.status(200).json({ msg: "Set Goal" });
});

router.put('/:id', (req, res) => {
  const idy = req.params.id;
  res.status(200).json({ msg: `Update Goal ${idy}` });
});

router.delete('/:id', (req, res) => {
  const idy = req.params.id;
  res.status(200).json({ msg: `Delete Goal ${idy}` });
});

module.exports = router;