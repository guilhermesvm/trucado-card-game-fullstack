import express, {Application} from "express"
import cors from "cors"
import routerUsuario from "./routes/userRoute"
import routerTournament from "./routes/tournamentRoutes"
import routerMatch from "./routes/matchRoute"
import errorHandler from "./middleware/errorHandler"

const app: Application = express()
app.use(express.json())
app.use(cors())

app.use("/api", routerUsuario)
app.use("/api", routerTournament)
app.use("/api", routerMatch)


/**
 * Error handling middleware.
 *
 * This middleware will catch any errors that occur during the processing
 * of requests and send a standardized error response.
 */
app.use(errorHandler);

export default app