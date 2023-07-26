import React from "react";
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import image from './images1.jpg';

export default function Signup()
{
    return(
        <div style={{backgroundImage: `url(${image})`,height:650}}> 
     <div class="container" >
		<div class="row">
			<div class="col s12 m6 offset-m3">
			
			
		<div class="card-panel z-depth-5" style={{marginTop:60}}>
		<h4 class="center">  </h4>	 
<div class="row">
  <form class="col s12 m12">
    <div class="row">
      <div class="input-field col s12 m12">
        <i class="mdi-action-account-circle prefix"></i>
        <input id="icon_prefix" type="text" class="validate"/>
        <label for="icon_prefix">Account_Number</label>
      </div>
      <div class="input-field col s12 m12">
        <i class="mdi-communication-email prefix"></i>
        <input id="icon_email" type="email" class="validate"/>
        <label for="icon_email">Registered Mobile_Number</label>
      </div>
      
      <div class="input-field col s12 m12">
        <i class="mdi-communication-email prefix"></i>
        <input id="icon_email" type="email" class="validate"/>
        <label for="icon_email">Username</label>
      </div>
      
        <div class="input-field col s12 m12">
        <i class="small material-icons prefix">lock</i>
        <input id="icon_password" type="password" class="validate"/>
        <label for="icon_password">Password</label>
      </div>
    
        
    </div>
  </form>
   
</div>
 <button class="btn waves-effect waves-light center" type="submit" name="action">Sign Up
    <i class="fa fa-sign-in right"></i>
  </button>
</div>


</div>
  </div>
	</div>
    </div>
    );
}