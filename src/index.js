import connectDB from "./db/index.js";
import dotenv from "dotenv";
import app from "./app.js"

dotenv.config();

const PORT = process.env.PORT || 4000;

connectDB()
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  })
  .catch((e) => {
    console.error("Unable to connect to MongoDB", e);
  });
