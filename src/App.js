import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import OrderDetails from './components/OrderDetails/OrderDetails/OrderDetails';
import Review from './components/OrderDetails/Review/Review';
import ServiceList from './components/OrderDetails/ServiceList/ServiceList';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
export const UserContext = createContext();
function App() {
  const [loggedInuser, setLoggedInUser] = useState({});
  return (
    <div>
      <UserContext.Provider value={[loggedInuser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivateRoute path="/order">
            <OrderDetails></OrderDetails>
          </PrivateRoute>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/serviceList">
            <ServiceList></ServiceList>
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
