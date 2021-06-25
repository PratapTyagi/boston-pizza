import User from "../../models/userModel.js";
export const postUser = async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = new User({ name, email, password });

  try {
    newUser.save();
    res.send("User Registered successfully");
  } catch (error) {
    res.status(400).json({ message: error });
  }
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
