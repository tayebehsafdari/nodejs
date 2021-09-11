var xhttp = new XMLHttpRequest();
var body = {
    firstName: "Tayebeh",
    lastName: "Safdari Doost"
};
xhttp.open('POST', 'https://jsonplaceholder.typicode.com/users');
xhttp.setRequestHeader("Content-type", "application/json; charset=UTF-8");
xhttp.addEventListener('load', function () {
    console.log("this: ", this);
    if (this.readyState === XMLHttpRequest.DONE) {
        if (this.status === 201) {
            var data = JSON.parse(this.responseText);
            console.log("done", data);
        } else {
            console.log(this.status);
        }
    }
});
xhttp.send(JSON.stringify(body));

console.log("xhttp: ", xhttp);