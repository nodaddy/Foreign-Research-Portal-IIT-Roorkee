import React, {Component} from 'react';
import './Profile.css';

class Profile extends Component {
    state = {};

    render() {
        return (
            <div className="container-fluid">
                <div className="row" id="idCard">
                    <div className="col-sm-5" align="left">
                        <h3 id="personName">Name: {sessionStorage.getItem('fullName')}</h3>

                        <span id="department">Department: {}</span><br/>
                        <span id="enrollmentNo">enrollment No: {}</span><br/>
                        <span id="email">Email: {sessionStorage.getItem('email')}</span><br/>

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
