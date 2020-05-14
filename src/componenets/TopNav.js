import React, {Component} from 'react';
import './TopNav.css';
import {logo, dummyPp} from '../assets'
import axios from "axios";
import {API_ENDPOINT} from "../config";
import {Link} from 'react-router-dom';

class TopNav extends Component {
    state = {
        LoggedinB: 'false',
        name:'My Profile'

    }

    componentDidMount(){
        axios
        .get(
            API_ENDPOINT+'users/getprofile/',
           {headers: { 'Authorization': `Token ${localStorage.getItem('token')}`}},)
        .then((res)=>{
            this.setState({
        "name": res.data.name,
            });
        });
    }

    render() {
        return (
            <nav class="navbar navbar-inverse" style={{margin:'0px', backgroundColor:'#0B83DA', border:'0px', paddingTop:'12px', paddingBottom:'12px'}}>
            <div class="container-fluid">
                <div class="navbar-header">
            <img
                          src={logo}
                          style={{width: '50px', backgroundColor: 'transparent', marginRight:'15px', marginLeft:'25px'}}
                      ></img>
                      </div>
              <div class="navbar-header navbar-brand" style={{color:'white'}}>
                <b style={{fontSize:'25px', fontFamily:'Tw !important'}}> Foreign Research Portal</b>
              </div>
              <ul class="nav navbar-nav navbar-right" style={{}}>
                <li class="active">
                {
                      this.props.loggedIn ?
                      <div style={{marginRight:'20px', border:'1px solid white'}}>
                      <Link style={{color:'white', backgroundColor:'#0B83DA', fontSize:'17px'}} className="hoverHand" title="Your profile"  to='/dashboard'
                      >
                      <img src={dummyPp} style={{width:'50px',fontFamily:'Roboto', backgroundColor:'transparent'}}></img> <b>{this.state.name}</b>
                   </Link>
                   </div>
                          :
                          null
                  }
                  </li>

                
                
              </ul>
            </div>
          </nav>        );
    }

    logout = function () {
        axios
            .get(
                API_ENDPOINT + 'users/logout/',
                {
                    headers: {
                        Authorization: 'Token' + localStorage.getItem('token')
                    }
                }
            ).finally(() => {
            localStorage.clear();
            window.location.reload();
        })
    }.bind(this)
}

export default TopNav;
