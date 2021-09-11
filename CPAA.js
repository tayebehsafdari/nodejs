function doSomething(callback, error) {
    setTimeout(() => {
        let title = "callback run 2";
        if (!title) {
            error("callback error title");
            return;
        }
        setTimeout(() => {
            let data = "callback This is run 2.";
            if (!data) {
                error("callback error data");
                return;
            }
            callback(data);
        }, 2000);
    }, 2000);
}

console.log("callback run 1");
doSomething(function (data) {
    console.log("callback data: ", data);
}, function (error) {
    console.log("callback error:", error);
});
console.log("callback run 3");


let myFirstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let title = "Promise run 2";
        if (!title) {
            reject("Promise error title");
            return;
        }
        setTimeout(() => {
            let data = "Promise This is run 2.";
            if (!data) {
                reject("Promise error data");
                return;
            }
            resolve(data);
        }, 2000);
    }, 2000);
});

console.log("Promise myFirstPromise: ", myFirstPromise);

console.log("Promise run 1");
myFirstPromise
    .then(data => console.log("Promise data: ", data))
    .catch(error => console.log("Promise error:", error));
console.log("Promise run 3");

function getData(url) {
    return new Promise((resolve, reject) => {
        let xhttp = new XMLHttpRequest();
        xhttp.open('GET', url);
        xhttp.onreadystatechange = function () {
            // console.log("this: ", this);
            if (this.readyState === XMLHttpRequest.DONE) {
                if (this.status === 200) {
                    // console.log("done", this.responseText);
                    resolve(this.responseText);
                } else if (this.status === 404) {
                    // console.log("todos Not Found . . .");
                    reject("Data Not Found . . .");
                } else {
                    // console.log("something goes wrong . . .");
                    reject("something goes wrong . . .");
                }
            }
        };
        xhttp.send();
        // console.log("xhttp: ", xhttp);
    });
}

function parseJSON(string) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve(JSON.parse(string));
            } catch (e) {
                reject(e);
            }
        }, 2000);
    });
}

getData('https://jsonplaceholder.typicode.com/todos')
    .then(data => parseJSON(data))
    .then(parsedata => console.log("Promise parse data: ", parsedata))
    .catch(error => console.log("Promise2 error:", error));


function f() {
    let name = "Tayebeh Safdari";
    // console.log("Promise: ", Promise.resolve(name));
    return Promise.resolve(name);
    // return Promise.reject('error');
}

f()
    .then(data => console.log("Promise data: ", data))
    .catch(error => console.log("Promise error:", error));

let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // reject('reject');
        resolve('resolve');
    }, 2000);
});
let number = 34;
let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('resolve');
        reject('reject');
    }, 2000);
});

Promise.all([promise1, number, promise3])
    .then(data => console.log("Promises1 data:: ", data))
    .catch(error => console.log("Promises1 error:: ", error));

Promise.race([promise1, number, promise3])
    .then(data => console.log("Promises2 data:: ", data))
    .catch(error => console.log("Promises2 error:: ", error));


const fetchData1 = (url, callback) => {
    setTimeout(() => {
        let data = {
            firstName: "Tayebeh",
            lastName: "Safdari",
            age: 34,
            eyeColor: "brown"
        };
        callback(data);
    }, 3000);
}

const saveDataInDB1 = (data, callback) => {
    setTimeout(() => {
        callback(true);
    }, 4000);
}

try {
    fetchData1('http://www.tayebehsafdari.com/', (data) => {
        console.log("callback my details: ", data);
        try {
            saveDataInDB1(data, (status) => {
                console.log("callback Database status: ", status);
            });
        } catch (e) {
            console.log("callback error =>", e);
        }
    });
} catch (e) {
    console.log("callback error =>", e);
}


const fetchData2 = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let data = {
                firstName: "Tayebeh",
                lastName: "Safdari",
                age: 34,
                eyeColor: "brown"
            };
            if (true) {
                resolve(data);
            } else {
                reject('error fetchData2');
            }
        }, 3000);
    });
}

const saveDataInDB2 = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (true) {
                resolve(true);
            } else {
                reject('error saveDataInDB2');
            }
        }, 4000);
    });
}

console.log("http://www.tayebehsafdari.com/", fetchData2('http://www.tayebehsafdari.com/'));


fetchData2('http://www.tayebehsafdari.com/')
    .then((data) => {
        console.log("Promise my details: ", data);
        console.log("Promise data", saveDataInDB2(data));
        return saveDataInDB2(data);
    })
    .then((status) => console.log("Promise Database status: ", status))
    .catch(e => console.log("Promise error =>", e))
    .finally(() => console.log("Promise finally: ", "finally . . ."));


const fetchData3 = async (url) => {
    let data = {
        firstName: "Tayebeh",
        lastName: "Safdari",
        age: 34,
        eyeColor: "brown"
    };
    if (true) {
        return data;
    } else {
        throw new Error('error fetchData3');
    }
}

const saveDataInDB3 = async (data) => {
    if (true) {
        return true;
    } else {
        throw new Error('error saveDataInDB3');
    }
}

console.log("async http://www.tayebehsafdari.com/", fetchData3('http://www.tayebehsafdari.com/'));


/* fetchData3('http://www.tayebehsafdari.com/')
    .then((data) => {
        console.log("async my details: ", data);
        console.log("async data", saveDataInDB3(data));
        return saveDataInDB3(data);
    })
    .then((status) => console.log("async Database status: ", status))
    .catch(e => console.log("async error =>", e)); */

async function executeFetchData() {
    try {
        let data = await fetchData3('http://www.tayebehsafdari.com/');
        let status = await saveDataInDB3(data);
        console.log("async my details: ", data);
        console.log("async data", saveDataInDB3(data));
        console.log("async Database status: ", status)
    } catch (e) {
        console.log("async error =>", e);
    }
}

executeFetchData();

async function sum() {
    let list = [1, 2, 3, 4];
    let sum = 0;
    for await  (let item of list) {
        console.log("item: ", item);
        sum += item;
    }
    return sum;
}

async function forawait() {
    console.log('sum: ', await sum());
}

forawait();





