const {
  LoginRepository
} = require("../repos/login-repository");

module.exports.LoginService = {

  async registerNewAccount(name, password) {
    await LoginRepository.registerNewAccount(name, password);
  },
  
  async checkLogin(username, password) {

    const result = await LoginRepository
      .getUserDetails(username, password);

    if (!result) {
      return {
        status: 500,
        message: "Internal Server Error"
      };
    }

    return {
      status: 200,
      tasks: result.tasks,
      name: result.name,
      id: result._id
    };
  }
}