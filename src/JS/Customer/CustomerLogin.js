import React,{useState} from "react";
import 'materialize-css/dist/css/materialize.min.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    redirect
  } from 'react-router-dom';

  export default function CustomerLogin()
  {

    const [Username, setUsername] = useState(''); 
  const [Aadhar_Number, setAadhar_Number] = useState('') ;
  const [Account_Number, setAccount_Number] = useState('') ;
  const [Password, setPassword] = useState('') ;
 
  function validateForm()
  {
    if(((Username.length||Aadhar_Number.length||Account_Number.length)&&Password.length)==0)
    {
      alert('Invalid Form, User Name  and password can not be empty')
      return window.location.reload(true);
    }
  }
   
    return(
     
      <div style={{marginLeft:90,marginRight:90}}  class="teal lighten-2"> 
      <div style={{marginTop:50}} class="container" >
     <div class="row">
       <div class="col s12 m6 offset-m3">
       
       
     <div class="card-panel z-depth-5">
     <h4 class="center"> Customer Portal</h4>	 
 <div class="row">
   <form class="col s12 m12">
     <div class="row">
       <div class="input-field col s12 m12">
         <i class="mdi-action-account-circle prefix"></i>
         <input id={Username} type="text" class="validate" placeholder="Username"  onChange={(e) => setUsername(e.target.value)} />
         
       </div>
       
       <div class="input-field col s12 m12">
         <i class="mdi-communication-email prefix"></i>
         <input id={Aadhar_Number} type="text" class="validate" placeholder="Aadhar_Number"  onChange={(e) => setAadhar_Number(e.target.value)}  />
        
       </div>
       <div class="input-field col s12 m12">
         <i class="mdi-communication-email prefix"></i>
         <input id={Account_Number} type="text" class="validate" placeholder="Account_Number"  onChange={(e) => setAccount_Number(e.target.value)} />
        
       </div>
       
         <div class="input-field col s12 m12">
         <i class="fa fa-unlock-alt prefix"></i>
         <input id={Password} type="password" class="validate" placeholder="Password"  onChange={(e) => setPassword(e.target.value)} />
         
       </div>
      
     </div>
   </form>
 </div>
 <Link to="/CustomerProfile"  >
  <button class="btn waves-effect waves-light center" type="submit" name="action"  onClick={() => {
            validateForm()
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