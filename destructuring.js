//destructuring... is pinabilsi siya sa pagkuha ng mga values or element

const objects = ["table", "phone","apple","test", 30];

// const [furniture, phone,fruit,test, age] = objects;
// console.log(furniture, phone, fruit, test, age);

//try natin paano gumagana ang destructuring sa data type of object
// let us give an example of person object
const person = {
    name: "John Doe",
    age: 21,
    birthDate: new Date(),
    status: "Single",
};

// let name = person.name;
// let age = person.age;
// let birthDate = person.birthDate;
// let status = person.status;

//New ways and it is the best practice

const {name, age, birthDate, status} = person;

console.log(name, age, birthDate, status);



