// const userName = 'Max';
// // userName = 'Maxim'
// let age = 30;

// age = 29;
// var result;

// function add(a: number, b: number) {
//     result = a + b;
//     return result;
// }

// // console.log(result)

// // if (age > 20) {
// //     //  var isOld = true;
// //     let isOld = true;
// // }

// // console.log(isOld);

// // const mul = (a: number, b: number) => {
// //     return a * b;
// // };

// // const mul = (a: number, b: number) => a * b;

// const mul = (a: number, b: number = 1) => a * b;

// console.log(mul(2, 5));

// // const printOutput = (output: string | number) => {
// //     console.log(output);
// // }

// const printOutput: (a: string | number) => void = output => console.log(output);

// const button = document.querySelector('button');

// if (button) {
//     button.addEventListener('click', event => console.log(event));
// }

// printOutput(mul(5));

const hobbies = ['Sports', 'Cooking'];

console.log(hobbies[0]);

// const activeHobbies = ['Hiking'];
const activeHobbies = ['Hiking', ...hobbies];

// activeHobbies.push(hobbies[0], hobbies[1]);
activeHobbies.push(...hobbies);

const person = {
    FirstName: 'Max',
    age : 30
};

// const copiedPerson = person; // copies the pointer of person in the memory, doesn't create an actual copy.

const copiedPerson = { ...person }; // key: value pairs of person are added to this new object.

const add = (...numbers: number[]) => {
    return numbers.reduce((currentResult, currentValue) => {
        return currentResult + currentValue; 
    }, 0);
};

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);

// const hobby1 = hobbies[0];
// const hobby2 = hobbies[1];

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobbies, hobby1, hobby2);

const { FirstName: userName, age } = person;

console.log(userName, age, person)