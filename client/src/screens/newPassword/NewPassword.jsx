import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import axios from "axios";

const NewPassword = () => {
  const [password, setpassword] = useState("");
  const history = useHistory();

  const { token } = useParams();
  const update = async (e) => {
    e.preventDefault();

    await axios
      .post("/api/users/new-password", { password, token })
      .then(({ data }) => {
        if (data.error) alert(`Error ${data.error}`);
        else alert(`${data.message}`);
        history.push("/login");
      })
      .catch((error) => {
        console.log(`Something went wrong ${error}`);
      });
  };

  return (
    <div className="login_page">
      <div className="login">
        <h3>Update Password</h3>
        <form className="login__form">
          <input
            type="password"
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
