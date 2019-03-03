const express = require("express");
const {
  RecordsService
} = require("../services/records-service");

const routeBuilder = (() => ({
  async getAllRecords(req, res) {
    const records = await RecordsService.getAllRecords();
    res.json(records);
  },

  async addTask(req, res) {
    const {
      id,
      task
    } = req.body;
    await RecordsService.saveTask(id, task);
    const record = await RecordsService.getRecordById(id);
    res.json(record);
  }
}))();

const routes = express.Router();
routes.get("/", checkSessionExpire, routeBuilder.getAllRecords);
routes.post("/addTask", checkSessionExpire, routeBuilder.addTask);
module.exports.apiRoutes = routes;

function checkSessionExpire(req, res, next) {
  const expireDate = req.session.cookie._expires;
  
  if (expireDate < Date.UTC) {
    res.statusSend(500);
  } else {
    next();
  }
}