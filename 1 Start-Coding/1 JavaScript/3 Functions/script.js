//Vid 1

function sum(num1, num2) {
    console.log(num1 + num2);
}

sum(2, 3);
sum(3, 13);
sum(3, 43);

//Vid 2

function sayHello() {
    return "Hola Mundo";
}

console.log(sayHello());
console.log(sum(2, 3) + 5);

const results = (num1, num2) => num1 + num2;

console.log(results(2, 3) + 5);

//Vid 3

let isValid = false;

function validatePermission(role) {
    let validRole = "admin";
    let isValid = true;

    if (role === validRole) {
        let isValid = true;
        console.log("Dentro del if ", isValid);
    } else {
        let isValid = false;
        console.log("Dentro del else ", isValid);
    }

    console.log("Dentro de la funcion ", isValid);
}

validatePermission("any");

console.log("A nivel global ", isValid);

//Vid 4

let color = "red";
const firstName = "Ezequiel";
var year = 2022;

function sayHello() {
    console.log("Hola Mundo");
}

function sayGoodBye() {
    console.log("Bye Bye");
}

const sum = (num1, num2) => num1 + num2;

//Var hace que se quede como Undefined cuando la llamas antes de que la declares

/* 
1) Crear un programa que pida al usuario que ingrese un numero
y le devuelva un mensaje indicando si el numero es positivo, 
negativo o si es 0.
*/

const numero = prompt("Ingrese un Numero: ");

if (numero > 0) {
    alert("El numero es Positivo.");
} else if (numero < 0) {
    alert("El numero es Negativo.");
} else {
    alert("El numero es Cero.");
}

//Profe

const findNumberType = (number) => {
    let message = "";
    const parsedNumber = +number;

    if (!parsedNumber && parsedNumber !== 0) {
        message = "El valor ingresado no es un numero";
        return message;
    }

    if (parsedNumber === 0) {
        message = "El numero ingresado es 0";
    } else if (parsedNumber > 0) {
        message = "El numero ingresado es positivo";
    } else {
        message = "El numero ingresado es negativo";
    }

    return message;
};

const chosenNumber = prompt("Ingresa un numero");

const response = findNumberType(chosenNumber);

alert(response);

/*
2) Crear un programa que pida un numero al usuario y le devuelva
un mensaje diciendo si el numero es primo o no.
Aclaración: Los números primos son aquellos que tienen exactamente 4 divisores enteros.
*/
let x = true;

function primo(number) {
    x = true;
    for (let i = 2; i <= 9; i++) {
        if (i !== number && number % i === 0) {
            x = false;
            alert("El numero no es primo.");
            break;
        }
    }
    if (x) {
        alert("El numero es primo.");
    }
}

const number = prompt("Coloque un numero: ");
primo(number);

//Profe

const isPrime = (number) => {
    const parsedNumber = +number;

    if (!parsedNumber && parsedNumber !== 0) {
        alert("El valor ingresado no es un numero");
        return;
    }

    if (parsedNumber < 2) return false;

    for (let i = 2; i < parsedNumber; i++) {
        if (parsedNumber % i === 0) return false;
    }

    return true;
};

const chosenNumber1 = prompt("Ingresa un numero");

const isNumberPrime = isPrime(chosenNumber1);

if (isNumberPrime !== undefined) {
    if (isNumberPrime) alert("El numero es primo");
    else alert("El numero no es primo");
}

/*
3) Crear un programa que convierta la termperatura de grados Celsius a 
Faranheit y viceversa. El usuario deberia ingresar la temperatura y a que
unidad la quiere convertir.
*/

//C a F (C x 9/5) + 32
// F a C (F -32) x 5/9

const temperatura = prompt("Ingrese la temperatura: ");
const unidad = prompt(
    "Ingrese a que unidad quiere convertir esa temperatura: "
).toLowerCase();

function convertirFarenheit(grados) {
    return grados * (9 / 5) + 32;
}

function convertirCelcius(grados) {
    return (grados - 32) * (5 / 9);
}

if (!temperatura && temperatura !== 0) {
    alert("El valor ingresado no es valido.");
} else if (unidad === "farenheit") {
    alert(
        `${temperatura} grados celcius es ${convertirFarenheit(
      temperatura
    )} grados farenheit.`
    );
} else if (unidad === "celcius") {
    alert(
        `${temperatura} grados farenheit es ${convertirCelcius(
      temperatura
    )} grados celcius.`
    );
}

//Profe

const convertTemperature = (temperature, target) => {
    const parsedTemp = +temperature;
    const parsedTarget = target.toLowerCase();

    if (!parsedTemp && parsedTemp !== 0) {
        alert("El valor ingresado no es valido");
        return;
    }

    if (parsedTarget === "celsius") {
        return ((parsedTemp - 32) * 5) / 9;
    } else if (parsedTarget === "faranheit") {
        return (parsedTemp * 9) / 5 + 32;
    } else {
        alert("El formato ingresado no es valido");
        return;
    }
};

const temperature = prompt("Ingresa la temperatura");
const target = prompt("Ingresa a que unidad de medida la queres convertir");

const response1 = convertTemperature(temperature, target);

if (response1 !== undefined) {
    alert(`La temperatura en ${target.toLowerCase()} es ${response1}`);
}

/*
4) Crear un programa para calcular el total de una compra. Para ello, se le
tiene que pedir al usuario que ingrese el precio de cada producto y, cuando termine, 
que ingrese la palabra 'total'. Devolverle el total de la compra.
*/

const calculateTotal = () => {
    let total = 0;
    let subTotal;

    do {
        subTotal = prompt("Ingresa el valor del producto");
        const parsedSubtotal = +subTotal;
        if (parsedSubtotal) {
            total += parsedSubtotal;
        } else {
            if (subTotal.toLowerCase() !== "total")
                alert("El valor ingresado no es correcto");
        }
    } while (subTotal.toLowerCase() !== "total");

    return total;
};

const response2 = calculateTotal();

alert(response2);

//Truthy y Falsy

FALSY: 0, null, undefined, NaN, "", "", ``, false;

console.log(Boolean(false));
console.log(Boolean(null));
console.log(!!0);
console.log(!!"");
console.log(Boolean("Hola Mundo"));
console.log(Boolean(40));
console.log(!![]);
console.log(!!{});

const firstName1 = prompt("Ingresa tu nombre");

if (+firstName) {
    console.log("esto es truthy", firstName1);
} else {
    console.log("esto es falsy,", +firstName1);
}

//