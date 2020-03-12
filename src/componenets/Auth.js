import React, {Component, Fragment} from 'react'
import './Login.css'
import axios from "axios";
import {API_ENDPOINT} from "../config";

class Auth extends Component {
    state = {
        mode: 'login'
    };

    render() {
        return (
            <div class="login-page">
                <div class="form">
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
                                <a href='#' onClick={() => {
                                    this.setState({mode: 'register'})
                                }}>Create an account</a>
                            </p>
                        </div>
                        :
                        <div className="login-form">
                            <input type="text" placeholder="Name"/>
                            <br/>
                            <br/>
                            <input type="password" placeholder="Department"/>
                            <br/>
                            <br/>
                            <input type="text" placeholder="Department"/>
                            <br/>
                            <br/>
                            <input type="text" placeholder="Enrollment Number"/>
                            <br/>
                            <br/>
                            <input type="text" placeholder="Phone"/>
                            <br/>
                            <br/>
                            <input type="text" placeholder="Year of graduation"/>
                            <br/>
                            <br/>
                            <input type="email" placeholder="Email"/>
                            <br/>
                            <br/>
                            <input type="text" placeholder="Skype"/>
                            <br/>
                            <br/>
                            <input type="text" placeholder="Resume"/>
                            <br/>
                            <br/>
                            <button>Register</button>
                            <p className="message">Already registered? <a href="#" onClick={() => {
                                this.setState({mode: 'login'})
                            }}>Sign In</a></p>
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
}

export default Auth;
