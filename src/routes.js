const express = require("express");

const userRouter = express.Router();

userRouter.get("/users", (req, res) => {
  res.status(200).send({ message: "Users endpoint OK" });
});

module.exports = userRouter;