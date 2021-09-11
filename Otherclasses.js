class Car {
    constructor(name) {
        this.name = name;
    }

    static present() {
        return "I have a " + this.name;
    }

    staticMethod() {
        console.log("Car staticMethod ", this);
    }
}

class Model extends Car {
    constructor(name, mod) {
        super(name);
        Model.model = mod;
    }

    present() {
        // return super.present();
        return "Model present";
    }

    static staticMethod() {
        console.log("Model staticMethod ", this.name, this.model);
    }

    static  show = () => {
        console.log("this: ", this);
        console.log("this: ", this.present() + ", it is a " + this.model);
    }
}

let mycar = new Model("Ford", "Mustang");

console.log("mycar: ", mycar);
// mycar.show();

console.log("mycar: ", mycar.present());
Model.show();

// mycar.show();


class customArray extends Array {
    find(value) {
        let val = this.filter(item => item === value);
        return val.length === 0 ? "Error" : val[0];
    }
}

let list = new customArray("Tayebeh", "Mahtab", "Sahar", "Mina");
console.log(list.find("Sahar"));