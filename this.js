console.log("this: ", this);

function f1() {
    console.log("f1 this: ", this);
}

const f2 = () => {
    console.log("f2 this: ", this);
};

f1();
f2();

const obj1 = {
    a: 3,
    b: 4,
    c: function () {
        console.log("obj1 this: ", this);
    }
};

const obj2 = {
    a: 3,
    b: 4,
    c: () => {
        console.log("obj2 this: ", this);
    }
};

obj1.c();
obj2.c();

function Obj3() {
    console.log("Obj3 this: ", this);
}

// const Obj4 = () => {
//     console.log("Obj4 this: ", this);
// }

new Obj3();

// new Obj4();

class Obj5 {
    constructor() {
        console.log("Obj5 constructor this: ", this);
    }

    m1() {
        console.log("Obj5 m1 this: ", this);
    }

    m2 = () => {
        console.log("Obj5 m2 this: ", this);
    }
}

new Obj5();
new Obj5().m1();
window.addEventListener('load', () => {
    new Obj5().m1();
});
new Obj5().m2();
