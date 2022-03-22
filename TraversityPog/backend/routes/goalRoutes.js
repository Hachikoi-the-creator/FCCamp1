// Stops working when I try to import this file...
const express = require('express');
const router = express.Router();
const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController');

// Can be shortened because they use the same route
router.route('/').get(getGoals).post(setGoal);

router.put('/:id', updateGoal);

router.delete('/:id', deleteGoal);

module.exports = router;