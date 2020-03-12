import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopNav from './componenets/TopNav';
import Login from './componenets/Login';
import SideNav from './componenets/SideNav';
import Projects from './componenets/Projects'
import ProjectApplications from './componenets/Applications';
import Bookmarks from './componenets/Bookmarks';
import Experiences from './componenets/Experiences';
import Results from './componenets/Results';
import Team from './componenets/Team';
import Home from './componenets/Home';
import Register from './componenets/Register';
import Profile from './componenets/Profile'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'; 


function App() {

  


  return (
    <div className="container-fluid App">
    <TopNav></TopNav>
      <div className="row" align="center" style={{width:'100%'}}>
        <div className="col-sm-2" style={{borderbottom:'0px inset silver',padding:'0px',margin:'0px',height:'87vh',boxShadow:'2px 2px 7px 0px silver'}}><SideNav></SideNav></div>
        <div className="col-sm-10" style={{margin:'0px',padding:'0px'}} align="left">
        <Router>
        <Switch>
         { <Route exact path="/">
            <Profile ></Profile>
  </Route>}
          <Route path="/projects">
            <Projects/>
          </Route>
          <Route path="/yourapplications">
            <ProjectApplications/>
          </Route>
          <Route path="/bookmarks">
            <Bookmarks/>
          </Route>
          <Route path="/experiences">
            <Experiences/>
          </Route>
          <Route path="/results">
            <Results/>
          </Route>
          <Route path="/team">
            <Team/>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
        </Switch>
        </Router>
        </div>
    </div>
    </div>
     
  );
}

export default App;
