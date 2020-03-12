import React, {Component} from 'react'
import axios from 'axios'
import './Register.css'

class Register extends Component{

    registerSubmit = (even) => {
    even.preventDefault();
       const usernam = even.target.elements.name.value;
       const passwor = even.target.elements.ppassword.value;
       const dep = even.target.elements.ddept.value;
       const phon = even.target.elements.pphone.value;
       const yea = even.target.elements.yyear.value;
       const emai = even.target.elements.eemail.value;
       const enrl_n = even.target.elements.eenrl_no.value;
       const skyp = even.target.elements.sskype.value;
       const c = even.target.elements.ccv.value;

       
        axios.post('http://127.0.0.1:8000/users/register/',
        {
            name:usernam,
            password:passwor,
            dept:dep,
            phone:phon,
            year:yea,
            email:emai,
            enrl_no:enrl_n,
            skype: skyp,
            cv:c

        }).then((res)=>{
            alert('User registered, you can now login');
            sessionStorage.clear();
        }).catch((error)=>{
          console.log(error);
        })

        
        
    }

    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <h2 align="center">Registration Page</h2>
                    <div className="col-sm-2">

                    </div>
                    <div  className="col-sm-8" align="center">
                        <form class="phom" method="post" onSubmit={this.registerSubmit}>
                        <input name="name" type="text" placeholder="Name"></input>
                        <br/>
                        <br/>
                        <input name="ppassword" type="password" placeholder="Department"></input>
                        <br/>
                        <br/>
                        <input name="ddept" type="text" placeholder="Department"></input>
                        <br/>
                        <br/>
                        <input name="eenrl_no" type="text" placeholder="Enrollment Number"></input>
                        <br/>
                        <br/>
                        <input name="pphone" type="text" placeholder="Phone"></input>
                        <br/>
                        <br/>
                        <input name="yyear" type="text" placeholder="Year of graduation"></input>
                        <br/>
                        <br/>
                        <input name="eemail" type="email" placeholder="Email"></input>
                        <br/>
                        <br/>
                        <input name="sskype" type="text" placeholder="Skype"></input>
                        <br/>
                        <br/>
                        <input name="ccv" type="text" placeholder="Resume"></input>
                        <br/>
                        <br/>
                        <input type="submit"></input>
                        </form>
                        
                    </div>
                    <div className="col-sm-2">

                    </div>
                </div>
            </div>
        )
    }
}

export default Register;
