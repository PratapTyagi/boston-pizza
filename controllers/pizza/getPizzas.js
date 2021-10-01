import Model from "../../models/pizzaModel.js";

export const getPizzas = async (req, res) => {
  try {
    const pizzas = await Model.find({});
    res.send(pizzas);
  } catch (error) {
    res.status(400).json(error );
  }
};

export const filterPizza = async (req, res) => {
  const {category, query} = req.body;
  let userPattern = new RegExp(`^${query}`);
try {
  let pizzas;
  if (!category && query) {
    pizzas = await Model.find({ name: { $regex: userPattern } })
  }
  else if (!query && category && category !== "all") {
    pizzas = await Model.find({category});
  }
  else if(query && category) {
    pizzas = await Model.find({ name: { $regex: userPattern }, category })
  }
  else {
    pizzas = await Model.find();
  }
  return res.status(200).json(pizzas)
} catch (error) {
  console.log(error);
  return res.status(400).json(error)
}
}