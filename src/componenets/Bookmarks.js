import React,{Component} from 'react'
import './Bookmarks.css'
import {withRouter} from 'react-router-dom';



function Bookmark(props){
//Component to show individual bookmark

    return(
        <div className="bookmark" align="left" style={{width:'100%'}}>
            
        <div className="container-fluid">
            <div className="row projectData">
            <div className="col-sm-1">
            <img id="rec" style={{backgroundColor:'#F9B402'}}></img><br/>
            <div id="rot" style={{backgroundColor:'#F9B402'}}></div>
            </div>
                <div className="col-sm-5 projectDetailsCol" id="projectTitle">{props.title}</div>
                <div className="col-sm-3 projectDetailsCol" id="university">{props.university}</div>
                <div className="col-sm-3 projectDetailsCol" id="deadline">{props.deadline}</div>
            </div>
        </div>
    </div>
    );
}


class Bookmarks extends Component{
//Component to be rendered through App.js

    render(){
        return(
            <div className="container-fluid" align="center">
                <h3>Bookmarks</h3>
                <br/>
                
                 
                <div className="row" align="center">
                  
                    <div className="col-sm-12" id="ProjectDetailsArea">
                    {/*ProjectDetail is function Component defined in the above code*/}
                    <Bookmark title="Project Title :" university="University :" deadline="Deadline :" statusColor="#53E010"></Bookmark>
                    <Bookmark title="Project Title :" university="University :" deadline="Deadline :" statusColor="#53E010"></Bookmark>
                    

                    </div>
                </div>
               
            </div>
        );
    }
} 

export default Bookmarks;