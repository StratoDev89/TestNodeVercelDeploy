const express = require("express");
const cors = require("cors");

function bootstrap() {
  const app = express();
  const port = process.env.port || 3000;

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.get("/", (req, res) => {
    res.status(200).send({ message: "App running OK" });
  });
  app.get("/home", (req, res) => {
    res.status(200).send({ message: "Home endpoint OK" });
  });

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

bootstrap();
