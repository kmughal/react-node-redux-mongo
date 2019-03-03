const md5 = require("md5");
const {
  DbCollection
} = require("../database/db-server");

module.exports.LoginRepository = {

  async registerNewAccount(name, password) {
    const collection = await DbCollection();
    const md5PasswordString = md5(password);
    await collection.insertOne({
      name,
      password: md5PasswordString,
      tasks: []
    });
    return true;
  },

  async getUserDetails(username, password) {
    const collection = await DbCollection();
    const userfound = await collection.findOne({
      name: username
    });

    if (!userfound) {
      return null;
    }

    const md5Password = md5(password);
    const record = await collection.findOne({
      name: username,
      password: md5Password
    });

    return record;
  }
};