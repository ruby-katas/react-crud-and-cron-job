import React from "react";

const CourseInfo = props => (
  <div>
    <h2>Course: {props.course.name}</h2>
    <h3>Instructor: {props.course.instructor}, Book: {props.course.book}</h3>
  </div>
)

export default CourseInfo;