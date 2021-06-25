import User from "../../models/userModel.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (error) {
    res.status(400).json({ message: `Something went wrong ${error}` });
  }
};
