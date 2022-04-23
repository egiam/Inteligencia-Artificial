//TODO: Modulo 4 Arrays

// Vid 1

const miArray = ["La mochila de Alexis", "Cartera de Maria", "Bolsa de Juan"];
// const otroArray = new Array();

const otroArray = [
    ["Juan", 30, {}], "Alexis", 2, true
];
console.log(otroArray);
console.log(otroArray[2]);

const elemento = otroArray[0];
console.log(elemento);

const nombres = ["Alexis", "juan", "Pedro", "Marcelo"];

console.log(nombres[nombres.length - 1]); //Para acceder al ultimo elemento del array.
const lastElement = nombres[nombres.length - 1];

const element = "Pedro";
const index = nombres.indexOf(element); //Da el indice en el array de ese elemento.

//