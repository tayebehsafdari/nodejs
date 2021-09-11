var title = document.querySelector('#title');

/* function titlefunction(event) {
    title.style.backgroundColor = "red";
    // title.style.color = "white";
    console.log("event: ", event, event.target, "1");
    event.target.style.color = "white";
} */

// title.onclick = titlefunction;
// title.onmouseenter = titlefunction;
/* title.onmouseenter = function (event) {
    title.style.backgroundColor = "yellow";
    console.log("2");
}; */
/* title.onmouseout = function (event) {
    console.log(event);
    title.style.backgroundColor = "blue";
}; */
// title.ondblclick = titlefunction;

var func = function () {
    this.style.backgroundColor = "blue";
    console.log("2");
};

title.addEventListener('click', function (event) {
    this.style.backgroundColor = "red";
    console.log("1", event);
    console.log("1 this", this);
});
title.addEventListener('click', func);
console.log("window: ", window);

setTimeout(() => {
    title.removeEventListener('click', func)
}, 2000);


var section1 = document.querySelector('.section1');
var section2 = document.querySelector('.section2');
var section3 = document.querySelector('.section3');

section1.addEventListener('click', () => {
    console.log('click section1');
});
section2.addEventListener('click', (event) => {
    event.stopPropagation();
    console.log('click section2');
});

section3.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('click section3');
});

console.log("section1: ", section1, "section2: ", section2, "section3: ", section3);