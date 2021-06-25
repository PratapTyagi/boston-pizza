import Order from "../../models/orderModel.js";
export const deliverOrder = async (req, res) => {
  const { orderid } = req.body;
  try {
    const order = await Order.findOne({ _id: orderid });
    order.isDelivered = true;
    await order.save();
    res.status(200).send("Order Delivered Successfully");
  } catch (error) {
    res.status(400).send("Something went wrong");
  }
};
