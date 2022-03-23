const asyncHandle = require('express-async-handler');
const { default: mongoose } = require('mongoose');
const Goal = require('../models/goalModel');

//1 @Desc    Get Goal
//1 @Route   GET api/goals
//1 @Acces   Private
const getGoals = asyncHandle(async (req, res) => {
  const goals = await Goal.find();

  res.status(200).json(goals);
});

//2 @Desc    Set Goal
//2 @Route   POST api/goals
//2 @Acces   Private
const setGoal = asyncHandle(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error(`Bro don't be like this plese give me data`);
  }
  const goal = await Goal.create({
    text: req.body.text
  });

  res.status(200).json(goal);
});

//3 @Desc    Update Goal
//3 @Route   PUT api/goals/:id
//3 @Acces   Private
const updateGoal = asyncHandle(async (req, res) => {
  const idy = req.params.id;
  const goal = await Goal.findById(idy);
  // const anotherIf = await Goal.findById(req.params.id)

  if (!goal) {
    res.status(400);
    throw new Error('There was no id to find the Goal T.T');
  }

  const updatedGoal = await Goal.findByIdAndUpdate(idy, req.body, { new: true });

  res.status(200).json(updatedGoal);
});

//4 @Desc    Delete Goal
//4 @Route   DELETE api/goals/:id
//4 @Acces   Private
const deleteGoal = asyncHandle(async (req, res) => {
  const idy = req.params.id;
  const goal = await Goal.findById(idy);

  if (!goal) {
    res.status(400);
    throw new Error('There was no id to find the Goal T.T - cannot DELETE');
  }

  const deletedGoal = await Goal.findByIdAndDelete(idy);

  res.status(200).json(deletedGoal);
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal
};