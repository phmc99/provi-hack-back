import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { initializeRoutes } from "./routes";
import { errorHandler } from "./middlewares/error";

config();
const app = express();

app.use(cors());
app.use(express.json());

initializeRoutes(app)
app.use(errorHandler);

export default app;