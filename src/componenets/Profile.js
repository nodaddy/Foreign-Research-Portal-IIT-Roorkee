import React, {Component} from 'react';
import './Profile.css';
import axios from "axios";
import { API_ENDPOINT } from '../config';

class Profile extends Component {
    state = {
        "name": null,
        "department": null,
        "enorllment_no": null,
        "email":null,
    }

    componentDidMount(){
        
        axios
        .get(
            API_ENDPOINT+'users/getprofile/',
           {headers: { 'Authorization': `Token ${localStorage.getItem('token')}`}},)
        .then((res)=>{
            this.setState({
        "name": res.data.name,
        "department": null,
        "enorllment_no": null,
        "email":null,
            });
        });
    }



    render() {
        return (
            <div className="container-fluid">
                <div className="row" id="idCard">
                    <div className="col-sm-5" align="left">
                        <h3 id="personName">Name: {this.state.name}</h3>

                        <span id="department">Department: {this.state.department}</span><br/>
                        <span id="enrollmentNo">enrollment No: {this.state.enorllment_no}</span><br/>
                        <span id="email">Email: {this.state.email}</span><br/>

                    </div>
                    <div className="col-sm-4" align="right">
                        <img id="PP" src={this.props.PP}></img>
                    </div>
                    <div className="col-sm-3" align="right">

                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;
