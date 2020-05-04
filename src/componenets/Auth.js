import React, {Component} from 'react'
import './Login.css'
import axios from "axios";
import {API_ENDPOINT} from "../config";

class Auth extends Component {
    state = {
        mode: 'login'
    };

    render() {
        return (
            <div className="login-page">
                <div className="form">
                    {this.state.mode === 'login' ?
                        <div className="login-form" onSubmit={() => {
                        }}>
                            <input
                                onChange={(e) => {
                                    this.setState({l_username: e.target.value})
                                }}
                                type="text"
                                placeholder="username"/>
                            <input
                                onChange={(e) => {
                                    this.setState({l_password: e.target.value})
                                }}
                                type="password"
                                placeholder="password"/>
                            <button onClick={this.login}>login</button>
                            <p className="message">
                                Not registered?
                                <span className="link" onClick={() => {
                                    this.setState({mode: 'register'})
                                }}>Create an account</span>
                            </p>
                        </div>
                        :
                        <div className="login-form">
                            <input
                                onChange={(e) => {
                                    this.setState({r_name: e.target.value})
                                }}
                                type="text"
                                placeholder="Name"/>
                            <br/><br/>
                            <input
                                onChange={(e) => {
                                    this.setState({r_password: e.target.value})
                                }}
                                type="password"
                                placeholder="Password"/>
                            <br/><br/>
                            <input
                                onChange={(e) => {
                                    this.setState({r_dept: e.target.value})
                                }}
                                type="text"
                                placeholder="Department"/>
                            <br/><br/>
                            <input
                                onChange={(e) => {
                                    this.setState({r_enrlno: e.target.value})
                                }}
                                type="text"
                                placeholder="Enrollment Number"/>
                            <br/><br/>
                            <input
                                onChange={(e) => {
                                    this.setState({r_phone: e.target.value})
                                }}
                                type="text"
                                placeholder="Phone"/>
                            <br/><br/>
                            <input
                                onChange={(e) => {
                                    this.setState({r_grad_yr: e.target.value})
                                }}
                                type="text"
                                placeholder="Year of graduation"/>
                            <br/><br/>
                            <input
                                onChange={(e) => {
                                    this.setState({r_email: e.target.value})
                                }}
                                type="email"
                                placeholder="Email"/>
                            <br/><br/>
                            <input
                                onChange={(e) => {
                                    this.setState({r_skype: e.target.value})
                                }}
                                type="text"
                                placeholder="Skype"/>
                            <br/><br/>
                            <input
                                onChange={(e) => {
                                    this.setState({r_resume: e.target.value})
                                }}
                                type="text"
                                placeholder="Resume"/>
                            <br/><br/>
                            <button onClick={this.register}>Register</button>
                            <p className="message">Already registered? <span className="link" onClick={() => {
                                this.setState({mode: 'login'})
                            }}>Sign In</span></p>
                        </div>
                    }
                </div>
            </div>
        )
    }

    login = function () {
        axios
            .post(
                API_ENDPOINT + 'users/login/',
                {
                    username: this.state.l_username,
                    password: this.state.l_password
                })
            .then((res) => {
                localStorage.setItem('token', res.data.token);
                window.location.reload();
            })
            .catch(() => {
                alert(`Error Logging In`)
            })
    }.bind(this);

    register = function () {
        axios
            .post(
                API_ENDPOINT + 'users/register/',
                {
                    name: this.state.r_name,
                    password: this.state.r_password,
                    dept: this.state.r_dept,
                    enrl_no: this.state.r_enrlno,
                    phone: this.state.r_phone,
                    year: this.state.r_grad_yr,
                    email: this.state.r_email,
                    skype: this.state.r_skype,
                    cv: this.state.r_resume
                })
            .then((res) => {
                localStorage.setItem('token', res.data.token);
                window.location.reload();
            })
            .catch(() => {
                alert(`Error Logging In`)
            })
    }.bind(this);
}

export default Auth;
