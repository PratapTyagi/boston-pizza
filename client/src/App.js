import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "./components";
import Home from "./screens/Home";
import Cart from "./screens/cart/Cart";
import Login from "./screens/authentication/Login";
import Register from "./screens/authentication/Register";
import OrdersScreen from "./screens/orders/OrdersScreen";
import AdminScreen from "./screens/admin/AdminScreen";
import ResetPassword from "./screens/resetPassword/ResetPassword";
import NewPassword from "./screens/newPassword/NewPassword";
import { HashRouter as Router, Route, useHistory } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";

let currentUser;
const Routing = () => {
  currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const history = useHistory();

  useEffect(() => {
    if (
      !currentUser &&
      !history.location.pathname.startsWith("/reset-password")
    ) {
      history.push("/login");
    }
  }, []);

  return (
    <>
      {!currentUser ? (
        <>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/reset-password" exact component={ResetPassword} />
          <Route path="/reset-password/:token" exact component={NewPassword} />
        </>
      ) : (
        <>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/reset-password" exact component={ResetPassword} />
          <Route path="/reset-password/:token" exact component={NewPassword} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/orders" exact component={OrdersScreen} />
          <Route
            path="/admin"
            component={currentUser && currentUser.isAdmin ? AdminScreen : Home}
          />
        </>
      )}
    </>
  );
};

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routing />
      </Router>
    </div>
  );
}

export default App;
