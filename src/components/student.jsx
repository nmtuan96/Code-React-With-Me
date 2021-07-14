import React, { Component } from 'react';
import { getStudents } from '../services/studentService';
import ListGroup from './common/listGroup';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate.js';
import { getClass } from '../services/classService';
import StudentTable from './common/studentTable';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import SearchBox from './searchBox';

class Students extends Component{
    state = {
        students : [],
        classes: [],
        currentPage: 1,
        pageSize: 4,
        searchQuery: "",
        sortColumn: {path:'title', order: 'asc'}
    };

    handleDelete = student => {
        const students = this.state.students.filter(s => s._id !== student._id)
        this.setState({students});
    };

    handleLike = student => {
        const students = [...this.state.students];
        const index = students.indexOf(student);
        students[index] = {...students[index]};
        students[index].liked = !students[index].liked;
        this.setState({ students });
    };

    handlePageChange = page =>{ 
        this.setState( {currentPage: page} )   
    };

    componentDidMount(){
        const classes = [{_id:"", name: "All Class"}, ...getClass()]
        this.setState({students:getStudents(), classes});
    };

    handleClassSelect = classs =>{
        this.setState({ selectedClass: classs, currentPage:1})
    };

    handleSort = sortColumn =>{
        this.setState({ sortColumn });
    };
    getPageData =() =>{
        const { pageSize, currentPage, sortColumn ,students: allStudents, selectedClass, searchQuery } = this.state;
        let filtered = allStudents;
        if (searchQuery){
            filtered = allStudents.filter(m =>
                m.name.toLowerCase().startsWith(searchQuery.toLowerCase())
                );
        }else if (selectedClass && selectedClass._id){
            filtered = allStudents.filter(m => m.class._id === selectedClass._id);
        }
        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
        const students = paginate(sorted, currentPage, pageSize);
        return {totalCount: filtered.length , data: students };
    }
    handleSearch = query => {
        this.setState({ searchQuery: query, selectedClass: null, currentPage: 1});
    }

    render() {
        const { length: count } = this.state.students;
        const { pageSize, currentPage, sortColumn, searchQuery} = this.state;

        const {totalCount, data: students} = this.getPageData();
        if( count === 0 ) return <p>There are no student!</p>
        return(
            <div className="row">
                <div className="col-2">
                    <ListGroup 
                        items={this.state.classes}
                        selectedClass ={this.state.selectedClass}
                        onClassSelect ={this.handleClassSelect}
                    />
                </div>
                <div className="col">
                    <Link 
                        to="/students/new" 
                        className="btn btn-primary"
                    >
                        New Student
                    </Link>
                    <p>total {totalCount} current.</p>
                    <SearchBox value={searchQuery} onChange={this.handleSearch}/>
                    <StudentTable 
                        students={students} 
                        onDelete={this.handleDelete}
                        onLike={this.handleLike}
                        sortColumn = {sortColumn}
                        onSort= {this.handleSort}
                    />
                    <Pagination 
                        itemsCount= {totalCount} 
                        pageSize ={pageSize} 
                        currentPage={currentPage} 
                        onPageChange={this.handlePageChange}
                    />
                </div>
            </div>
        );
    };
}
export default Students;