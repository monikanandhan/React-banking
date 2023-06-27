import axios from "axios";
import React,{useState} from "react";

export default function DeleteCustomer() 
{

    const [Post,setpost]=useState({
        Account_Number:''
       })

       const handleData=(e)=>
       {
           setpost({...Post,[e.target.id]:e.target.value})
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

    return(<div>
    Account_Number:<input type="text" id="Account_Number" value={Post.Account_Number} onChange={handleData}/><br/>
    <button type="button" onClick={handleSubmit}>Delete</button>
    </div>
    );

    
}