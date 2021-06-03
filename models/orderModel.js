import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true },
    userId: { type: String, require: true },
    orderItems: [],
    shippingAddress: { type: Object },
    orderAmount: { type: Number, require: true },
    isDelivered: { type: Boolean, require: true, default: false },
    transactionId: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("orders", orderSchema);
