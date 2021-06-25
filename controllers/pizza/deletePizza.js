import Pizza from "../../models/pizzaModel.js";
export const deletePizza = async (req, res) => {
  const pizzaid = req.body.pizzaid;
  try {
    await Pizza.findOneAndDelete({ _id: pizzaid });
    res.status(200).send("Pizza deleted successfully");
  } catch (error) {
    res.status(400).send({ message: `Something went wrong ${error}` });
  }
};
