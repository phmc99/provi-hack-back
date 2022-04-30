import { Router } from "express";
import { create, getAll, getOne, patchAdm, signin } from "../controllers/user";
import { isAdmAuthenticated, isAuthenticated } from "../middlewares/auth";

const router = Router();

export const userRouter = () => {
  router.post("", create);
  router.post("/login", signin);
  router.get("", getAll);
  router.get("/:id", getOne);
  router.patch("/adm/:id", isAdmAuthenticated, patchAdm);
  return router;
};
