// import User from "./11classes";

const User = require("./11classes.js");

const seth = new User("seth", "cs@xdkart.com");
console.log(seth.getInfo());
seth.enrollCourse("React Bootcamp");
seth.enrollCourse("Angular Bootcamp");

console.log(seth.getCourseList());

let courses = seth.getCourseList();

courses.forEach((c) => console.log(c));