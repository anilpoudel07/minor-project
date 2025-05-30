import express from "express";
import gpsRouter from "./routes/gps.routes.js";

const app = express();
app.use(express.json());
app.use("/api/v1", gpsRouter);

export default app;
