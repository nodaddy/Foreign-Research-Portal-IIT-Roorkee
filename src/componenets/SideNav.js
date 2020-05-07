import React, {Component} from 'react';
import './SideNav.css'
import {Link} from 'react-router-dom';

class SideNav extends Component {
    render() {
        return (
            <div className="container-fluid"  align="center"><br/>
                <div className="row sideNavLink" align="center">
                    <Link to="/projects" id="projects" className="col-sm-12">Projects</Link>
                </div>
                <div className="row sideNavLink" align="center">
                    <Link to="/yourapplications" id="yourApplications" className="col-sm-12">Your Applications</Link>
                </div>
                <div className="row sideNavLink" align="center">
                    <Link to="/bookmarks" id="bookmarks" className="col-sm-12">Bookmarks</Link>
                </div>
                <div className="row sideNavLink" align="center">
                    <Link to="/results" id="results" className="col-sm-12">Results</Link>
                </div>
                <hr/>
                <div className="row sideNavLink" align="center">
                    <a href="https://medium.com/@ircell/" target="iriitr" id="experience" className="col-sm-12 sideNavLink1">Experience</a>
                </div>
                <hr/>
                <div className="row sideNavLink" align="center">
                    <Link to="/team" id="team" className="col-sm-12 sideNavLink1">Team</Link>
                </div>

            </div>

        );
    }
}

export default SideNav;
