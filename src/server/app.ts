import "dotenv/config";
import helmet from "helmet";
import morgan from "morgan";
import express from "express";
import handleHealthCheck from "../middlewares/handleHealthCheck.js";

const app = express();

app.use(helmet());
app.use(morgan("dev"));

app.use(handleHealthCheck);

export default app;
