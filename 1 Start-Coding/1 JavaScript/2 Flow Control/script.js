//TODO: Vid 1

//Control de flujo

//if / else

let age = 17;

if (age >= 18) {
    console.log("Podes manejar");
} else {
    console.log("No podes manejar");
}

let number = 10;

if (number < 10) {
    console.log("El numero es menor a 10.");
} else if (number > 10) {
    console.log("El numero es mayor a 10.");
} else if (number === 10) {
    console.log("El numero es 10.");
} else {
    console.log("No es un numero.");
}

//switch

const weather = "fresco";

switch (weather.toUpperCase()) {
    case "FRESCO":
        console.log("Lleva Abrigo");
        break;

    case "LLUVIOSO":
        console.log("Lleva Paraguas");
        break;

    case "SOLEADO":
        console.log("Cuidate del sol");
        break;

    default:
        console.log("El tiempo esta bueno. Disfruta del dia :)");
        break;
}

//Vid 3

//FOR

for (let i = 0; i <= 5; i++) {
    console.log(i);
}

//Vid 4

//While y Do while

number = 0;

do {
    console.log("Con un Do While ", nmber);
    number++;
} while (number < 1);

number = 0;

while (number < 1) {
    console.log("Con while ", number);
    number++;
}

//Ejercicios
//1

let variable = "#";

for (let i = 0; i <= 4; i++) {
    console.log(variable);
    variable += "#";
}

console.log("#");
console.log("##");
console.log("###");
console.log("####");
console.log("#####");

/* 1) Triangulo de #. Para este ejercicio, construir un programa que una vez concluido nos permita ver en consola un triangulo
formado con #, de la siguiente manera:
#
##
###
####
#####
 
(PISTA: Recuerden que yo puedo agarrar una variable, tomar su valor y concatenarla con otra cosa asi
=> miVariable = miVariable + 'algoMas")
*/

let output = "";

for (let i = 1; i <= 5; i++) {
    output += "#";
    console.log(output);
}

/*2) Numeros pares e impares. Hacer un programa que itere por los numeros del 0 al 10 y, por cada uno de ellos, imprima el numero y
nos diga si es par o impar. 
Ejemplo:
0 es par
1 es impar
2 es par
...
*/

for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) console.log(`${i} es par`);
    else console.log(`${i} es impar`);
}

/*3) FizzBuzz. Generar un programa que itere del 1 al 15. Por cada iteracion, mostrar por consola lo siguiente:
1- Si el numero es multimo de 3, mostrar la palabra "Fizz"
2- Si el numero es multiplo de 5, mostrar la palabra "Buzz"
3- Si el numero es multiplo de 3 y 5, mostrar la palabra "FizzBuzz"
4- En los demas casos, mostrar el numero
*/

for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }

    let text = "";

    if (i % 3 === 0) {
        text += "Fizz";
    }

    if (i % 5 === 0) {
        text += "Buzz";
    } else if (i % 3 !== 0 && i % 5 !== 0) {
        text = i;
    }

    console.log(text);
}

//