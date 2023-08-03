//Async and await in javascript
// async and await is a much cleaner way than using javascript Promises

//import 
import fetch from "node-fetch";

//Fetch Api
const url = "https://jsonplaceholder.typicode.com/todos/1";

//take no ang await ginagamit lang sa function body... at hindi magagamit ang await kung hindi naka declare ang async 
const fetchPromise = async() => {
    const res = await fetch(url);
    const response = await res.json();
    console.log(response);
};

fetchPromise();