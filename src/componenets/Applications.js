import React,{Component} from 'react'
import './Applications.css'
import {withRouter} from 'react-router-dom';



function ApplicationDetails(props){
//Component to show project details

    return(
        <div className="projectDetailapp" align="left" style={{width:'100%'}}>
            
        <div className="container-fluid">
            <div className="row projectData">
            <div className="col-sm-1">
            <img id="rec" style={{backgroundColor:props.statusColor}}></img><br/>
            <div id="rot" style={{backgroundColor:props.statusColor}}></div>
            </div>
                <div className="col-sm-5 projectDetailsColapp" id="projectTitle">{props.title}</div>
                <div className="col-sm-3 projectDetailsColapp" id="university">{props.university}</div>
                <div className="col-sm-3 projectDetailsColapp" id="deadline">{props.deadline}</div>
            </div>
        </div>
    </div>
    );
}


class Applications extends Component{
//Component to be rendered through App.js

    render(){
        return(
            <div className="container-fluid" align="center">
                <h3>Your Applications</h3>
                <br/>
                <h4>Accepted</h4>
                <br/>
                <div className="row" align="center">
                  
                    <div className="col-sm-12" id="ProjectDetailsArea">
                    {/*ProjectDetail is function Component defined in the above code*/}
                    <ApplicationDetails title="Project Title :" university="University :" deadline="Deadline :" statusColor="#53E010"></ApplicationDetails>
                    <ApplicationDetails title="Project Title :" university="University :" deadline="Deadline :" statusColor="#53E010"></ApplicationDetails>
                    

                    </div>
                </div>
                <br/><hr/>
                <h4>In Review</h4>
                <br/>
                <div className="row" align="center">
                    <div className="col-sm-12" id="PastProjectDetailsArea">
                    {/*ProjectDetail is function Component defined in the above code*/}
                    <ApplicationDetails title="Project Title :" university="University :" deadline="Deadline :" statusColor="#F8D044"></ApplicationDetails>
                                 

                    </div>
                </div>

                <br/><hr/>
                <h4>Rejected</h4>
                <br/>
                <div className="row" align="center">
                    <div className="col-sm-12" id="PastProjectDetailsArea">
                    {/*ProjectDetail is function Component defined in the above code*/}
                    <ApplicationDetails title="Project Title :" university="University :" deadline="Deadline :" statusColor="#FC7A7A"></ApplicationDetails>
                                 
             

                    </div>
                </div>
            </div>
        );
    }
} 

export default Applications;