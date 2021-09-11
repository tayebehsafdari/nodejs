"use strict";

console.log("window", window, "document", window.document);

// window.alert("Tayebeh Safdari");
// document.getElementById("root").innerHTML = "Tayebeh Safdari";
// document.write("Tayebeh Safdari");

var a = 1;
var b = 1.5;
var c = "Tayebeh";
var d = false;
var e = [1, 2, 3, 4, 5, 6];
var f = {
    g: 1,
    h: "T"
};
var i = function () {
    alert("Tayebeh");
}

console.log("number", typeof a);
console.log("number", typeof b);
console.log("string", typeof c);
console.log("boolean", typeof d);
console.log("array", typeof e);
console.log("object", typeof f);
console.log("function", typeof i);
console.log("NaN", typeof NaN);
console.log("null", typeof null);
console.log("undefined", typeof undefined);
console.log("Infinity", typeof Infinity);

var j;
var k = j || 34;

console.log(k);
console.log("list", e);
console.log("object", f);

/* function sum(list) {
    var sum = 0
    list.forEach((item, index, arr) => {
        sum += item;
        // console.log(item, index, arr);
    });
    return sum;
} */

var sum;
/* e.forEach(item => {
    sum += item;
}); */

sum = e.reduce((total, item) => {
    console.log(total, item);
    return total + item;
}, 100);
console.log("sum:", sum, e);

// unshift() console.log(e.push(9));
// console.log(e.push(10));
// console.log("push", e);
//
//  shift() console.log(e.pop());
// console.log(e.pop());
// console.log(e.pop());
// console.log(e.pop());

// console.log("list", e);
// console.log(e.splice(2, 2));
// console.log("list", e);

var list = [3, 4, 1, 2];
console.log("list", list);
console.log("list", list.map(item => item * 2));
console.log("list", list);

var person = {
    firstName: "Tayebeh",
    lastName: "Safdari Doost",
    age: 34,
    eyeColor: "chocolate",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

var second_person = new Object();
Object.prototype.sex = "female";
// second_person.firstName = "Tayebeh";
// second_person.lastName = "Safdari Doost";
// second_person.age = 34;
// second_person.eyeColor = "chocolate";
/* second_person.fullName = function () {
    return this.firstName + " " + this.lastName;
}; */

var third_person = Object.create(null);

console.log("person", person, "second_person", second_person, "third_person", third_person);

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.fullName = function () {
        return this.firstName + " " + this.lastName;
    }
}

Person.prototype.nationality = "Persian";
Person.prototype.name = function () {
    return this.firstName + " " + this.lastName;
};

var myFather = new Person("Mohsen", "Safdari Doost", 65, "chocolate");

console.log("myFather", myFather);
console.log("second_person", second_person);
console.log("person", person);
console.log("prototype.nationality", myFather.nationality);
console.log("prototype.name", myFather.name());
console.log("second_person", second_person.firstName);

var list = new Array(1, 2, 3);

console.log(list);

var firstName = "Tayebeh";
console.log("firstName", firstName);
firstName = new String("Tayebeh");
console.log("firstName", firstName);

var number = 1234;
console.log("number", number);
number = new Number(1234);
console.log("number", number);

var boolean = true;
console.log("boolean", boolean);
boolean = new Boolean(true);
console.log("boolean", boolean);

