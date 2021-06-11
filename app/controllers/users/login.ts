import { Request, Response } from "express";
import { loginUser } from "../../components/users/login/loginUser";
import { updateUserToken } from "../../components/users/login/updateUserToken";

const login = async (req: Request, res: Response): Promise<void> => {
  const loggedUser = await loginUser(req);

  if (loggedUser) {
    const updatedUser = await updateUserToken(loggedUser);

    res.json({
      response: "logged in",
      data: updatedUser.get({ plain: true }),
    });
  } else {
    res.json({
      response: "invalid login data",
    });
  }
};

export { login };
