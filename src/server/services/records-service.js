const mongodb = require("mongodb");
const {
  DbCollection
} = require("../database/db-server");

class RecordsService {

  static async saveTask(id, task) {
    const collection = await DbCollection();
    var myquery = {
      _id: new mongodb.ObjectID(id)
    };
    var newvalues = {
      $push: {
        tasks: {
          _id: new mongodb.ObjectID(),
          task
        }
      }
    };
    await collection.updateOne(myquery, newvalues);
  }

  static async addNewRecord(name) {
    const collection = await DbCollection();
    collection.insert({
      name: name
    });
  }

  static async getRecordById(id) {
    const collection = await DbCollection();
    const result = await collection.findOne({_id: new mongodb.ObjectID(id)});
    return result;
  }

  static async getAllRecords() {
    const collection = await DbCollection();
    const records = await collection.find({}).toArray();
    return records;
  }
}

module.exports.RecordsService = RecordsService;