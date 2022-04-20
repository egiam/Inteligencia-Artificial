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

//TODO: Video 10

//Aritmeticos
console.log(typeof "Hola");
console.log(+"123"); //Convierte en Numero
console.log(-"123"); //Convierte en Numero y niega
console.log(+"tres"); //NaN

console.log(2 + 3);
console.log(2 - 3);
console.log(2 / 3);
console.log(2 * 3);
console.log(2 % 3);

//Logicos
console.log(2 < 3); //True
console.log(2 > 3); //False
console.log(2 >= 2);
console.log(2 === 2); //Comparacion estricta = Compara tipo y valor (2 === "2") --> False lo mismo con !==
console.log(2 == 2); //Comparacion no estricta = solo compara valor (2 == "2") --> True lo mismo con !=

console.log(2 === 2 && 2 > 0);
console.log(2 === 2 || 2 < 0);

let edad = 18;

console.log(edad >= 18 ? "Podes manejar" : "No tenes edad para manejar"); //Como un IF-ELSE pero solo en una linea

//La asociacion se hace de derecha a izquierda

//Variable: Caja en donde vamos a guardar un valor
// var | let | const
var variableVar = 1; //
let variableLet = 3; //El valor se puede cambiar
const variableConst = 5; //El valor no se puede cambiar, es constante

//Template Literals

const firstName = "Alexis";
const job = "Desarrollador";
const favouriteNumber = 7;

//Hola, soy Alexis, soy Desarrollador
//y mi numero favorito es el 7

console.log(
    "Hola, soy" +
    " " +
    firstName +
    ", soy " +
    job +
    "y mi numero favorito es el " +
    favouriteNumber
);

console.log(
    `Hola, soy ${firstName},
    soy ${job} y
    mi numero favorito es el ${3 + 4}`
);

console.log("I'm");

//Ej 1
const nombreUsuario = prompt("Coloque su nombre: ");
console.log(`Hola ${nombreUsuario}`);

//Ej2
console.log(prompt("Ingrese un numero: ") + prompt("Ingrese otro numero: "));

//Ej3
console.log(
    (prompt("Ingrese un numero: ") + prompt("Ingrese otro numero: ")) * 2
);

//Ej 4
console.log(prompt("Ingrese el ancho: ") * prompt("Ingrese el alto: "));

//Ej 5
console.log(prompt("Ingrese su nombre: ").lower());

//Ej 6
console.log(prompt("Ingrese su apellido: ").toUpperCase());

//Ej 7
const nameUser = prompt("Su nombre: ");
const lastName = prompt("Su apellido: ");
const ageUser = prompt("Su edad: ");

console.log(
    `Nombre: ${nameUser}
    Apellido: ${lastName}
    Edad: ${ageUser}`
);

//