import { User } from "@app/models/lib/models/user/types";
import { Model } from "sequelize/types";
import { v4 } from "uuid";

const updateUserToken = async (
  loggedUser: Model<User>
): Promise<Model<User>> => {
  const token = v4();
  loggedUser.set("token", token);
  return loggedUser.save();
};

export { updateUserToken };
