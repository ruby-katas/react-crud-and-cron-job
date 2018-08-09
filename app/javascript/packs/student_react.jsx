import React from "react";

class Student extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      editable: false
    }
    this.handleEdit = this.handleEdit.bind(this)
  }

  handleEdit(){
   if(this.state.editable){
      let name = this.name.value
      let email = this.email.value
      let id = this.props.student.id
      let student = {id: id, name: name, email: email}
      this.props.handleUpdate(student)
    }
    this.setState({
      editable: !this.state.editable
    })
  }

  render(){
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
        backgroundColor: '#fff',
    }
    let name = this.state.editable ? <input type='text' ref={input => this.name = input} defaultValue={this.props.student.name}/> : <span>{this.props.student.name}</span>
    let email = this.state.editable ? <input type='text' ref={input => this.email = input} placeholder="enter current email" /> : <span>{this.props.student.email}</span>
    return(
      <div id={"student-" + this.props.student.id} style={divRow}>
        <div style={divCell}>{name}</div>
        <div style={divCell}>{email}</div>
        <div style={divCell}>{this.props.student.reading_time}</div>
        <div style={divCell}><button onClick={() => this.handleEdit()}>{this.state.editable? 'Submit' : 'Edit'}</button></div>
      </div>
    )
  }
}

export default Student;
