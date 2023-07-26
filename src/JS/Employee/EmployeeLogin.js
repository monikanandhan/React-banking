import React, { useState } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import axios from "axios";
import image from "./image4.webp";

export default function EmployeeLogin() {
  
  const [employeeID, setEmployeeID] = useState(''); 
  const [password, setPassword] = useState('') ;

  function handleCheck(employeeID,password)
  {
    axios.get("https://localhost:7142/api/EmployeeLogin/Get-All-EmployeeLogin-Details").then((response) => {
      const usernames=(response.data.map((item)=>item.employeeID));
      const passwords=(response.data.map((item)=>item.password));

      if(!usernames.includes(employeeID) && !passwords.includes(password))
      {
          window.location.href="/login";
          alert("please register and Login!");         
      }
      else{
        alert('Login successful')
       
      }
    })
    
  }

function validateForm()
  {
    if((employeeID.length&&password.length)==0)
    {
      alert('Invalid Form, Employee ID and password can not be empty')
      return window.location.reload(true);
    }
  }

  return (
  <div style={{backgroundImage: `url(${image})`,height:650}}> 
    <div  class="container" >
   <div class="row">
     <div class="col s12 m6 offset-m3">
     
   <div class="card-panel z-depth-5" style={{marginTop:100}}>
   <h4 class="center"> </h4>	 
<div class="row">
 <form class="col s12 m12" >
   <div class="row">
     <div class="input-field col s12 m12">
       <i class="mdi-action-account-circle prefix"></i>
      
       <input id="employeeID" type="text" class="validate"  value={employeeID} placeholder="EmployeeID" onChange={(e) => setEmployeeID(e.target.value)}/>
     </div>
     
       <div class="input-field col s12 m12">
       <i class="small material-icons prefix">lock</i>
       <input id="password" type="password" class="validate" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/> 
     </div> 
   </div>
 </form>
  
</div>

<Link to="/EmployeeProfile" >
<button class="btn waves-effect waves-light center" type="submit" name="action" onClick={() => {
            validateForm();
            handleCheck(employeeID,password);
          }} >Login
   <i class="fa fa-sign-in right"></i>
 </button>
 </Link>
</div>
</div>
 </div>
 </div>
   </div>
       
   
  );
}