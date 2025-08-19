import React from "react";
import Math from "./assets/Math";
import Hindi from "./assets/Hindi";
import English from "./assets/English";


function App() {
  const students = [
    { roll: 1, name: "Aman", english: 78, hindi: 85, math: 90 },
    { roll: 2, name: "Priya", english: 88, hindi: 70, math: 95 },
    { roll: 3, name: "Ravi", english: 60, hindi: 75, math: 80 },
  ];

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Student Marks Average</h1>
      <div className="row">
        <div className="col-md-4">
          <English students={students} />
        </div>
        <div className="col-md-4">
          <Hindi students={students} />
        </div>
        <div className="col-md-4">
          <Math students={students} />
        </div>
      </div>
    </div>
  );
}

export default App;
