// 2 types of data types
// 1. primitive
// 2. reference

//This is primitive
//string
let message = "Hello World";
//number, interger
let age = 10;
//boolean
let isBoolean = true;


//This is reference

//1. object or reference type
let person = {
    //properties
    name: "John Doe",
    age: 21,
};

// console.log(person.name, person.age)
//another way to access the properties of the object
// console.log(person["name"], person["age"]);

//2. Array

let fruits = ["Apple", "Orange", "Durian"];
//how to access the values of the array?
//You can access the array element or value through index

console.log(fruits[0])


//another data type is function

let add = function(a , b){
    return a + b;
};

console.log(add(1,2));





