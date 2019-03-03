const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");

const {
  sessionMiddleware
} = require("./session-middleware");

const cookieValidator = (req, res, next) => {
  next();
};

const {
  globalErrorHandler
} = require("./global-error-handler");

module.exports.addMiddlewares = (express, app) =>
  app.use(
    globalErrorHandler,
    cookieValidator,
    sessionMiddleware,
    helmet(),
    express.static('dist'),
    cors(),
    bodyParser.json(),
    bodyParser.urlencoded({
      extended: true
    }));