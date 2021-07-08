import * as classesAPI from './classService';

const students = [
    {
        _id : "1",
        name: "tuan",
        class: { _id : "1", name: "12A1"},
        age: "18",
        hobbies:"read book, study",
        liked: false
    },
    {
        _id : "2",
        name: "Diệu Ái",
        class: { _id : "2", name: "12A2"},
        age: "18",
        hobbies:"singer",
        liked: false
    }
    ,{
        _id : "3",
        name: "Băng Băng",
        class: { _id : "3", name: "12A3"},
        age: "18",
        hobbies:"dancer",
        liked: false
    },
    {
        _id : "4",
        name: "Kiều Diễm",
        class: { _id : "1", name: "12A1"},
        age: "18",
        hobbies:"acting",
        liked: false
    },
    {
        _id : "5",
        name: "Linh Giang",
        class: { _id : "2", name: "12A2"},
        age: "18",
        hobbies:"lawer",
        liked: false
    },
    {
        _id : "6",
        name: "Ngân Hà",
        class: { _id : "3", name: "12A3"},
        age: "18",
        hobbies:"sleep",
        liked: false
    },
    {
        _id : "7",
        name: "Thanh Lam",
        class: { _id : "1", name: "12A1"},
        age: "18",
        hobbies:"play piano",
        liked: false
    },
    {
        _id : "8",
        name: "Tuệ Mẫn",
        class: { _id : "2", name: "12A2"},
        age: "18",
        hobbies:"alone",
        liked: false
    },
    {
        _id : "9",
        name: "Ngọc Phụng",
        class: { _id : "3", name: "12A3"},
        age: "18",
        hobbies:"swimming",
        liked: false
    },
    {
        _id : "10",
        name: "Linh San",
        class: { _id : "1", name: "12A1"},
        age: "18",
        hobbies:"cosplaying",
        liked: false
    }
];

export function getStudents(){
    return students;
}
