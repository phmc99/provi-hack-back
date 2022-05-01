import { Router } from "express";
import { create, getAll, getOne, patchAdm, patchAvatarUrl, signin } from "../controllers/user";
import { isAdmAuthenticated, isAuthenticated } from "../middlewares/auth";
import upload from "../middlewares/multer";

const router = Router();

export const userRouter = () => {
  router.post("", create);
  router.post("/login", signin);
  router.get("", getAll);
  router.get("/:id", getOne);
  router.patch("/adm/:id", isAdmAuthenticated, patchAdm);
  router.patch("/:id/avatar", upload.single("file"), patchAvatarUrl);
  return router;
};
