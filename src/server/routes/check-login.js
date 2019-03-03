const express = require("express");
const {
  LoginService
} = require("../services/login-service");

const loginRouteBUilder = async (req, res) => {
  const {
    username,
    password
  } = req.body;

  const result = await LoginService.checkLogin(username, password);
  res.send(result);
};

const registerNewAccount = async (req, res) => {
  try {
    const {
      name,
      password
    } = req.body;
    await LoginService.registerNewAccount(name, password);
    res.status(200).send(`${name} has been registered now.`);
  } catch (e) {
    res.status(500).send("Internal server error :", e);
  }
}

const loginRoute = express.Router();
loginRoute.post("/", loginRouteBUilder);
loginRoute.post("/register", registerNewAccount);
module.exports.loginRoute = loginRoute;