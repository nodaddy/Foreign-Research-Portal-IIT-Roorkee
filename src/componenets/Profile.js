import React, {Component} from 'react';
import './Profile.css';
import axios from "axios";
import { API_ENDPOINT } from '../config';
import {dummyPp} from '../assets'

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
                    <div className="col-sm-4" style={{paddingTop:'10px'}} align="center">
                        <img id="PP" src={dummyPp} style={{background:'#FFC839', borderRadius:'7px', width:'35%'}}></img>
                    </div>
                    <div className="col-sm-3" align="right">

                    </div>
                </div><br/>
                <hr/>
                <div id="additionalInfo">
                <div className="row"  align="left"><br/>
                    <div className="col-sm-6"><b>Phone Number:</b><br/> <input onChange={(e)=>{
                        this.setState({phone:e.target.value});
                    }} style={{border:'1px solid grey', width:'50%', marginTop:'6px', padding:'5px'}} placeholder={this.state.phone} className="spa" id="phone"></input><br/>
    
                    
                    </div>
                    <div className="col-sm-6"><b>Skype:</b><br/> <input onChange={(e)=>{
                        this.setState({skype:e.target.value});
                    }} style={{border:'1px solid grey', width:'50%', marginTop:'6px', padding:'5px'}} placeholder={this.state.skype} className="spa" id="skype"></input><br/>
    
  
                </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm-12">
                        <b>Drive link to your CV:</b><br/>
                    <input onChange={(e)=>{
                        this.setState({cv:e.target.value});
                    }} style={{border:'1px solid grey', width:'100%', marginTop:'6px', padding:'5px'}} placeholder={this.state.cv} className="spa" id="cv"></input>
                </div>
                </div>
                </div>
                <div className="row"  align="left" id="additionalInfo" style={{paddingLeft:'80px'}}>
                <div className="col-sm-5"><button style={{width:'60%',background: '#FCFDFE',padding:'4px',border:'0px',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)',color:'#93FF33', borderRadius:'4px' }} onClick={()=>{
                    
                    axios
            .post(
                API_ENDPOINT + 'users/updateprofile/',
                {
                    cv: this.state.cv,
                    skype: this.state.skype,
                    phone: this.state.phone,
                    
                },
                {
                    headers: {
                        Authorization: 'Token ' + localStorage.getItem('token')
                    }
                })
            .then((res) => {
                window.location.reload();
            })
            .catch(() => {
                alert(`Error updating profile`)
            })
                }} className="hoverHand" id="rightOfNav">Update</button></div>
                    <div className="col-sm-5"><button style={{width:'60%',background: '#0B83DA',padding:'4px',border:'0px',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)',color:'white', borderRadius:'4px' }} onClick={this.logout} className="hoverHand" id="rightOfNav">Logout </button></div>
                    
                    <div className="col-sm-2"></div>
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
