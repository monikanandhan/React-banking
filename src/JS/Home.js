import React,{component} from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';


export default function Home()
{
return(
    <div>
<ul>
     <li><Link to="/CustomerLogin">Customer portal</Link></li>
     <li><Link to="/Signup">Signup</Link></li>
      <li><Link to="/EmployeeLogin">Employee portal</Link></li>
         
</ul>

</div>
);
}