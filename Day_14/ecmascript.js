// let name = "venkat"; // block scope
// var tool = "js"; // global scope

// const name = "venkat";
// //name = "Neha"; 

// const tools = ["html", "css", "js", "springboot"];
// tools.push("mongodb")
//tools = {}

/////////////// ARROW FUNCTIONS

//let displayData = () => "I am a function";

//default values of args
// function add(a, b = 5){
//     console.log(a + b)
// }

//// Objects behaviour

// var name = "venkat";
// var prof = "trainer";

// var person = {
//     name, 
//     prof,
//     "get Name"(){
//         return this.name
//     },
//     getProf(){
//         return this.prof
//     }
// }

/////////////////// DeStructuring 

let tools = ["html", "css", "js", "springboot"];

// var a = tools[0]
// var b = tools[1]

var [a,b] = tools;

var product = {
    brand: "motorola",
    ram: "12gb",
    processor: "SD888+",
    cam: "108pxZesis"
}

var {brand, ram } = product;

// Template literals ////////////////////////////

var message = `Mobile brand is ${brand} and ram capacity is ${ram}`;

// Rest and spread operator 

//var pricesArray = [45, 56,679,898];


function getCartTotal(...pricesArray){
    var total = 0; 

    for( itemPrice of pricesArray){
        total += itemPrice
    }

    return total;
}

var nums = [45, 56,679,898]




