class Car {
    constructor(name) {
        this.brand = name;
    }

    present = function () {
        console.log("present: ", this);
        document.getElementById("demo").innerHTML += this;
        return 'I have a ' + this.brand;
    }
}

/* class Model extends Car {
    constructor(name, mod) {
        super(name);
        this.model = mod;
    }

    show = () => {
        console.log("show: ", this);
        return this.present() + ', it is a ' + this.model;
    }
} */

// let mycar = new Model("Ford", "Mustang");

// console.log(mycar.show());

let mycar = new Car("Ford");
console.log("mycar: ", mycar.present());
window.addEventListener('load', mycar.present.bind(mycar));
document.getElementById("btn").addEventListener('click', mycar.present.bind(mycar));

