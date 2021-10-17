import User from "../../models/userModel.js";
import bcrypt from "bcryptjs";

export const postUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.json({ error: "Please add all the fields" });
  }
  const user = await User.findOne({ email })
  if (user) {
    return res.json({ error: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 12);
  if (!hashedPassword) {
    return res.json({ error: "Try again" });
  }
  const newUser = new User({ name, email, password: hashedPassword });

  const savedUser = await newUser.save();
  if (!savedUser) {
    return res.json({ error: "Try again" });
  }
  res.json({ message: "Successfully registered" });
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
