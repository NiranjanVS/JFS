var name = 'JavaScript';

// // Lexical Scope
// function init(){
//     var name = "JavaSCript"; // Name is a local variable created by init
//     function printName(){ // inner function , a closure
//         console.log(name) // use variable declared in the parent 
//     }
//     printName()
// }

// init();

// Closure

// function init(){

//     var name = "JavaSCript"; 

//     function printName(){
//         console.log(name) 
//     }

//     return printName()
// }

// var func = init()
// func();
//////////////////////////////////

///var counter = 0;

// fn to increment counter
// function calc(){
//     var counter = 0; // counter value will reset
//     console.log(counter += 1)
// }

// calc()
// calc()
// calc()
/////////////////////////////////////////


// Nested function

// function calc(){
//     var counter = 0; 

//     function sum(){
//         counter += 1; 
//         return counter;
//     }

//     return sum();
// }

// var test = calc()

var calc = (function(){
    var counter = 0;
    return function(){ 
        counter +=1; 
        return counter;
    }
})()

console.log(calc())
console.log(calc())
console.log(calc())
console.log(calc())











