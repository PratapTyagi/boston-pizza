import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../actions/userActions";

import "./Navbar.css";
const Navbar = () => {
  const { cartItems } = useSelector((state) => state.cartReducer);
  const { currentUser } = useSelector((state) => state.loginUserReducer);

  const dispatch = useDispatch();
  return (
    <div className="navbar">
      <div className="logo">
        <Link
          className="link"
          to={currentUser ? "/" : "/login"}
          style={{ textDecoration: "none" }}
        >
          <h2>вσѕтση ριzzα</h2>
        </Link>
      </div>
      <div className="right">
        {!currentUser ? (
          <>
            <Link
              className="link"
              to="/login"
              style={{ textDecoration: "none" }}
            >
              <h6>Sign In</h6>
            </Link>
            <Link
              className="link"
              to="/register"
              style={{ textDecoration: "none" }}
            >
              <h6>Sign Up</h6>
            </Link>
          </>
        ) : (
          <>
            {currentUser.isAdmin && (
              <Link
                className="link"
                to="/admin"
                style={{ textDecoration: "none" }}
              >
                <h6>AdminPannel</h6>
              </Link>
            )}
            <div className="dropdown">
              <a
                className="dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {currentUser.name}
              </a>

              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <Link className="dropdown-item" to="/orders">
                  Orders
                </Link>
                <Link
                  className="dropdown-item"
                  to="/login"
                  onClick={() => dispatch(logoutUser())}
                >
                  Logout
                </Link>
              </div>
            </div>
          </>
        )}
        {currentUser && (
          <Link className="link" to="/cart" style={{ textDecoration: "none" }}>
            <h6 className="cart">Cart {cartItems.length}</h6>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
