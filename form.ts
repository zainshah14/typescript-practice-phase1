// const inputEL = document.getElementById('user-name')!;

// // if(!inputEL) {
// //     throw new Error('Element not found!');
// // }

// console.log(inputEL.value);


// const inputEL2 = document.getElementById('user-name');

// console.log(inputEL2?.value);

const inputEL3 = document.getElementById('user-name') as HTMLInputElement | null;

console.log(inputEL3?.value);