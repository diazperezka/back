import sequelize from "./database";
import { UserModel } from "@app/models/lib/models/user/model";

const initSequelize = async () => {
  await sequelize.sync({ force: true });
  UserModel(sequelize);
};

export { initSequelize };
