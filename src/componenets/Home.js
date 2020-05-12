import React, {Component} from 'react'
import './Home.css'

class Home extends Component{
    render(){
        return(
            <div className="container-fluid">
                <h3 align="center">Home</h3>
                <div>
                <div className="container-fluid" id="TopNav">
              
              <div className="row" align="right">
                  <div className="col-sm-1">
                      <img
                          src={logo}
                          style={{height: '50%', backgroundColor: 'transparent'}}
                      />
                  </div>
                  <div style={{color:'white',fontStyle: 'normal'}} align="left" className="col-sm-5">Foreign Research Portal
                   </div>
                  
                  {
                      this.props.loggedIn ?
                      <div><div className="col-sm-2" id="rightOfNav"> </div><div className="col-sm-1" id="rightOfNav"> </div>
                      <button className="col-sm-3 r" id="rightOfNav"><Link className="hoverHand" title="click for homepage"  to='/dashboard'
                      style={{
                          backgroundColor: '#0B83DA',
                          textDecoration: 'none',
                          color: 'white'
                      }}><span><img src={dummyPp} style={{width:'15%', backgroundColor:'transparent'}}></img></span>
                       {this.state.name}
                   </Link></button></div>
                          :
                          null
                  }
              </div>
          </div>

                </div>
            </div>
        );
    }
}

export default Home;