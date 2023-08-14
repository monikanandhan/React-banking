import React, { useEffect } from "react";
import './FirstPage.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css/dist/js/materialize.min.js";
import CustomerLogin from "./JS/Customer/CustomerLogin";
import EmployeeLogin from "./JS/Employee/EmployeeLogin";
import Signup from "./JS/Customer/Signup";
import image from "./image8.jpg";



export default function FirstPage() {

  useEffect(() => {

    M.AutoInit();
  });

  return (
    <div>
      {/*TopNav Menu*/}
      <div id="navbar" class="navbar-fixed scrollspy">
        <nav class="purple lighten-1">
          <div class="nav-wrapper container " >
            <div class="container" > <a href="#navbar" class="brand-logo" >Banking</a></div>
            <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="mdi-navigation-menu"></i></a>
            <ul class="right hide-on-med-and-down">
              <li><a class="head-link" href="#projects">Customer Portal</a></li>
              <li><a class="head-link" href="#aboutus">Employee Portal</a></li>
              <li><a class="head-link" href="#contactus">Sign up</a></li>
            </ul>
            <ul class="right side-nav" id="mobile-demo">
              <li><a class="head-link" href="#projects">Customer Portal</a></li>
              <li><a class="head-link" href="#aboutus">Employee Portal</a></li>
              <li><a class="head-link" href="#contactus">Sign up</a></li>
            </ul>
          </div>
        </nav>
      </div>
      {/*Front Page Image*/}
      <div id="index-banner" class="parallax-container" style={{ backgroundImage: `url(${image})` }} >
        <div class="section no-pad-bot" >
          <div class="container" >
            <br /><br />
            <h1 class="header center teal-text text-lighten-2">Welcome to Banking!</h1>
            <div class="row center">
              <h5 class="header col s12 light">You have made right choice to save your money!</h5>
            </div>
            <div class="row center">
              <a href="#" class="btn-large waves-effect waves-light purple lighten-1">Find more</a>
            </div>
            <br /><br />
          </div>
        </div>
     {/*Customer Login Section*/}
        <div class="parallax"><img src="src\imago1.jpg" alt="Unsplashed background img 2" /></div>
      </div>
      <div class="container section scrollspy" id="projects" style={{ paddingTop: 100 }}>
        <div class="section">
          <br />
          <br />
          <h4 class="header center teal-text text-lighten-2">Customer Portal</h4>
          <br />
          <div class="row">
            <CustomerLogin />
          </div>
        </div>
      </div>
     {/*Employee Login Section*/}
      <div class="parallax-container valign-wrapper section scrollspy" id="aboutus">
        <div class="section no-pad-bot">
          <div class="container">
            <div class="center row col s3">
              <h4 class="header center teal-text text-lighten-2">Employee Portal</h4>
              <br />
              <br />
            </div>
            <div class="center row col s12">
              <EmployeeLogin />
            </div>
          </div>
        </div>
        <div class="parallax"><img src="images/1423255813yuwjj.jpg" alt="img" /></div>
      </div>
     {/*Signup*/}
      <div class="container section scrollspy" id="contactus">
        <div class="section">
          <br />
          <br />
          <h4 class="header center teal-text text-lighten-2">Signup</h4>
          <br />
          <br />
          <div class="row">
            <Signup />
          </div>
        </div>
      </div>

      {/*Footer*/}
      <footer class="page-footer purple lighten-1">
        <div class="footer-copyright">
          <div class="container">
            <p>Copyright © Your website name</p>
          </div>
        </div>
      </footer>
    </div>
  );
}