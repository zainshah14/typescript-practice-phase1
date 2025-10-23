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

function addAndCheck(a:number,b:number):void {
    const sum = a + b
    if (sum > 5) {
        try {
            logAndThrow('Too big')
            
            console.log('something')
        } catch(e){
            if (e.message === "Too big"){
                console.log(e)
            } else {
                throw e
            }
        }
        console.log('check')
    }
    else {
        return
    }
}

function tryCatch():void{
    try {
        addAndCheck(2,6)
    } catch (e) {
        console.log(e)
    }
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
    isOld:boolean
    friends:User[]
    greet: () => string;
};

let user1:User = {
    name: 'Max',
    age: 69,
    isOld:true,
    friends:[],
    greet() {
        console.log('Hello there!');
        return this.name;
    }
}

let user2:User = {
    name: 'Zain',
    age: 10,
    isOld:false,
    friends:[user1],
    greet() {
        console.log('Hello there! Sup');
        return this.name;
    }
}

addAndCheck(2,3)

if (user) {
    console.log('truthy')
} else {
    console.log('falsy')
}