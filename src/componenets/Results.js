import React, {Component} from 'react'
import './Results.css'
import axios from 'axios'
import {API_ENDPOINT} from '../config' 

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
                        <div className="col-sm-3 projectDetailsColResults" id="listOfStudents" align="center">
                        {
                            props.selected.map(function(email,index){
                                return(
                                <div className="row">{email}<br/></div>
                                )
                            })
                        }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    

class Results extends Component{
    state={
        results:[],
    }

    componentDidMount(){
        axios
        .get(
            API_ENDPOINT + 'internships/results/',
            {
                headers: {
                    Authorization: 'Token ' + localStorage.getItem('token')
                }
            })
        .then((res) => {
            let projs = JSON.parse(res.data.jsonStuff);
           // alert(`something went wrong`)
            this.setState({results:projs});
            //console.log("dfghjkl");
            //console.log(this.state.projectss[0].fields.title);

            //this.setState({"projectss":res.data});
        })
        .catch(() => {
            alert(`something went horribly wrong`)
        })
    }

    render(){
        return(
            <div className="container-fluid">
                <h3 style={{color:'#072662'}} align="center">Results</h3><br/>
                <div>
                {
                    this.state.results.map(function(obj,index){
                        let tit = obj.fields.title;
                        let uni = obj.fields.university;
                        let studentList = obj.fields.space_seperated_emails_of_selected_students;
                        let studentArray = studentList.split(" ");
                        console.log(obj);
                        return(
                            <div className="row" align="center" style={{padding:'0px',width:'100%'}}>
                            <div className="col-sm-12" id="ProjectDetailsArea">
                            {/*ProjectDetail is function Component defined in the above code*/}
                            <ProjectResults title={tit} university={uni} selected={studentArray}></ProjectResults><br/>
       
                            
                       </div>
                       </div>
                        );
                    })
               
                }
                </div>
            </div>
        );
    }
}

export default Results;