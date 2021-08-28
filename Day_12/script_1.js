// Document Object Model : DOM :  document //

// Create Element 
var divEl = document.createElement("div");

// Add Div to body
document.body.appendChild(divEl);

//Create Text Node
var data = document.createTextNode("Dynamic Text");

// Append text node to div
divEl.appendChild(data);

// Add Attributes to div
divEl.setAttribute("id", "content");

// Remove Div element
// divEl.remove();

// console.log(divEl.innerText)
// divEl.innerText ="new updated text";
// console.log(divEl.innerText)

console.log(divEl.innerHTML);
var name = "venkat";

divEl.innerHTML = "<p>Hey "+ name +"  This is a paragraph content </p>";

// reading element 

var el = document.getElementById("content"); 

el.innerHTML = "new text";