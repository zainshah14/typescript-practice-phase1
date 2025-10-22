const userName = 'Max';
// userName = 'Maxim'
let age = 30;

age = 29;
var result;

function add(a: number, b: number) {
    result = a + b;
    return result;
}

// console.log(result)

// if (age > 20) {
//     //  var isOld = true;
//     let isOld = true;
// }

// console.log(isOld);

// const mul = (a: number, b: number) => {
//     return a * b;
// };

const mul = (a: number, b: number) => a * b;

console.log(mul(2, 5));

// const printOutput = (output: string | number) => {
//     console.log(output);
// }

const printOutput: (a: string | number) => void = output => console.log(output);

const button = document.querySelector('button');

if (button) {
    button.addEventListener('click', event => console.log(event));
}

printOutput(mul(5, 2));