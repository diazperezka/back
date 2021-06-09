import faker from "faker";
import sequelize_fixtures from "sequelize-fixtures";

import db from "./database";

const models = {
  user: db.model("User"),
};

const createUser = () => {
  return {
    model: "user",
    data: {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    },
  };
};

const fixtures = Array(100).fill(undefined).map(createUser);

export const loadSequelizeUsersFixture = async (): Promise<void> => {
  await sequelize_fixtures.loadFixtures(fixtures, models);
};
