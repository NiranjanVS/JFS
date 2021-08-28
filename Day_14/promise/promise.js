const promise = new Promise((resolve, reject) => {
    setTimeout( () => {
        // complete promise and return respose
        //resolve({user: "venkat"});
        // reject 
        reject(new Error("NO User"))
    }, 3000)
});

promise
    .then( user => console.log(user))
    .catch( err => console.log(err))