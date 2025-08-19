import React from 'react'
import Second from "./Second"

function First() {

let student={
    name:'inderbabu',
    fathername:'deepak',
    mothername:'janvi',
    class:11
}
  return (
    <div>
    <Second data={student}/>

    </div>
  )
}

export default First
