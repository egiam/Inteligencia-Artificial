//TODO: Module 6

console.log("Primero");
console.log("Segundo");
console.log("Pongo la cafetera");
setTimeout(() => {
    console.log("El cafe esta listo");
}, 5000); //setTimeout(funcion, retraso en milisegundos);
console.log("Me doy una ducha");
console.log("Desayuno");

setTimeout(() => console.log("Mario"), 1000);
console.log("Juan");
console.log("Pedro");

//EJEMPLO 1

console.log("Mario");
console.log("Juan");
console.log("Pedro");

//EJEMPLO 2
setTimeout(() => console.log("Mario"), 1000);
console.log("Juan");
console.log("Pedro");

//EJEMPLO 3
setTimeout(() => console.log("Mario"), 0);
console.log("Juan");
console.log("Pedro");

//EJEMPLO 4
setTimeout(() => console.log("Mario"), 0);

for (let index = 0; index <= 5000; index++) {
    console.log(index);
    if (index === 5000) console.log("Juan");
}

console.log("Pedro");

function pagarConTarjeta(precio) {
    const limite = 10000;
    for (let index = 0; index < 5000; index++) {
        console.log("Conectando...");
    }

    if (precio < limite) {
        console.log("Compra Aprobada");
    } else {
        console.log("Compra Rechazada");
    }
}

function pagarConTarjeta(precio) {
    const limite = 10000;

    console.log("Conectando...");
    setTimeout(() => {
        if (precio < limite) console.log("Compra Aprobada");
        else console.log("Compra Rechazada");
    }, 2000);
}

//promesas: Tiene 3 estados: Pendiente, Resuelta, Rechazada

const pagarConTarjeta = (precio) =>
    new Promise((resolve, reject) => {
        const limite = 10000;

        if (precio < limite) resolve("Compra Aprobada");
        else reject("Compra Rechazada");
    });

console.log(pagarConTarjeta(1000));

const pagarConTarjeta = (precio, isConected) =>
    new Promise((resolve, reject) => {
        const limite = 10000;
        if (!isConected) return;
        console.log("Procesando el pago");
        setTimeout(() => {
            if (precio <= limite) resolve("Compra Aprobada");
            else reject("Compra Rechazada");
        }, 3000);
    });

//TODO: .then y .catch

console.log(
    pagarConTarjeta(10000, true)
    .then((respuesta) => {
        //Devuelve el resolve de la promesa
        console.log(respuesta);
    })
    .catch((error) => console.log(error)) //En caso de error en la promesa
);
console.log("Otra tarea");

//

const pagarConTarjeta = (precio, isConected) =>
    new Promise((resolve, reject) => {
        const limite = 10000;
        console.log("Procesando el pago");
        if (!isConected) return;
        setTimeout(() => {
            if (precio <= limite) resolve("Compra Aprobada");
            else reject("Compra Rechazada");
        }, 3000);
    });

async function procesarPago() {
    const respuesta = await pagarConTarjeta(100, true); //Espera a q se resuelva esto, y despues hace el resto

    console.log(respuesta);
}

async function procesarPago1()
try {
    const respuesta = await pagarConTarjeta(100000, true)
    console.log(respuesta);
} catch (error) {
    console.log(error);
}

const allPromises = [pagarConTarjeta(150, true), pagarConTarjeta(50, true), pagarConTarjeta(100, true)];

Promise.all(allPromises); //Espera q todas las promesas se resuelvan, y ejecuta con la misma logica, pero si una tira un error, directamente va a fallar

async function procesarPago2() {
    try {
        const respuesta = await Promise.all(allPromises);
        console.log(respuesta);
        return "Todas resueltas"
    } catch (error) {
        console.log(error);
    }
}

console.log(procesarPago2().then(response => console.log(response)));

//FETCH

const getDataFromApi = async() => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const jsonResponse = await response.json(); //json = JaaScript Object Notation --> Se utiliza para enviar y recibir data de HTTP
        //json es una promesa tambien

        return jsonResponse;
    } catch (error) {
        console.log("error =>", error)
    }
};

console.log(getDataFromApi().then(response => console.log(response)));



//ASINCRONISMO Y CALL STACK - ROUND 2

//EJEMPLO 1

const asyncOperation = new Promise((resolve) => resolve());

asyncOperation.then((resolvedValue) => console.log("Mario"));
console.log("Juan");
console.log("Pedro");

//EJEMPLO 2
const asyncOperation2 = fetch("https://jsonplaceholder.typicode.com/todos/1"); //Fetch es una promesa tambien
asyncOperation2.then((resolvedValue) => console.log("Mario"));
console.log("Juan");
console.log("Pedro");

//EJEMPLO 3
async function fetchSomething() {
    await new Promise((resolve) => { //Tiene await, esperamos a q se resuelva. Pausa la ejecucion de codigo, espera a q la promesa se resuelva y despues sigue ejecutando el codigo
        setTimeout(() => {
            console.log("Mario");
            resolve();
        }, 10);
    });

    console.log("Juan"); //Retorna al ultimo, xq hace esperar a q funciones la promise de mario para poder usarse
}

fetchSomething();

console.log("Pedro"); //Es codigo sincronico x estar fuera de la funcion async

///EJEMPLO 4
setTimeout(() => console.log("Mario"), 10);

const promise = new Promise((resolve) => { //La promesa tiene prioridad sobre el setTimeout
    setTimeout(() => resolve(), 10);
});

promise.then(() => console.log("Juan")); //.then no detiene la ejecucion de otras funcionalidades asincronicas.
console.log("Pedro");

//EJEMPLO 5

setTimeout(() => console.log("Mario"), 0); //Mario ultimo, xq promesa tiene prioridad sobre setTimeout
const promise1 = Promise.resolve();
promise1.then(() => console.log("Juan")); //Juan con prioridad xq es promesa
console.log("Pedro");

// 1) Vamos a simular una carrera entre 3 personas, Juan,
// Mario y Martin. El orden de largada sera siempre el
//siguiente:

// console.log("Juan");
// console.log("Mario");
// console.log("Martin");

// El orden de llegada se determina conforme el
// nombre de cada uno vaya apareciendo en la consola,
// de modo que el ganador sera aquel cuyo nombre sea
//el primero en aparecer.

// ACTIVIDAD: Utilizando solamente setTimeout y sin
// alterar el orden de lagrada, escribir el codigo
// necesario para obtener los siguientes resultados:

// Vuelta 1:
// Mario
// Martin
// Juan

setTimeout(() => console.log("Juan"), 0);
console.log("Mario");
console.log("Martin");

//Vuelta 2:
// Juan
// Martin
// Mario

console.log("Juan");
setTimeout(() => console.log("Mario"), 0);
console.log("Martin");

//Vuelta 3
// Martin
// Juan
// Mario

// setTimeout(() => console.log("Juan"), 0);
// setTimeout(() => console.log("Mario"), 1);
setTimeout(() => {
    console.log("Juan");
    console.log("Mario");
}, 0);
console.log("Martin");


// Vuelta 4
// Mario
// Juan
// Martin

setTimeout(() => console.log("Juan"), 10);
console.log("Mario");
setTimeout(() => console.log("Martin"), 15);

// 2) Utilizando setTimeout, crear una funcion que
// actue como un temporizador, haciendo una cuenta
// regresiva desde el numero de segundos que se pase
// como argumentos hasta llegar a 0. Para ese ejercicio
// no se puede utilizar ningun tipo de loop (for, while, etc)
//PISTA: Para resolver el ejerciio, pueden investigar un
// poco sobre funciones recursivas.

await

function temporizador(segundos) {
    if (segundos < 0) return;
    setTimeout(() => console.log(segundos), 1000);
    temporizador(segundos - 1);
}

temporizador(17);

//Profe

const temporizador1 = (second) => {
    setTimeout(() => {
        if (second < 0) return;

        console.log(second);

        temporizador(second - 1);
    }, 1000);
};

temporizador1(10);

//3) Utilizando la API de GITHUB (https://api.github.com)
//realizar las siguientes tareas

// a) Obtener una lista de los repositorios publicos
// (Documentacion de la API: https://docs.github.com/es/rest/reference/repos#list-public-repositories)

const baseUrl = "https://api.github.com";

const getPublicRepositories = async() => {
    const response = await fetch(`${baseUrl}/repositories`);
    const jsonResponse = await response.json();
    //   console.log(jsonResponse);
    return jsonResponse;
};

//getPublicRepositories();

// b) Generar una funcion que a partir de la respuesta
// del punto anterior, retorne un array de los nombres
// de usuario de los owners de los repositorios listados

const getOwnersNames = async() => {
    const repositories = await getPublicRepositories();

    const namesArray = repositories.map((repo) => repo.owner.login);

    console.log(namesArray);
};

getOwnersNames();

//c) Tomar de la respuesta al primer respositorio, y
// listar todos los repositorios del owner.
// PISTA: Para ver el endpoint al cual deberas pegarle
// para traer los repositorios del owner, deberas
// inspeccionar la informacion que recibes dentro del
// primer request.

const getRepositoriesFromOwner = async() => {
    const repositories = await getPublicRepositories();
    const firstRepository = repositories[0];

    const reposEndpoint = firstRepository.owner.repos_url;

    const reposResponse = await fetch(reposEndpoint);
    const jsonReposResponse = await reposResponse.json();

    console.log(jsonReposResponse);
};

getRepositoriesFromOwner();


//