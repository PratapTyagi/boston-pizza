import crypto from "crypto";
import User from "../../models/userModel.js";
import nodemailer from "nodemailer";
import sg from "nodemailer-sendgrid-transport";

var client = nodemailer.createTransport(
  sg({
    auth: {
      api_key:
        "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",
    },
  })
);

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
          client.sendMail({
            from: "noreplybostonpizza@gmail.com",
            to: user.email,
            subject: "Reset Password",
            html: `
              <h2> You requested for password reset </h2>
              <h3> Click <a href="https://boston-pizza.herokuapp.com/#/reset-password/${token}">Link</a> to reset password </h3>
            `,
          });
          res.json({ message: "Check your email" });
        });
      });
    } catch (error) {
      res.json({ error: `Check your email ${error}` });
    }
  });
};
