const express = require("express");
const userRouter = require("./infrastructure/routes");

function routerApi(app) {

    const router = express.Router();
    app.use("/api", router);
    router.use(userRouter)
    
}

module.exports = routerApi;