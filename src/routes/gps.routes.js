import { Router } from "express";
import { GpsModel } from "../model/gps.model.js";
import gpsMiddleware from "../middleware/gps.middleware.js";
import { io } from "../index.js";

const router = Router();

router.get("/gps-data", async (req, res) => {
  try {
    const gpsData = await GpsModel.find();
    console.log("Data is fetched from MongoDB", gpsData[gpsData.length - 1]);
    io.emit("getData", gpsData[gpsData.length - 1]);

    res.status(200).json(gpsData[gpsData.length - 1]);
  } catch (e) {
    console.error("Error while fetching data", e);
    res.status(500).json({ message: "Error while fetching GPS Data: ", e });
  }
});

router.get("/logs", async (req, res) => {
  try {
    const gpsData = await GpsModel.find();
    console.log("Data is fetched from MongoDB", gpsData);
    io.emit("logs", gpsData);

    res.status(200).json(gpsData);
  } catch (e) {
    console.error("Error while fetching data", e);
    res.status(500).json({ message: "Error while fetching GPS Data: ", e });
  }
});

router.post("/gps-data", gpsMiddleware, async (req, res) => {
  console.log("While saving data", req.gps);

  const {
    // deviceID,
    longitude,
    latitude,
  } = req.gps;
  console.log(
    // deviceID,
    longitude,
    latitude
  );
  try {
    const newGpsData = new GpsModel({
      longitude,
      latitude,
    });
    const savedGpsData = await newGpsData.save();
    console.log("Saved GPS Data:", savedGpsData);

    // io.emit("gps-update", savedGpsData);

    res
      .status(201)
      .json({ message: "GPS data saved and broadcasted", savedGpsData });
  } catch (e) {
    res.status(500).json({ message: e.toString() });
  }
});

export default router;
