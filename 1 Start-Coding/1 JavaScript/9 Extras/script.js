// Destructuring
const names1 = ["Alexis", "Juan", "Pedro"];
const names2 = ["Martin", "Javier", "Matias"];

const person1 = {
    firstname: "Juan",
    job: "Contador",
    city: "Cordoba",
};

//Arrays

//Sin destructuring
// const user1 = names1[0];
// const user2 = names1[1];
// const user3 = names1[2];

// console.log(user1, user2, user3);

//Con destructuring

const [user1, user2] = names1; //Se extraen en el orden que se encuentran (user1 = names1[0], user2 = names1[1])

// console.log(user1, user2);

//Objetos

//Sin destructuring
// const user1 = person1.firstname;
// const job = person1.job;
// console.log(user1, job);

//Con destructuring

const { firstname, job } = person1;

// console.log(firstname, job);

///SPREAD OPERATOR (...)
// const names1 = ["Alexis", "Juan", "Pedro"];
// const names2 = ["Martin", "Javier", "Matias"];

// const person1 = {
//   firstname: "Juan",
//   job: "Contador",
//   city: "Cordoba",
// };

// En arrays

// 1) Concatenar arrays (concat)

const mergedArray = [...names1, ...names2]; //Crea el nuevo array concatenando los elementos de los dos arrays

// console.log(mergedArray);

// 2) Copia de array

const copiedArray = [...names1];

copiedArray.push("Marcelo");

// console.log(names1);
// console.log(copiedArray);

// 3) Obtener elementos del array

const [user3, ...groupedUsers] = names1;

// console.log(user1);
// console.log(groupedUsers);
// console.log(names1);

//En Funciones

const logValues = (value1, ...args) => {
    console.log("Soy el value 1 =>", value1);

    args.forEach((value) => console.log(value));
};

logValues("Hola", "Chau", "No aparezco", "Otro mas");

// En objetos

// 1) Copiar objetos
const copiedPerson = {...person1 };

copiedPerson.city = "Rosario";

console.log(copiedPerson);
console.log(person1);

// Mergear objetos (vs object.assign())

const mergedObject = {...person1, city: "Mendoza" }; //Cambio rosario x mendoza

console.log(mergedObject);

const updatedData = {
    city: "Rosario",
    age: 30,
};

const mergedObject1 = {...person1, ...updatedData }; //Modifica / cambia

console.log(mergedObject1);

//Programacion Funcional

const getFirstname = () => "Alexis";

console.log(getFirstname());

const getTwoNumber = () => 2;

console.log(getTwoNumber() + 3);

// Inmutabilidad

// const names1 = ["Alexis", "Juan", "Pedro"];
// const names2 = ["Martin", "Javier", "Matias"];

// const person1 = {
//     firstname: "Juan",
//     job: "Contador",
//     city: "Cordoba",
// };

const addMember = (currentMembers, newMember) => {
    const newMemberList = [...currentMembers, newMember];
    return newMemberList;
};

console.log(addMember(names1, "Marcelo")); //Agrega Marcelo

console.log(names1);

// Funciones Puras

const getRandomNumber = () => Math.random(); //Devuelve distinto casi siempre

const sum = (a, b) => a + b; //Siempre devuelve 5

console.log(sum(2, 3));
console.log(sum(2, 3));
console.log(sum(2, 3));
console.log(sum(2, 3));
console.log(sum(2, 3));

// High Order Functions

const logResult = (result) => console.log(result);
const alertResult = (result) => alert(result);

const sum1 = (a, b, callback) => callback(a + b); //High order Function

sum1(2, 3, logResult);
sum1(3, 3, alertResult);

// const names2 = ["Martin", "Javier", "Matias"];

names2.forEach(logResult);

var dayjs = require("dayjs");

const currentDate = dayjs().format("DD-MM-YYYY");

console.log(`La fecha actual es ${currentDate}`);

const inputNombre = document.querySelector("#input-nombre").value; // Juan
const inputApellido = document.querySelector("#input-apellido").value; // Martinez

const nombre = inputNombre.toUpperCase();
const apellido = inputApellido.toUpperCase();

const data = { nombreCompleto: nombre.concat(" ", apellido) };

const nombre1 = document.querySelector("#input-nombre").value; // 'Juan   ';

console.log(nombre1.trim()); // 'Juan'

const dni = document.querySelector("#input-nombre").value; // 'Juan   ';

console.log(nombre1.trim()); // 'Juan'// "23.345.678"

console.log(dni.replaceAll(".", "")); // 23345898