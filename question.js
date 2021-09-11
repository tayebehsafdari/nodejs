const add = (function () {
    let counter = 0;
    return function () {
        counter += 1;
        return counter;
    };

})();

console.log("add: ", add());
console.log("add: ", add());
console.log("add: ", add());
console.log("add: ", add());


console.log('null: ', Boolean(null));
console.log('0: ', Boolean(0));
console.log('\'\': ', Boolean(''));
console.log('undefined: ', !!undefined);
console.log('null undefined: ', null == undefined);
console.log('null undefined: ', null === undefined);


console.log('string: ', '34');
console.log('number: ', +'34');

document.querySelector('.my-div').addEventListener('click', (event) => {
    event.preventDefault();
    console.log('click div', event, event.defaultPrevented, event.target, event.currentTarget);
});

document.querySelector('.my-p').addEventListener('click', (event) => {
    // event.stopPropagation();
    console.log('click p', event, event.defaultPrevented);
});

var name = "Tayebeh Safdari";

function person() {
    console.log('this: ', this.name);
}

person();


const numbers = [1, 2, 3, 3, 3, 4, 4, 4, 4, 5, 6, 6, 6, 6, 6, 6];
const uniqueNumbers = [...new Set(numbers)];

console.log("uniqueNumbers: ", uniqueNumbers);

