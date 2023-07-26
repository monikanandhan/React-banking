import React,{useEffect} from "react";

import { BrowserRouter, Route, Link } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';
import  M from "materialize-css/dist/js/materialize.min.js";
import '../BankCustomer/Customer.css'
import './EmployeeProfile.css';
import image from './loginicon.jpg';
import imagebank from './banklogo1.png';

import { useNavigate } from 'react-router-dom';




export default function EmployeeProfile() 
{
 
  useEffect(() => {
    
    M.AutoInit();
  });

  const nav = useNavigate();

    const logOut=() =>{         
        localStorage.removeItem("jwt");
        nav('/login');
    }
  

  
  return (


    <div>
    <div id="div1">

<div id="sidenav1" > 
<div>
  <img src={imagebank} id="banklogo"/>
</div>
{/*<ul id="slide-out" class="sidenav">*/}
<br/>
<div id="icon1">
<div id="icondashboard"><i class="small material-icons" >dashboard</i></div>

<div><h4 id="dashboard">Dashboard</h4></div>
</div>

<ul class="collapsible" data-collapsible="expandable" id="collapsed_links">
          
          <li class="active">
            <div id="icon1">
         <div><i id="iconcustomer" class="small material-icons" >wc</i></div> 
            <div class="collapsible-header">Customer</div>
            </div>
           <div class="collapsible-body">
           <Link to="/AddCustomer"> <p>Add Customer</p></Link>
           <Link to="/GetCustomer"><p>Get Customer</p></Link>
           <Link to="/UpdateCustomer"><p>Update Customer</p></Link>
           <Link to="/DeleteCustomer"><p>Delete Customer</p></Link>
            </div>

          </li>
          <li class="active">
            <div id="icon1">
          <div id="iconbank"><i class="material-icons">account_balance</i></div>
                <div class="collapsible-header">Bank</div>
                </div>
               <div class="collapsible-body">
               <Link to="/AddCustomer"> <p>Add Bank</p></Link>
               <Link to="/GetCustomer"><p>Get Bank</p></Link>
               <Link to="/UpdateCustomer"><p>Update Bank</p></Link>
               <Link to="/DeleteCustomer"><p>Delete Bank</p></Link>
                </div>

              </li>
              <li class="active">
                <div id="icon1">

               <div id="iconloandetails"><i class="material-icons"> account_balance_wallet</i></div>
                <div class="collapsible-header">Customer Loan Details</div>
                </div>
               <div class="collapsible-body">
               <Link to="/AddCustomer"> <p>Add Loan Details</p></Link>
               <Link to="/GetCustomer"><p>Get Loan Details</p></Link>
               <Link to="/UpdateCustomer"><p>Update Loan Details</p></Link>
               <Link to="/DeleteCustomer"><p>Delete Loan Details</p></Link>
                </div>

              </li>

              <li class="active">
                <div id="icon1">
                  <div id="iconloan"><i class="material-icons">monetization_on</i></div>
                <div class="collapsible-header">Available Loan Details</div>
                </div>
               <div class="collapsible-body">
               <Link to="/AddCustomer"> <p>Add Loan </p></Link>
               <Link to="/GetCustomer"><p>Get Loan</p></Link>
               <Link to="/UpdateCustomer"><p>Update Loan </p></Link>
               <Link to="/DeleteCustomer"><p>Delete Loan </p></Link>
                </div>

              </li>

              <li class="active">
                <div id="icon1">
              <div id="iconcibil"><i class="material-icons">insert_chart</i></div>
                <div class="collapsible-header">Cibil</div>
                </div>
               <div class="collapsible-body">
               <Link to="/AddCustomer"> <p>Add Cibil </p></Link>
               <Link to="/GetCustomer"><p>Get Cibil</p></Link>
               <Link to="/UpdateCustomer"><p>Update Cibil</p></Link>
               <Link to="/DeleteCustomer"><p>Delete Cibil </p></Link>
                </div>

              </li>
              
          </ul>
     
{/*</ul>*/}

</div>
<div className="container1">

<ul id="dropdown1" class="dropdown-content">
  <li><a href="#!">Profile</a></li>
  <li><a href="#!">Event</a></li>
  <li class="divider"></li>
  <li><a  onClick={logOut}>Logout</a></li>
</ul>
<nav id="nav1">
  <div class="nav-wrapper">
    <a  class="brand-logo"></a>
    <ul id="nav-mobile" >
      <li ><a href="" id="li1">About Us</a></li>
      <li ><a href="" id="li1">Contact Us </a></li>
      <li><a href=""  id="li1">Email</a></li>
      <li><a class="dropdown-trigger" href="#!" data-target="dropdown1"><a href="#user"><img class="circle" src={image}/></a><i class="material-icons right">arrow_drop_down</i></a></li>
       
    </ul>
  </div>
</nav>

</div>
</div>

</div>
 );
}


 {/* <div>

    <div id="id1"> 
<div class="col s12 m4 l4 ">
  <h>Dashboard </h>
        <ul class="collapsible" data-collapsible="expandable" id="collapsed_links">
          
              <li class="active">
                <div class="collapsible-header"><i class="material-icons"></i>Customer</div>
               <div class="collapsible-body">
               <Link to="/AddCustomer"> <p>Add Customer</p></Link>
               <Link to="/GetCustomer"><p>Get Customer</p></Link>
               <Link to="/UpdateCustomer"><p>Update Customer</p></Link>
               <Link to="/DeleteCustomer"><p>Delete Customer</p></Link>
                </div>

              </li>

              <li class="active">
                <div class="collapsible-header"><i class="material-icons"></i>Bank</div>
               <div class="collapsible-body">
               <Link to="/AddCustomer"> <p>Add Bank</p></Link>
               <Link to="/GetCustomer"><p>Get Bank</p></Link>
               <Link to="/UpdateCustomer"><p>Update Bank</p></Link>
               <Link to="/DeleteCustomer"><p>Delete Bank</p></Link>
                </div>

              </li>
              <li class="active">
                <div class="collapsible-header"><i class="material-icons"></i>Customer Loan Details</div>
               <div class="collapsible-body">
               <Link to="/AddCustomer"> <p>Add Loan Details</p></Link>
               <Link to="/GetCustomer"><p>Get Loan Details</p></Link>
               <Link to="/UpdateCustomer"><p>Update Loan Details</p></Link>
               <Link to="/DeleteCustomer"><p>Delete Loan Details</p></Link>
                </div>

              </li>

              <li class="active">
                <div class="collapsible-header"><i class="material-icons"></i>Available Loan Details</div>
               <div class="collapsible-body">
               <Link to="/AddCustomer"> <p>Add Loan </p></Link>
               <Link to="/GetCustomer"><p>Get Loan</p></Link>
               <Link to="/UpdateCustomer"><p>Update Loan </p></Link>
               <Link to="/DeleteCustomer"><p>Delete Loan </p></Link>
                </div>

              </li>

              <li class="active">
                <div class="collapsible-header"><i class="material-icons"></i>Cibil</div>
               <div class="collapsible-body">
               <Link to="/AddCustomer"> <p>Add Cibil </p></Link>
               <Link to="/GetCustomer"><p>Get Cibil</p></Link>
               <Link to="/UpdateCustomer"><p>Update Cibil</p></Link>
               <Link to="/DeleteCustomer"><p>Delete Cibil </p></Link>
                </div>

              </li>
              
              
            </ul>
            <div>

            </div>
          </div>

      {/*<ul>
      <li><Link to="/GetCustomer">GetCustomer</Link></li>
      <li><Link to="/AddCustomer">AddCustomer</Link></li>
      <li><Link to="/UpdateCustomer">UpdateCustomer</Link></li>
      <li><Link to="/DeleteCustomer">DeleteCustomer</Link></li>
     
  </ul>


 
      
      
    </div>
    </div>*/}
 


