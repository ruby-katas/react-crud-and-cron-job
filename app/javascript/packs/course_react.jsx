// Run this example by adding <%= javascript_pack_tag 'course_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Students from './students_react'
import CourseInfo from './course_info_react'

class CourseMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          course: {},
          students: []
        };
        this.handleUpdate = this.handleUpdate.bind(this);
        this.updateStudent = this.updateStudent.bind(this)
    }

    handleUpdate(student){
        fetch(`http://localhost:3000/api/v1/users/${student.id}`,
        {
            method: 'PUT',
            body: JSON.stringify({user: student}),
            headers: {
            'Content-Type': 'application/json'
        }
        }).then((response) => {
            this.updateStudent(student)
        })
    }

    updateStudent(student){
        let newStudents = this.state.students.filter((f) => f.id !== student.id)
        newStudents.push(student)
        this.setState({
            students: newStudents
        })
    }

    componentDidMount() {
        fetch('/api/v1/courses/index.json')
            .then((response) => {return response.json()})
            .then((data) => {
                this.setState({
                    course: { name: data.name, instructor: data.instructor.name, book: data.book.title} ,
                    students: data.students
                });
                // console.log(JSON.stringify(this.state.students,null,2));
            });
    }

    render(){
        return(
            <div>
                <CourseInfo course={this.state.course} />
                <Students students={this.state.students} handleUpdate = {this.handleUpdate} />
            </div>
        )
    }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <CourseMain/>,
    document.body.appendChild(document.createElement('div')),
  )
})

