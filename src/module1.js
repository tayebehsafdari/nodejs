import {sum, name, person, year} from "./module2";
import * as module from "./module3";

console.log("module1: ", sum(3, 4));
console.log(`%cmodule1:  ${name}`, 'background:red; color:white');
console.log(`%cmodule1:  ${person}`, 'background:purple; color:pink');
console.log("module1: ", person);

console.log(module.default.firstName);
console.log(year);