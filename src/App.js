import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Main_game from "./components/main_game";

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route to="/game" component={Main_game} exact />
          <Redirect to="/game" />
        </Switch>
      </Router>
    </div>
  );
}
