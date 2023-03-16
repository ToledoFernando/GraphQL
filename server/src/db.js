import mongoose from "mongoose";
import { mongodb_uri } from "./config.js";

const connectionDB = async () => {
  try {
    const conn = await mongoose.connect(mongodb_uri);
    console.log(`Connected db ${conn.connection.name}`);
  } catch (error) {
    console.log("No se pudo conectar con la base de datos");
    console.log(error.message);
    process.exit(1);
  }
};

export default connectionDB;
