//EVENTOS

//Listado de eventos => https://developer.mozilla.org/es/docs/Web/Events

const logo = document.querySelector(".puzzle-logo"); // Agarra el logo

const sayHello = () => {
    alert("Hola Mundo");

    logo.removeEventListener("click", sayHello); // Una vez que suceda, que no tenga mas ese evento. Remove el evento o la escucha del evento.
};

logo.onclick = () => sayHello(); // En click, hacer la funcion

//addEventListener
logo.addEventListener("click", sayHello); // El alert con la funcion
logo.addEventListener("click", () => alert("Alert")); // El alert directamente sin la funcion

//

const paletteColors = {
    red: "rojo",
    black: "negro",
    white: "blanco",
    yellow: "amarillo",
    green: "verde",
    brown: "marron",
    purple: "violeta",
    peru: "peru",
};

let selectedColor;

const selectColor = (event) => {
    selectedColor = event.target.id; //Agarra del evento, el target id, osea lo que indica que cuadrado es, con todas sus caracteristicas
    const strongTag = document.querySelector("#selected-color"); //Agarra el color del cuadradito. Saber cual es el color sobre el cual se hizo click.
    strongTag.textContent = paletteColors[selectedColor]; //Mostrar el nombre del color (en spanish x paletteColors) en el texto
};

const paintSquare = (event) => {
    if (!selectedColor) return; //Si no hay selected color se vuelve, no se hace la funcion

    const selectedSquare = document.querySelector(`#${event.target.id}`); //Selecciona el id del mini cuadradito
    selectedSquare.className = `painterBlock ${selectedColor}`; //painterBlock para no perder los bordes, y despues se le agrega la otra clase tambn
    //Le agrega la clase al mini cuadradito, con nombre del color correspondiente. className para que se pueda pisar y cambiar facilmente de color.
};

//Pintar manteniendo el click
const paintSquareOnMove = (event) => {
    if (event.buttons !== 1) return;
    paintSquare(event);
};

const resetGrid = () => {
    gridSquares.forEach((square) => (square.className = "painterBlock")); //Por cada cuadradito cambiarle la clase a solo painterBlock
    selectedColor = null; //Dejar en nulo el color
    const strongTag = document.querySelector("#selected-color"); //Agarrar la tag que indica que color tengo
    strongTag.textContent = ""; //Escribe en el doc nada, q no hay color seleccionado
};

const colorSquares = document.querySelectorAll(".color"); //Selecciona en una lista todos los colores

colorSquares.forEach((square) => square.addEventListener("click", selectColor));
//X cada cuadradito se hace un addEventListener, donde escucha el evento click, cuando sucede se dispara el callback(selectColor)

const gridSquares = document.querySelectorAll(".painterBlock"); //Selecciona los mini cuadraditos

gridSquares.forEach((square) => square.addEventListener("click", paintSquare)); //Cuando clickean en el mini cuadradito se llama a paintSquare

gridSquares.forEach(
    (square) => square.addEventListener("mousemove", paintSquareOnMove) //mousemove cuando mueva el mouse va a pintar
);

const resetBtn = document.querySelector("#reset-btn"); //Agarra el boton x su id

resetBtn.addEventListener("click", resetGrid); //Genera el evento del boton