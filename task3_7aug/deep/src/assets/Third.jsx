import React from 'react';

function Third(props) {
  const students = props.students;

  const failed = students.filter(s => s.marks < 33);
  const average = students.filter(s => s.marks >= 33 && s.marks < 60);
  const toppers = students.filter(s => s.marks >= 60);

  return (
    <div>
      <h3>All Students</h3>
      <table border="1">
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Father Name</th>
            <th>Mother Name</th>
            <th>Class</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s, i) => (
            <tr key={i}>
              <td>{s.rollno}</td>
              <td>{s.name}</td>
              <td>{s.fathername}</td>
              <td>{s.mothername}</td>
              <td>{s.class}</td>
              <td>{s.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Failing Students (Marks &lt; 33)</h3>
      <table border="1">
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {failed.map((s, i) => (
            <tr key={i}>
              <td>{s.rollno}</td>
              <td>{s.name}</td>
              <td>{s.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Average Students (Marks 33 - 59)</h3>
      <table border="1">
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {average.map((s, i) => (
            <tr key={i}>
              <td>{s.rollno}</td>
              <td>{s.name}</td>
              <td>{s.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Topper Students (Marks ≥ 60)</h3>
      <table border="1">
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {toppers.map((s, i) => (
            <tr key={i}>
              <td>{s.rollno}</td>
              <td>{s.name}</td>
              <td>{s.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Third;
