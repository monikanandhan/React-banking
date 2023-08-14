import React, { useState, useEffect } from "react";
import axios from "axios";
import * as signalR from "@microsoft/signalr";
import EmployeeProfile from "../Employee/EmployeeProfile";
import "./Customer.css";
import { json } from "react-router-dom";


const AddCustomerByUpload = () => {
//   const [sqlHeaders, setSqlHeaders] = useState('');
// const[errorMessage,setErrorMessage]=useState('');
//   const [fileHeaders, setFileHeaders] = useState([]);
const [errorHeader,setErrorHeader]=useState('');
  const [existingFile, setexistingFile] = useState([]);
  const [isExist, setisExist] = useState('');
  const [uploadingRecords, setuploadingRecords] = useState(0);
  const [progress, setProgress] = useState(0);
  const [totalRecords, settotalRecords] = useState(0);
  const [uploadingstatus, setuploadingstatus] = useState(false);
  const [uploadMessage, setuploadMessage] = useState(false);
  const hubUrl = "https://localhost:7142/progressHub";
  const baseURL = "https://localhost:7142/api/Customer/Add-Customer-Details-By-fileUpload";

  //get FileName
  const ValidateForm = () => {
    axios.get("https://localhost:7142/api/FileName").then((response) => {
      setexistingFile(response.data);
    })
  }

//   const FileHeadercount= (file)=>
//   {
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         const content = e.target.result;
//         const lines = content.split('\n');
//         const headers = lines[0].split(',');
//         console.log(headers);
//         setFileHeaders(headers);

//       };
//       reader.readAsText(file);
//     }
//   }

//   const sqlHeadersCount=()=>{
//     axios.get("https://localhost:7142/api/Customer/Get-Headers-Count").then((response) => { 
//       setSqlHeaders(response.data);
//     });
//   }

//   const validateFile=()=>
//   {
//     if(JSON.stringify(sqlHeaders)!==JSON.stringify(fileHeaders))
//     {
//       setErrorMessage("Header Mismatch");
//     }
//     else
//     {
//       setErrorMessage('');
//     }
//   }

//   useEffect(()=>
//   {
    
// sqlHeadersCount();
// FileHeadercount();
//   },[fileHeaders])


  //csv file adding

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fileInput = document.querySelector('input[type="file"]');
    const file = fileInput.files[0];

    if (!file) {
      alert("Please select a file.");
      setuploadingstatus(false);
      return;
    }

    
    //To check File already exists or not
    if (existingFile.includes(file.name)) {
      setisExist("File already exists");
    }
    else {
      setisExist('');
    }


    const formData = new FormData();
    formData.append("file", file);

    //Post Endpoint calling for file upload
    setProgress(0);
    try {
      setuploadingstatus(true);
      const response = await axios.post(baseURL, formData);
      console.log(response.data);
      setuploadingstatus(false);
      setuploadMessage(true);
    } catch (error) {
      // if(error.response && error.response.status==404)
      // {
      //   setuploadingstatus(false);
      //   setuploadMessage(false);
      //   setErrorHeader(error.response.data);
      //   console.log(error.response.data);
      // }
     
    }
  };

  

  //Using SignalR
  useEffect(() => {

    const connectionHub = new signalR.HubConnectionBuilder()
      .withUrl(hubUrl)
      .configureLogging(signalR.LogLevel.Information)
      .build();

    connectionHub.on("receiveProgress", (percentCompleted, remaningRecords, totalRecords) => {
      setProgress(percentCompleted);
      setuploadingRecords(remaningRecords);
      settotalRecords(totalRecords);
    });

    connectionHub
      .start()
      .catch((err) => console.error("SignalR connection error:", err));
  }, []);

  return (
    <div id="id1">
      <div>
        <EmployeeProfile />
      </div>

      <div id="id8">
        <h4 id="header5">Upload File to Add Customer</h4>
        <br />
        <div className="file-field input-field">
          <div className="btn">
            <span>File</span>
          </div>
          <input type="file" onChange={ValidateForm} />
          <div className="file-path-wrapper">

            {isExist && <div>*{isExist}</div>}
{/* {errorMessage && <div>*{errorMessage}</div>} */}
           {/* // {fileHeadersMatch && <div>*{fileHeadersMatch}</div>} */}
           {errorHeader &&<div>*{errorHeader}</div>} 
            <input className="file-path validate" type="text" />


          </div>
        </div>

        <button onClick={handleSubmit}>Submit</button>
        <br />

        {/* Progress bar*/}
        {uploadingstatus && (
          <div>
            <progress value={progress} style={{ width: `${progress}%`, height: 40 }} />{progress}%
            <div> Uploading {uploadingRecords}  of {totalRecords} Records</div>
          </div>
        )}

        <br />
        {uploadMessage && (
          <div>
            uploaded {uploadingRecords} Records successfully!!!
          </div>
        )}

      </div>
    </div>
  );
};

export default AddCustomerByUpload;

