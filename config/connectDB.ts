import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL!);
    console.log("MongoDB Connected ✅");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
