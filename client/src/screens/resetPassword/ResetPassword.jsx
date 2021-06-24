import { useState } from "react";

import Loading from "../../components/loading/Loading";
import Error from "../../components/error/Error";

import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setemail] = useState("");

  const reset = async (e) => {
    e.preventDefault();
    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      return alert("Invalid email");
    }
    await axios
      .post("/api/users/reset-password", { email })
      .then((user) => {
        if (user.error) {
          return alert(`Error ${user.error}`);
        }
        alert(`Message ${user.message}`);
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
            placeholder="Email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            required
          />

          <button type="submit" onClick={reset}>
            Reset Password
          </button>
        </form>
        <p className="register__user">
          Don't have an account
          <Link to="/register" style={{ textDecoration: "none" }}>
            <strong className="register__user__signUp"> Sign Up</strong>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
