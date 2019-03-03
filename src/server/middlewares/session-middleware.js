const session = require("express-session");
var uid = require('uid-safe')

const timeInMilliseconds = 5000; // 1 sec = 1000 millisecond
const maxAgeInMilliseconds = 100000;
module.exports.sessionMiddleware = session({
  resave: false,
  saveUninitialized: true,
  genid: function () {
    return uid.sync(18);
  },
  cookie: {
    expires: new Date(Date.now() + timeInMilliseconds),
    maxAge: maxAgeInMilliseconds
  },
  rolling: false,
  secret: "react fake test", // this must be set properly
  // cookie: {secure: true},required option should have https

});