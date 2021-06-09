import { User } from "@app/models/lib/models/user/types";
import { Request, Response } from "express";
import { Model } from "sequelize/types";
import { updateUserToken } from "../../components/users/updateUserToken";
import sequelize from "../../config/database";

const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  const loggedUser: Model<User> = await sequelize.model("User").findOne({
    where: {
      email,
      password,
    },
  });

  if (loggedUser) {
    const updatedUser = await updateUserToken(loggedUser);

    res.json({
      response: updatedUser.get({ plain: true }),
    });
  } else {
    res.json({
      response: "invalid login data",
    });
  }
};

export { login };
