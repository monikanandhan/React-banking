import React,{component} from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';
import AddCustomer from "./BankCustomer/AddCustomer";

export default function Home()
{
return(
    <div>
<AddCustomer/>
</div>
);
}