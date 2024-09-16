import express, {Application} from "express";
import {AppDataSource} from "./data-source";
import cors from "cors";
import routerUsuario from "./routes/usuarioRoute";
import routerCampeonato from "./routes/campeonatoRoute";
import routerPartida from "./routes/partidaRoute"

const app: Application = express();
app.use(express.json());
app.use(cors());

app.use("/api", routerUsuario);
app.use("/api", routerCampeonato);
app.use("/api", routerPartida);

export default app;