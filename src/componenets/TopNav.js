import React,{Component} from 'react';
import './TopNav.css';
class TopNav extends Component{
    state = {
        LoggedinB : 'false',
    }

    render(){
        return(
            <div className="container-fluid" id="TopNav">
                <div className="row"  align="right">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-5" align="left" id="navbarTitle"><a title="click for homepage" href="/" style={{backgroundColor:'#0B83DA',textDecoration:'none',color:'white'}}>Foreign Research Portal</a></div>
                    <div className="col-sm-6" id="rightOfNav"><span id="porfilePic">PP </span> Sign/Log in</div>  
                </div>
            </div>
        );
    }
}

export default TopNav;