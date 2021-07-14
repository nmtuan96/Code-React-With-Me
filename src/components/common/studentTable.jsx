import React, { Component } from 'react';
import Like from './like';
import Table from './table';
import { Link } from 'react-router-dom';

class StudentTable extends Component {
    
    columns = [
        { path: 'name', label: 'Name', content: student => <Link to={`/students/${student._id}`}  >{student.name}</Link>},
        { path: 'class.name', label: 'Class'},
        { path: 'age', label: 'Age'},
        { path: 'hobbies', label: 'Hobbies'},
        { key: 'like', content:student => <Like liked={student.liked} onClick={() => this.props.onLike(student) } />},
        { key: 'delete', content: student => <button className="btn btn-danger" onClick={() => this.props.onDelete(student)}>Delete</button>}
    ]; 
    render(){
        const { students ,sortColumn, onSort} = this.props;
        return ( 
            <Table 
                columns={this.columns} 
                data={students} 
                sortColumn={sortColumn} 
                onSort={onSort}
            />
         );
    }
}
 
export default StudentTable;