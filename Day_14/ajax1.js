function loadData(){
    var http = new XMLHttpRequest();

    console.log(http.readyState)

    http.onreadystatechange = function(){
    console.log(http.readyState)
        if(this.readyState == 4 && this.status == 200 ){
            processNames(this.responseText)
        }
    }

    http.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    http.send();
}

function processNames(data){
    var el = document.getElementById('data'); // Read element

    var users = JSON.parse(data);// parse response as json
        
    var output = ""; // output initial data

    for(user of users){ // looping over response
        output += "<div>"+ user.name +"</div>"; // constructing ui 
    }

    el.innerHTML = output;// update output in element

}

var btn =  document.getElementById("btn");
btn.addEventListener("click", loadData);

