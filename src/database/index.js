import { config } from "dotenv";
config()

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });

mongoose.Promise = global.Promise;

export default mongoose;