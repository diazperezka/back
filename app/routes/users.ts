import { Router } from "express";
import { all } from "../controllers/users/all";
import { login } from "../controllers/users/login";

const router = Router();

router.get("/users/:page/:recordsPerPage", all);
router.post("/login", login);

export default router;
