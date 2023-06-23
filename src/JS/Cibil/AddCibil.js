import React,{component} from "react";

export default function AddCibil()
{
    return(
        <div>
            Aadhar_Number:<input type="text" id="Aadhar_Number"/>
            CIBIL_year:<input type="text" id="CIBIL_year"/>
            CIBIL_Score:<input type="number" id="CIBIL_Score"/>
            <input type="submit" value="submit"/>
        </div>
    );
}