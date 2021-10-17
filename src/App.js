import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Authprovider from "./Context/Authprovider";
import Booking from "./Pages/Booking/Booking";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute";
import NotFound from "./Pages/NotFound/NotFound";
import Header from "./Pages/Shered/Header";

function App() {
  return (
    <div className="App">
      <Authprovider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/header"></Route>
            <PrivateRoute path="/booking/:BookingId">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </Authprovider>
    </div>
  );
}

export default App;
