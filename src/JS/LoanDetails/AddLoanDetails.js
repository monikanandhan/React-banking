import React, { component } from "react";

export default function AddLoanDetails() {
    return (
        <div>
            Loan_Amount:<input type="number" id="Loan_Amount " />
            Loan_Provided:<input type="text" id="Loan_Provided" />
            payment_Mode:<select id="payment_Mode">
                <option >Cash</option>
                <option >NEFT</option>
                <option >RTGS</option>
            </select>
            <input type="submit" value="submit" />
        </div>

    );

}