import mongoose from "../database";
import brazilStates from "../utils/states";

const validateEmail = (email) => {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const validateUf = (uf) => {
  return brazilStates.includes(uf) && true;
};

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: "username is required",
      trim: true,
      lowercase: true,
      maxLength: 22,
    },
    email: {
      type: String,
      required: "email address is required",
      unique: true,
      trim: true,
      lowercase: true,
      validate: [validateEmail, "Please fill a valid email address"],
    },
    password: {
      type: String,
      required: "password is required",
      select: false,
      minLength: 6,
    },
    avatarUrl: {
      type: String,
      default: "",
    },
    uf: {
      type: String,
      required: "UF is required",
      uppercase: true,
      trim: true,
      validate: [validateUf, "Please fill a valid UF"],
    },
    isAdm: {
      type: Boolean,
      default: false,
    },
    level: {
      type: Number,
      default: 1,
      max: 30,
    },
    points: {
      type: Number,
      default: 0,
    },
    completedQuizes: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
