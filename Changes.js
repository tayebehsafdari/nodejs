let firstName = "Tayebeh";
let lastName = "Safdari";
let age = 34;
let eyeColor = "brown";
let name = "My name is: ";
let symbol1 = Symbol;
let symbol2 = Symbol('dadehpardaz');
let symbol3 = Symbol('irannovin');
let symbol4 = Symbol('irannovin');
let symbol5 = Symbol.for('Golnoosh Alavi');
let symbol6 = Symbol();
let symbol7 = Symbol();

let symbol8 = Symbol.for('Golnoosh Alavi');

let person = {
    firstName,
    [name]: "Tayebeh Safdari Doost",
    [symbol2]: "Mehdi Estavi",
    [symbol3]: "Sahar Sarmast",
    [symbol4]: "Arghavan Behrooz",
    [symbol5]: "Mina Golbari",
    [symbol6]: "Reyhaneh Roshan Ghalb",
    [symbol7]: "Alma Aslani",
    lastName,
    age,
    eyeColor,
    "Tayebeh Safdari"() {
        return this.firstName + " " + this.lastName;
    },
    sayHello() {
        return "say hello " + this.firstName;
    },
    fullName: () => {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person['firstName']);
console.log(person["My name is: "]);
console.log(person[name]);
console.log(person["Tayebeh Safdari"]());
console.log(person.sayHello());
console.log(person.fullName());

console.log(symbol1, typeof symbol1);
console.log(symbol2, typeof symbol2);
console.log("person: ", person);
console.log("person: Symbol()", person[Symbol('dadehpardaz')]);
console.log("person: symbol2", person[symbol2]);
console.log("person: symbol3", person[symbol3]);
console.log("person: symbol4", person[symbol4]);
console.log("person: symbol5", person[symbol5]);

for (let item in person) {
    console.log("item: ", item);
}

console.log("To be equal", symbol6 === symbol7);
console.log("person: symbol8", person[symbol8]);

let str = "Tayebeh Safdari Doost";
console.log(str.replace("Doost", "Khojasteh "));

class ReplaceX {
    constructor(value) {
        this.value = value;
    }

    [Symbol.replace](string) {
        return `/${string}/${this.value}`;
    }
}

console.log(str.replace(new ReplaceX("Manesh")));





