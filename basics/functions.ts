function add(a:number, b:number): number {
    return a + b;
}

function add2(a:number, b:number) {
    return a + b;
}

function log(message: string): void {
    console.log(message);
}


function log2(message: string) {
    console.log(message);
}

function logAndThrow(errorMessage: string): never {
    console.log(errorMessage);
    throw new Error(errorMessage);
}

// javascript function
const logMsg = (msg: string) => {
    console.log(msg);
};

function performJob(cb: (m: string) => void) {
    // ...
    cb('Job done!');
}

performJob(log);

type User = {
    name: string;
    age: number;
    greet: () => string;
};

let user: User = {
    name: 'Max',
    age: 39,
    greet() {
        console.log('Hello there!');
        return this.name;
    }
}

user.greet();