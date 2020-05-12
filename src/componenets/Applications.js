import React,{Component} from 'react'
import './Applications.css'
import {withRouter} from 'react-router-dom';
import axios from "axios"
import {API_ENDPOINT, contact_email} from "../config";
import {refresh} from '../assets'


function ApplicationDetails(props){
//Component to show project details

    return(
        <div className="projectDetailapp" align="left" style={{width:'100%'}}>
        <div className="container-fluid">
            <div className="row projectData">
            <div className="col-sm-1">
            <img id="rec" style={{backgroundColor:props.statusColor}} onClick={()=>{
                if(props.statusColor=='#93FF33'){
                    alert("Congratulations :)")
                }
                else{
                    alert("Under Review, Keep learning :)")
                }
            }}></img><br/>
            
            </div>
                <div className="col-sm-5 projectDetailsColapp"  id="projectTitle">{props.title}</div>
                <div className="col-sm-3 projectDetailsColapp"  id="university">{props.university}</div>
                <div className="col-sm-3 projectDetailsColapp"  id="deadline">{props.deadline}</div>
            </div>
            {/*<div className="row projectDes" id={props.title}>
                <div className="row" style={{paddingRight:"50px"}} align="right"><button onClick={()=>{
                       document.getElementById(props.title).style.display = 'none';
                    }} align="center" style={{backgroundColor:'white',color:'red'}}><b>Submit later <span style={{color:"red"}}>[ X ]</span></b></button></div>
                    <div className="col-sm-12" align="left">
                    <h4 align="center" style={{color:'#0B275B', fontFamily:'roboto'}}><b>Project Details</b></h4><br/>
                    <div className="row"><h5><b>Description</b></h5>{props.description}</div><br/>
                    <div className="row"><h5><b>Key Tasks</b></h5>{props.keyTasks}</div><br/>
                    <div className="row"><h5><b>Critical Skills</b></h5>{props.criticalSkills}</div><br/>
                    <div className="row"><h5><b>Stipend</b></h5>{props.stipend}</div><br/>
                    <div className="row"><h5><b>Duration</b></h5>{props.duration}</div><br/>
                    <div className="row"><h5><b>Eligibility</bstyle={{width:'60%',background: '#FCFDFE',padding:'4px',border:'0px',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)',color:'#93FF33', borderRadius:'4px' }}></h5>{props.eligibility}</div><br/>
                    <div className="row"><h5><b>Contact Details</b></h5>{props.contactDetails}</div><br/>
                   
                    </div>
                </div>*/}
                {
                    props.statusColor=='#93FF33'?
                <div className="row" align="center"><hr/><h5 style={{color:'#072662', fontFamily:''}}><b>Congratulations! We would love to know about your internship!</b></h5>
                <div className="col-sm-12"> <a className="llink" href="https://medium.com/@ircell/" ><button style={{marginBottom:'20px', width:'50%',background: '#FCFDFE',padding:'4px',border:'0px',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)',color:'#93FF33', borderRadius:'4px' }} className="hoverHand" id="rightOfNav"><h5><b>Add your internship experience</b></h5></button></a></div>
                </div> : <div></div>
                }
        </div>
    </div>
    );
}



class Applications extends Component{
//Component to be rendered through App.js
    state={
        appliedProjectsArray: [],
        acceptedProjects:[],
        acceptedBool:false,
        appliedBool:false,
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
                
                let strr = res.data.split('%next%');
                var size = strr.length;
                var i;
                for(i=0;i<size;i++){
                    if(strr[i]==""){
                        strr.splice(i,1);
                    }
                }
                this.setState({appliedProjectsArray: strr}); 

            }).catch(()=>{
                alert(`error at users/myapps, please contact ${contact_email}`)
            })
 
            axios
            .get(API_ENDPOINT + 'users/myaccepted/',
            {
                headers: {
                    Authorization: 'Token ' + localStorage.getItem('token')
                }
            }
            ).then((res)=>{
                
                let strr = res.data.split('%next%');
                var size = strr.length;
                var i;
                for(i=0;i<size;i++){
                    if(strr[i]==""){
                        strr.splice(i,1);
                    }
                }
                this.setState({acceptedProjects: strr}); 

            }).catch(()=>{
                alert(`error at users/myaccepted, please contact ${contact_email}`)
            })
            
    }


    render(){
        return(
            <div className="container-fluid" align="center">
                <div className="row">
                
                </div>
                <h3 style={{color:'#072662'}}><img src={refresh} title="refresh" className="refresh" style={{width:'4vh'}} onClick={()=>{window.location.reload();}}></img> YOUR APPLICATIONS</h3>
                <br/>
                <h4 style={{color:'#072662'}}><b>Accepted</b></h4>
                <br/>
                <div className="row" align="center">
                  
                    <div className="col-sm-12" id="ProjectDetailsArea">
                    {/*ProjectDetail is function Component defined in the above code*/}
                    {
                     
                        this.state.acceptedProjects.length==0? <div align="center">Accepted applications will be shown here.</div>: ""
                    
                    }
                    {
                       this.state.acceptedProjects.map(function(obj,index){
                        console.log(obj);
                        if(obj!=" " && obj!=""){
                        var anArray = obj.split("%parting_string%");
                        var pTitle = anArray[0];
                        var pUniversity = anArray[1];
                        var pDeadline = anArray[2];

                        return(<div>
                            <ApplicationDetails title={pTitle} university={pUniversity} deadline={pDeadline} statusColor="#93FF33"></ApplicationDetails><br/>
                        </div>
                        )
                        } else if(obj==" " || obj=="") {
                            return <div></div>
                        }

                    })
                    } 
                  
                    </div>
                </div>
                <br/><hr/>
                <h4 style={{color:'#072662'}}><b> In Review</b></h4>
                <br/>
                <div className="row" align="center">
                    <div className="col-sm-12" id="PastProjectDetailsArea">
                    {/*ProjectDetail is function Component defined in the above code*/}
                    {
                    this.state.appliedProjectsArray.length==0? <div align="center">If you applied for the projects and can't see them here, there results's have been declared</div>: ""
                }
                    {   
                        
                       // var acceptedProjArray = this.state.acceptedProjects;
                        this.state.appliedProjectsArray.map((obj,index)=>{
                        if(obj!=" " && obj!=""){
                        var anArray = obj.split("%parting_string%");
                        var pTitle = anArray[0];
                        var pUniversity = anArray[1];
                        var pDeadline = anArray[2];
                        
                        return(
                            <div>
                            <ApplicationDetails className={pTitle} title={pTitle} university={pUniversity} deadline={pDeadline} statusColour="#F9B402"></ApplicationDetails>
                            <br/>
                            </div>
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
