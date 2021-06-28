import mongoose from "mongoose";
import keys from "./config/keys.js";

const mongoURL = keys.MONGO_URL;

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });

let db = mongoose.connection;

db.on("connected", () => console.log("Mongo Db connected"));

db.on("error", () => console.error("error"));

export default mongoose;
