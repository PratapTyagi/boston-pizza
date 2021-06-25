import User from "../../models/userModel.js";

export const deleteUser = async (req, res) => {
  const { userid } = req.body;

  try {
    await User.findByIdAndDelete({ _id: userid });
    res.status(200).send("User deleted successfully");
  } catch (error) {
    res.status(400).json({ message: `Something went wrong ${error}` });
  }
};
