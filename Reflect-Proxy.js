class Person {
    constructor(first, last, age, eye) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.eyeColor = eye;
    }
}

class AnotherPerson {
    constructor(first, last, maritalStatus, occupation) {
        this.firstName = first;
        this.lastName = last;
        this.maritalStatus = maritalStatus;
        this.occupation = occupation;
    }
}

let person1 = new Person("Tayebeh", "Safdari Doost", 34, "brown");

console.log("person1: ", person1);

console.log("Reflect: ", Reflect);
let person2 = Reflect.construct(Person, ["Tayebeh", "Safdari Doost", 34, "brown"]);
console.log("person2: ", person2);
console.log("instanceof: ", Person instanceof Object); // Meta programming
console.log("__proto__: ", person1.__proto__ === person2.__proto__);

let person3 = Reflect.construct(Person, ["Tayebeh", "Safdari Doost", "single", "programmer"], AnotherPerson);
console.log("person3: ", person3);

let user = {
    name: "Tayebeh Safdari Doost",
    email: "tayebeh_safdari@yahoo.com"
};

function sayHello(age) {
    return `Hi ${this.name}, ${this.email} is your email and you are ${age} years old.`;
}

console.log("sayHello: ", sayHello.apply(user, [34]));
console.log("sayHello Reflect: ", Reflect.apply(sayHello, user, [34]));

Object.setPrototypeOf(person2, user);

console.log("user: ", user);
console.log("person2: ", person2);
console.log("getPrototypeOf: ", Object.getPrototypeOf(user));
console.log("getPrototypeOf Reflect: ", Reflect.getPrototypeOf(user));

Reflect.defineProperty(user, "age", {
    value: 34,
    writable: false
});

Reflect.preventExtensions(user);
user.age = 66;
console.log("user: ", user);
delete user.email;
console.log("user: ", user);
Reflect.deleteProperty(user, "name");
console.log("user: ", user);
console.log("user Reflect.get: ", Reflect.get(user, "age"));
console.log("user Reflect.has: ", Reflect.has(user, "name"));

let arr = ["Tayebeh", "Sahar", "Sepideh"];
console.log("arr Reflect.get: ", Reflect.get(arr, 2));
console.log("arr Reflect.set: ", Reflect.set(arr, 3, "Sepideh"));
console.log("user Reflect.set: ", Reflect.set(user, "job", "programmer"));
console.log("arr: ", arr);
console.log("user: ", user);
console.log("user Reflect.ownKeys: ", Reflect.ownKeys(user));
console.log("arr Reflect.ownKeys: ", Reflect.ownKeys(arr));
console.log("user Reflect.isExtensible: ", Reflect.isExtensible(user));
console.log("arr Reflect.isExtensible: ", Reflect.isExtensible(arr));


let handler = {
    get(obj, prop) {
        // return prop in obj ? obj[prop] : "This propertyKey does not exist.";
        return Reflect.has(obj, prop) ? Reflect.get(obj, prop) : `${prop} propertyKey does not exist.`;
    },
    has(obj, prop) {
        return Reflect.has(obj, prop) ? `${prop} propertyKey exists.` : `${prop} propertyKey does not exist.`;
    },
    set(obj, prop, value) {
        if (typeof value === "number") {
            Reflect.set(obj, prop, value);
        }
        // return `${prop} was added.`;
    }
};

let proxy = new Proxy(person1, handler);

console.log("proxy: ", proxy);
console.log("proxy: ", proxy.firstName);
console.log("proxy: ", proxy.lastName);
console.log("proxy: ", Reflect.has(proxy, "age"));
// console.log("proxy: ", "age" in proxy);
console.log("proxy: ", Reflect.get(proxy, "eyeColor"));
// Reflect.set(proxy, "job", "programmer");
proxy.job = "programmer";
proxy.year = 1987;
console.log("proxy: ", proxy.job);
console.log("proxy: ", proxy.year);
console.log("proxy: ", proxy);

// let proxy1 = new Proxy({}, handler);
let {proxy: proxy1, revoke} = Proxy.revocable({}, handler);
console.log("proxy1: ", proxy1);
// revoke();
Reflect.setPrototypeOf(person1, proxy1);
console.log("person1: ", person1);
console.log("person1: ", person1.firstName);
person1.job = "programmer";
person1.year = 1987;
console.log("person1 job: ", person1.job);
console.log("person1 year: ", person1.year);


function sum(a, b) {
    return a + b;
}

let handler2 = {
    apply(func, thisArg, args) {
        console.log("func: ", func, "thisArg: ", thisArg, "args: ", args);
        // return func(args[0], args[1]);
        return func(...args);
    }
}
let proxy2 = new Proxy(sum, handler2);
console.log("proxy2: ", proxy2);
console.log("proxy2: ", proxy2(3, 4));
console.log("proxy2: ", proxy2.apply(proxy2, [3, 4]));








