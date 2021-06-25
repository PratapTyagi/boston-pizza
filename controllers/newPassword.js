import User from "../models/userModel.js";

export const newPassword = (req, res) => {
  const newPass = req.body.password;
  const token = req.body.token;

  User.findOne({ resetToken: token, expireToken: { $gt: Date.now() } })
    .then((user) => {
      if (!user) {
        return res.json({ error: "Try again session expired" });
      }
      user.password = newPass;
      user.resetToken = undefined;
      user.expireToken = undefined;
      user.save().then((result) => {
        if (!result) {
          return res.json({ error: "Try again" });
        }
        res.json({ message: "Password updated successfully" });
      });
    })
    .catch((err) => console.log(err));
};
