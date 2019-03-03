const {
  MongoClient
} = require("mongodb");

let db = null;
let url = process.env.MONGODB_URI || "mongodb://localhost:27017/MyTasks";

async function Database() {
  if (db !== null) return db;
  let client = await MongoClient.connect(url, {
    useNewUrlParser: true
  });
  db = client.db();
  return db;
}

// let collection = null;
// asycn function DbCollection(){
//   if (collection !== null ) return collection;
//   let db = await Database();
//   collection = db.collection("people");
//   return null;
// }
let collection = null;
async function DbCollection() {
  db = await Database();
  collection = await db.collection("people");
  if (collection === null) collection = await db.createCollection("people",{ "capped": true, "size": 100000, "max": 5000});
  return collection;
}


module.exports.Database = Database;
module.exports.DbCollection = DbCollection;