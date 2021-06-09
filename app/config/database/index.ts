import { Sequelize } from "sequelize";
import { UserModel } from "@app/models/lib/models/user/model";

const sequelize = new Sequelize("sqlite::memory");
UserModel(sequelize);

export default sequelize;
