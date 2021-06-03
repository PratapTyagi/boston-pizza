import stripeObj from "stripe";
import { v4 as uuidv4 } from "uuid";
import Order from "../models/orderModel.js";

const stripe = stripeObj(
  "sk_test_51IwlHJSGzj1nyQzAkjoDjIlgQ1LVWiy7iZYq5gFvvyIUkVYhFQOlKqx8PxtCK3ZyZRqG85gmR2WmvkiV1sFVVXtd00h1gCXzxD"
);
export const postOrder = async (req, res) => {
  const { token, subtotal, username, cartItems } = req.body;

  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const payment = await stripe.charges.create(
      {
        amount: subtotal * 100,
        currency: "inr",
        customer: customer.id,
        receipt_email: token.email,
      },
      {
        idempotencyKey: uuidv4(),
      }
    );

    if (payment) {
      const newOrder = new Order({
        name: username.name,
        email: username.email,
        userId: username._id,
        orderItems: cartItems,
        orderAmount: subtotal,
        shippingAddress: {
          street: token.card.address_line1,
          city: token.card.address_city,
          country: token.card.address_country,
          pincode: token.card.address_zip,
        },
        transactionId: payment.source.id,
      });
      newOrder.save();
      res.status(200).send("Order placed");
    } else res.status(400).send("Something went wrong");
  } catch (error) {}
  res.status(400).send({ message: "Something went wrong" });
};
