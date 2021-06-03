import mongoose from "mongoose";

const mongoURL = `mongodb+srv://PratapTyagi:pratap@pizza111@cluster0.kxikx.mongodb.net/mernpizza`;

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });

let db = mongoose.connection;

db.on("connected", () => console.log("Mongo Db connected"));

db.on("error", () => console.error(error));

export default mongoose;
