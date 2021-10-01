import crypto from "crypto";
import User from "../../models/userModel.js";

export const resetPassword = (req, res) => {
  crypto.randomBytes(32, (err, buffer) => {
    if (err) {
      console.log(err);
    }
    const token = buffer.toString("hex");

    try {
      User.findOne({ email: req.body.email }).then((user) => {
        if (!user) {
          return res.json({ error: "No user found with the email" });
        }
        user.resetToken = token;
        user.expireToken = Date.now() + 3600000;
        user.save().then((result) => {
          res.json({ message: "Check your email" });
        });
      });
    } catch (error) {
      res.json({ error: `Check your email ${error}` });
    }
  });
};
