import Order from "../models/orderModel.js";
export const getOrders = async (req, res) => {
  const { userId } = req.body;

  try {
    const orders = await Order.find({ userId: userId }).sort({ id: -1 });
    res.status(200).send(orders);
  } catch (error) {
    res.status(400).json({ message: `Some error occured ${error}` });
  }
};
