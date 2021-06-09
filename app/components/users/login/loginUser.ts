import { Request } from "express";
import { User } from "@app/models/lib/models/user/types";
import { Model } from "sequelize/types";
import sequelize from "../../../config/database";

const loginUser = (req: Request): Promise<Model<User>> => {
  const { email, password } = req.body;

  return sequelize.model("User").findOne({
    where: {
      email,
      password,
    },
  });
};

export { loginUser };
