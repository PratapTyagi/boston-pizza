import Model from "../../models/pizzaModel.js";
export const editPizza = async (req, res) => {
  const editedpizza = req.body.editedpizza;

  try {
    const pizza = await Model.findOne({ _id: editedpizza._id });

    (pizza.name = editedpizza.name),
      (pizza.description = editedpizza.description),
      (pizza.category = editedpizza.category),
      (pizza.image = editedpizza.image),
      (pizza.prices = [editedpizza.prices]);
    await pizza.save();
    res.status(200).send("Pizza details updated successfully");
  } catch (error) {
    res.status(400).json({ message: `Something went wrong ${error}` });
  }
};
