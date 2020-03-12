import React from 'react';
import './App.css';
import TopNav from './componenets/TopNav';
import Auth from './componenets/Auth';
import SideNav from './componenets/SideNav';
import Projects from './componenets/Projects'
import ProjectApplications from './componenets/Applications';
import Bookmarks from './componenets/Bookmarks';
import Experiences from './componenets/Experiences';
import Results from './componenets/Results';
import Team from './componenets/Team';
import {AuthRoute} from 'react-router-auth';
import Profile from './componenets/Profile'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const isLoggedIn = !(localStorage.getItem('token') == null || localStorage.getItem('token') === "");

function App() {
    return (
        <div className="container-fluid App">
            <TopNav loggedIn={isLoggedIn} />
            <div className="row" align="center" style={{width: '100%'}}>
                <div className="col-sm-2" style={{
                    borderbottom: '0px inset silver',
                    padding: '0px',
                    margin: '0px',
                    height: '87vh',
                    boxShadow: '2px 2px 7px 0px silver'
                }}>
                    <SideNav/>
                </div>
                <div className="col-sm-10" style={{margin: '0px', padding: '0px'}} align="left">
                    <Router>
                        <Switch>
                            <AuthRoute
                                authenticated={!isLoggedIn}
                                redirectTo='/dashboard'
                                path='/auth'
                                component={Auth}/>
                            <AuthRoute
                                authenticated={isLoggedIn}
                                redirectTo='/auth'
                                path='/dashboard'
                                component={Profile}/>
                            <AuthRoute
                                authenticated={isLoggedIn}
                                redirectTo='/auth'
                                path='/projects'
                                component={Projects}/>
                            <AuthRoute
                                authenticated={isLoggedIn}
                                redirectTo='/auth'
                                path='/yourapplications'
                                component={ProjectApplications}/>
                            <AuthRoute
                                authenticated={isLoggedIn}
                                redirectTo='/auth'
                                path='/bookmarks'
                                component={Bookmarks}/>
                            <AuthRoute
                                authenticated={isLoggedIn}
                                redirectTo='/auth'
                                path='/experiences'
                                component={Experiences}/>
                            <AuthRoute
                                authenticated={isLoggedIn}
                                redirectTo='/auth'
                                path='/results'
                                component={Results}/>
                            <AuthRoute
                                authenticated={isLoggedIn}
                                redirectTo='/auth'
                                path='/team'
                                component={Team}/>
                        </Switch>
                    </Router>
                </div>
            </div>
        </div>

    );
}

export default App;
