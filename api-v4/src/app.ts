import express, {Application} from "express";
import cors from "cors";
import userRouter from "./routes/userRoute";
import tournamentRouter from "./routes/tournamentRoutes";
import matchRouter from "./routes/matchRoute";
import healthRouter from "./routes/healthRoute";
import authController from "./routes/authRoute";
import errorHandler from "./middleware/errorHandler";

const app: Application = express();
app.use(express.json());
app.use(cors());

app.use("/api", userRouter);
app.use("/api", tournamentRouter);
app.use("/api", matchRouter);
app.use("/api", healthRouter);
app.use("/api", authController)

app.use(errorHandler);

export default app