// @Desc    Get Goal
// @Route   GET api/goals
// @Acces   Private
const getGoals = (req, res) => {
  res.status(200).json({ msg: "Get Goals" });
};

// @Desc    Set Goal
// @Route   POST api/goals
// @Acces   Private
const setGoal = (req, res) => {
  res.status(200).json({ msg: "Set Goal" });
};

// @Desc    Update Goal
// @Route   PUT api/goals/:id
// @Acces   Private
const updateGoal = (req, res) => {
  const idy = req.params.id;
  res.status(200).json({ msg: `Update Goal ${idy}` });
};

// @Desc    Delete Goal
// @Route   DELETE api/goals/:id
// @Acces   Private
const deleteGoal = (req, res) => {
  const idy = req.params.id;
  res.status(200).json({ msg: `Delete Goal ${idy}` });
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal
};