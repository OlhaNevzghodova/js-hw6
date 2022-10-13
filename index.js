let number = '';
let anotherNumber = '';

do {
    number = +prompt('Enter a number');
    anotherNumber = +prompt('Enter a second number');
} while (isNaN(number) || isNaN(anotherNumber));

let sum = number + anotherNumber;
let mul = number * anotherNumber;
let div = number / anotherNumber;
let sub = number - anotherNumber;

alert(`${number} + ${anotherNumber} = ${sum}
${number} * ${anotherNumber} = ${mul}
${number} / ${anotherNumber} = ${div}
${number} - ${anotherNumber} = ${sub}`);