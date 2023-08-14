import React, { useState } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  redirect
} from 'react-router-dom';
import image from "./imagec1.jpg";



export default function CustomerLogin() {

  const [Username, setUsername] = useState('');
  const [Aadhar_Number, setAadhar_Number] = useState('');
  const [Account_Number, setAccount_Number] = useState('');
  const [Password, setPassword] = useState('');

  //Form Validation Username ,Aadhar,Account_Number,Password !=empty
  function validateForm() {
    if (((Username.length || Aadhar_Number.length || Account_Number.length) && Password.length) == 0) {
      alert('Invalid Form, User Name  and password can not be empty')
      return window.location.reload(true);
    }
  }

  return (

    <div style={{ backgroundImage: `url(${image})`, height: 640, backgroundRepeat: "no-repeat", marginTop: 20, marginLeft: 20 }}>
      <div class="container" >
        <div class="row">
          <div class="col s12 m6 offset-m3">
            <div class="card-panel z-depth-5 " style={{ marginTop: 40 }} >
              <h4 class="center"> </h4>
              <div class="row">
                <form class="col s12 m12">
                  <div class="row">
                    <div class="input-field col s12 m12">
                      <i class="mdi-action-account-circle prefix"></i>
                      <input id={Username} type="text" class="validate" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div class="input-field col s12 m12">
                      <i class="mdi-communication-email prefix"></i>
                      <input id={Aadhar_Number} type="text" class="validate" placeholder="Aadhar_Number" onChange={(e) => setAadhar_Number(e.target.value)} />
                    </div>
                    <div class="input-field col s12 m12">
                      <i class="mdi-communication-email prefix"></i>
                      <input id={Account_Number} type="text" class="validate" placeholder="Account_Number" onChange={(e) => setAccount_Number(e.target.value)} />
                    </div>
                    <div class="input-field col s12 m12">
                      <i class="small material-icons prefix">lock</i>
                      <input id={Password} type="password" class="validate" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                  </div>
                </form>
              </div>
              <Link to="/CustomerProfile"  >
                <button class="btn waves-effect waves-light center" type="submit" name="action" onClick={() => {
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