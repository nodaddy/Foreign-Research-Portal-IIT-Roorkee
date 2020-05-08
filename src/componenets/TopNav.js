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
            <div className="container-fluid" id="TopNav">
                <div className="row" align="right">
                    <div className="col-sm-1">
                        <img
                            src={logo}
                            style={{height: '100%', backgroundColor: 'transparent', marginTop:'2vh'}}
                        />
                    </div>
                    <div style={{height:'100%',color:'white',fontFamily: 'Barlow',fontStyle: 'normal',fontSize: '30px', top:'3vh'}} align="left" className="col-sm-5">                         Foreign Research Portal
                     </div>
                    
                    {
                        this.props.loggedIn ?
                        <div><div className="col-sm-2" id="rightOfNav"> </div><div className="col-sm-1" id="rightOfNav"> </div>
                        <button className="col-sm-3 r" id="rightOfNav"><Link className="hoverHand" title="click for homepage"  to='/dashboard'
                        style={{
                            backgroundColor: '#0B83DA',
                            textDecoration: 'none',
                            color: 'white'
                        }}><span><img src={dummyPp} style={{width:'15%', backgroundColor:'transparent'}}></img></span>
                         {this.state.name}
                     </Link></button></div>
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
