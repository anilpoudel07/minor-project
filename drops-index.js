import mongoose from "mongoose";

await mongoose.connect(
  "mongodb+srv://poudelanil658:anil1234@cluster0.5c5ii.mongodb.net"
); // adjust your connection URI

await mongoose.connection.db.collection("gpsmodels").dropIndex("808B");

console.log("Index dropped!");
await mongoose.disconnect();
