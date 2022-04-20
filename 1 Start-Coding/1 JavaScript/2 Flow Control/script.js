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

//