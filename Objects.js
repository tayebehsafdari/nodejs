function Person(first, last, age, eye) {
    console.log("Person this", this);
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.fullName = function () {
        return this.firstName + " " + this.lastName;
    }
}

Person.prototype.job = function () {
    return this.firstName + " " + this.lastName + "is a programmer";
};

const fullName = function (age) {
    console.log("fullName this", this);
    return this.firstName + " " + this.lastName + " is " + age + " years old.";
}

var myFather = new Person("Mohsen", "Safdari Doost", 65, "brown");
myFather.sex = "male";

console.log("myFather", myFather);

var person = Object.create(myFather);
person.firstName = "Tayebeh";
person.age = 34;
person.sex = "female";
person.maritalStatus = "single";
console.log("person", person);
console.log("myFather", fullName.apply(myFather, [65]));
console.log("person", fullName.call(person, 34));
var myMother = new Person("Parvin", "Noroozi", 53, "brown");
var myMom = fullName.bind(myMother, 53);
console.log("myMom", myMom());
console.log("myMother", fullName.bind(myMother, 53)());

var mySister = new Person("Soodeh", "Safdari Doost", 36, "brown");

console.log("mySister", mySister.fullName.apply(myFather));

function Car(name, model, weight, color) {
    console.log("Car this", this);
    this.name = name;
    this.model = model;
    this.weight = weight;
    this.color = color;
}

Car.prototype.type = "Fiat";

const view = function () {
    return this.name + " " + this.model + " " + this.weight + " " + this.color + " " + this.type;
}

var car = new Car("Fiat", 500, "850kg", "white");

console.log(view.apply(car));

var i = 0;
var list = [];

while (i <= 10) {
    // debugger;
    if (i % 2 !== 0) {
        list.push(i);
    }
    i++;
    console.log("debug", list);
}

try {
    // var debug;
    // console.log("try", debug);
    if (true) {
        // throw "This is an error message.";
        // throw 34;
        // throw true;
        throw {
            name: 'throw:',
            message: 'This is an error message.'
        };
    }
} catch (e) {
    console.log("catch 01:", e);
    console.log("catch 02:", e + " name: " + e.name + " message: " + e.message);
} finally {
    console.log("finally");
}
