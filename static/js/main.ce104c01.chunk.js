(this.webpackJsonpresearch_portal=this.webpackJsonpresearch_portal||[]).push([[0],{22:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAA7CAYAAAB/hnrTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABXSURBVHgB7djBDYBQCARRMNuYpdmpjcDqN5aAiYeZC5xeAZvd7RjO9qH1tOfsfO8WHwUMDAwMDAwMDAwMDAwMDAwMDPx/+NndMjOmWtI96IWqao/hJJ0XSbUSFadlnioAAAAASUVORK5CYII="},23:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA2CAYAAABjhwHjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKsSURBVHgB7drBahNBHMfx38wmhCS2ag1KpWCkBfUg2pMgSNOTx8ZH8BF8AtMn8BFa30DxoN7sUXupKIi3FaxKsdqaYGiayTr/SZeamLS7zU5mZvEL3U42pw+zOzuEZTgo+FArI4uHclhFgDPor/EO2PuC4xK/P8u/TRjIZwyvRKuznL8Hn04wOgQfa1V4WBmICrMfB2/yBnjpjkROLbJrNZ+rGfPw6EiYAxHMm14Cy06VxfbzFTrHJawiYWU4XAijxPYaxM56pfkMFS55S3C4f2Df19SYMX6Tu3w5DoNRgXRxONpRsDAncVFglHO4qDDKKVwcGOUMLi6MysCBvLO34J2/q8ZRYZT1OO/cArzSghrHgVFWX5ajwChrcaPCKCtxScAo63BJwSircEnCKGtwScMoK3A6YJRxnC4YZRSnE0YZw+mGUUa2Xz2wrZcQP19DR2PH9cC+PYXYfQtdJX5ZMp4b+t04YVTyuExh4PlxwygNuCIdes6ZgFFaVksvf+FwbAhG6cEVZuQhZxRGaVsts9NVsOIVNTYBo/TgCrNg+Tk1FFsvjMCo5C9LCcMBDI334KwFnivBRMnOXB8Me5vquZeZmEVQnIFofgX26+iIlvwxvw3dJYcbAPs7hSyWMbaCwI9+WWYmh393DMxU0XHexODzlsKoeDPH+65ii2FUdBxtqXKXDj+HMFoYfq1bB6PiPQryZdpb9cJ238gV8AdsLN5qSbN3+nb3fwgTddha/Id4uOOn91IshlEn36EUr8p78CJs7uQPcS7vvVPXu/dh0+/OYtuumRx9h0LPP0Lal2/sp71x9B/nainHdfAJKY2DBxtIY21aLTNsFQw7SFMMq+pNWXa5RrD7KQJuoI4HNFALCpurPcE+5hHgsfzoJjJQL20vo4FFNq8mDH8ArME/LkvvI40AAAAASUVORK5CYII="},24:function(e,t,a){e.exports=a.p+"static/media/im.fd42b16b.png"},37:function(e,t,a){e.exports=a(76)},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(34),c=a.n(r),i=(a(42),a(43),a(1)),s=a(2),o=a(4),m=a(3),u=a(13),d=a(5),p=(a(44),a(22),a(23)),E=a.n(p),h=a(24),v=a.n(h),g=a(14),b=a.n(g),f="http://127.0.0.1:8000/",N=a(7),A=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={LoggedinB:"false",name:"My Profile"},a.logout=function(){b.a.get(f+"users/logout/",{headers:{Authorization:"Token"+localStorage.getItem("token")}}).finally((function(){localStorage.clear(),window.location.reload()}))}.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.get(f+"users/getprofile/",{headers:{Authorization:"Token ".concat(localStorage.getItem("token"))}}).then((function(t){e.setState({name:t.data.name})}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"container-fluid",id:"TopNav"},l.a.createElement("div",{className:"row",align:"right"},l.a.createElement("div",{className:"col-sm-1"},l.a.createElement("img",{src:E.a,style:{height:"100%",backgroundColor:"transparent",marginTop:"2vh"}})),l.a.createElement("div",{style:{height:"100%",color:"white",fontFamily:"Barlow",fontStyle:"normal",fontSize:"30px",top:"3vh"},align:"left",className:"col-sm-5"},"                         Foreign Research Portal"),this.props.loggedIn?l.a.createElement("div",null,l.a.createElement("div",{className:"col-sm-2",id:"rightOfNav"}," "),l.a.createElement("div",{className:"col-sm-1",id:"rightOfNav"}," "),l.a.createElement("button",{className:"col-sm-3 r",id:"rightOfNav"},l.a.createElement(N.b,{className:"hoverHand",title:"click for homepage",to:"/dashboard",style:{backgroundColor:"#0B83DA",textDecoration:"none",color:"white"}},l.a.createElement("span",{style:{}},l.a.createElement("img",{src:v.a,style:{width:"15%",backgroundColor:"transparent"}})),this.state.name))):null))}}]),t}(n.Component),y=(a(67),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={mode:"login"},a.login=function(){b.a.post(f+"users/login/",{username:this.state.l_username,password:this.state.l_password}).then((function(e){localStorage.setItem("token",e.data.token),window.location.reload()})).catch((function(){alert("Error Logging In")}))}.bind(Object(u.a)(a)),a.register=function(){b.a.post(f+"users/register/",{name:this.state.r_name,password:this.state.r_password,dept:this.state.r_dept,enrl_no:this.state.r_enrlno,phone:this.state.r_phone,year:this.state.r_grad_yr,email:this.state.r_email,skype:this.state.r_skype,cv:this.state.r_resume}).then((function(e){localStorage.setItem("token",e.data.token),window.location.reload()})).catch((function(){alert("Error Logging In")}))}.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"login-page"},l.a.createElement("div",{className:"form"},"login"===this.state.mode?l.a.createElement("div",{className:"login-form",onSubmit:function(){}},l.a.createElement("input",{onChange:function(t){e.setState({l_username:t.target.value})},type:"text",placeholder:"username"}),l.a.createElement("input",{onChange:function(t){e.setState({l_password:t.target.value})},type:"password",placeholder:"password"}),l.a.createElement("button",{onClick:this.login},"login"),l.a.createElement("p",{className:"message"},"Not registered?",l.a.createElement("span",{className:"link",onClick:function(){e.setState({mode:"register"})}},"Create an account"))):l.a.createElement("div",{className:"login-form"},l.a.createElement("input",{onChange:function(t){e.setState({r_name:t.target.value})},type:"text",placeholder:"Name"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{onChange:function(t){e.setState({r_password:t.target.value})},type:"password",placeholder:"Password"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{onChange:function(t){e.setState({r_dept:t.target.value})},type:"text",placeholder:"Department"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{onChange:function(t){e.setState({r_enrlno:t.target.value})},type:"text",placeholder:"Enrollment Number"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{onChange:function(t){e.setState({r_phone:t.target.value})},type:"text",placeholder:"Phone"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{onChange:function(t){e.setState({r_grad_yr:t.target.value})},type:"text",placeholder:"Year of graduation"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{onChange:function(t){e.setState({r_email:t.target.value})},type:"email",placeholder:"Email"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{onChange:function(t){e.setState({r_skype:t.target.value})},type:"text",placeholder:"Skype"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{onChange:function(t){e.setState({r_resume:t.target.value})},type:"text",placeholder:"Resume"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",{onClick:this.register},"Register"),l.a.createElement("p",{className:"message"},"Already registered? ",l.a.createElement("span",{className:"link",onClick:function(){e.setState({mode:"login"})}},"Sign In")))))}}]),t}(n.Component)),j=(a(68),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container-fluid",align:"center"},l.a.createElement("br",null),l.a.createElement("div",{className:"row sideNavLink",align:"center"},l.a.createElement(N.b,{to:"/projects",id:"projects",className:"col-sm-12"},"Projects")),l.a.createElement("div",{className:"row sideNavLink",align:"center"},l.a.createElement(N.b,{to:"/yourapplications",id:"yourApplications",className:"col-sm-12"},"Your Applications")),l.a.createElement("div",{className:"row sideNavLink",align:"center"},l.a.createElement(N.b,{to:"/bookmarks",id:"bookmarks",className:"col-sm-12"},"Bookmarks")),l.a.createElement("div",{className:"row sideNavLink",align:"center"},l.a.createElement(N.b,{to:"/results",id:"results",className:"col-sm-12"},"Results")),l.a.createElement("hr",null),l.a.createElement("div",{className:"row sideNavLink",align:"center"},l.a.createElement("a",{href:"https://ir.iitr.ac.in/",target:"iriitr",id:"experience",className:"col-sm-12 sideNavLink1"},"Experience")),l.a.createElement("hr",null),l.a.createElement("div",{className:"row sideNavLink",align:"center"},l.a.createElement(N.b,{to:"/team",id:"team",className:"col-sm-12 sideNavLink1"},"Team")))}}]),t}(n.Component));a(69);function w(e){var t=1;return l.a.createElement("div",{className:"projectDetail",align:"left",style:{width:"100%"}},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row",onClick:function(){var a=e.title.toString();document.getElementById(a).style.display=t%2!=0?"block":"none",t++}},l.a.createElement("div",{className:"col-sm-1"},l.a.createElement("img",{id:"rec"}),l.a.createElement("br",null),l.a.createElement("div",{id:"rot"})),l.a.createElement("div",{className:"col-sm-5 projectDetailsCol",id:"projectTitle"},e.title),l.a.createElement("div",{className:"col-sm-3 projectDetailsCol",id:"university"},e.university),l.a.createElement("div",{className:"col-sm-3 projectDetailsCol",id:"deadline"},e.deadline)),l.a.createElement("div",{className:"row projectDes",id:e.title},l.a.createElement("div",{className:"col-sm-12",align:"left"},l.a.createElement("h4",{align:"center",style:{color:"#0B275B",fontFamily:"roboto"}},l.a.createElement("b",null,"Project Details")),l.a.createElement("br",null),l.a.createElement("div",{className:"row"},l.a.createElement("h5",null,l.a.createElement("b",null,"Description")),e.title),l.a.createElement("br",null),l.a.createElement("div",{className:"row"},l.a.createElement("h5",null,l.a.createElement("b",null,"Key Tasks")),e.keyTasks),l.a.createElement("br",null),l.a.createElement("div",{className:"row"},l.a.createElement("h5",null,l.a.createElement("b",null,"Critical Skills")),e.criticalSkills),l.a.createElement("br",null),l.a.createElement("div",{className:"row"},l.a.createElement("h5",null,l.a.createElement("b",null,"Stipend")),e.stipend),l.a.createElement("br",null),l.a.createElement("div",{className:"row"},l.a.createElement("h5",null,l.a.createElement("b",null,"Duration")),e.duration),l.a.createElement("br",null),l.a.createElement("div",{className:"row"},l.a.createElement("h5",null,l.a.createElement("b",null,"Eligibility")),e.eligibility),l.a.createElement("br",null),l.a.createElement("div",{className:"row",align:"center"},l.a.createElement("h5",null,l.a.createElement("b",null,"A statement of the importance of the proposed research to your future (250 words)")),l.a.createElement("textarea",{id:"proposal",rows:"10",cols:"90"})),l.a.createElement("div",{className:"row",align:"center"},l.a.createElement("button",{align:"center",style:{backgroundColor:"white",color:"green"}},l.a.createElement("b",null,"Submit")))))))}var k=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={projectss:[]},a.apply=function(){document.getElementsByClassName("projectDes").style.display="block"}.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.get(f+"internships/list/",{headers:{Authorization:"Token "+localStorage.getItem("token")}}).then((function(t){var a=JSON.parse(t.data.jsonStuff);e.setState({projectss:a})})).catch((function(){alert("something went horribly wrong")}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"container-fluid",style:{width:"100%"}},l.a.createElement("h3",{align:"center"},"Projects"),l.a.createElement("br",null),this.state.projectss.map((function(e,t){var a=e.fields.title,n=e.fields.university,r=e.fields.deadline;return l.a.createElement("div",{className:"row",align:"center",style:{padding:"0px",width:"100%"}},l.a.createElement("div",{className:"col-sm-12",id:"ProjectDetailsArea"},l.a.createElement(w,{className:"pdetail",title:a,university:n,deadline:r}),l.a.createElement("br",null)))})))}}]),t}(n.Component);a(70);function C(e){return l.a.createElement("div",{className:"projectDetailapp",align:"left",style:{width:"100%"}},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row projectData"},l.a.createElement("div",{className:"col-sm-1"},l.a.createElement("img",{id:"rec",style:{backgroundColor:e.statusColor}}),l.a.createElement("br",null)),l.a.createElement("div",{className:"col-sm-5 projectDetailsColapp",id:"projectTitle"},e.title),l.a.createElement("div",{className:"col-sm-3 projectDetailsColapp",id:"university"},e.university),l.a.createElement("div",{className:"col-sm-3 projectDetailsColapp",id:"deadline"},e.deadline))))}var O=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container-fluid",align:"center"},l.a.createElement("h3",null,"Your Applications"),l.a.createElement("br",null),l.a.createElement("h4",null,"Accepted"),l.a.createElement("br",null),l.a.createElement("div",{className:"row",align:"center"},l.a.createElement("div",{className:"col-sm-12",id:"ProjectDetailsArea"},l.a.createElement(C,{title:"Enhance Photoelectrochemistry by Titanium Nanotube to Realize Early Detection of Alzheimer's Disease\n",university:"Chang Gung University\n",deadline:" 3rd Feb 2020\n",statusColor:"#53E010"}),l.a.createElement(C,{title:"Enhance Photoelectrochemistry by Titanium Nanotube to Realize Early Detection of Alzheimer's Disease\n",university:"Chang Gung University\n",deadline:"21st Feb 2020\n",statusColor:"#53E010"}))),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("h4",null,"In Review"),l.a.createElement("br",null),l.a.createElement("div",{className:"row",align:"center"},l.a.createElement("div",{className:"col-sm-12",id:"PastProjectDetailsArea"},l.a.createElement(C,{title:"Project Title :",university:"University :",deadline:"Deadline :",statusColor:"#F8D044"}))),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("h4",null,"Rejected"),l.a.createElement("br",null),l.a.createElement("div",{className:"row",align:"center"},l.a.createElement("div",{className:"col-sm-12",id:"PastProjectDetailsArea"},l.a.createElement(C,{title:"Project Title :",university:"University :",deadline:"Deadline :",statusColor:"#FC7A7A"}))))}}]),t}(n.Component);a(71);function S(e){return l.a.createElement("div",{className:"bookmark",align:"left",style:{width:"100%"}},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row projectData"},l.a.createElement("div",{className:"col-sm-1"},l.a.createElement("img",{id:"rec",style:{backgroundColor:"#F9B402"}}),l.a.createElement("br",null),l.a.createElement("div",{id:"rot",style:{backgroundColor:"#F9B402"}})),l.a.createElement("div",{className:"col-sm-5 projectDetailsCol",id:"projectTitle"},e.title),l.a.createElement("div",{className:"col-sm-3 projectDetailsCol",id:"university"},e.university),l.a.createElement("div",{className:"col-sm-3 projectDetailsCol",id:"deadline"},e.deadline))))}var D=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container-fluid",align:"center"},l.a.createElement("h3",null,"Bookmarks"),l.a.createElement("br",null),l.a.createElement("div",{className:"row",align:"center"},l.a.createElement("div",{className:"col-sm-12",id:"ProjectDetailsArea"},l.a.createElement(S,{title:"Project Title :",university:"University :",deadline:"Deadline :",statusColor:"#53E010"}),l.a.createElement(S,{title:"Project Title :",university:"University :",deadline:"Deadline :",statusColor:"#53E010"}))))}}]),t}(n.Component),x=(a(72),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container-fluid"},l.a.createElement("h3",{align:"center"},"Experiences"),l.a.createElement("div",null))}}]),t}(n.Component));a(73);function T(e){return l.a.createElement("div",{className:"projectDetailResults",align:"left",style:{width:"100%"}},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-1"},l.a.createElement("img",{id:"recResults"}),l.a.createElement("br",null),l.a.createElement("div",{id:"rotResults"})),l.a.createElement("div",{className:"col-sm-5 projectDetailsColResults",id:"projectTitle"},e.title),l.a.createElement("div",{className:"col-sm-3 projectDetailsColResults",id:"university"},e.university),l.a.createElement("div",{className:"col-sm-3 projectDetailsColResults",id:"listOfStudents"},e.listOfStudents))))}var I=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container-fluid"},l.a.createElement("h3",{align:"center"},"Results"),l.a.createElement("div",null,l.a.createElement(T,{title:"TITLE :",university:"UNIVERSITY :",listOfStudents:"LIST OF STUDENTS :"})))}}]),t}(n.Component),B=(a(74),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container-fluid"},l.a.createElement("h3",{align:"center"},"Your team"),l.a.createElement("div",null))}}]),t}(n.Component)),P=a(16),R=(a(75),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={name:"NA",department:"NA",enorllment_no:"NA",email:"NA",year:"NA",skype:"NA",phone:"NA",cv:"NA"},a.logout=function(){b.a.get(f+"users/logout/",{headers:{Authorization:"Token "+localStorage.getItem("token")}}).finally((function(){localStorage.clear(),window.location.reload()}))}.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.get(f+"users/getprofile/",{headers:{Authorization:"Token ".concat(localStorage.getItem("token"))}}).then((function(t){e.setState({name:t.data.name,department:t.data.dept,enorllment_no:t.data.enrol_no,email:t.data.email,year:t.data.year,phone:t.data.phone,skype:t.data.skype,cv:t.data.cv})}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row",id:"idCard"},l.a.createElement("div",{className:"col-sm-5",align:"left"},l.a.createElement("h2",{id:"personName"},this.state.name),l.a.createElement("span",{className:"spa",id:"department"},"Department : ",this.state.department),l.a.createElement("br",null),l.a.createElement("span",{className:"spa",id:"enrollmentNo"},"Enrollment Number : ",this.state.enorllment_no),l.a.createElement("br",null),l.a.createElement("span",{className:"spa",id:"year"},"Year : ",this.state.year),l.a.createElement("br",null),l.a.createElement("span",{className:"spa",id:"email"},"Email Address: ",this.state.email),l.a.createElement("br",null)),l.a.createElement("div",{className:"col-sm-4",align:"right"},l.a.createElement("img",{id:"PP",src:this.props.PP})),l.a.createElement("div",{className:"col-sm-3",align:"right"})),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("div",{className:"row",align:"left",id:"additionalInfo"},l.a.createElement("br",null),l.a.createElement("div",{className:"col-sm-6"},l.a.createElement("span",{className:"spa",id:"phone"},"Phone : ",this.state.phone),l.a.createElement("br",null),l.a.createElement("span",{className:"spa",id:"phone"},"Drive link to CV : ",this.state.cv)),l.a.createElement("div",{className:"col-sm-6"},l.a.createElement("span",{className:"spa",id:"phone"},"Skype Name : ",this.state.skype))),l.a.createElement("div",{className:"row",align:"left",id:"additionalInfo",style:{paddingLeft:"90px"}},l.a.createElement("br",null),l.a.createElement("button",{onClick:this.logout,className:"col-sm-1 hoverHand",id:"rightOfNav"},"Logout ")))}}]),t}(n.Component)),M=a(11),Y=!(null==localStorage.getItem("token")||""===localStorage.getItem("token"));var F=function(){return l.a.createElement(N.a,null,l.a.createElement("div",{className:"container-fluid App",id:"content-desktop"},l.a.createElement(A,{loggedIn:Y}),l.a.createElement("div",{className:"row",align:"center",style:{width:"100%"}},l.a.createElement("div",{className:"col-sm-2",style:{borderbottom:"0px inset silver",padding:"0px",margin:"0px",height:"87vh",boxShadow:"2px 2px 7px 0px silver"}},l.a.createElement(j,null)),l.a.createElement("div",{className:"col-sm-10",style:{margin:"0px",padding:"0px"},align:"left"},l.a.createElement(N.a,null,l.a.createElement(M.d,null,l.a.createElement(P.a,{authenticated:!Y,redirectTo:"/projects",path:"/auth",component:y}),l.a.createElement(P.a,{authenticated:Y,redirectTo:"/auth",path:"/dashboard",component:R}),l.a.createElement(P.a,{authenticated:Y,redirectTo:"/auth",path:"/projects",component:k}),l.a.createElement(P.a,{authenticated:Y,redirectTo:"/auth",path:"/yourapplications",component:O}),l.a.createElement(P.a,{authenticated:Y,redirectTo:"/auth",path:"/bookmarks",component:D}),l.a.createElement(P.a,{authenticated:Y,redirectTo:"/auth",path:"/experiences",component:x}),l.a.createElement(P.a,{authenticated:Y,redirectTo:"/auth",path:"/results",component:I}),l.a.createElement(P.a,{authenticated:Y,redirectTo:"/auth",path:"/team",component:B}),l.a.createElement(P.a,{authenticated:Y,redirectTo:"/auth",path:"/",component:R})))))),l.a.createElement("div",{id:"content-mob\ufffcile"},"Mobile devices are not supported yet, ",l.a.createElement("br",null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.ce104c01.chunk.js.map