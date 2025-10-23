// class UserB {
//     constructor(private firstName: string, private lastName: string) {}

//     get fullName() {
//         return this.firstName + ' ' + this.lastName;
//     }
// }

// const max = new UserB('Max', 'Shah');
// console.log(max.fullName);

class UserB {
    private _firstName: string;
    private _lastName: string;

    set firstName(name: string) {
        if (name.trim() === '') {
            throw new Error('Invalid name.')
        }
        this._firstName = name;
    }

    set lastName(name: string) {
        if (name.trim() === '') {
            throw new Error('Invalid name.')
        }
        this._lastName = name;
    }

    get fullName() {
        return this._firstName + ' ' + this._lastName;
    }

    static eid = 'USER';

    static greet() {
        console.log('Hello!');
    }
}

console.log(UserB.eid)
UserB.greet();

// const max = new UserB('Max', 'Shah');

const max = new UserB();
max.firstName = 'Max';
max.lastName = 'Shah'; 

console.log(max.fullName);

class Employee extends UserB {
    constructor(public jobTitle: string) {
        super();
        // super.firstName = 'Max';
    }

    work() {
        // ...
    }
}