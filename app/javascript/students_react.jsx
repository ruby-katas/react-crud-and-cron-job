import React from "react";

const Students = (props) => {
  // console.log('props', props)

  const divTable = {
    display:  'table',
    width: 'auto',
    'background-color': '#eee',
    border: '1px solid  #ccc',
    'border-spacing': '5px', /*cellspacing:poor IE support for  this*/
     /* border-collapse:separate;*/
  }

  const divRow = {
     display:'table-row',
     width: 'auto',
  }

  const divCell = {
      float: 'left', /*fix for  buggy browsers*/
      display: 'table-column',
      width: '200px',
      padding: '5px',
      border: '1px',
      'background-color': '#fff',
  }

  var students = props.students.map((student) => {
    return(
      <div id={"student-" + student.id} style={divRow}>
        <div style={divCell}>{student.name}</div>
        <div style={divCell}>{student.email}</div>
        <div style={divCell}>{student.reading_time}</div>
        <div style={divCell}></div>
      </div>
    )
  })

  var students

  return(
    <div>
      <h2>Students</h2>
      <div style={divTable}>
      <div style={divRow}>
        <div style={divCell}><strong>Student</strong></div>
        <div style={divCell}><strong>Email</strong></div>
        <div style={divCell}><strong>Reading time [mins]</strong></div>
        <div style={divCell}><strong>Reading time [mins]</strong></div>
      </div>
      {students}
      </div>
    </div>
  )

};

export default Students;
