const express = require("express");
const UserController = require("./controller");

const userRouter = express.Router();

userRouter.get("/user", UserController.getOne);
userRouter.get("/users", UserController.getAll);

module.exports = userRouter;
