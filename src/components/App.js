import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./Navbar";
import Container from "../ui/Container";
import routes from "../config/routes";
import { getJwt, refreshJwt } from "../common/storage";

const App = () => {
  refreshJwt();

  return (
    <Router>
      <Navbar />
      <Container>
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              getJwt() ? <Redirect to="/posts" /> : <Redirect to="/login" />
            }
          />
          {routes.map((route) => (
            <Route exact key={route.path} {...route} />
          ))}
          <Route component={() => <div>Error 404</div>} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
