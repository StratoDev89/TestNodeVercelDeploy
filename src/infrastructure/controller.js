const UserModel = require("./user.model");

class UserController {
  getOne(req, res) {
    res.status(200).send({ message: "Get One OK" });
  }

  async getAll(req, res) {
    const users = await UserModel.find();
    res.status(200).send({ message: "Get All OK", users });
  }

  create(req, res) {
    try {
      const name = req.body;
      const user = new UserModel(name);
      user.save();

      res.status(200).send({ message: "User created OK" });
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = new UserController();
