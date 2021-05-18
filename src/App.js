import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Page from "react-page-loading";
import Main_game from "./Pages/main_game";
import Main_page from "./Pages/Main_page";
import Welcome from "./Pages/Welcome";
import "./App.css";

export default function App() {
  return (
    <div>
      <Page loader={"bar"} color={"#A9A9A9"} size={4}>
        <Router>
          <Switch>
            <Route path="/game" component={Main_game} />
            <Route path="/home" component={Main_page} />
            <Route path="/" component={Welcome} exact />
            <Redirect to="/" />
          </Switch>
        </Router>
      </Page>
    </div>
  );
}
