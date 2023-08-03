//Ternary operators

//This is the syntax
// condition ? true : false;

let isHot = true;

let condition = isHot ? "It is very Hot!" : "No, it is Cold!";
// console.log(condition);

//Another ternary operator
//if else statement

let grade = 70;
let mark = "";

if(grade >= 90){
    mark = "A";
}else if(grade >= 80){
    mark = "B";
}else if(grade>= 70){
    mark = "C";
}else{
    mark = "F";
}

const finalMark =
 grade >=90 ? "A" : grade >= 80 ? "B" : grade >= 70 ? "C" : "F";

console.log(finalMark)