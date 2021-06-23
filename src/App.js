import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Bulls from './Components/Pages/Bulls';
import Cubs from './Components/Pages/Cubs';
import Bears from './Components/Pages/Bears';
import Meatball from './Components/Pages/Meatball';
import Login from './Components/Pages/Login';
import AdminCreatePost from './Admin/AdminCreatePost';
import Blog from './Components/Pages/Blog';
import UserProfile from './Components/Pages/UserProfile/UserProfile';
import './App.css';



function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/login' exact component={Login} />
          <Route path='/bulls' exact component={Bulls} />
          <Route path='/bears' exact component={Bears} />
          <Route path='/cubs' exact component={Cubs} />
          <Route path='/meatball' exact component={Meatball} />
          <Route path='/blog/:blogId' component={Blog} />
          <Route path='/AdminCreatePost' exact component={AdminCreatePost} />
          <Route path='/profile' exact component={UserProfile} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
