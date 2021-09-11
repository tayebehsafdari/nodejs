let symbol1 = Symbol('name');
let object1 = {};
let function1 = () => {
};
let list = new Map();
console.log("list:", list);
console.log("list typeof:", typeof list);

list.set("firstName", "Tayebeh");
list.set("lastName", "Safdari Doost");
list.set("age", 34);
list.set("eyeColor", "brown");
list.set(symbol1, "Sahar Sarmast");
list.set(object1, "Yasaman Attari");
list.set(function1, "Reyhaneh Roshan Ghalb");

console.log("list:", list);

console.log("size:", list.size);

console.log("item:", list.get("firstName"));
console.log("item:", list.get("lastName"));
console.log("item:", list.get("age"));
console.log("item:", list.get("eyeColor"));
console.log("item:", list.get(symbol1));
console.log("item:", list.get(object1));
console.log("item:", list.get(function1));


list.delete(object1);
list.delete(function1);

// list.clear();
console.log("list:", list);

list.forEach((value, key) => {
    console.log("forEach item:", key, "=>", value);
});

for (let item of list) {
    console.log("for of item:", item);
}

for (let [key, value] of list) {
    console.log("for of list:", key, "=>", value);
}

console.log("list entries: ", list.entries());

for (let [key, value] of list.entries()) {
    console.log("for of entries list:", key, "=>", value);
}

console.log("list keys: ", list.keys());

for (let key of list.keys()) {
    console.log("for of key list:", key);
}

for (let value of list.values()) {
    console.log("for of value list:", value);
}

console.log("list entries:", list.entries());

console.log("has:", list.has("firstName"));


let list1 = [["firstName", "Tayebeh"], ["lastName", "Safdari Doost"]];
let list2 = new Map(list1);
console.log("list2:", list2);


let list3 = new Set();
console.log("list3:", list3);
console.log("list3 typeof:", typeof list3);

list3.add("Tayebeh");
list3.add("Safdari Doost");
list3.add(34);
list3.add("brown");
list3.add(34);

// list3.delete(34);
console.log("list3:", list3);
console.log("list3 entries:", list3.entries());
console.log("list3 keys:", list3.keys());
console.log("list3 values:", list3.values());
console.log("...list3:", ...list3);
console.log("...list3:", [...list3]);

for (let item of list3) {
    console.log("list3 for of:", item);
}
for (let item of list3.entries()) {
    console.log("list3 for of entries:", item);
}

let list4 = new Set([1, 2, 3, 4, 4, 3, 2, 1]);
console.log("list4:", list4);


let list5 = new WeakMap();
console.log("list5:", list5);

class Person {
    constructor(first, last, age, eye) {
        this.firstName = new String(first);
        this.lastName = new String(last);
        this.age = new String(age);
        this.eyeColor = new String(eye);
    }
}

// let person = new Person("firstName", "lastName", "age", "eyeColor");
window.person = new Person("firstName", "lastName", "age", "eyeColor");
console.log("Person: ", window.person.firstName);
list5.set(window.person.firstName, "Tayebeh");
list5.set(window.person.lastName, "Safdari Doost");
list5.set(window.person.age, 34);
list5.set(window.person.eyeColor, "brown");
// delete window.person;
// console.log("window:", window.person);
// console.log("window:", list5.has(window.person));
console.log("list5:", list5);


let list6 = new WeakSet([{a: 1}, {b: 2}, {c: 3}, {d: 4}, {d: 4}, window.person]);
console.log("list6:", list6);



