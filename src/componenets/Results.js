import React, {Component} from 'react'
import './Results.css'

function ProjectResults(props){
    //Component to show project results details
    
        return(
            <div className="projectDetailResults" align="left" style={{width:'100%'}}>
                
                <div className="container-fluid">
                    <div className="row">
                    <div className="col-sm-1">
                    <img id="recResults"></img><br/>
                    <div id="rotResults"></div>
                    </div>
                        <div className="col-sm-5 projectDetailsColResults" id="projectTitle">{props.title}</div>
                        <div className="col-sm-3 projectDetailsColResults" id="university">{props.university}</div>
                        <div className="col-sm-3 projectDetailsColResults" id="listOfStudents">{props.listOfStudents}</div>
                    </div>
                </div>
            </div>
        );
    }
    

class Results extends Component{
    render(){
        return(
            <div className="container-fluid">
                <h3 align="center">Results</h3>
                <div>
                    <ProjectResults title="TITLE :" university="UNIVERSITY :" listOfStudents="LIST OF STUDENTS :"></ProjectResults>
                </div>
            </div>
        );
    }
}

export default Results;