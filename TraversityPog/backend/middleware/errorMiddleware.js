const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;//meaning server error

  res.status = statusCode;

  res.json({
    msg: err.message,
    stack: err.stack
  });
};

module.exports = { errorHandler };