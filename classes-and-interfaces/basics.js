// class User {
//     name: string;
//     age: number;
//     constructor(n: string, a: number) {
//         this.name = n;
//         this.age = a;
//     }
// }
var UserT = /** @class */ (function () {
    function UserT(name, age) {
        this.name = name;
        this.age = age;
    }
    return UserT;
}());
var max = new UserT('Max', 36);
var fred = new UserT('Fred', 29);
console.log(max, fred);
