import React from 'react'
import Third from './Third';
function Second(props) {
const students = [
    {
      ...props.data, // use data from First.jsx
      rollno: 1,
      marks: 90
    },
    {
      name: 'Ravi',
      fathername: 'Mahesh',
      mothername: 'Kiran',
      class: 10,
      rollno: 2,
      marks: 25
    },
    {
      name: 'Anjali',
      fathername: 'Raj',
      mothername: 'Sita',
      class: 12,
      rollno: 3,
      marks: 55
    },
    {
      name: 'Meena',
      fathername: 'Suresh',
      mothername: 'Radha',
      class: 11,
      rollno: 4,
      marks: 32
    },
    {
      name: 'Aman',
      fathername: 'Dev',
      mothername: 'Gita',
      class: 11,
      rollno: 5,
      marks: 65
    }
  ];


  return (
    <div>
      <form>
        <label>name:</label>
        <input type="text" name="name" value={props.data.name} readOnly/>
        <br />
         <label>Father name:</label>
        <input type="text" name="name" value={props.data.fathername} readOnly/>
        <br />
         <label>Mother name:</label>
        <input type="text" name="name" value={props.data.mothername} readOnly/>
        <br />
         <label>Class:</label>
        <input type="text" name="name" value={props.data.class} readOnly/>

      </form>

      <Third students={students} />

      
    </div>
  )
}

export default Second

