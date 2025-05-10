const gpsMiddleware = (req, res, next) => {
  const { longitude, latitude } = req.body || {};
  console.log("Incomeng Request Body", req.body);

  if (latitude === undefined || longitude === undefined) {
    return res
      .status(400)
      .json({ message: "lattidue and Longitude are required" });
  }
  // if (deviceID === "") {
  // return res.status(400).json({ message: "deviceID is required" });
  // }
  const isValidLattitude = latitude >= -90 && latitude <= 90;

  const isValidLongitude = longitude >= -90 && longitude <= 90;
  if (!isValidLattitude || !isValidLongitude) {
    return res.status(400).json({ message: "Invalid Gps coordinate" });
  }

  req.gps = {
    //  deviceID,
    longitude,
    latitude,
  };
  console.log(req.gps);
  next();
};
export default gpsMiddleware;
