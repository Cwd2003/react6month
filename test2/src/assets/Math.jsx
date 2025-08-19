import React from "react";

function Math({ students }) {
  const avg =
    students.reduce((sum, s) => sum + s.math, 0) / students.length;

  return (
    <div className="card shadow p-3">
      <div className="card-body text-center">
        <h3 className="card-title">Math</h3>
        <p>Average Marks: {avg.toFixed(2)}</p>

        <button
          className="btn btn-danger mb-3"
          data-bs-toggle="collapse"
          data-bs-target="#mathDetails"
        >
          Show Details
        </button>

        <div id="mathDetails" className="collapse">
          {students.map((s) => (
            <div key={s.roll} className="border rounded p-2 mb-2 text-start">
              <p><b>Roll No:</b> {s.roll}</p>
              <p><b>Name:</b> {s.name}</p>
              <p><b>Marks:</b> {s.math} / 100</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Math;
