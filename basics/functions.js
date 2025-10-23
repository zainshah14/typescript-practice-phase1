function add(a, b) {
    return a + b;
}
function add2(a, b) {
    return a + b;
}
function log(message) {
    console.log(message);
}
function log2(message) {
    console.log(message);
}
function logAndThrow(errorMessage) {
    console.log(errorMessage);
    throw new Error(errorMessage);
}
function addAndCheck(a, b) {
    const sum = a + b;
    if (sum > 5) {
        logAndThrow('Too big');
        console.log('check');
    }
    else {
        return;
    }
}
// javascript function
const logMsg = (msg) => {
    console.log(msg);
};
function performJob(cb) {
    // ...
    cb('Job done!');
}
performJob(log);
let user = {
    name: 'Max',
    age: 39,
    greet() {
        console.log('Hello there!');
        return this.name;
    }
};
addAndCheck(2, 3);
