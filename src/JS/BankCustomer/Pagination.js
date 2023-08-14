import React from "react";
import './Customer.css';


const Pagination = ({ pageSize, currentPage, totalItems, onPageChange }) => {

  //To get total pagination footer count
  const totalpages = Math.ceil(totalItems / pageSize);

  //Get Page Number
  const handlePageclick = (page) => {
    if (page >= 1 && page <= totalpages) {
      onPageChange(page);
    }
  };

  return (

    < div >
      {Array.from({ length: totalpages }, (_, index) => index + 1).map((page) => (

        <button id="paginationbtn" onClick={() => handlePageclick(page)} key={page}>{page}</button>
      ))
      }

    </div>

  );
};
export default Pagination;