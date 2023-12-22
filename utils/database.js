import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://0.0.0.0:27017/urlShortner");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error in Connecting to the DB", error);
  }
};
