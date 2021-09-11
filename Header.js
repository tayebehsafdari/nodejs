class Header {
    constructor() {
        this.color = "Red";
        console.log("constructor", this);
    }

    changeColor = () => {
        console.log("changeColor", this);
        document.getElementById("demo").innerHTML += this;
    }
}

myheader = new Header();

window.addEventListener('load', myheader.changeColor);

document.getElementById("btn").addEventListener('click', myheader.changeColor);