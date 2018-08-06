import React from "react";

const Students = (props) => {
  console.log('props   p3t', props)

  var students = props.students.map((student) => {
    return(
      <div id={"student-" + student.id} class="row">
        <div>{student.name}</div>
        <div>{student.email}</div>
        <div>{student.reading_time}</div>
      </div>
    )
  })

  var students

  return(
    <div>{students}</div>
  )

};

export default Students;
