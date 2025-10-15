// enum Role {
//     Admin, 
//     Editor,
//     Guest
// }

// let userRole: Role = 0;

// ...

// userRole = Role.Guest

let userRole: 'admin' | 'editor' | 'guest' = 'admin';

userRole = 'guest';

let possibleResults: [1 | -1, 1 | -1]; // [1, -1]

possibleResults = [1, -1];