const getGoals = (req, res) => {
  res.status(200).json({ msg: "Get Goals" });
};

module.exports = { getGoals };