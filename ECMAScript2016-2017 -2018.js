console.log(Math.pow(2, 3));
console.log(2 ** 3);

let framework = ["reactjs", "vuejs", "angular"];

if (framework.indexOf("reactjs") !== -1) {
    console.log(true);
} else {
    console.log(false);
}

let array1 = new Array();
console.log("array1: ", array1);
console.log("array1 prototype: ", Array.prototype);
console.log("array1: __proto__", array1.__proto__);
console.log("framework: ", framework.includes("reactjs"));


let string1 = "Tayebeh Safdari";
console.log("string1: ", string1.includes("Sad"));
console.log("string1: ", string1.padStart(20, "safdari"));
console.log("string1: ", string1.length);


let object1 = {a: 1, b: 2, c: 3, d: 4};

for (let key in object1) {
    console.log(object1[key]);
}

console.log(Object.keys(object1));

Object.keys(object1).forEach(key => {
    console.log(object1[key]);
});

for (let key of Object.keys(object1)) {
    console.log(object1[key]);
}

console.log(Object.values(object1));

Object.values(object1).forEach(value => {
    console.log(value);
});

console.log(Object.entries(object1));
Object.entries(object1).forEach(([key, value]) => {
    console.log(key, "=>", value);
});