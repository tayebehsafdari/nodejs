console.log("window: ", window);
console.log("document: ", window.document);


console.log("document children: ", window.document.children);
console.log("document children[0]: ", window.document.children[0]);
console.log("document children[0].children: ", window.document.children[0].children);
console.log("document children[0].children[0]: ", window.document.children[0].children[0]);
console.log("document children[0].children[1]: ", window.document.children[0].children[1]);

console.log("document head: ", window.document.head);
console.log("document body: ", window.document.body);

function changeColor() {
    document.body.style.backgroundColor = "red";
    document.getElementById("btn").innerHTML = "changeColor";
    document.body.children[0].textContent = "changeColor";
    console.log("firstChild", document.body.firstChild);
    console.log("firstElementChild", document.body.firstElementChild);
    console.log("nextElementSibling", document.body.firstElementChild.nextElementSibling);
}

// changeColor();

