import User from "../../models/userModel.js";
import bcrypt from "bcryptjs";

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
            res.json({ message: "Successfully registered" });
          });
        })
        .catch((error) => console.log(error));
    })
    .catch((error) => console.log(error));
};

export const postLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.find({ email, password });
    if (user.length > 0) {
      const currUser = {
        name: user[0].name,
        email: user[0].email,
        isAdmin: user[0].isAdmin,
        _id: user[0]._id,
      };
      res.send(currUser);
    } else {
      res.status(400).json({ message: "User Login Failed" });
    }
  } catch (error) {
    res.status(501).json({ message: error });
  }
};
