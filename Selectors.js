console.log("document", document);
console.log("getElementsByTagName", document.getElementsByTagName("p"));
console.log("getElementById", document.getElementById("root"));
console.log("getElementsByClassName", document.getElementsByClassName("extra"));
console.log("querySelector", document.querySelector("p"));
console.log("querySelectorAll", document.querySelectorAll("p"));

var list = document.querySelectorAll("p");
list.forEach(item => {
    item.style.border = "2px solid blue";
});

var div = document.createElement('div');
div.classList.add('div');
div.id = 'div';

console.log("createElement: ", document.createElement('span'));
var span = document.createElement('span');
span.classList.add("span");
span.id = "span";
span.textContent = "span";
console.log("span: ", span);

div.appendChild(span);
console.log("div: ", div);
// document.querySelector('.img').after(div);
// document.querySelector('.img').before(div);
document.querySelector('.container').appendChild(div);
// document.querySelector('.container').removeChild(div);
// document.querySelector('.container').remove();
document.querySelector('.div').parentElement.remove();

console.log("classList: ", document.querySelector('a').classList);
console.log("id: ", document.querySelector('a').id);
document.querySelector('a').setAttribute('id', 'ida');
console.log("id: ", document.querySelector('a').id);