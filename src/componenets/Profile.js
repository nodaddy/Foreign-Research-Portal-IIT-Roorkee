import React, {Component} from 'react';
import './Profile.css'

class Profile extends Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="row" id="idCard">
                    <div className="col-sm-5" align="left">
                        <h3 id="personName">Name: {this.props.personName}</h3>

                        <span id="department">Department: {this.props.department}</span><br/>
                        <span id="enrollmentNo">enrollment No: {this.props.enrollmentNo}</span><br/>
                        <span id="email">Email: {this.props.email}</span><br/>
                        
                    </div>
                    <div className="col-sm-4" align="right">
                        <img id="PP" src={this.props.PP}></img>
                    </div>
                    <div className="col-sm-3" align="right">
                       
                    </div>
                </div>

                <hr/>

                
            </div>
        );
    }
}

export default Profile;