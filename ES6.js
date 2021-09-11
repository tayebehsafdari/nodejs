console.log("this", this);

function Person(first, last, age, eye) {
    // let that=this;
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    console.log("Person", this);
    // setInterval(() => console.log("setInterval", this.age++), 1000);
}

let person = new Person("Tayebeh", "Safdari Doost", 34, "brown");

let arguments = [1, 2, 3, 4];

function sumRegular(a, b) {
    // console.log("arguments", arguments, caller, length, name, prototype, __proto__);
    console.log("arguments: ", arguments, "length: ", length, "name: ", name, "__proto__: ", __proto__);
    return a + b;
}

console.log("Regular Functions: ", sumRegular.prototype);

let sumArrow = (a, b) => {
    console.log("arguments", arguments);
    return a + b;
}

console.log("Arrow Functions", sumArrow(3, 4));