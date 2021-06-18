import React, {useState, useEffect} from 'react';
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
import './App.css';

function App() {
  const [userProfile, setUserProfile] = useState();

  useEffect(() => {
    setUserProfile(JSON.parse(localStorage.getItem('user')));
  }, [setUserProfile]);

  return (
    <>
      <Router>
        <NavBar user={userProfile} />
        <Switch>
          <Route path='/' exact component={Home} user={userProfile} />
          <Route path='/about' exact component={About} user={userProfile} />
          <Route path='/login' exact component={Login} user={userProfile} />
          <Route path='/bulls' exact component={Bulls} user={userProfile} />
          <Route path='/bears' exact component={Bears} user={userProfile} />
          <Route path='/cubs' exact component={Cubs} user={userProfile} />
          <Route
            path='/meatball'
            exact
            component={Meatball}
            user={userProfile}
          />
          <Route path='/blog/:blogId' component={Blog} user={userProfile} />
          <Route
            path='/AdminCreatePost'
            exact
            component={AdminCreatePost}
            user={userProfile}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
