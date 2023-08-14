import React, { component } from "react";

export default function AddBankLoan() {
    return (
        <div>
            Name:<input type="text" id="LoanName" />
            Interest_Rate:<input type="number" id="Interest_Rate" />
            Loan_Tenure:<input type="number" id="Loan_Tenure" />
        </div>
    );
}