import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import { LoginPage } from "../features/auth/LoginPage";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <div>Home page</div>} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
