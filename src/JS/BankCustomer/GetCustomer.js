import React, { useState }  from "react";
import axios from "axios";
import UpdateCustomer from "./UpdateCustomer";


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

export default function GetCustomer()
{
    const baseURL="https://localhost:7142/api/Customer/Get-Customer-Details";

    const [post,setPost]=useState(null);

    

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
          setPost(response.data);
        }).catch(e => {
            console.log(e);
        });
      }, []);

      

      if (!post) return null;
    return(
        <div>
    
<table >
  <tr>
    <td>first_Name</td>
    <td>last_Name</td>
    <td>DateOfBirth</td>
    <td>age</td>
    <td>Mobile_Number</td>
    <td>Email</td>
    <td>Aadhar</td>
    <td>Address1</td>
    <td>Address2</td>
    <td>city</td>
    <td>state</td>
    <td>Country</td>
    <td>pincode</td>
    <td>Account_Number</td>
    <td>Account_Type</td>
    
  </tr>
  </table>
  {post.map((dataObj) =>
       {
          return (
  <table>
  <tr>
    <td>{dataObj.first_Name}</td>
    <td>{dataObj.last_Name}</td>
    <td>{dataObj.dateOfBirth}</td>
    <td>{dataObj.age}</td>
     <td>{dataObj.mobile_Number}</td>
    <td>{dataObj.email}</td>
    <td>{dataObj.aadhar}</td>
    <td>{dataObj.address1}</td>
    <td>{dataObj.address2}</td>
    <td>{dataObj.city}</td>
    <td>{dataObj.state}</td>
    <td>{dataObj.country}</td>
    <td>{dataObj.pincode}</td>
     <td>{dataObj.account_Number}</td>
      <td>{dataObj.account_Type}</td>
      <Link to="/UpdateCustomer">
      <td><button type="button" id="updateButton"  >Update</button></td>
      </Link>
     
  </tr>
</table>
   
            );
        })}
    
    </div>

    );

}