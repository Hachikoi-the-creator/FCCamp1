const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;//meaning server error

  res.status = statusCode;

  res.json({
    msg: err.message,
    stack: process.env.NODE_ENV === "development" ? "" : err.stack
  });
};

module.exports = { errorHandler };