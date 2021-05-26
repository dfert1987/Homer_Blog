import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Bulls from "./Components/Pages/Bulls";
import Cubs from "./Components/Pages/Cubs";
import Bears from "./Components/Pages/Bears";
import SignUp from "./Components/Pages/SignUp";
import AdminCreatePost from "./Admin/AdminCreatePost";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/cubs" exact component={Cubs} />
          <Route path="/bulls" exact component={Bulls} />
          <Route path="/bears" exact component={Bears} />
          <Route path="/cubs" exact component={Cubs} />
          <Route path="/AdminCreatePost" exact component={AdminCreatePost} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
