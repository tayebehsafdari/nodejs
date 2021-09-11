// import Person, {fullName} from "./module3";
import person, {fullName as full, year} from "./module3";

function sum(a, b) {
    return a + b;
}

let name = "Tayebeh Safdari";

// let person = new Person("Tayebeh", "Safdari", 34, "brown");

console.log("fullName: ", full.apply(person));

export {
    sum,
    name,
    person,
    year
};