import express from "express";
import gpsRouter from "./routes/gps.routes.js";
import gpsMiddleware from "./routes/gps.routes.js";
const app = express();
app.use(express.json());
app.use("/api/v1", gpsMiddleware);
export default app;
