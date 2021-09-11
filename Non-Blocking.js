function save_data_to_db(name, callback) {
    setTimeout(() => {
        console.log("name:", name);
        callback(name + " Doost");
    }, 2000);
}

var name = "Tayebeh Safdari";
save_data_to_db(name, (result) => {
    console.log("result:", result);
});