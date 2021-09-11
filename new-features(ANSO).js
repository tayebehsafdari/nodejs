let list1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let list2 = Array.of(34, 66);
console.log("list1: ", list1);
console.log("list2: ", list2);

list2.forEach(item => console.log(`item: ${item}`, item));

let list3 = Array.from(list1, item => item * 2);
console.log("list3 from: ", list3);

console.log("find: ", list1.find(item => item % 2 === 0));
console.log("filter: ", list1.filter(item => item % 2 === 0));

console.log("entries: ", list1.entries());

for (let item of list1) {
    console.log(`item ${item}: `, item);
}

for (let item of list1.entries()) {
    console.log(`item ${item}: `, item);
}

let list4 = list1.entries();

console.log("list4: [0,1]", list4.next());
console.log("list4: [1,2]", list4.next());
console.log("list4: [2,3]", list4.next());
console.log("list4: [3,4]", list4.next());
console.log("list4: [4,5]", list4.next());
console.log("list4: [5,6]", list4.next());
console.log("list4: [6,7]", list4.next());
console.log("list4: [7,8]", list4.next());
console.log("list4: [8,9]", list4.next());
console.log("list4: [9,10]", list4.next());

list1.fill("Tayebeh", 2, 4);
console.log("list1: ", list1);

let list5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// list5.copyWithin(2, 6, 9);
list5.copyWithin(3, 4);
console.log("list5: ", list5);


let num1 = 6634 / undefined;

console.log("num1: ", num1);
console.log("num1: ", isNaN(num1));
console.log("num1: ", Number.isNaN(num1));
console.log("num1: ", Number.isFinite(num1));
console.log("num1: ", Number.isInteger(num1));

let num2 = undefined;
console.log("num2: ", Math.sign(num2));

let num3 = -66.34;
console.log("num3: ", Math.trunc(num3));
console.log("num3: ", Math.floor(num3));


let str1 = "Tayebeh Safdari";

let obj1 = {
    a: 1,
    b: 2
};
let obj2 = {
    a: 3,
    b: 4,
    c: 5,
    d: 6
};

console.log("str1 includes: ", str1.includes("Safdari", 7));
console.log("str1 startsWith: ", str1.startsWith("Tayebeh", 1));
console.log("str1 endsWith: ", str1.endsWith("Safdari", 9));
console.log("obj1: ", obj1);
console.log("obj2: ", obj2);

Object.assign(obj1, obj2);
console.log("obj1 assign: ", obj1);
console.log("obj2 assign: ", obj2);

class Class1 {
    constructor() {
        this.name = "Tayebeh Safdari"
    }
}

class Class2 {
    constructor() {
        this.name = "Mehdi Estavi"
    }
}

let obj3 = new Class1();
let obj4 = new Class2();

Object.assign(obj3, obj4);

console.log("obj3 assign: ", obj3);
console.log("obj4 assign: ", obj4);

let obj5 = Object.assign({}, obj3, obj4);

console.log("obj5 assign: ", obj5);

Object.setPrototypeOf(obj4, obj3);
console.log("obj3 setPrototypeOf: ", obj3);
console.log("obj4 setPrototypeOf: ", obj4);


let names = ["Tayebeh", "Sahar", "Mina", "Yasaman"];
console.log(names);

// names[Symbol.iterator] = null;
console.log("ƒ values() { [native code] }: ", names[Symbol.iterator]);
console.log("Array Iterator {}: ", names[Symbol.iterator]());
let nameIterator = names[Symbol.iterator]();
console.log("Tayebeh", nameIterator.next());
console.log("Sahar", nameIterator.next());
console.log("Mina", nameIterator.next());
console.log("Yasaman", nameIterator.next());
console.log("undefined", nameIterator.next());

names[Symbol.iterator] = function () {
    // console.log("[\"Tayebeh\", \"Sahar\", \"Mina\", \"Yasaman\", Symbol(Symbol.iterator): ƒ]", this[0]);
    let items = this;
    let step = 0;
    return {
        next() {
            let obj = {
                value: items[step],
                done: step >= items.length
            };
            step++;
            return obj;
        }
    };
};
let nameIterator1 = names[Symbol.iterator]();

nameIterator1.next();
console.log(nameIterator1.next());


for (let name of names) {
    console.log("name: ", name);
}

let user = {
    id: 1,
    name: "Tayebeh Safdari",
    email: "tayebeh_safdari@yahoo.com",
    posts: [
        {
            id: 1,
            title: "This post is number one."
        },
        {
            id: 2,
            title: "This is post number two."
        },
    ],
    // *[Symbol.iterator](){}
};

console.log("user", user);

user[Symbol.iterator] = function () {
    let items = this.posts;
    let step = 0;
    return {
        next() {
            let obj = {
                value: items[step],
                done: step >= items.length
            };
            step++;
            return obj;
        }
    };
};
let userIterator1 = user[Symbol.iterator]();

userIterator1.next();

for (let post of user) {
    console.log("post: ", post);
}

function* buildNames() {
    console.log("The first processing:");
    yield "Tayebeh";
    console.log("The second processing:");
    yield "Sahar";
    console.log("The third processing:");
    yield "Mina";
    console.log("The forth processing:");
    yield "Yasaman";
    console.log("The fifth processing:");
    return "All names";
    console.log("The last processing:");
}

console.log(buildNames());
let buildNamesIterator1 = buildNames();
console.log(buildNamesIterator1.next());
console.log(buildNamesIterator1.next());
console.log(buildNamesIterator1.next());
console.log(buildNamesIterator1.next());
console.log(buildNamesIterator1.next());
console.log(buildNamesIterator1.next());

for (let item of buildNames()) {
    console.log("item: ", item);
}

console.log("...buildNames()", [...buildNames()]);

let user1 = {
    id: 1,
    name: "Tayebeh Safdari",
    email: "tayebeh_safdari@yahoo.com",
    posts: [
        {
            id: 1,
            title: "This post is number one."
        },
        {
            id: 2,
            title: "This is post number two."
        },
    ],
    * [Symbol.iterator]() {
        console.log("this", this);
        // yield this.posts[0];
        // yield this.posts[1];
        yield* this.posts;
    }
};


let userIterator2 = user1[Symbol.iterator]();

console.log(userIterator2.next());

for (let post of user1) {
    console.log("post: ", post);
}




