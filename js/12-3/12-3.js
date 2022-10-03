const school = {
    teachers: [
    {
    id: 1,
    name: "Pinchas",
    subjects: ["chemistry", "biology", "physics"],
    students: [],
    capacityLeft: 3,
    },
    {
        id: 2,
        name: "Williams",
        subjects: ["history", "ethics"],
        students: [],
        capacityLeft: 2,
        },
        ],
            students: [
            {
            id: 10,
            name: "Jennifer",
            age: 20,
            },
            {
            id: 11,
            name: "Howard",
            age: 23,
            },
            {
            id: 12,
            name: "Old-Timmy",
            age: 86,
            },
            {
            id:13,
            name: "Houston",
            age: 21,
                },
            ],
            };

function findperson(students ,id){

    const res  = school.students.find(student=>{
        if(student.id== id){
            return console.log(student);
        }
    })

}
findperson(school ,10)


function assignStudent(students ,teachers ,id,subjects){
    const leo = school.students.find(student=> {
    const meo = school.teachers.find(tec=>{

        if(student.id == id){
            
        }



    })

    })
}

