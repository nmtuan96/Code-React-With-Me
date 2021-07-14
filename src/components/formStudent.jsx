import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import { findStudentById, getStudents, saveStudent } from '../services/studentService';
import { getClass } from '../services/classService';

class StudentForm extends Form {
    state = { 
        data: {
            name: "",
            classId: "",
            age: "",
            hobbies: ""
        },
        classes: [],
        errors: {}
    }
    schema = {
        _id: Joi.string(),
        name: Joi.string().required().label('Name'),
        classId: Joi.string().required().label('Class'),
        age: Joi.number().required().label('Age'),
        hobbies: Joi.string().required().label('Hobbies')
    }

    componentDidMount(){
        debugger;
        const classes = getClass();
        this.setState({ classes });

        const studentId = this.props.match.params.id;
        if (studentId === "new") return;

        const student = findStudentById(studentId);
        if (!student) return this.props.history.replace("/not-found");

        this.setState({ data: this.mapToViewModel(student) });
        
    }

    mapToViewModel(student){
        return{
            _id: student._id,
            name: student.name,
            classId: student.class._id,
            age: student.age,
            hobbies: student.hobbies
        }
    }

    doSubmit = () => {
        saveStudent(this.state.data);
        this.props.history.push('/students')
    }

    render() { 
        return ( 
            <div>
                <h1>Student Form</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("name", "Name")}
                    {this.renderSelect("classId", "Class", this.state.classes)}
                    {this.renderInput("age", "Age", "number")}
                    {this.renderInput("hobbies", "Hobbies")}
                    {this.renderButton("Save")}
                </form>
            </div>
         );
    }
}
 
export default StudentForm;