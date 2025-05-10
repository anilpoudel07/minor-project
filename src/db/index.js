import { mongoose } from "mongoose";
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      "mongodb+srv://nabinshrestha120:123@cluster0.hhatgcd.mongodb.net/"
    );
  } catch (e) {
    console.log(`Mongodb Error`, e);
  }
};

export default connectDB;
