import React,{Component} from 'react'
import './Projects.css';
import {tagLogo} from '../assets'
import {withRouter} from 'react-router-dom';
import axios from "axios";
import {API_ENDPOINT} from "../config";



function ProjectDetails(props){
//Component to show project details
    var i = 1;
    return(
        <div className="projectDetail" align="left" style={{width:'100%'}}>
            
            <div className="container-fluid">
                <div className="row" onClick={()=>{var idnm = props.title.toString();if(i%2!=0){document.getElementById(idnm).style.display = 'block';}else{document.getElementById(idnm).style.display = 'none';} i++;} }>
                <div className="col-sm-1">
                <img id="rec"></img><br/>
                <div id="rot"></div>
                </div>
                    <div className="col-sm-5 projectDetailsCol" id="projectTitle">{props.title}</div>
                    <div className="col-sm-3 projectDetailsCol" id="university">{props.university}</div>
                    <div className="col-sm-3 projectDetailsCol" id="deadline">{props.deadline}</div>
                </div>   
                <div className="row projectDes" id={props.title}>
                    <div className="col-sm-12" align="left">
                    <h4 align="center" style={{color:'#0B275B', fontFamily:'roboto'}}><b>Project Details</b></h4><br/>
                    <div className="row"><h5><b>Description</b></h5>{props.title}</div><br/>
                    <div className="row"><h5><b>Key Tasks</b></h5>{props.keyTasks}</div><br/>
                    <div className="row"><h5><b>Critical Skills</b></h5>{props.criticalSkills}</div><br/>
                    <div className="row"><h5><b>Stipend</b></h5>{props.stipend}</div><br/>
                    <div className="row"><h5><b>Duration</b></h5>{props.duration}</div><br/>
                    <div className="row"><h5><b>Eligibility</b></h5>{props.eligibility}</div><br/>
                    <div className="row" align="center"><h5><b>A statement of the importance of the proposed research to your future (250 words)
</b></h5>
                    <textarea id="proposal" rows="10" cols="90"></textarea>
                    </div>
                    <div className="row" align="center">
                    <button align="center" style={{backgroundColor:'white',color:'green'}}><b>Submit</b></button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


class Projects extends Component{
//Component to be rendered through App.js

    state = {
        projectss: [],
    }

    componentDidMount(){
        axios
        .get(
            API_ENDPOINT + 'internships/list/',
            {
                headers: {
                    Authorization: 'Token ' + localStorage.getItem('token')
                }
            })
        .then((res) => {
            let projs = JSON.parse(res.data.jsonStuff);
            this.setState({projectss:projs});
            //console.log("dfghjkl");
            //console.log(this.state.projectss[0].fields.title);

            //this.setState({"projectss":res.data});
        })
        .catch(() => {
            alert(`something went horribly wrong`)
        })
    }


    apply = function(){
       document.getElementsByClassName('projectDes').style.display = 'block';
        /*axios
            .get(
                API_ENDPOINT + 'users/apply',{
                    title_of_project: "fdhf",
                },
                {
                    headers: {
                        Authorization: 'Token ' + localStorage.getItem('token')
                    }
                })
            .then((res) => {
                //alert(res.data.hg)
                //window.location.reload();
            })
            .catch(() => {
                alert(``)
            })*/
    }.bind(this)

    render(){
        return(
            <div className="container-fluid" style={{width:'100%'}}>
                <h3 align="center">Projects</h3>
                <br/>
                {
                    this.state.projectss.map(function(obj,index){
                        let tit = obj.fields.title;
                        let uni = obj.fields.university;
                        let deadl = obj.fields.deadline;
                        return(
                            <div className="row" align="center" style={{padding:'0px',width:'100%'}}>
                            <div className="col-sm-12" id="ProjectDetailsArea">
                            {/*ProjectDetail is function Component defined in the above code*/}
                            <ProjectDetails className="pdetail" title={tit} university={uni} deadline={deadl}></ProjectDetails><br/>
       
                            
                       </div>
                       </div>
                        );
                    })
               
                }
            </div>
        );
    }

   
} 

export default Projects;


