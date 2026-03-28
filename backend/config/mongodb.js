import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      `${process.env.DATABASE_URL}/${process.env.DATABASE_NAME}`,
    );
    mongoose.connection.on("connected", () => {
      console.log("MONGODB CONNECTED");
    });
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

export default connectDB;
