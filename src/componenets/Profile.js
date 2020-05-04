import React, {Component} from 'react';
import './Profile.css';
import axios from "axios";
import { API_ENDPOINT } from '../config';

class Profile extends Component {
    state = {
        "name": 'NA',
        "department": 'NA',
        "enorllment_no": 'NA',
        "email":'NA',
        "year":'NA',
        "skype":'NA',
        "phone":'NA',
        "cv":'NA',
    }

    componentDidMount(){
        
        axios
        .get(
            API_ENDPOINT+'users/getprofile/',
           {headers: { 'Authorization': `Token ${localStorage.getItem('token')}`}},)
        .then((res)=>{
            this.setState({
        "name": res.data.name,
        "department": res.data.dept,
        "enorllment_no": res.data.enrol_no,
        "email": res.data.email,
        "year":res.data.year,
        "phone":res.data.phone,
        "skype": res.data.skype,
        "cv": res.data.cv,
            });
        });
    }



    render() {
        return (
            <div className="container-fluid">
                <div className="row" id="idCard">
                    <div className="col-sm-5" align="left">
                        <h2 id="personName">{this.state.name}</h2>

                        <span className="spa" id="department">Department : {this.state.department}</span><br/>
                        <span className="spa" id="enrollmentNo">Enrollment Number : {this.state.enorllment_no}</span><br/>
                        <span className="spa" id="year">Year : {this.state.year}</span><br/>
                        <span className="spa" id="email">Email Address: {this.state.email}</span><br/>

                    </div>
                    <div className="col-sm-4" align="right">
                        <img id="PP" src={this.props.PP}></img>
                    </div>
                    <div className="col-sm-3" align="right">

                    </div>
                </div><br/>
                <hr/>
                <div className="row"  align="left" id="additionalInfo"><br/>
                    <div className="col-sm-6"><span className="spa" id="phone">Phone : {this.state.phone}</span><br/>
                    <span className="spa" id="phone">Drive link to CV : {this.state.cv}</span>
                    </div>
                    <div className="col-sm-6"><span className="spa" id="phone">Skype Name : {this.state.skype}</span></div>
  
                </div>
                <div className="row"  align="left" id="additionalInfo" style={{paddingLeft:'90px'}}><br/>
                    <button onClick={this.logout} className="col-sm-1 hoverHand" id="rightOfNav">Logout </button>
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



export default Profile;
