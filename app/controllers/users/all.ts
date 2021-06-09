import { Request, Response } from "express";
import { Model } from "sequelize/types";
import sequelize from "../../config/database";
import { User } from "@app/models/lib/models/user/types";
import { getAllUsersPagination } from "../../components/users/getAllUsersPagination";

const all = async (req: Request, res: Response) => {
  const { limit, offset } = getAllUsersPagination(req);

  const allUsers: Model<User>[] = await sequelize.model("User").findAll({
    limit,
    offset,
  });
  const JSONUsers = allUsers.map((el: Model<User>) => el.get({ plain: true }));

  res.json(JSONUsers);
};

export { all };
