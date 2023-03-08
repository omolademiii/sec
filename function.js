//syntax for function


//function(parameters) {
//instruction
//}


//defining a function

function bottleCapper (bottle, cap) {
    // return bottle + cap //shorthand
    let result = bottle + " and " +cap;// instruction
    return result //output
}


//to call/run/execute/invoke
let cocacolaBottle = bottleCapper( 'bottle', 'cap' )
console.log(cocacolaBottle)

//two ways to define a function
// -Function declaration
function bottleCapper (bottle,cap) {
    // return bottle + cap //shorthand
    let result = bottle + " and " +cap;
    return result
}


//function expression
//name of the function does not come after the function key
// the variable that the function is assigned to becomes a function name
const bottleCapper2 = function (bottle, cap) {
    let result = bottle = " and " + cap;
    return result;
}

let spriteBottle = bottleCapper2( 'transparent bottle', 'green cap');
console.log(spriteBottle)

//Function expression using arrow method / Arrow function expression
//=> replaces the function keyword
//the {} is optional and whenever you use the arrow function without the curly braces,you do not need "return" e.g
const bottleCapper3 = (bottle, cap) => bottle = " and " + cap;
const fantaBottle = bottleCapper3('transparent bottle', 'Orange cap')
console.log(fantaBottle)

//or
//const bottleCapper3 = (bottle, cap) => {
    //return bottle = " and " + cap;
//}
//const fantaBottle = bottleCapper3('transparent bottle', 'Orange cap')
//console.log(fantaBottle)


