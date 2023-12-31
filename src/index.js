const express = require("express");
const cors = require("cors");
const routerApi = require("./router.index");
const config = require("./config");
const database = require("./infrastructure/database");

async function bootstrap() {
  const app = express();
  const port = config.port;

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.get("/", (req, res) => {
    res.status(200).send({ message: `App running OK on port ${port}` });
  });
  app.get("/home", (req, res) => {
    res.status(200).send({ message: "Home endpoint OK" });
  });

  routerApi(app);
  const { dbConnection, dbUser, dbPassword, dbHost, dbName } = config;
  await database(dbConnection, dbUser, dbPassword, dbHost, dbName);

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

bootstrap();
