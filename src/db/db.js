import mongoose from "mongoose";

const db = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Db is connected");
  } catch (e) {
    console.log("Db Conection Error", e);
  }
};

export { db };
