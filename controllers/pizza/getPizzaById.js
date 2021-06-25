import Pizzas from "../../models/pizzaModel.js";

export const getPizzaById = async (req, res) => {
  const id = req.body.pizzaid;

  try {
    const pizza = await Pizzas.findOne({ _id: id });
    res.status(200).send(pizza);
  } catch (error) {
    res.status(400).json({ message: `Something went wrong: ${error}` });
  }
};
