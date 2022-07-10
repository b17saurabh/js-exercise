// Create an application with following roles:
// admin - gets full access
// subadmin - gets avvess to create/delete courses
// testprep - gets access to create/delete tests
// user - gets access to consume content

var user = "admin";

switch (user) {
    case "admin":
        console.log("You get full access");
        break;
    case "subadmin":
        console.log("You get access to create/delete course");
        break;    
    case "testprep":
        console.log("You get access to create/delete tests");
        break;
    case "user":
        console.log("You get access you consume content");
        break;    
        
    default:
        console.log("Trial user");
        break;    
}