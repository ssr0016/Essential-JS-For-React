//spread operators

//gamit ang spread operators pwede mong ilagay ang value ng isang arraw to another array
//ex.
const body = ["head", "knees"];
const completeBody = ["Toes", "Shoulder", ...body];

// console.log(completeBody)

// ----------------------
//create an object
const person = {
    name: "John Doe",
    age: 21,
};

const contactPerson = {
    contactNumber: "09462276659",
    ...person,
};

// console.log(contactPerson);

// -----------------


//Paano gamitin ang spread operators in function

const numbers = [1,2,3];


function sum(a,b,c){
    return a + b + c;
}

//first way without using spread operators...
// console.log(sum(numbers[0],numbers[1],numbers[2]));


//another way and it is the best practice
console.log(sum(...numbers));
