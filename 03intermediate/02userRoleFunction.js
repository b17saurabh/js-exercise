/* 
Define a function that can answer the role of a user.
A user can be on following roles:
admin - with all access
subadmin - with access to create/delete courses
testprep - with access to create/delete tests
user - consume all content
other - trial user.

Input: getUserRole(name, role)
*/


var getUserRole = function (name, role) {
    
    switch (role) {
        case "admin":
            return `${name} is admin with all access`
            break; // this is not necessary
        case "subadmin":
            return `${name} is sub-admin with access to create/delete courses`
            break;
        case "testprep":
            return `${name} is testprep with access to create/delete tests`
            break;
        case "user":
            return `${name} is user that can consume the content`
            break;

    
        default:
            return`${name} is a Trial user`
            break;
    }
}

console.log(getUserRole("saurabh", "testprep"));

var getRole = getUserRole("Ajit", "user")

console.log(getRole);