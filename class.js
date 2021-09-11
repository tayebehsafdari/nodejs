let list = ["Tayebeh", "Safdari", 34, "brown"];
let name = "Tayebeh";
let person = {
    firstName: undefined,
    lastName: "Safdari",
    age: 34,
    eyeColor: "brown"
};

// list.forEach(item => console.log("item: ", item));

for (let item of list) {
    console.log("item: ", item);
}

for (let item in person) {
    console.log("item: ", item);
}

let [a, b, c, d, e] = list;
console.log("firstName:", a, " lastName:", b, " age:", c, " eyeColor:", d, " unknown:", e);
let {firstName: fName = "Soodeh", lastName: lName} = person;
console.log("fName:", fName, " lName:", lName);

let f, g;
[f, g] = [3, 4];
console.log("f:", f, " g:", g);

let [h = 1, i = 2] = [3];
console.log("h:", h, " i:", i);

function f1() {
    return [1, 2, 3, 4];
}

let [x, , , y] = f1();
console.log("x: ", x, "y: ", y);

let [z, ...w] = f1();
console.log("z: ", z, "w: ", w);

console.log("Hello " + name);
console.log(`hello ${name}`);

let t = `Tayebeh


Safdari ${3 + 4}
`;

let s = `TSD${z}`

let u = "Doost \n \nSafdari";
let v = `\${sara}`;

console.log(t, u, s, v);


function Person(first, last, age, eye) {
    console.log("function Person", this);
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.fullName = () => {
        console.log("fullName: ", this.firstName + " " + this.lastName);
    };
}

let person1 = new Person("Tayebeh", "Safdari", 34, "brown");

person1.fullName();

class AnotherPerson {
    constructor(first, last, age, eye) {
        console.log("class AnotherPerson", this);
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.eyeColor = eye;
    }

    fullName() {
        console.log("fullName: ", this.firstName + " " + this.lastName);
    }

    ageMethod = () => {
        console.log("fullName: ", this.firstName + " " + this.lastName + " is: " + this.age + "years old.");
    }
}

let person2 = new AnotherPerson("Tayebeh", "Safdari", 34, "brown");

person2.fullName();
console.log(AnotherPerson.prototype);
console.log(person2.__proto__ === AnotherPerson.prototype);




