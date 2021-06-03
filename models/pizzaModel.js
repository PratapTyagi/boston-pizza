import mongoose from "mongoose";

const pizzaSchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    varients: [],
    prices: [],
    category: { type: String, require: true },
    image: { type: String, require: true },
    description: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("pizzas", pizzaSchema);
