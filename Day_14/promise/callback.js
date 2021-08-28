//linkedIN
// user login : username, and password -> user id
// get user posts / projects by user id
// get single project details 

function userLogin(user, pw, callback){
    setTimeout( () => {
        console.log("User logged in ")
        callback({username: user})
    }, 3000)
}

function getUserProjects(uname, callback){
    setTimeout( () => {
        console.log("here you get projects of user")
        callback(["project1", "project2", "project3"])
    }, 3000)
}

function getProjectDetails(project, callback){
    setTimeout(() => {
        console.log("Single project details are here")
    },3000)
}

userLogin( "bvsrao", "pw78", (user) => {
    console.log(user);
    getUserProjects(user, (projects) => {
        console.log(projects);
        var proj = projects[0];
        getProjectDetails(proj, () => {
            console.log(proj)
        })
    } )
})