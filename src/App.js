
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
  // Link
} from "react-router-dom";
import { createContext, useState } from 'react';
import Home from './component/Home/Home';
import AboutUs from './component/AboutUs/AboutUs';
import Login from './component/Login/Login';
import Admin from './component/Admin/Admin';
import CheckOut from './component/CheckOut/CheckOut';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import Orders from './component/Orders/Orders';
import ManageProducts from './component/ManageProducts/ManageProducts';
import CheckOutConfirm from './component/CheckOutConfirm/CheckOutConfirm';
import ConfirmMessage from './component/ConfirmMessage/ConfirmMessage';
export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

      <div>
        <Router>

          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/home">
              <Home />
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <PrivateRoute path="/checkOut/:productId">
              <CheckOut/>
            </PrivateRoute>

            <PrivateRoute path="/admin">
              <Admin></Admin>
            </PrivateRoute>

            <PrivateRoute path="/orders">
              <Orders></Orders>
            </PrivateRoute>

            <Route path="/about">
              <AboutUs></AboutUs>
            </Route>

            <Route path="/manageProduct">
              <ManageProducts></ManageProducts>
            </Route>

            <Route path="/confirmCheckout">
              <CheckOutConfirm></CheckOutConfirm>
            </Route>

            <Route path="/confirmMsg">
              <ConfirmMessage></ConfirmMessage>
            </Route>

          </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  );

}

export default App;
