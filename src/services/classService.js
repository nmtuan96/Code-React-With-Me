export const classes = [
    { _id: "1" , name: "12A1"},
    { _id: "2" , name: "12A2"},
    { _id: "3" , name: "12A3"}
]

export function getClass(){
    return classes.filter(c => c );
}