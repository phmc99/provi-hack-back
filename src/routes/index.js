import { userRouter } from "./user";

export const initializeRoutes = (app) => {
  app.use("/user", userRouter());
};