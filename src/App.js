import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";
import Home from "./Components/Pages/Home";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
