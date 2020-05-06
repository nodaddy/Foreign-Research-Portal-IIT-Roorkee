import React,{Component} from 'react'
import './Applications.css'
import {withRouter} from 'react-router-dom';
import axios from "axios"
import {API_ENDPOINT} from "../config";


function ApplicationDetails(props){
//Component to show project details

    return(
        <div className="projectDetailapp" align="left" style={{width:'100%'}}>
            
        <div className="container-fluid">
            <div className="row projectData">
            <div className="col-sm-1">
            <img id="rec" style={{backgroundColor:props.statusColor}}></img><br/>
            
            </div>
                <div className="col-sm-5 projectDetailsColapp"  id="projectTitle">{props.title}</div>
                <div className="col-sm-3 projectDetailsColapp"  id="university">{props.university}</div>
                <div className="col-sm-3 projectDetailsColapp"  id="deadline">{props.deadline}</div>
            </div>
        </div>
    </div>
    );
}



class Applications extends Component{
//Component to be rendered through App.js
    state={
        appliedProjectsArray: [],
        acceptedProjects:[],
    }

    componentDidMount(){
        axios
            .get(API_ENDPOINT + 'users/myapps/',
            {
                headers: {
                    Authorization: 'Token ' + localStorage.getItem('token')
                }
            }
            ).then((res)=>{
                
                let strr = res.data.split('~');
                this.setState({appliedProjectsArray: strr}); 

            }) 
//write .catch()
            axios
            .get(API_ENDPOINT + 'users/myaccepted/',
            {
                headers: {
                    Authorization: 'Token ' + localStorage.getItem('token')
                }
            }
            ).then((res)=>{
                
                let strr = res.data.split('~');
                this.setState({acceptedProjects: strr}); 

            })
//write .catch()
           /* var i;
            var k=[];
            for(i=0;i<this.state.acceptedProjects.length;i++){
                if(this.state.appliedProjectsArray.includes(this.state.acceptedProjects[i])){
                    var tit = this.state.acceptedProjects[i];
                    alert("f");
                    var index = this.state.appliedProjectsArray.indexOf(tit)
                    k = this.state.appliedProjectsArray;
                    k.splice(index, 1);
                    this.setState({"appliedProjectsArray":k});
                }
            }*/
            
    }


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
                    {
                        this.state.acceptedProjects.map(function(obj,index){
                        if(obj!=" " && obj!=""){
                        var anArray = obj.split('*');
                        var pTitle = anArray[0];
                        var pUniversity = anArray[1];
                        var pDeadline = anArray[2];
                        return(
                            <ApplicationDetails title={pTitle} university={pUniversity} deadline={pDeadline} statusColor="#93FF33"></ApplicationDetails>
                        ) 
                        }
                    })
                    } 
                  
                    </div>
                </div>
                <br/><hr/>
                <h4>In Review</h4>
                <br/>
                <div className="row" align="center">
                    <div className="col-sm-12" id="PastProjectDetailsArea">
                    {/*ProjectDetail is function Component defined in the above code*/}
                    
                    {   
                        
                       // var acceptedProjArray = this.state.acceptedProjects;
                        this.state.appliedProjectsArray.map((obj,index)=>{
                        if(obj!=" " && obj!=""){
                        var anArray = obj.split('*');
                        var pTitle = anArray[0];
                        var pUniversity = anArray[1];
                        var pDeadline = anArray[2];
                        
                        return(
                            <ApplicationDetails className={pTitle} title={pTitle} university={pUniversity} deadline={pDeadline}></ApplicationDetails>
                        ) 
                        
                    }
                    })
                    }
                                        
                               

                    </div>
                </div>

                <br/><hr/>
                {/*<h4>Rejected</h4>
                <br/>
                <div className="row" align="center">
                    <div className="col-sm-12" id="PastProjectDetailsArea">
                    {/*ProjectDetail is function Component defined in the above code}
                    <ApplicationDetails title="Project Title :" university="University :" deadline="Deadline :" statusColor="#FC7A7A"></ApplicationDetails>
                                 
             

                    </div>
                </div>*/}
            </div>
        );
    }
} 

export default Applications;