const express = require("express");
const {addMiddlewares} = require("../server/middlewares");
// eslint-disable-next-line no-undef
const PORT_NUMBER = process.env.CLIENT_PORT_NUMBER || 8000;
const path = require("path");

const app = express();
addMiddlewares(express, app);

app.get("/*", (req, res) => {
  // eslint-disable-next-line no-undef
  const indexHtmlPath = path.join(__dirname,"../../index.html");
  res.sendFile(indexHtmlPath);
});

// eslint-disable-next-line no-console
app.listen(PORT_NUMBER, () => console.log(`Client connected:`, PORT_NUMBER));