import usersRoutes from "../routes/users";

const initRoutes = (app: any) => {
  app.use("/", usersRoutes);
};

export { initRoutes };
