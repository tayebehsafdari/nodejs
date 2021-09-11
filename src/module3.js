class Person {
    constructor(first, last, age, eye) {
        console.log("module3: ", this);
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.eyeColor = eye;
    }

    static fullName() {
        return `${this.firstName} ${this.lastName} is ${this.age} years old.`;
    }
}

let fullName = function () {
    console.log(this);
    return `${this.firstName} ${this.lastName}`;
}

export {
    fullName
};

export let year = 66;


// export default Person;
export default new Person("Tayebeh", "Safdari Doost", 34, "brown");