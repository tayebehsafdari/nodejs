async function f() {
    console.log("1");

    const f2 = new Promise((resolve, reject) => {
        const data = "2";
        if (data !== "2") {
            reject("error");
        }
        resolve(data);
    });

    f2
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        });

    console.log("3");
}

f();

function forEach(items, callback) {
    for (let index = 0; index < items.length; index++) {
        callback(items[index]);
    }
}

forEach([1, 2, 3, 4], (data) => {
    console.log("data: ", data);
});