const express = require("express");
const cors = require("cors");
const routerApi = require("./router.index");
const config = require("./config")

function bootstrap() {
  const app = express();
  const port = config.port

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.get("/", (req, res) => {
    res.status(200).send({ message: "App running OK" });
  });
  app.get("/home", (req, res) => {
    res.status(200).send({ message: "Home endpoint OK" });
  });

  routerApi(app);

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

bootstrap();
