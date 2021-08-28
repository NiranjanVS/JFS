//
// Creating Function
function welcome(){
    return "Hey I am a funciton";
    console.log("Test"); // After return statement, next lines won't be called
}
// calling function
//welcome();

// Passing Arguments to function
// var a = 10;
// var b = 20;
// function sum(a, b){
//     return a + b; 
// }

// sum(45,89,90);// additional arguments it will ignore in js
// sum(45);// returns NaN : not a number 

// // sum ;  when you call function without () function returns itself
// // ƒ sum(a, b){
// //     return a + b; 
// // }
// var calc = sum;
// calc(45,78); //123

// arguments is built in array in function 
// passing {n} of arguments to function
function cartTotal(){
    //console.log(arguments)
    var total = 0;

    for(price of arguments){
        total += price;
    }
    return total;
}

//cartTotal(90,99)

// Self Invoking functions
(function(name){
    console.log(name + " How are You?");
})("Venkat")

// Hoisting 
test();
function test(){
    console.log("this is a test funciton");
}

//testOne()
var testOne = function(){
    console.log("this is test function one")
}
testOne();

// 










