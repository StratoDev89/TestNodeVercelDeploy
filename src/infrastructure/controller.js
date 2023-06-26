class UserController {
  getOne(req, res) {
    res.status(200).send({ message: "Get One OK" });
  }

  getAll(req, res) {
    res.status(200).send({ message: "Get All OK" });
  }
}

module.exports = new UserController();
