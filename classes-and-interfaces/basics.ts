// class User {
//     name: string;
//     age: number;

//     constructor(n: string, a: number) {
//         this.name = n;
//         this.age = a;
//     }
// }

class UserT {
    // public hobbies: string[] = []
    readonly hobbies: string[] = []

    constructor(public name: string, private age: number) {}

    greet() {
        console.log('Me age: ' + this.age);
    }
}

const max = new UserT('Max', 36);
const fred = new UserT('Fred', 29);

// max.hobbies.push('Sports');
// max.hobbies = ['Sports'];

console.log(max, fred);