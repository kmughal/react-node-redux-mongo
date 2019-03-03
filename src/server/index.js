const express = require('express');
const app = express();
const port = process.env.SERVER_URI || 3000;
const {
  apiRoutes
} = require("./routes/api");
const {
  loginRoute
} = require("./routes/check-login");
const {
  addMiddlewares
} = require("./middlewares");

addMiddlewares(express, app);

app.use("/records", apiRoutes);
app.use("/checkLogin", loginRoute);

app.get("/", (req, res) => res.send("great job"));

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// First time run of database seeds.

const seedDatabase = require("./database/init-db");
