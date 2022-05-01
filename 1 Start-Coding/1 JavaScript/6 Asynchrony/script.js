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

//