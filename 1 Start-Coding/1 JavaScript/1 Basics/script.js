//TODO: Video 3
alert("Hello world");

//TODO: Video 6
//Variables

//Number
console.log(3); //typeof dice el tipo de variable
console.log(3.5);
console.log(Infinity);
console.log(NaN);

//String
console.log("Hello, World");
console.log(typeof "Hello");
console.log("3");

//Bool
console.log(true);
console.log(false);

//Null y Undefined
console.log(undefined);
console.log(null);

let myVariable = null;
console.log(myVariable);

//TODO: Video 7

let miVariable = 3;
console.log(miVariable);
console.log(2 + 3);

function saludar() {
    return "Hola";
}

console.log(saludar());

let mi_variable = true;

if (mi_variable) {
    console.log("Verdadero");
} else {
    console.log("Falso");
}

//De Navegador
alert("Hola we");

let nombre = prompt("Ingresa tu nombre: ");

console.log("Hola " + nombre);

console.log(confirm("Estas seguro?"));

//TODO: Video 9

let string = "123";
console.log(Number(string));
console.log(parseInt(string));
console.log(+string);

let string1 = "123Hola";
console.log(Number(string1)); //  Da NaN
console.log(parseInt(string1)); //Pasa a int los numeros hasta q se encuentre con una letra
console.log(+string1); //         Da NaN

//Concatenacion

let nombre1 = "Alexis";
console.log("Hola " + nombre1);

let str = 2;
let number = 0;

console.log(Boolean(str));
console.log(Boolean(number));

console.log(!!str);
console.log(!!number);

//Conversion implicita

string = "2";
number = 2;
let otroNumber = 3;

console.log(string + number); //Concatena, xq tiene uno q es string
console.log(otroNumber + number + string); //Recibe 52, primero suma los dos numeros y despues lo convierte a string concatenando

//