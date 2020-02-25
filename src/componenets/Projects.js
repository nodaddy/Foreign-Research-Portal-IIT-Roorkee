import React,{Component} from 'react'
import './Projects.css';
import {tagLogo} from '../assets'
import {withRouter} from 'react-router-dom';



function ProjectDetails(props){
//Component to show project details

    return(
        <div className="projectDetail" align="left" style={{width:'100%'}}>
            
            <div className="container-fluid">
                <div className="row">
                <div className="col-sm-1">
                <img id="rec"></img><br/>
                <div id="rot"></div>
                </div>
                    <div className="col-sm-5 projectDetailsCol" id="projectTitle">{props.title}</div>
                    <div className="col-sm-3 projectDetailsCol" id="university">{props.university}</div>
                    <div className="col-sm-3 projectDetailsCol" id="deadline">{props.deadline}</div>
                </div>
            </div>
        </div>
    );
}


class Projects extends Component{
//Component to be rendered through App.js

    render(){
        return(
            <div className="container-fluid" style={{width:'100%'}}>
                <h3 align="center">Projects</h3>
                <br/>
                <div className="row" align="center" style={{padding:'0px',width:'100%'}}>
                    <div className="col-sm-12" id="ProjectDetailsArea">
                    {/*ProjectDetail is function Component defined in the above code*/}
                    <ProjectDetails title="Project Title :" university="University :" deadline="Deadline :"></ProjectDetails>
                    <ProjectDetails title="Project Title :" university="University :" deadline="Deadline :"></ProjectDetails>
                    

                    </div>
                </div>
                <br/><hr/>
                <h3 className=" " align="center">Past Projects</h3>
                <br/>
                <div className="row" align="center" style={{padding:'0px',width:'100%'}}>
                    <div className="col-sm-12" id="PastProjectDetailsArea">
                    {/*ProjectDetail is function Component defined in the above code*/}
                    <ProjectDetails title="Project Title :" university="University :" deadline="Deadline :"></ProjectDetails>
                                        

                    </div>
                </div>
            </div>
        );
    }
} 

export default Projects;