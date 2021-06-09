import { User } from "@app/models/lib/models/user/types";
import { Model } from "sequelize/types";
import sequelize from "../../../config/database";

const findAllUsersWithPagination = ({
  limit,
  offset,
}): Promise<Model<User>[]> => {
  return sequelize.model("User").findAll({
    limit,
    offset,
  });
};

export { findAllUsersWithPagination };
