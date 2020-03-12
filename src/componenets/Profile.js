import React, {Component} from 'react';
import './Profile.css';
import Login from './Login';
import axios from 'axios';

    const full_name = "";
    const email = ""; 
    
    sessionStorage.getItem('loginBo')==null ? sessionStorage.setItem('loginBo','false'):sessionStorage.setItem('logoinBo','true');

    
    var j =  document.cookie.split(';');

class Profile extends Component{
    state = {
        
    }
  
   loginSubmit=(e)=>{
       
        e.preventDefault();
        const usrname = e.target.elements.username.value;
        const passwod = e.target.elements.password.value;
        
        axios.post(`http://127.0.0.1:8000/users/login/` , 
        {
        
            username : usrname,
            password : passwod
        
        }).then((res)=>{
           
            let token = res.data.token;
            sessionStorage.setItem('authToken', token);
            let namee = res.data.full_name;
            sessionStorage.setItem('fullName',namee);
            let email = res.data.email;
            sessionStorage.setItem('email',email);
            
            
            
        }).then(()=>{

            this.setState({});

        }).catch((error)=>{
        alert(error);
        });
        sessionStorage.setItem('loginBo','true');
        
        
    }
    
    

    render(){
        return(
            <div className="container-fluid">
            {sessionStorage.getItem('loginBo')==='true'? 
            
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

                : <Login loginOnSubmit={this.loginSubmit} ></Login>
            }
            </div>
        );
    }
}

export default Profile;