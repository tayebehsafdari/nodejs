class Person {
    constructor(first, last, age, eye) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.eyeColor = eye;
    }

    get fullName() {
        return this.firstName + " " + this.lastName;
    }

    /* set fullName(value) {
        this.firstName = value;
    } */
}

let person = new Person("Tayebeh", "Safdari", 34, "brown");
// person.fullName = "Soodeh";
console.log(person.fullName);

const obj = {
    counter: 0
};
Object.defineProperty(obj, 'reset', {
    get: function () {
        return this.counter = 0;
    }
});
Object.defineProperty(obj, 'increment', {
    get: function () {
        return this.counter += 1;
    }
});
Object.defineProperty(obj, 'decrement', {
    get: function () {
        return this.counter -= 1;
    }
});
Object.defineProperty(obj, 'add', {
    set: function (value) {
        return this.counter += value;
    }
});
Object.defineProperty(obj, 'subtract', {
    set: function (value) {
        return this.counter -= value;
    }
});

console.log("obj reset: ", obj.reset);
console.log("obj increment: ", obj.increment);
console.log("obj decrement: ", obj.decrement);
console.log("obj add: ", obj.add = 10);
console.log("obj subtract: ", obj.subtract = 5);