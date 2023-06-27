import React,{useState} from "react";
import axios from "axios";

export default function UpdateCustomer()
{ 

    const [Post,setpost]=useState({
        Account_Number:'',
        First_Name:'',
        Last_Name:'',
        DateOfBirth:'',
        Mobile_Number:'',
        Email:'',
        Aadhar:'',
        Address1:'',
        Address2:'',
        city:'',
        state:'',
        Country:'',
        pincode:''
       })

       
        const handleData=(e,Account_number)=>
        {
            setpost({...Post,[e.target.id]:e.target.value})
        }
    
        const handleSubmit=(e)=>
        {
            e.preventDefault();          
            axios.put(`https://localhost:7142/api/Customer/Update-Customer-Details-By-Account_Number/${Post.Account_Number}?Account_Number=${Post.Account_Number}`,JSON.stringify({
                First_Name:Post.First_Name,
                Last_Name:Post.Last_Name,
                DateOfBirth:Post.DateOfBirth,
                Mobile_Number:Post.Mobile_Number,
                Email:Post.Email,
                Aadhar:Post.Aadhar,
                Address1:Post.Address1,
                Address2:Post.Address2,
                city:Post.city,
                state:Post.state,
                Country:Post.Country,
                pincode:Post.pincode                             
            }),
                {headers:{'Content-type':'application/json'}}).then((response) => {   
                alert("Account updated successfully");
                window.location.href='/EmployeeProfile';
             
            }).catch((e)=>
            {
                console.log(e);
            })
          
        } 
    return(
        <div>
            Account_Number:<input type="text" id="Account_Number" value={Post.Account_Number} onChange={handleData}/><br/>
             First_Name:<input type="text" id="First_Name" value={Post.First_Name} onChange={handleData}/><br/>
            Last_Name:<input type="text" id="Last_Name" value={Post.Last_Name} onChange={handleData}/><br/>
            DateOfBirth:<input type="datetime-local" value={Post.DateOfBirth} id="DateOfBirth" onChange={handleData}/><br/>
            Mobile_Number:<input type="number" value={Post.Mobile_Number} id="Mobile_Number" onChange={handleData}/><br/>
            Email:<input type="text" id="Email" value={Post.Email} onChange={handleData}/><br/>
            Aadhar :<input type="text" id="Aadhar" value={Post.Aadhar} onChange={handleData}/><br/>
            Address1:<input type="text" id="Address1" value={Post.Address1} onChange={handleData}/><br/>
            Address2:<input type="text" id="Address2" value={Post.Address2} onChange={handleData}/><br/>
            city :<input type="text" id="city" value={Post.city} onChange={handleData}/><br/>
            state :<input type="text" id="state" value={Post.state} onChange={handleData}/><br/>
            Country:<input type="text" id="Country" value={Post.Country} onChange={handleData}/><br/>
            pincode:<input type="text" id="pincode" value={Post.pincode} onChange={handleData}/><br/>
            <input type="submit" value="submit"  onClick={handleSubmit}/>  
        </div>
    );
 }
