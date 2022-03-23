const asyncHandle = require('express-async-handler');
//1 @Desc    Get Goal
//1 @Route   GET api/goals
//1 @Acces   Private
const getGoals = asyncHandle(async (req, res) => {
  res.status(200).json({ msg: "Get Goals" });
});

//2 @Desc    Set Goal
//2 @Route   POST api/goals
//2 @Acces   Private
const setGoal = asyncHandle(async (req, res) => {
  // TODO: FIX THIS  LATER LOL (hard-coded prop[num])
  if (!req.body.number) {
    res.status(400);
    throw new Error(`Bro don't be like this plese give me data`);
  }

  res.status(200).json({ msg: `Set Goal` });
});

//3 @Desc    Update Goal
//3 @Route   PUT api/goals/:id
//3 @Acces   Private
const updateGoal = asyncHandle(async (req, res) => {
  console.log(req.body);
  // const idy = req.params.id;
  res.status(200).json({ msg: `Update Goal ${req.params.id}` });
});

//4 @Desc    Delete Goal
//4 @Route   DELETE api/goals/:id
//4 @Acces   Private
const deleteGoal = asyncHandle(async (req, res) => {
  // const idy = req.params.id;
  res.status(200).json({ msg: `Delete Goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal
};