//Ajax : Asynchronous JavaScript and XML
function loadData(){
    var http = new XMLHttpRequest(); //init
    
    console.log(http.readyState)

    // recieve response
    // defines a function to be called when the request is received / loaded
    http.onload = function(){
        console.log(http.readyState)
        var el= document.getElementById("data");
        
        el.innerHTML = this.responseText;
    }

    http.open("GET", "simple.txt", true); // configuration
    http.send(); // making server request
}

var btn =  document.getElementById("btn");
btn.addEventListener("click", loadData);
//ajax props

// onload 
// readySTate : 5 states 
//     0: request not initialized 
//     1: server conection established
//     2: Request is recieved
//     3: processing request 
//     4: request is finished and response is ready 

///onreadystatechange: defines a function to be called when readystate property changes
// status : 200.. 
// statusText : OK 
// 404 : not found


