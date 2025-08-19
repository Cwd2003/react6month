import React from 'react'

function Show({employees}) {
  return (
    <div>
        <div>
      <h2>Employee Data</h2>
      <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", marginTop: "10px" }}>
        <thead>
          <tr>
            <th>Joining Date</th>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
         {employees.map((emp, index) => (
            <tr key={index}>
              <td>{emp.jdate}</td>
              <td>{emp.name}</td>
              <td>{emp.dob}</td>
              <td>{emp.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default Show
