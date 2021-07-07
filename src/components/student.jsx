import React, { Component } from 'react';
import { getStudents } from '../services/studentService';
import Like from './common/like';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate.js';

class Students extends Component{
    state = {
        students : getStudents(),
        currentPage: 1,
        pageSize: 4
    }

    handleDelete = student => {
        const students = this.state.students.filter(s => s._id !== student._id)
        this.setState({students});
    }

    handleLike = student => {
        const students = [...this.state.students];
        const index = students.indexOf(student);
        students[index] = {...students[index]};
        students[index].liked = !students[index].liked;
        this.setState({ students });
    }

    handlePageChange = page =>{ 
        this.setState( {currentPage: page} )   
    }

    render() {
        const { length: count } = this.state.students;
        const { pageSize, currentPage, students: allStudents } = this.state;

        const students = paginate(allStudents, currentPage, pageSize);
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
                    {students.map ( student => (
                        <tr key = {student._id}>
                            <td>{student.name}</td>
                            <td>{student.class.name}</td>
                            <td>{student.age}</td>
                            <td>{student.hobbies}</td>
                            <td>
                                <Like liked={student.liked} onClick={() => this.handleLike(student) } />
                            </td>
                            <td>
                                <button className="btn btn-danger" onClick={() => this.handleDelete(student)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination itemsCount= {count} pageSize ={pageSize} currentPage={currentPage} onPageChange={this.handlePageChange}/>
        </React.Fragment>
        );
    }
}
export default Students;