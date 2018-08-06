import React from "react";

const CourseInfo = props => (
  <div>
    <h2>Course: {props.course.name}</h2>
    <h3>Instructor: {props.instructor.name}</h3>
  </div>
)

export default CourseInfo;