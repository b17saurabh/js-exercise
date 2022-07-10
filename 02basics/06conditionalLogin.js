// Allow user tp access course if he is:
// logged in from email
// logged in from Google
// logged in from Facebook

var email = false;
var facebook = true;
var google = false;


if (email || facebook || google){
    console.log("Login Success");
}

if(email){
    console.log("email Login Success");
}

if(facebook){
    console.log("Facebook Login Success");
}

if(google){
    console.log("Google Login Success");
}