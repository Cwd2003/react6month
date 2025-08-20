import { React, useState } from 'react'

function Show({ employees }) {
  // create local state to manage employees
  const [empList, setEmpList] = useState(employees);

  // function to toggle status
  const toggleStatus = (index) => {
    const updated = empList.map((emp, i) =>
      i === index ? { ...emp, status: emp.status === "Active" ? "Inactive" : "Active" } : emp
    );
    setEmpList(updated);
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", marginTop: "20px" }}>
        <h2 style={{ textAlign: "center" }}>Employee Data</h2>
        <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", marginTop: "10px" }}>
          {/* table content */}

          <thead>
            <tr>
              <th>Joining Date</th>
              <th>Name</th>
              <th>Date of Birth</th>
              <th>Status</th>
              <th>Action</th>

            </tr>
          </thead>
          <tbody>
            {empList.map((emp, index) => (
              <tr key={index}>
                <td>{emp.jdate}</td>
                <td>{emp.name}</td>
                <td>{emp.dob}</td>
                <td>{emp.status}</td>
                <td>
                  <button
                    style={{
                      padding: "5px 10px",
                      backgroundColor: emp.status === "Active" ? "green" : "red",

                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer"
                    }}
                    onClick={() => toggleStatus(index)}
                  >
                    {emp.status === "Active" ? "Deactivate" : "Activate"}
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Show
