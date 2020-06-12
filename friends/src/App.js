import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import FriendsList from './components/FriendsList'
import Login from "./components/Login";


function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Switch>
          {/* //Swicth once this path is validated, bailout */}
          <PrivateRoute exact path="/protected" component={FriendsList} />
          {/* Switched Route exact path to PrivateRoute  */}
          <Route render={() => <Login />} path="/login" />
          {/* Is the same as  */}
          {/* <Route path="/login" component={Login} /> */}
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
