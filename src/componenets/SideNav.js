import React, {Component} from 'react';
import './SideNav.css'
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';

class SideNav extends Component{
    render(){
        return(
            <div className="container-fluid"><br/>
               <div className="row sideNavLink" align="center">
                 <a href="/projects" id="projects" className="col-sm-12">Projects</a>
                 </div>
                <div className="row sideNavLink" align="center">
                    <a href="/yourapplications"  id="yourApplications" className="col-sm-12">Your Applications</a>
                 </div>
                 <div className="row sideNavLink" align="center">
                    <a href="/bookmarks" id="bookmarks" className="col-sm-12">Bookmarks</a>
                    </div>
                    <div className="row sideNavLink" align="center">
                    <a href="/results" id="results" className="col-sm-12">Results</a>
                    </div>
                    <hr/>
                    <div className="row sideNavLink" align="center">
                    <a href="/experiences"  id="experience" className="col-sm-12 sideNavLink1">Experience</a>
                    </div>
                    <hr/>
                    <div className="row sideNavLink" align="center">
                    <a href="/team" id="team" className="col-sm-12 sideNavLink1">Team</a>
                    </div>
                   
                </div>
         
        );
    }
} 

export default SideNav;