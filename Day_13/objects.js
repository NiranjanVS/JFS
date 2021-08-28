// Singleton Pattern 
/*
var person = {
    name: "venkat",
    prof: "Training",
    getName: function(){
        return this.name;
    }
}

person.skills = ["html","css","frontend","backend","database","devops"]
person.getProfssion = function(){
    return this.prof;
}

var p1 = Object.create(person);

p1.name = "Nisha";
*/
// Constructor Pattern 

function Laptop(brand, color, ram){
    this.brand = brand;
    this.color = color;
    this.ram = ram;
    this.getLaptopInfo = function(){
        return "Laptop Brand is: " + this.brand + ", color is: " + this.color + ", ram: " + this.ram;
    }
}

Laptop.prototype.os = "DOS"; 

var laptopOne = new Laptop("Lenovo", "Black", "16GB");
var laptopTwo = new Laptop("Lenovo", "Black", "16GB");

var tools = new Array("html","css","java");

tools.length

// Prototype Pattern

constructor
prototype 
length
