import * as classesAPI from './classService';

const students = [
    {
        _id : "1",
        name: "tuan",
        class: { _id : "1", name: "12A1"},
        age: 18,
        hobbies:"read book, study",
        liked: false
    },
    {
        _id : "2",
        name: "Diệu Ái",
        class: { _id : "2", name: "12A2"},
        age: 18,
        hobbies:"singer",
        liked: false
    }
    ,{
        _id : "3",
        name: "Băng Băng",
        class: { _id : "3", name: "12A3"},
        age: 18,
        hobbies:"dancer",
        liked: false
    },
    {
        _id : "4",
        name: "Kiều Diễm",
        class: { _id : "1", name: "12A1"},
        age: 18,
        hobbies:"acting",
        liked: false
    },
    {
        _id : "5",
        name: "Linh Giang",
        class: { _id : "2", name: "12A2"},
        age: 18,
        hobbies:"lawer",
        liked: false
    },
    {
        _id : "6",
        name: "Ngân Hà",
        class: { _id : "3", name: "12A3"},
        age: 18,
        hobbies:"sleep",
        liked: false
    },
    {
        _id : "7",
        name: "Thanh Lam",
        class: { _id : "1", name: "12A1"},
        age: 18,
        hobbies:"play piano",
        liked: false
    },
    {
        _id : "8",
        name: "Tuệ Mẫn",
        class: { _id : "2", name: "12A2"},
        age: 18,
        hobbies:"alone",
        liked: false
    },
    {
        _id : "9",
        name: "Ngọc Phụng",
        class: { _id : "3", name: "12A3"},
        age: 18,
        hobbies:"swimming",
        liked: false
    },
    {
        _id : "10",
        name: "Linh San",
        class: { _id : "1", name: "12A1"},
        age: 18,
        hobbies:"cosplaying",
        liked: false
    }
];

export function getStudents(){
    return students;
}

export function saveStudent(student){
    let studentInDb = students.find(m => m._id === student._id) || {};
    studentInDb.name = student.name;
    studentInDb.class = classesAPI.classes.find(c => c._id === student.classId);
    studentInDb.age = student.age;
    studentInDb.hobbies = student.hobbies;

    if(!studentInDb._id){
        studentInDb._id = students.length + 1 +"";
        students.push(studentInDb);
    }
    return studentInDb;
}

export function findStudentById(id){
    return students.find( m => m._id === id);
}

export function deleteStudent(id){
    let studentInDb = students.find(m => m._id === id);
    students.splice(students.indexOf(studentInDb),1);
    return studentInDb;
}