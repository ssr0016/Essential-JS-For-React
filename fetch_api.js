//import 

import fetch from "node-fetch";

//Fetch Api
const url = "https://jsonplaceholder.typicode.com/todos/1";

const fetchPromise = fetch(url);

fetchPromise
    .then(response => response.json())
    .then(response => console.log(response));

//para marun ang API kailangan mag npm init, install 
//may lalabas enter mo lang lahat then yes after nyan may lalabas na package.json
//mag install naman tayo ng dependency 
//ilagay sa package.json yong "type" : "module", sinundan ng "main": "index.js"
//tapos import na

