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

//Vid 5

const numbers = [10, 20, 30, 40];

const orderedArray = nombres.sort(); //Ordenado x orden alfabetico
console.log(orderedArray.reverse()); //Reverse: de atras para adelante

//Sin reduce

// let total = 0;

// numbers.forEach((number) => (total += number));

//Con reduce

const total = numbers.reduce((acumulador, valorActual) => {
    console.log("Acumulador", acumulador);
    console.log("Valor actual", valorActual);
    console.log("Aca termina la iteracion.");

    return acumulador + valorActual;
}, 0); //(() => {}, valor inicial del que quiero partit)

const total1 = numbers.reduce(
    (acumulador, valorActual) => acumulador + valorActual,
    0
);

console.log(total);
console.log(total1);

//EJERCICIOS

/*
Dada la siguiente lista de invitados en ese orden:
Lucas,
Matias,
Jose,
Pedro,
Martina, 
Marcelo, 
Esteban, 
Marcela, 
Martin
 1) Informar por consola el numero de invitados 
*/
const list = [
    "Lucas",
    "Matias",
    "Jose",
    "Pedro",
    "Martina",
    "Marcelo",
    "Esteban",
    "Marcela",
    "Martin",
];

// console.log(`La cantidad de invitados es de ${list.length}`);

/*2) Imprimir por consola el nombre del ultimo invitado
 */

// console.log(
//   `El ultimo invitado de la fiesta es ${list[list.length - 1]}`
// );

/*3) A ultimo momento, se invito a Pedro a la fiesta, por lo que
   hay que agregarlo al final de la lista.
   */
list.push("Pedro");

// console.log(list);

/*4) Media hora antes de empezar Marcela confirmo que no podia asistir.
   Generar una nueva lista que contenga los invitados que confirmaron su
   presencia.
   */

const newList = list.filter((firstName) => firstName !== "Marcela");

// console.log(newList);

/*4) Por cada invitado, asignarle un numero de orden conforme
  su posicion en la lista. Mostrar este numero de orden en un nuevo
  array de la siguiente manera: "Juan. Orden: 1".
  */

// const listWithOrderNumber = newList.map(
//   (firstName, index) => `${firstName}. Orden: ${index + 1}`
// );

// console.log(listWithOrderNumber);

/*5) Suponiendo que los invitados consumieron la siguente cantidad de platos
      Lucas: 3 platos
      Esteban: 1 platos
      Jose: 1 plato
      Los restantes: 4 platos
  Calular el numero total de platos consumidos al final de la fiesta
  */
// const totalDishes = newList.reduce((acummulator, currentValue) => {
//   if (currentValue === "Lucas") {
//     return acummulator + 3;
//   } else if (currentValue === "Esteban" || currentValue === "Jose") {
//     return acummulator + 1;
//   } else {
//     return acummulator + 4;
//   }
// }, 0);

// console.log(totalDishes);
/*
  6) Acomodar los invitados por orden alfabetico.
  */

// const orderedNames = newList.sort();
// console.log(orderedNames);

//