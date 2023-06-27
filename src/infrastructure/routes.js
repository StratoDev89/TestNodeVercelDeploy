const express = require("express");
const UserController = require("./controller");

const userRouter = express.Router();

userRouter.get("/user", UserController.getOne);
userRouter.get("/users", UserController.getAll);
userRouter.post("/user", UserController.create);

module.exports = userRouter;
