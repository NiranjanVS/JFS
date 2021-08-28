//linkedIN
// user login : username, and password -> user id
// get user posts / projects by user id
// get single project details 

function userLogin(user, pw){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            console.log("User logged in ")
            resolve({username: user})
        }, 3000)
    })
}

function getUserProjects(uname){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            console.log("here you get projects of user")
            resolve(["project1", "project2", "project3"])
        }, 3000)
    })
}

function getProjectDetails(project){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Single project details are here")
        },3000)
    })
}

// userLogin("bvsrao", "879sjlku")
//     .then( user => getUserProjects(user))
//     .then( projects => getProjectDetails(projects[0]))
//     .then( details => console.log(details))
//     .catch(err => console.log(err))

// Async await

async function displayProject(){
    try {
        let loggedInUser = await userLogin("bvsrao", "8989");
        let projects = await getUserProjects(loggedInUser);
        let projectDetails = await getProjectDetails(projects[0]);
        console.log(projectDetails);
    } catch (error) {
        console.log(error.message)
    }
}
displayProject()