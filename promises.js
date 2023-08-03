//promises - allows you to handle asyncronous operation in javasript
//what is asyncronous operation - it takes a longer time to finish... usually sa API request 
//and javascript allows you to do other things than waiting for those to finish.ganon din sa promises

//paramenters resolve, reject 
let promise  = new Promise((resolve, reject) =>{
    const i = "Promise";
    i === "Promise" ? resolve() : reject();
});

//kapag totoo ang promise mapupunta sa .then() kapag hinde .catch()
promise
    .then(() => console.log("Promise was resolved"))
    .catch(()=> console.log("Promise was rejected"));





