import { Request, Response } from "express";
import { Model } from "sequelize/types";
import { User } from "@app/models/lib/models/user/types";
import { getAllUsersPagination } from "../../components/users/all/getAllUsersPagination";
import { findAllUsersWithPagination } from "../../components/users/all/findAllUsersWithPagination";

const all = async (req: Request, res: Response) => {
  const allUsersPagination = getAllUsersPagination(req);

  const allUsers = await findAllUsersWithPagination(allUsersPagination);
  const JSONUsers = allUsers.map((el: Model<User>) => el.get({ plain: true }));

  res.json(JSONUsers);
};

export { all };
