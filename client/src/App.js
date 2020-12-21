import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LandingPage from './components/views/LandingPage';
import Login from './components/views/user/Login';
import Register from './components/views/user/Register';



function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" component = {LandingPage} />
          <Route exact path="/login" component = {Login} />
          <Route exact path="/register" component = {Register} />
        </Switch>
      </div>
    </Router>
  );
}


export default App;
