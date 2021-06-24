import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "./components";
import Home from "./screens/Home";
import Cart from "./screens/cart/Cart";
import Login from "./screens/authentication/Login";
import Register from "./screens/authentication/Register";
import OrdersScreen from "./screens/orders/OrdersScreen";
import AdminScreen from "./screens/admin/AdminScreen";
import ResetPassword from "./screens/resetPassword/ResetPassword";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import "./App.css";
import { useEffect } from "react";

const Routing = () => {
  const { currentUser } = useSelector((state) => state.loginUserReducer);
  const history = useHistory();

  useEffect(() => {
    if (
      !currentUser ||
      history.location.pathname.startsWith("reset-password")
    ) {
      history.push("/login");
    }
  }, []);

  return (
    <>
      <Route path="/" exact component={Home} />
      <Route path="/cart" exact component={Cart} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/orders" exact component={OrdersScreen} />
      <Route path="/admin" component={AdminScreen} />
      <Route path="/reset-password" component={ResetPassword} />
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
