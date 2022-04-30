import jwt from "jsonwebtoken";
import User from "../models/user";

export const isAdmAuthenticated = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (token === undefined) {
    return res
      .status(401)
      .json({ status: "error", message: "Missing authorization headers" });
  }

  jwt.verify(token, process.env.SECRET, async (err, decoded) => {
    if (err) {
      return res
        .status(400)
        .json({ status: "error", message: "Invalid Token" });
    }

    const user = await User.findById(decoded.id);

    if (!user.isAdm) {
      return res.status(401).json({ status: "error", message: "Unauthorized" });
    }

    req.user = user;
    next();
  });
};

export const isAuthenticated = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (token === undefined) {
    return res.status(401).json({ message: "Missing authorization headers" });
  }

  jwt.verify(token, process.env.SECRET, async (err, decoded) => {
    if (err) {
      return res.status(400).json({ message: "Invalid Token" });
    }
    const user = await User.findById(decoded.id);

    req.user = user;

    next();
  });
};
