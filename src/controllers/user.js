import {
  createUser,
  findAllUsers,
  findOneUser,
  login,
  updateAdm,
  updateAvatarUrl,
} from "../services/user";

export const create = async (req, res, next) => {
  try {
    const user = await createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const auth = await login(email, password);
    res.json(auth);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const getAll = async (req, res, next) => {
  try {
    const { page, per_page } = req.query;
    const users = await findAllUsers(page, per_page);
    res.json(users);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const getOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await findOneUser(id);
    res.json(user);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const patchAvatarUrl = async (req, res, next) => {
  try {
    const user = updateAvatarUrl();
    res.json(user);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const patchAdm = async (req, res, next) => {
  try {
    const { id } = req.params.id;
    const user = updateAdm(id);
    res.json({ message: `user ${id} adm permission is ${user.isAdm}` });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

