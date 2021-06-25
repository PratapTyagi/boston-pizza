import { useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

const NewPassword = () => {
  const [password, setpassword] = useState("");

  const { token } = useParams();
  const update = async (e) => {
    e.preventDefault();

    await axios
      .post("/api/users/new-password", { password, token })
      .then((user) => {
        if (user.error) {
          return alert(`Error ${user.error}`);
        }
        alert(`Check your email`);
      })
      .catch((error) => {
        console.log(`Something went wrong ${error}`);
      });
  };

  return (
    <div className="login_page">
      <div className="login">
        <h3>Reset Password</h3>
        <form className="login__form">
          <input
            type="text"
            placeholder="New Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            required
          />

          <button type="submit" onClick={update}>
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewPassword;
