import React, { useState } from "react";
import axios from "axios";
import EmployeeProfile from "../Employee/EmployeeProfile";
import './Customer.css';
import 'C:/Users/monica.a/React/banking/src/JS/Employee/EmployeeProfile.css';

export default function AddCustomer() {

   const [Post, setpost] = useState({
      First_Name: '',
      Last_Name: '',
      DateOfBirth: '',
      Mobile_Number: '',
      Email: '',
      Aadhar: '',
      Address1: '',
      Address2: '',
      city: '',
      state: '',
      Country: '',
      pincode: '',
      Account_Number: '',
      Account_Type: '',
      loanDetailsId: [],
      bankId: []

   })

   //Form Validation to check Required Fields
   const [errors, setErrors] = useState({});

   const validateForm = () => {
      const errors = {};
      if (Post.First_Name.length == 0) {
         errors.First_Name = 'First Name is Required ';
      }
      if (Post.Last_Name.length == 0) {
         errors.Last_Name = 'Last Name is Required';
      }
      if (Post.Mobile_Number.length == 0) {
         errors.Mobile_Number = 'Mobile_Number is Required';
      }
      if (Post.DateOfBirth.length == 0) {
         errors.DateOfBirth = 'Date Of Birth is Required';
      }
      if (Post.Aadhar.length == 0) {
         errors.Aadhar = 'Aadhar is Required';
      }
      if (Post.city.length == 0) {
         errors.city = 'city is Required';
      }

      if (Post.state.length == 0) {
         errors.state = 'state is Required';
      }
      if (Post.Country.length == 0) {
         errors.Country = 'Country is Required';
      }
      if (Post.pincode.length == 0) {
         errors.pincode = 'pincode is Required';
      }

      if (Post.Account_Number.length == 0) {
         errors.Account_Number = 'Account_Number is Required';
      }

      if (Post.Account_Type.length == 0) {
         errors.Account_Type = 'Account_Type is Required';
      }
      setErrors(errors);
      return Object.keys(errors).length === 0;
   }

   //Post API calling
   const handleData = (e) => {
      setpost({ ...Post, [e.target.id]: e.target.value })
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {
         axios.post("https://localhost:7142/api/Customer/Add-New-Customer-Details", JSON.stringify({
            First_Name: Post.First_Name,
            Last_Name: Post.Last_Name,
            DateOfBirth: Post.DateOfBirth,
            Mobile_Number: Post.Mobile_Number,
            Email: Post.Email,
            Aadhar: Post.Aadhar,
            Address1: Post.Address1,
            Address2: Post.Address2,
            city: Post.city,
            state: Post.state,
            Country: Post.Country,
            pincode: Post.pincode,
            Account_Number: Post.Account_Number,
            Account_Type: Post.Account_Type,
            loanDetailsId: [Post.loanDetailsId],
            bankId: [Post.bankId]
         }),
            { headers: { 'Content-type': 'application/json' } }).then((response) => {
               alert("Your Customer ID is :" + response.data);
               alert("Account created successfully");
               window.location.reload();

            }).catch((e) => {
               console.log(e);
            })

      }
   }

   //Cancel button Function
   const handleCancel = () => {
      setpost({
         First_Name: '',
         Last_Name: '',
         DateOfBirth: '',
         Mobile_Number: '',
         Email: '',
         Aadhar: '',
         Address1: '',
         Address2: '',
         city: '',
         state: '',
         Country: '',
         pincode: '',
         Account_Number: '',
         Account_Type: '',
         loanDetailsId: [],
         bankId: []
      });
   }
   return (
      <div id="id1" >
         <div>
            <EmployeeProfile />
         </div>
         <div id="id3" >
            <h4 class="center ">Add Customer Details</h4>
            <br />
            <br />
            {errors.First_Name && <span >*{errors.First_Name}</span>}<br />First_Name:<input type="text" id="First_Name" value={Post.First_Name} onChange={handleData} /><br />
            {errors.Last_Name && <span >*{errors.Last_Name}</span>}<br />Last_Name:<input type="text" id="Last_Name" value={Post.Last_Name} onChange={handleData} /><br />
            {errors.DateOfBirth && <span >*{errors.DateOfBirth}</span>}<br />DateOfBirth:<input type="datetime-local" value={Post.DateOfBirth} id="DateOfBirth" onChange={handleData} /><br />
            {errors.Mobile_Number && <span >*{errors.Mobile_Number}</span>}<br />Mobile_Number:<input type="number" value={Post.Mobile_Number} id="Mobile_Number" onChange={handleData} /><br />
            Email:<input type="text" id="Email" value={Post.Email} onChange={handleData} /><br />
            {errors.Aadhar && <span >*{errors.Aadhar}</span>}<br />Aadhar :<input type="text" id="Aadhar" value={Post.Aadhar} onChange={handleData} /><br />
            Address1:<input type="text" id="Address1" value={Post.Address1} onChange={handleData} /><br />
            Address2:<input type="text" id="Address2" value={Post.Address2} onChange={handleData} /><br />
            {errors.city && <span >*{errors.city}</span>}<br />city :<input type="text" id="city" value={Post.city} onChange={handleData} /><br />
            {errors.state && <span >*{errors.state}</span>}<br />state :<input type="text" id="state" value={Post.state} onChange={handleData} /><br />
            {errors.Country && <span >*{errors.Country}</span>}<br />Country:<input type="text" id="Country" value={Post.Country} onChange={handleData} /><br />
            {errors.pincode && <span >*{errors.pincode}</span>}<br />pincode:<input type="text" id="pincode" value={Post.pincode} onChange={handleData} /><br />
            {errors.Account_Number && <span >*{errors.Account_Number}</span>}<br /> Account_Number:<input type="text" id="Account_Number" value={Post.Account_Number} onChange={handleData} /><br />
            {errors.Account_Type && <span >*{errors.Account_Type}</span>}<br />Account_Type:
            <select id="Account_Type" value={Post.Account_Type} onChange={handleData} >
               <option value="" disabled selected>Choose your option</option>
               <option value="Current" className="options">Current</option>
               <option value="savings" className="options">savings</option>
               <option value="FD/RD" className="options">FD/RD</option>
            </select><br />
            loanDetailsId:<input type="text" id="loanDetailsId" value={Post.loanDetailsId} onChange={handleData} /><br />
            bankId:<input type="text" id="bankId" value={Post.bankId} onChange={handleData} /><br />
            <button type="submit" class="waves-effect waves-light btn" value="Add" onClick={handleSubmit}> Add</button>
            <button type="submit" class="waves-effect waves-light btn red lighten-1" style={{ marginLeft: 680 }} onClick={handleCancel} value="Cancel" > cancel</button>
         </div>
      </div>
   );
}