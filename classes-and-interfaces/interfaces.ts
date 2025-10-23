interface Authenticatable {
    email: string;
    password: string;

    login(): void;
    logout(): void;
}

let user: Authenticatable;

user = {
    email: 'test@example.com',
    password: 'abc1',
    login() {
        
    },
    logout() {
        
    },
}