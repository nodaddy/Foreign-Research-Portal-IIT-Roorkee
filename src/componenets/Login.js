import React, {Component} from 'react'
import './Login.css'

class Login extends Component{
    render(){
        return(
<div class="login-page">
  <div class="form">
    <form class="register-form">
      <input type="text" placeholder="name"/>
      <input type="password" placeholder="password"/>
      <input type="text" placeholder="email address"/>
      <button>create</button>
      <p class="message">Already registered? <a href="#">Sign In</a></p>
    </form>
    <form class="login-form" onSubmit={this.props.loginOnSubmit}>
      <input type="text" name="username" placeholder="username"/>
      <input type="password" name="password" placeholder="password"/>
      <button>login</button>
      <p class="message">Not registered? <a href="/register">Create an account</a></p>
    </form>
  </div>
</div>

          
        )
    }
}

export default Login;