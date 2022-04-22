//Vid 1

function sum(num1, num2) {
    console.log(num1 + num2);
}

sum(2, 3);
sum(3, 13);
sum(3, 43);

//Vid 2

function sayHello() {
    return "Hola Mundo";
}

console.log(sayHello());
console.log(sum(2, 3) + 5);

const results = (num1, num2) => num1 + num2;

console.log(results(2, 3) + 5);

//Vid 3

let isValid = false;

function validatePermission(role) {
    let validRole = "admin";
    let isValid = true;

    if (role === validRole) {
        let isValid = true;
        console.log("Dentro del if ", isValid);
    } else {
        let isValid = false;
        console.log("Dentro del else ", isValid);
    }

    console.log("Dentro de la funcion ", isValid);
}

validatePermission("any");

console.log("A nivel global ", isValid);

//Vid 4

let color = "red";
const firstName = "Ezequiel";
var year = 2022;

function sayHello() {
    console.log("Hola Mundo");
}

function sayGoodBye() {
    console.log("Bye Bye");
}

const sum = (num1, num2) => num1 + num2;

//Var hace que se quede como Undefined cuando la llamas antes de que la declares

//