//array iterators

//let say may roon tayo ng object na arrays
//ang aray may mga object values siya
let students = [
    {
        id: 1,
        f_name: "Alex",
        l_name: "B",
        gender: "M",
        married: false,
        age: 22,
        paid: 250,
        course: ["JavaScript", "React"],
    },
    {
        id: 2,
        f_name: "Ibrahim",
        l_name: "M",
        gender: "M",
        married: true,
        age: 32,
        paid: 0,
        course: ["JavaScript", "PWA"],

    },
    {
        id: 3,
        f_name: "Rubi",
        l_name: "S",
        gender: "F",
        married: false,
        age: 27,
        paid: 350,
        course: ["Blogging", "React", "UX"],
    },
]

//array iterators it allows you to mag iterate or mag  loops sa iyong arrays

//1. map()
// students.map((student, index)=> {
//     console.log(index, student);
// })

//note kung gusto mong ilagay sa panibagong array ang yong array mo ganito siya gagawin

const newStudents = students.map((student, index)=> {
    console.log(index, student);
});
// console.log(newStudents);


//2. filter method - its filtering out kung ano ang arguements na pinasa mo at yon lang ang irereturn mo base sa arguments na yon
const newStudents1 = students.filter((student, index) => student.paid);
// console.log(newStudents1);

//3. some method - it will return boolean...true or false depende sa kondisyon at may roon ang array object
let hasStudentBelow30 = students.some((student, index) => student.age < 30);
// console.log(hasStudentBelow30);


//4. find method - hahanapin ang tumama sa values na makikita sa array or object yon ang makikita

let studentAbove30 = students.find((student, index)=> student.age > 30); 
// console.log(studentAbove30);

//5. reduce - pwde mo makuha ang total cost using reduce at depende sa pagkakagamit mo dito...


let totalCost = students.reduce(
    //loop
    (accumulator, student, currenIndex, students)=> {
        accumulator = accumulator + student.paid;
        return accumulator;
    },
    0 
);

console.log(totalCost);