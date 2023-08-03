//array methods


let salad = ["Macaroni","Nestle Cream","Condensed Milk","Cheese"];


//1) Push - inserts an element into an array
// salad.push("Coke");

//2) Pop - the easiest way to remove a single element from array
// sa pop method and na reremove ay laging nasa huli or last value ng array
// salad.pop();
// console.log(salad)

//3) splice -  method changes the  contents of an array by removing or replacing 
            //existing elements and/or adding new elements in place

// const months = ["Jan","March","April","June"]

// months.splice(1, 0, "Feb");
// console.log(months)

// months.splice(4, 1, "May");
// console.log(months);

//4 includes - method determines whether an array includes 
            //a certain value among its entries, returning true or false as approiate
//dito sa includes chinecheck niya kung talagan naka entry yong value sa array
// console.log(months.includes("Feb"));

//5 slice - The slice() method returns a shallow copy of a 
            //portion of an array into a new array object selected  from start to end

const months = ["Jan","March","April","June"]
//note start in slice (index 0, dito naman mag start na talaga sa 1)
// console.log(months.slice(1, 3)); it is positive values

console.log(months.slice(-2));



