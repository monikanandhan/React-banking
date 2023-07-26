import React, { useState,useEffect }  from "react";
import axios from "axios";
import UpdateCustomer from "./UpdateCustomer";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './Customer.css';
import EmployeeProfile from "../Employee/EmployeeProfile";
import 'materialize-css/dist/css/materialize.min.css';
import  M  from "materialize-css/dist/js/materialize.min.js";

export default function GetCustomer()
{
  useEffect(() => {
    M.AutoInit(); 
},[]);

 
    const baseURL="https://localhost:7142/api/Customer/Get-Customer-Details";

    const [post,setPost]=useState(null); 
    const [data,setData]=useState({
      first_Name:'',
      last_Name:'',
      mobile_Number:'',
     email:'',
      aadhar:'',
      address1:'',
      address2:'',
      city:'',
      state:'',
      country:'',
      pincode:''
     });

  //Delete details
 const handleDelete=(Account_Number)=>
  {  
    axios.delete(`https://localhost:7142/api/Customer/Delete-Customer-Details-By- Account_Number?Account_Number=${Account_Number}`
    ).then((response) => {  
        alert(`Account ${Account_Number} Deleted successfully`);
        window.location.reload();           
    }).catch((e)=>
    {
        console.log(e);
    })
  }

  //update details

 const handleChange=(e)=>
   {
  setData({...data,[e.target.id]:e.target.value});
   }
   

   const handleUpdate=(Account_Number)=>
  {
    
       axios.put(`https://localhost:7142/api/Customer/Update-Customer-Details-By-Account_Number?Account_Number=${Account_Number}`,{
           first_Name:data.first_Name,
           last_Name:data.last_Name,
           mobile_Number:data.mobile_Number,
           email:data.email,
           aadhar:data.aadhar,
           address1:data.address1,
           address2:data.address2,
           city:data.city,
           state:data.state,
           country:data.country,
           pincode:data.pincode
       },
           {headers:{'Content-type':'application/json'}}).then((response) => { 
          
           alert(`Account Number ${Account_Number} has been updated successfully`);
           window.location.reload();   
       })
      .catch((e)=>
       {
           console.log(e);
       })      
      };

//disagree button functionality
      const handleCancel = () => {
       
        setData({
            
            First_Name:'',
            Last_Name:'',
            mobile_Number:'',
            Email:'',
            Aadhar:'',
            Address1:'',
            Address2:'',
            city:'',
            state:'',
            Country:'',
            pincode:'',       
}); 
}

//Form validation 

const [errors,setErrors]=useState({});

const validateForm=()=>
{
 const errors={};
  if(data.first_Name.length==0)
  {
     errors.first_Name='First Name is Required';
  }
  if(data.last_Name.length==0)
  {
     errors.last_Name='Last Name is Required';
  }
  if(data.mobile_Number.length==0)
     {
        errors.mobile_Number='Mobile_Number is Required';
     }
  
  if(data.aadhar.length==0)
  {
     errors.aadhar='Aadhar is Required';
  }
  if(data.city.length==0)
  {
     errors.city='city is Required';
  }

  if(data.state.length==0)
  {
     errors.state='state is Required';
  }
  if(data.country.length==0)
  {
     errors.country='Country is Required';
  }
  if(data.pincode.length==0)
  {
     errors.pincode='pincode is Required';
  }

 
setErrors(errors);
return Object.keys(errors).length===0;

}

      //get all details
  useEffect(() => {
        axios.get(baseURL).then((response) => {
          setPost(response.data);
        }).catch(e => {
            console.log(e);
        });
      }, []);
     
      if (!post) return null;

    return(
      <div id="id1">
      <div id="id2">
      <EmployeeProfile/>
      </div>
      <div id="id3" >
      <h4 class="center ">Get Customer Details</h4>
      <br/>
            <br/>
          
<table  >
  <thead >
  <tr > 
    <td>First_Name</td>
    <td>Last_Name</td>
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
  </thead>
 <tbody>
  {post.map(dataObj =>(
       <tr key={dataObj.account_Number} >
  
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

    {/*update
    <td> 
    <div>
  <button class="waves-effect waves-light btn modal-trigger" data-target="update-modal"  onClick={()=>{setData(dataObj)}} >update</button>
<div id="update-modal" class="modal">
  <div class="modal-content">
    <div class="row">
      <form class="col s12">
        <div class="row modal-form-row">
          <div class="input-field col s12">
          First_Name:<input type="text" id="first_Name" value={data.first_Name}  onChange={(e)=>  handleChange(e)}  /><br/>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
          Last_Name:<input type="text" id="last_Name" value={data.last_Name}    onChange={handleChange} /><br/>
          </div>
        </div>       
        <div class="row">
          <div class="input-field col s12">
          Email:<input type="text" id="email" defaultValue={data.email}  onChange={handleChange}/><br/>
          </div>
        </div>  
        <div class="row">
          <div class="input-field col s12">
          Aadhar :<input type="text" id="aadhar"  defaultValue={data.aadhar}  onChange={handleChange}/><br/>
          </div>
        </div>             
        <div class="row">
          <div class="input-field col s12">
          Address1:<input type="text" id="address1" defaultValue={data.address1}   onChange={handleChange} /><br/>
          </div>
        </div>  
        <div class="row">
          <div class="input-field col s12">
          Address2:<input type="text" id="address2"  defaultValue={data.address2}  onChange={handleChange}/><br/>
          </div>
        </div>  
        <div class="row">
          <div class="input-field col s12">
          city :<input type="text" id="city"  defaultValue={data.city}  onChange={handleChange}/><br/>
          </div>
        </div>  
        <div class="row">
          <div class="input-field col s12">
          state :<input type="text" id="state" defaultValue={data.state} onChange={handleChange}/><br/>
          </div>
        </div>  
        <div class="row">
          <div class="input-field col s12">
          Country:<input type="text" id="country" defaultValue={data.country} onChange={handleChange}/><br/>
          </div>
        </div>  
        <div class="row">
          <div class="input-field col s12">
          pincode:<input type="text" id="pincode" defaultValue={data.pincode} key={data.pincode} onChange={handleChange}/><br/> 
          </div>
        </div>  

      </form>
    </div>
  </div>
  <div class="modal-footer">
    <a class=" modal-action modal-close waves-effect waves-green btn-flat"  onClick={()=>handleUpdate(data.account_Number)}>Submit</a>
  </div>
</div>
</div>
    
  </td>*/}

  {/*update*/}
<td>
<div>
<Popup className="model-content "    contentStyle={{width: "600px",height:500,overflow:"auto",padding:"60px",position:"absolute",top:"50%",left:"50%",transform: "translate(-50%, -50%)"}} trigger=

    {<button class="waves-effect waves-light btn" onClick={()=>{setData(dataObj)}} > Update </button>}>
<div>
<div class="row">
      <form class="col s12">
        <div class="row modal-form-row">
          <div class="input-field col s12">
          {errors.first_Name&&<span >*{errors.first_Name}</span>}<br/>First_Name:<input type="text" id="first_Name" defaultValue={dataObj.first_Name}  onChange={ handleChange}  /><br/>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
          {errors.last_Name&&<span >*{errors.last_Name}</span>}<br/>Last_Name:<input type="text" id="last_Name" defaultValue={dataObj.last_Name}    onChange={handleChange} /><br/>
          </div>
        </div>   
        <div class="row">
          <div class="input-field col s12">
          {errors.mobile_Number&&<span >*{errors.mobile_Number}</span>}<br/>Mobile_Number:<input type="number" id="mobile_Number" defaultValue={dataObj.mobile_Number}  onChange={handleChange}/><br/>
          </div>
        </div>      
        <div class="row">
          <div class="input-field col s12">
          Email:<input type="text" id="email" defaultValue={dataObj.email}  onChange={handleChange}/><br/>
          </div>
        </div>  
        <div class="row">
          <div class="input-field col s12">
          {errors.aadhar&&<span >*{errors.aadhar}</span>}<br/>Aadhar :<input type="text" id="aadhar"  defaultValue={dataObj.aadhar}  onChange={handleChange}/><br/>
          </div>
        </div>             
        <div class="row">
          <div class="input-field col s12">
          Address1:<input type="text" id="address1" defaultValue={dataObj.address1}   onChange={handleChange} /><br/>
          </div>
        </div>  
        <div class="row">
          <div class="input-field col s12">
          Address2:<input type="text" id="address2"  defaultValue={dataObj.address2}  onChange={handleChange}/><br/>
          </div>
        </div>  
        <div class="row">
          <div class="input-field col s12">
          {errors.city&&<span >*{errors.city}</span>}<br/>city :<input type="text" id="city"  defaultValue={dataObj.city}  onChange={handleChange}/><br/>
          </div>
        </div>  
        <div class="row">
          <div class="input-field col s12">
          {errors.state&&<span >*{errors.state}</span>}<br/>state :<input type="text" id="state" defaultValue={dataObj.state} onChange={handleChange}/><br/>
          </div>
        </div>  
        <div class="row">
          <div class="input-field col s12">
          {errors.country&&<span >*{errors.country}</span>}<br/>Country:<input type="text" id="country" defaultValue={dataObj.country} onChange={handleChange}/><br/>
          </div>
        </div>  
        <div class="row">
          <div class="input-field col s12">
          {errors.pincode&&<span >*{errors.pincode}</span>}<br/>pincode:<input type="text" id="pincode" defaultValue={dataObj.pincode}  onChange={handleChange}/><br/> 
          </div>
        </div>  

      </form>
    </div>
  </div>
  <div class="modal-footer">
    <a  href="#!" class=" modal-action waves-effect waves-light btn"  onClick={()=>handleUpdate(dataObj.account_Number)}>Update</a>

  </div>
  </Popup>
</div>
</td>

 {/*Delete*/}
   
    <td> <a class="waves-effect waves-light btn modal-trigger" href="#modal1" onClick={()=>{setData(dataObj)}} >Delete</a>
    <div id="modal1" class="modal">
    <div class="modal-content">
     
      <p id="alert1">Are you sure you want to delete the Account Number {data.account_Number} permanently!!</p>
    </div>
    <div class="modal-footer">
      <a  class=" modal-action waves-effect waves-light btn"  onClick={() => handleDelete(data.account_Number)}>Agree</a>
      <a  class=" modal-close waves-effect waves-light btn red lighten-1" >Disagree</a>

    </div>
  </div>
   </td>

   
  </tr>))}
  </tbody>
</table> 

    </div>
    </div>

    );
      
      };

    