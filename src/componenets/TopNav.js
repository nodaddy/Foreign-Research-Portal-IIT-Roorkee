import React, {Component} from 'react';
import './TopNav.css';
import {logo} from '../assets'
import axios from "axios";
import {API_ENDPOINT} from "../config";
import {Link} from 'react-router-dom';

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
                            style={{height: '100%', backgroundColor: 'transparent', marginTop:'9px'}}
                        />
                    </div>
                    <div className="col-sm-5" align="left" id="navbarTitle">
                        <Link title="click for homepage"  to='/dashboard'
                           style={{
                               backgroundColor: '#0B83DA',
                               textDecoration: 'none',
                               color: 'white'
                           }}>
                            Foreign Research Portal
                        </Link>
                    </div>
                    <div className="col-sm-2" id="rightOfNav"> </div>
                    {
                        this.props.loggedIn ?
                        <div><div className="col-sm-2" id="rightOfNav"> </div><div className="col-sm-1" id="rightOfNav"> </div><button onClick={this.logout} className="col-sm-1 hoverHand" id="rightOfNav">Logout </button></div>
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
