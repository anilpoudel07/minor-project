import mongoose, { Schema } from "mongoose";
const gpsModelSchema = new Schema(
  {
    deviceID: {
      type: String,
      default: "",
      required: true,
      unique: true,
    },

    longitude: {
      type: String,
      default: 0,
      required: true,
    },
    latitude: {
      type: String,
      default: 0,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);
export const GpsModel = mongoose.model("GpsModel", gpsModelSchema);
