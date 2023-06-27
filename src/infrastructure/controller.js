const UserModel = require("./user.model");

class UserController {
  getOne(req, res) {
    res.status(200).send({ message: "Get One OK" });
  }

  async getAll(req, res) {
    const users = await UserModel.find();
    res.status(200).send({ message: "Get All OK", users });
  }
}

module.exports = new UserController();
