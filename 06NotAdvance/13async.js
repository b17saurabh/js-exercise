const uno = () => {
    console.log("I am One");
};

const dos = () => {
    setTimeout( () => {
        console.log("wohoooo");
    }, 3000);
    console.log("I am Two");
};

const tres = () => {
    console.log("I am Three");
};

uno();
dos();
tres();