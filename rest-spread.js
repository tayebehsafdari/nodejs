function oldSum(a, b) {
    let x = typeof a === 'undefined' ? 3 : a;
    let y = typeof b === 'undefined' ? 4 : b;
    return x + y;

    // let x = a || 30;
    // let y = b || 4;
    // return x + y;
}

console.log("Old sum: ", oldSum());

function sum(a = 3, b = 4, ...x) {
    console.log("arguments Array: ", x);
    console.log("a: ", a, "b: ", b);
    return a + b;
}

console.log("sum: ", sum(1, 2, 3, 4));

// console.log("sum: ", sum());


function sum2(a, b, ...list) {
    console.log("arguments Array:", a, b, list);
    return list.reduce((total, item) => total + item);
}

console.log(sum2(1, 2, 3, 4, 5, 6));


let list = [1, 2, 3, 4, 5, 6];

function sum3(a, b, c, ...d) {
    console.log("a: ", a, "b: ", b, "c: ", c, "d: ", d);
    return a + b + c;
}

// console.log(sum3(list[0], list[1], list[2]));
// console.log(sum3.apply(null, list));
console.log("list: ", list);
console.log("...list: ", ...list);
console.log(sum3(...list));

let list2 = [1, 2];
let list3 = [3, 4];
let list4 = [...list2, 66, ...list3];

console.log(list4);

function Person(first, last) {
    return first + " " + last;
}


let person = {
    firstName: "Tayebeh",
    lastName: "Safdari"
};

// console.log(...person);






