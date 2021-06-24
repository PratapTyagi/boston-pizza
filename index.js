import express from "express";
import db from "./db.js";
import path from "path";

import pizzaRoute from "./routes/pizzaRoute.js";
import userRoute from "./routes/userRoute.js";
import order from "./routes/orders.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/pizzas", pizzaRoute);
app.use("/api/users", userRoute);
app.use("/api/orders", order);

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/build/index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on PORT ${PORT}`));
