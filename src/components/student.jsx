import React, { Component } from 'react';
import { getStudents } from '../services/studentService';
import Like from './common/like';

class Students extends Component{
    state = {
        students : getStudents()
    }
    handleDelete = student => {
        const students = this.state.students.filter(s => s._id !== student._id)
        this.setState({students});
    }
    render() {
        const { length: count } = this.state.students;
        if( count === 0 ) return <p>There are no student!</p>
        return(
            <React.Fragment>
            <p>total {count} current.</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Class</th>
                        <th>Age</th>
                        <th>Hobbies</th>
                        <th/>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.students.map ( student => (
                        <tr key = {student._id}>
                            <td>{student.name}</td>
                            <td>{student.class.name}</td>
                            <td>{student.age}</td>
                            <td>{student.hobbies}</td>
                            <td>
                            <i className="fa fa-heart" aria-hidden="true"></i>
                            </td>
                            <td><button className="btn btn-danger" onClick={() => this.handleDelete(student)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </React.Fragment>
        );
    }
}
export default Students;