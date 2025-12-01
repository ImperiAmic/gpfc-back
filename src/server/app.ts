import "dotenv/config";
import helmet from "helmet";
import morgan from "morgan";
import express from "express";

const app = express();

app.use(helmet());
app.use(morgan("dev"));

export default app;
