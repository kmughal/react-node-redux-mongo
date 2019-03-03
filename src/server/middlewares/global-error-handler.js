module.exports.globalErrorHandler = (err, req, res, next) => {
  if (err) res.sendStatus(500).send("Error has occured");
  else next();
};