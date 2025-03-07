import { Router } from "express";
import { GpsModel } from "../model/gps.model.js";
import gpsMiddleware from "../middleware/gps.middleware.js";
const router = Router();
router.get("/gps-data", async (req, res) => {
  try {
    const gpsData = await GpsModel.find();
    console.log("Data is fetched from MongoDB", gpsData[gpsData.length - 1]);
    res.status(200).json(gpsData[gpsData.length - 1]);
  } catch (e) {
    console.error("Error while fetchiing data ", e);
    res.status(500).json({ message: "Error while fetching Gps Data" });
  }
});
router.get("/logs", async (req, res) => {
  try {
    const gpsData = await GpsModel.find();
    console.log("Log is fetched from MongoDB", gpsData);
    res.status(200).json(gpsData);
  } catch (e) {
    console.error("Error while logging data ", e);
    res.status(500).json({ message: "Error while logging Gps Data" });
  }
});
router.post("/gps-data", gpsMiddleware, async (req, res) => {
  console.log("While saving data ", req.gps);

  const { longitude, latitude } = req.gps;

  try {
    const newGpsData = new GpsModel({
      longitude,
      latitude,
    });
    const savedGpsData = await newGpsData.save();
    console.log(savedGpsData);
    res.status(201).json({ message: "Gps data is saved in MongoDB" });
  } catch (e) {
    res.status(500).json({
      message: e.toString(),
    });
  }
});
export default router;
