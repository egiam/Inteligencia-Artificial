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

const nombres = [
    "Alexis",
    "juan",
    "Pedro",
    "Marcelo",
    "Armando",
    "Jorge",
    "Emanuel",
];

console.log(nombres[nombres.length - 1]); //Para acceder al ultimo elemento del array.
const lastElement = nombres[nombres.length - 1];

const element = "Pedro";
const index = nombres.indexOf(element); //Da el indice en el array de ese elemento.

//Vid 3
nombres.push("Jorge"); //Agregar elemento
nombres.pop(); //Elimina el ultimo elemento
nombres.unshift("Jorge"); //Agregar un elemento al comienzo del Array
nombres.shift(); //Eliminar un elemento del comienzo del Array
nombres.splice(1, 3); //Remover desde la posicion [1] hasta la posicion [3] (Remueve 1,2,3)
const newNombres = nombres.slice(1, 4); //Copiar al otro array solo desde la posicion [1] hasta la posicion [4]

//Vid 4

for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}

nombres.forEach((item) => {
    console.log(item);
});

//Vid 5
// MAP

//Sin map
const newArray = [];

miArray.forEach((name) => {
    const newString = `Nombre: ${name}`;
    console.log(newString);
    newArray.push(newString);
});

console.log(newArray);

// //Con map

const newArrayWithMap = miArray.map((name) => `Nombre: ${name}`);

console.log(newArrayWithMap);

//FILTER; // Filter te devuelve un array con todas las condiciones puestas
const namesArray = [
    "Alexis",
    "Juan",
    "Armando",
    "Pedro",
    "Marcelo",
    "Luis",
    "Armando",
    "Alexis",
    "Martina",
    "Armando",
    "Alexis",
];

const filteredArray = namesArray.filter((name) => name === "Nicolas");

console.log(filteredArray);

//find

const existingElements = namesArray.find((name) => name === "Alexis"); //Find = te devuelve el primer valor que cumpla la condicion

if (existingElements) {
    console.log("El nombre esta en la lista.");
} else {
    console.log("El nombre no esta en la lista.");
}

//