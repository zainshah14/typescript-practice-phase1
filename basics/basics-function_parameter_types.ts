let userName: string;
let userAge = 40;

//...

userName = 'Zain Shah';
//userAge = 35
//console.log(userName);

function add(a: number, b = 5) {
    return a + b;
}

add(10);
//add('10');
add(10, 6);
//add(10, '6');