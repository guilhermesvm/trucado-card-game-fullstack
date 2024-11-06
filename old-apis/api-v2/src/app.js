import express from "express";
import usuarioRouter  from "./routes/usuarioRoutes.js";
import campeonatoRouter from "./routes/campeonatoRoutes.js";

const app = express();
app.use(express.json());
app.use('/', usuarioRouter);
app.use('/', campeonatoRouter);

export default app;