import Order from "../../models/orderModel.js";

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({});
    res.status(200).send(orders);
  } catch (error) {
    res.status(400).json({ message: `Something went wrong ${error}` });
  }
};
