// //alert("Hello JavaScript");
// /* 
// */

var firstName = "JavaScript"; //String
// var version = 6; //Number
// firstName != version; // Boolean
// var data = null; // null is a spl data type,  we can assign as a value
// var value; //undefined

// // test 
// // VM4486:1 Uncaught ReferenceError: test is not defined
// //     at <anonymous>:1:1

// //
// var user1, user2, user3 = "ayush", user4;
// user1 = "venkat";

// console.log(user1);

// user1 = "Nisha";

// console.log(user1);

/******************************************************** */

var tools = ["java", "javasript", "css", "html", "jdbc", firstName, [], null, true, 72, {}] ;

var toolSet = [["html","css","js"],["java","spring","springboot"],["mongo","mysql"]]
//console.log(toolSet[0][1])

function welcome(){
    console.log("Hey I am a function")
}

//welcome();

/********************** */
var person = {
    name: "venkat", // number, [], {}, bool, ......
    skills: ["html","css","js","springboot"],
    profession: "Training",
    address: {
        city: "bangalore"
    },
    walk: function(){
      console.log("walking") ;
    }
};

person.name = "nisha";


//person.walk()
////////////////////////////////////////////////////////////

var product = {
    image: "tshirt.jpg",
    offer: "Extra 10%",
    title: "cloths",
    Brand: "Puma"
}

var dealsOfTheDay = [
    {
        image: "tshirt.jpg",
        offer: "Extra 10%",
        title: "cloths",
        Brand: "Puma"
    },
    {
        image: "tshirt.jpg",
        offer: "Extra 10%",
        title: "cloths",
        Brand: "Puma"
    },
    {
        image: "tshirt.jpg",
        offer: "Extra 10%",
        title: "cloths",
        Brand: "Puma"
    },
    {
        image: "tshirt.jpg",
        offer: "Extra 10%",
        title: "cloths",
        Brand: "Puma"
    },
    {
        image: "tshirt.jpg",
        offer: "Extra 10%",
        title: "cloths",
        Brand: "Puma"
    }
]
