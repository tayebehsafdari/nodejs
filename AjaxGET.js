var xhttp = new XMLHttpRequest();
xhttp.open('GET', 'https://jsonplaceholder.typicode.com/users');

/* xhttp.onreadystatechange = function () {
    console.log("this: ", this);
    if (this.readyState === XMLHttpRequest.DONE) {
        if (this.status === 200) {
            console.log("done", this.responseText);
        } else if (this.status === 404) {
            console.log("User Not Found . . .");
        }
    }
}; */

xhttp.addEventListener('load', function () {
    console.log("this: ", this);
    if (this.readyState === XMLHttpRequest.DONE) {
        if (this.status === 200) {
            console.log("done", this.responseText);
        } else if (this.status === 404) {
            console.log("User Not Found . . .");
        }
    }
});
xhttp.send();

console.log("xhttp: ", xhttp);