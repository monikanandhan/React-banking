import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import EmployeeProfile from "./Employee/EmployeeProfile"
import Signup from "./Customer/Signup";
import EmployeeLogin from "./Employee/EmployeeLogin";
import CustomerLogin from "./Customer/CustomerLogin";
import GetCustomer from "./BankCustomer/GetCustomer";
import AddCustomer from "./BankCustomer/AddCustomer";
import UpdateCustomer from "./BankCustomer/UpdateCustomer";
import DeleteCustomer from "./BankCustomer/DeleteCustomer";
import FirstPage from "../FirstPage";
import AddCustomerByUpload from "./BankCustomer/AddCustomerByUpload";



class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<FirstPage />} />
            <Route path='/logOut' element={<FirstPage />} />
            <Route exact path="/CustomerLogin" element={<CustomerLogin />} />
            <Route exact path="/EmployeeLogin" element={<EmployeeLogin />} />
            <Route exact path="/Signup" element={<Signup />} />
            {/*<Route exact path="/CustomerProfile" element={<CustomerProfile/>}/>*/}
            <Route exact path="/EmployeeProfile" element={<EmployeeProfile />} />
            <Route exact path="/GetCustomer" element={<GetCustomer />} />
            <Route exact path="/AddCustomer" element={<AddCustomer />} />
            <Route exact path="/AddCustomerByUpload" element={<AddCustomerByUpload />} />
            <Route exact path="/UpdateCustomer" element={<UpdateCustomer />} />
            <Route exact path="/DeleteCustomer" element={<DeleteCustomer />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
