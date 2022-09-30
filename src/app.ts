import cors from "cors";
import express from "express";
import "express-async-errors";
import handleErrorsMiddleware from './middlewares/errorHandlerMiddleware';
import dotenv from 'dotenv';
import router from "./routes/routes";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.use(handleErrorsMiddleware);

export default app;
