import React from "react";
import Student from './student_react'

const Students = (props) => {

  const divTable = {
    display:  'table',
    width: 'auto',
    backgroundColor: '#eee',
    border: '1px solid  #ccc',
    borderSpacing: '5px', /*cellspacing:poor IE support for  this*/
     /* border-collapse:separate;*/
  }

  var students = props.students.map((student) => {
    return(
      <div key={student.id} style={divTable} >
       <Student student={student} handleUpdate={props.handleUpdate}/>
      </div>
    )
  })

  return(
      <div>
        {students}
      </div>
    )
}

export default Students;
