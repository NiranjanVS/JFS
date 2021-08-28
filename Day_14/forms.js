// function validateForm(){
//     let user = document.forms["loginForm"]["username"].value;
//     if(user == "" || user.length <= 5 ){
//         alert("user must be entered and minimum 6 char...")
//         return false;
//     }
// }

var formEl = document.getElementById("loginform");

formEl.addEventListener("submit", submitForm);

function submitForm(e){
    e.preventDefault();
    console.log(" inside form validation")
    //read input values
    var user = document.getElementById("uname").value;
    if(user.length <= 5){
        var uerr = document.getElementById("userErr");
        uerr.innerHTML = "User name should have mini 6 char.........."
        return false;
    }

    var pw = document.getElementById("pw").value;

    var loginFormData =  { "username": user, "password": pw}
    var finalFormdata = JSON.stringify(loginFormData);

    
    var http = new XMLHttpRequest();

    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200 ){
            console.log(this.responseText)
        }
    }

    http.open("POSR", "http://localhost:8080/login", true);
    http.send(finalFormdata);
}

