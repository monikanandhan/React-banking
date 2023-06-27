import React,{component} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';


export default function EmployeeProfile()
{
 
    return(
        <div class="col s12 m4 l4">
  <h3>Dashboard</h3>
        <ul class="collapsible">
              <li class="active">
                <Link to="/GetCustomer"><div class="collapsible-header"><i class="material-icons"></i>GetCustomer</div></Link>
              </li>
              <li>
              <Link to="/AddCustomer"><div class="collapsible-header"><i class="material-icons"></i>AddCustomer</div></Link>
              </li>
              <li>
              <Link to="/UpdateCustomer"> <div class="collapsible-header"><i class="material-icons"></i>UpdateCustomer</div></Link>
              </li>
              <li>
              <Link to="/DeleteCustomer"> <div class="collapsible-header"><i class="material-icons"></i>DeleteCustomer</div></Link>
              </li>
              
            </ul>
          </div>

    );
}