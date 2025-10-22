// const userName = 'Max';
// // userName = 'Maxim'
// let age = 30;
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
var hobbies = ['Sports', 'Cooking'];
console.log(hobbies[0]);
// const activeHobbies = ['Hiking'];
var activeHobbies = __spreadArray(['Hiking'], hobbies, true);
// activeHobbies.push(hobbies[0], hobbies[1]);
activeHobbies.push.apply(activeHobbies, hobbies);
var person = {
    FirstName: 'Max',
    age: 30
};
// const copiedPerson = person; // copies the pointer of person in the memory, doesn't create an actual copy.
var copiedPerson = __assign({}, person); // key: value pairs of person are added to this new object.
var add = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (currentResult, currentValue) {
        return currentResult + currentValue;
    }, 0);
};
var addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);
// const hobby1 = hobbies[0];
// const hobby2 = hobbies[1];
var hobby1 = hobbies[0], hobby2 = hobbies[1], remainingHobbies = hobbies.slice(2);
console.log(hobbies, hobby1, hobby2);
var userName = person.FirstName, age = person.age;
console.log(userName, age, person);
