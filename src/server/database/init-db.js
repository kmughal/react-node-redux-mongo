const {
  Database
} = require("./db-server");
const {
  defaultState
} = require("./seed-data");

async function InitDatabase() {
  const db = await Database();

  let collection = db.collection("people");
  collection.drop();
  // eslint-disable-next-line no-console
  console.log(defaultState);
  await collection.insertMany(defaultState);
}

InitDatabase();