import React,{component} from "react";

export default function AddBank()
{
    return(
        <div>
            Bank_Name:<input type="text" id="Bank_Name"/>
            Branch_Name:<input type="text" id="Branch_Name"/>
            IFSC:<input type="text" id="IFSC"/>
            Contact_Number:<input type="number" id="Contact_Number"/>
            Email:<input type="text" id="Email"/>
            Address1:<input type="text" id="Address1"/>
            Address2:<input type="text" id="Address2"/>
            city:<input type="text" id="city"/>
            state:<input type="text" id="state"/>
            Country:<input type="text" id="Country"/>
            pincode:<input type="text" id="pincode"/>
            <input type="submit" value="submit"/>
        </div>
    );
}