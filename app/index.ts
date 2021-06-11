import express from "express";
import cors from "cors";

import { loadSequelizeUsersFixture } from "./config/loadSequelizeUsersFixture";

import { initRoutes } from "./config/initRoutes";
import { initSequelize } from "./config/initSequelize";

const init = async () => {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded());
  app.use(cors());

  await initSequelize();
  await loadSequelizeUsersFixture();

  initRoutes(app);

  app.listen(4000, () => {
    console.log("The application is listening on port 3000!");
  });
};

init();
