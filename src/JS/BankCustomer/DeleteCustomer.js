import axios from "axios";
import React,{useState} from "react";
import EmployeeProfile from "../Employee/EmployeeProfile";
import './Customer.css'

export default function DeleteCustomer() 
{
    const [Post,setpost]=useState({
        Account_Number:''
       })

       const handleData=(e)=>
       {
           setpost({...Post,[e.target.id]:e.target.value})
       }

       const handleCancel = () => {
        setpost({
            Account_Number:'',
});
  
}

    const handleSubmit=(e)=>
    {
        e.preventDefault();     
        axios.delete(`https://localhost:7142/api/Customer/Delete-Customer-Details-By- Account_Number/${Post.Account_Number}?Account_Number=${Post.Account_Number}`
        ).then((response) => {   
            alert(`Account ${Post.Account_Number} Deleted successfully`);
            window.location.href='/EmployeeProfile';            
        }).catch((e)=>
        {
            console.log(e);
        })
    }

    return(
        <div id="id1">
        <div id="id2">
        <EmployeeProfile/>
        </div>
        <div id="id3">
        <h4 class="center ">Delete Customer Details</h4>
        <br/>
            <br/>
    Account_Number:<input type="text" id="Account_Number" value={Post.Account_Number} onChange={handleData}/><br/>
    <button type="button"  class="waves-effect waves-light btn" onClick={handleSubmit}>Delete</button>
    <button type="submit"   class="waves-effect waves-light btn red lighten-1"  style={{marginLeft:680}} onClick={handleCancel} value="Cancel" > cancel</button> 

    </div>
    </div>
    );

    
}