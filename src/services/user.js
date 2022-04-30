import User from "../models/user";
import { paginateData } from "../utils/paginate";
import generateToken from "../utils/token";

export const createUser = async (body) => {
  const user = await User.create(body);
  return user;
};

export const findAllUsers = async (page, perPage) => {
  const users = await User.find();
  return paginateData(users, page, perPage);
};

export const findOneUser = async (id) => {
  const user = await User.findById(id);
  return user;
};

export const updateAvatarUrl = async () => {};

export const updateAdm = async (id) => {
  const user = await User.findById(id);

  user.isAdm = true;

  await user.save();

  return user;

  // const user = await User.findByIdAndUpdate(req.params.id, {
  //   isAdm: true,
  //   new: true,
  // });
};

export const login = async (email, password) => {
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return { error: "User not found" };
  }

  if (!password === user.password) {
    return { error: "Invalid password" };
  }

  user.password = undefined;

  return { user, token: generateToken(user) };
};