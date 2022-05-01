import jwt from "jsonwebtoken";

const generateToken = (user) => {
  const token = jwt.sign(
    { id: user.id, email: user.email, isAdm: user.isAdm },
    process.env.SECRET,
    { expiresIn: "1d" }
  );
  return token
};

export default generateToken;