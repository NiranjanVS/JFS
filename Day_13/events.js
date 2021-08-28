// function welcome(){
//     alert("I am an event")
// }

// var btn = document.getElementById("btn");
// //btn.onclick = welcome;

// //element.addEventListener(event,function?,ture/false)

// btn.addEventListener("click", welcome);

var p1 = document.getElementById("parent1");
var p2 = document.getElementById("parent2");
var c1 =  document.getElementById("child1");
var c2 =  document.getElementById("child2");
var anc = document.getElementById("anc");

function messageOne(e){
    
    //console.log("This message from Parent")
    //console.log(e.target); // where event triggered
    console.log(e.currentTarget);// where / on which element event attached
}
function messageTwo(e){
    e.stopPropagation()
    console.log("This message from Child")
}

function messageThree(e){

    if(false){
        e.stopImmediatePropagation()
    }
    console.log("This is 3rd message from Parent ")
}

function messageFour(e){
    e.preventDefault();
    console.log("This is 4th message from Parent ")
}

anc.addEventListener("click", messageFour);
// By default Bubblig phase
p1.addEventListener("click", messageOne);
// p1.addEventListener("click", messageThree);
// p1.addEventListener("click", messageFour);
//c1.addEventListener("click", messageTwo);

//p2.addEventListener("click", messageOne, true); // enable top to bottom approach
// p2.addEventListener("click", messageOne);
// c2.addEventListener("click", messageTwo);