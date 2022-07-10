var myMap = new Map();

myMap.set(1, "Uno")
myMap.set(2, "Dos")
myMap.set(3, "Tres")
myMap.set(4, "Tres")


// console.log(myMap);

for(let [key, value] of myMap){
    console.log(`Key is : ${key} and value is ${value}`);
}

myMap.forEach((v, k) => console.log(`${v} and key is ${k}`));

myMap.delete(2);
console.log(myMap);