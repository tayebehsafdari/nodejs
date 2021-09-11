"use strict";

setTimeout(() => {
    console.log("setTimeout timer");
}, 20000);

setInterval(() => {
    console.log("setInterval timer");
}, 20000);


var obj = {
    firstName: "Tayebeh",
    lastName: "Safdari"
};

var str = "Tayebeh Safdari";

var arr = str.split(' ');

console.log("obj: ", obj.firstName + " " + obj["lastName"] + " " + str[0] + str[8]);
console.log("arr: ", arr);
console.log("str: ", str.__proto__);
var str2 = new String();
console.log("str2: ", str2);


console.log("substr:", str.substr(0, 7));

console.log("replace:", str.replace("Tayebeh", "Soodeh"));


var todaysdate = new Date();

console.log("today's date: ", todaysdate);
console.log("Date.prototype", Date.prototype);

console.log("getTime: ", todaysdate.getTime());
console.log("getTime: ", Date.now());
console.log("getTime: ", Date.parse('06/08/2021'));
console.log("today's date: ", new Date(Date.parse('06/08/2021')));
console.log("today's date + 1s: ", new Date(todaysdate.getTime() + 1000));
console.log("today's date + 7days: ", new Date(todaysdate.getTime() + (1000 * 60 * 60 * 24 * 7)));
console.log("getHours: ", todaysdate.getHours());
console.log("setHours: ", todaysdate.setHours(3, 4, 66), todaysdate);


var math_functions = Math;

console.log("PI: ", math_functions.PI);

function getRandomInt(max) {
    return math_functions.floor(math_functions.random() * max);
}

console.log("random: ", getRandomInt(9999));

