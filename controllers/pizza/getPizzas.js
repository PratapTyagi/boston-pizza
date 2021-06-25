import Model from "../../models/pizzaModel.js";

export const getPizzas = async (req, res) => {
  try {
    const pizzas = await Model.find({});
    res.send(pizzas);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
