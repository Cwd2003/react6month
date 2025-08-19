import React from 'react';
import Show from './Show';

function Data() {
  const employees = [
    { jdate: "12-08-2025", name: "Inderjit", dob: "26-09-2003", status: "Active" },
    { jdate: "15-08-2024", name: "Priya", dob: "10-05-2002", status: "Active" },
    { jdate: "01-01-2023", name: "Ravi", dob: "20-11-2001", status: "Inactive" },
    { jdate: "05-07-2022", name: "Aman", dob: "02-02-2000", status: "Active" },
    { jdate: "20-12-2021", name: "Sneha", dob: "14-04-2004", status: "Active" }
  ];
return(
    <div>
        <Show employees ={employees}/>

    </div>
);
}

export default Data;
