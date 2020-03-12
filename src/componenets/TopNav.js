import React, {Component} from 'react';
import './TopNav.css';
import {logo} from '../assets'
import axios from "axios";
import {API_ENDPOINT} from "../config";

class TopNav extends Component {
    state = {
        LoggedinB: 'false',
    }

    render() {
        return (
            <div className="container-fluid" id="TopNav">
                <div className="row" align="right">
                    <div className="col-sm-1">
                        <img
                            src={logo}
                            style={{height: '100%', backgroundColor: 'transparent'}}
                        />
                    </div>
                    <div className="col-sm-5" align="left" id="navbarTitle">
                        <a title="click for homepage" href="/"
                           style={{
                               backgroundColor: '#0B83DA',
                               textDecoration: 'none',
                               color: 'white'
                           }}>
                            Foreign Research Portal
                        </a>
                    </div>
                    {
                        this.props.loggedIn ?
                            <div onClick={this.logout} className="col-sm-6" id="rightOfNav"><span
                                id="porfilePic">PP </span> Logout </div>
                            :
                            null
                    }
                </div>
            </div>
        );
    }

    logout = function () {
        axios
            .get(
                API_ENDPOINT + 'users/logout/',
                {
                    headers: {
                        Authorization: 'Token ' + localStorage.getItem('token')
                    }
                }
            ).finally(() => {
            localStorage.clear();
            window.location.reload();
        })
    }.bind(this)
}

export default TopNav;
