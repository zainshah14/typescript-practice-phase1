// class User {
//     name: string;
//     age: number;

//     constructor(n: string, a: number) {
//         this.name = n;
//         this.age = a;
//     }
// }

class UserT {
    constructor(public name: string, public age: number) {}
}

const max = new UserT('Max', 36);
const fred = new UserT('Fred', 29);

console.log(max, fred);