import User from "../../models/userModel.js";
import bcrypt from "bcryptjs";
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

export const postUser = (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.json({ error: "Please add all the fields" });
  }

  User.findOne({ email })
    .then((user) => {
      if (user) {
        return res.json({ error: "User already exists" });
      }
      bcrypt
        .hash(password, 12)
        .then((hashedPassword) => {
          const newUser = new User({ name, email, password: hashedPassword });

          newUser.save().then((result) => {
            client.sendMail({
              from: "noreplybostonpizza@gmail.com",
              to: result.email,
              subject: "Greetings",
              html: `<h2>Welcome🙏 to the family ${result.name}</h2>`,
            });
            res.json({ message: "Successfully registered" });
          });
        })
        .catch((error) => console.log(error));
    })
    .catch((error) => console.log(error));
};

export const postLogin = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email })
    .then((user) => {
      if (!user) return res.json({ error: "Invalid email or password" });
      bcrypt.compare(password, user.password).then((doMatch) => {
        if (!doMatch) {
          return res.json({ error: "Invalid email or password" });
        }
        const { name, email, isAdmin, _id } = user;
        const currUser = {
          name,
          email,
          isAdmin,
          _id,
        };
        res.send(currUser);
      });
    })
    .catch((error) => console.log(error));
};
