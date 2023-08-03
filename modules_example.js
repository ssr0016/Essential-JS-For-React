// in javascript we have 2 kinds of export una named export and we have default export


//pwde ding ganito export const name = "jesse";
// export const name = "Jesse";
// export const age = 40;

//dito iniexport mo sila by name
// export { name, age };
// ito ang unang way


//ito naman ang another way default export

function message(){
    const name = "Jesse";
    const age = 40;
    return name + " " + age;
}

export default message;