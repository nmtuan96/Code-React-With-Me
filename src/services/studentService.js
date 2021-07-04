import * as classesAPI from './classService';

const students = [
    {
        _id : "1",
        name: "tuan",
        class: { _id : "1", name: "12A1"},
        age: "18",
        hobbies:"read book, study"
    },
    {
        _id : "2",
        name: "Diệu Ái",
        class: { _id : "2", name: "12A2"},
        age: "18",
        hobbies:"singer"
    }
    ,{
        _id : "3",
        name: "Băng Băng",
        class: { _id : "3", name: "12A3"},
        age: "18",
        hobbies:"dancer"
    },
    {
        _id : "4",
        name: "Kiều Diễm",
        class: { _id : "1", name: "12A1"},
        age: "18",
        hobbies:"acting"
    },
    {
        _id : "5",
        name: "Linh Giang",
        class: { _id : "2", name: "12A2"},
        age: "18",
        hobbies:"lawer"
    },
    {
        _id : "6",
        name: "Ngân Hà",
        class: { _id : "3", name: "12A3"},
        age: "18",
        hobbies:"sleep"
    },
    {
        _id : "7",
        name: "Thanh Lam",
        class: { _id : "1", name: "12A1"},
        age: "18",
        hobbies:"play piano"
    },
    {
        _id : "8",
        name: "Tuệ Mẫn",
        class: { _id : "2", name: "12A2"},
        age: "18",
        hobbies:"alone"
    },
    {
        _id : "9",
        name: "Ngọc Phụng",
        class: { _id : "3", name: "12A3"},
        age: "18",
        hobbies:"swimming"
    },
    {
        _id : "10",
        name: "Linh San",
        class: { _id : "1", name: "12A1"},
        age: "18",
        hobbies:"cosplaying"
    }
];

export function getStudents(){
    return students;
}
