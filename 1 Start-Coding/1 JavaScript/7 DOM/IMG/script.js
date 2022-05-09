//DOM - Arbol de nodos

// DOM (Document Object Model)
// Live DOM Viewer => https://software.hixie.ch/utilities/js/live-dom-viewer/#

//Acceder a un nodo

// 1) Por el tag name
const header = document.getElementsByTagName("header");

console.log(header);

// 2) Por el nombre de la clase

const container = document.getElementsByClassName("container");

console.log(container);

// 3) por ID - Trae solo el primer elemento con el ID

const avatar = document.getElementById("avatar");

console.log(avatar);

//4) QuerySelector - Solo devuelve el primer elemento q coincida.

const main = document.querySelector("main"); //Tag ej. (div - strong - a - p)

console.log(main);

const username = document.querySelector(".username"); //Class name

console.log(username);

const repos = document.querySelector("#repos"); //ID

console.log(repos);

//5) querySelectorAll - Devuelve todos los elementos q coincidan

const username1 = document.querySelectorAll(".username");

console.log(username1);

// Acceder y modificar texto (textContent o innerText)
const username2 = document.querySelector(".username");

username2.innerText = "Juan";

// Acceder y modificar src de imagen

const avatar1 = document.querySelector("#avatar");

avatar1.src = "https://i.pravatar.cc/300";

console.log(avatar1);

// Incorporar codigo HTML mediante JS

const list = document.querySelector("#repos-list");

list.innerHTML = `
<li> Un Repo </li>
<li> Otro <strong>Repo</strong> </li>
`;

console.log(list.outerHTML); //Nos devuelve lo agregado desde el atributo de lista
console.log(list.innerHTML); //Nos devuelve lo agregado sin lo del atributo de lista

//Modificar estilos
console.log(container.className);

//className
container.className = "background-black"; //Sobreescribe lo que habia
console.log(container.className);

// classList
container.classList.add("background-black"); //Agrega sin borrar la clase anterior
console.log(container.classList);

container.classList.remove("background-black"); //Elimina lo indicado

//toggle - Si existe eliminarlo, si no agregarlo

//Tema negro o blanco
const switchTheme = () => {
    const textNodes = document.querySelectorAll(".text");
    const container = document.querySelector(".container");
    const avatar = document.querySelector("#avatar");

    container.classList.toggle("background-black"); //Fondo Negro
    textNodes.forEach((element) => element.classList.toggle("white-text")); //Texto en blanco
    if (container.classList.contains("background-black")) {
        avatar.style.border = "2px solid white";
    }
};

switchTheme();
const container = document.querySelector(".container");

// switchTheme();

//Eliminar un nodo
// remove();

const repos1 = document.querySelector("#repos");

repos1.remove();

//Crear Nodo
//document.createElement

const reposNode = document.createElement("h2");
reposNode.textContent = "Repos";
reposNode.classList.add("text", "white-text");
console.log(reposNode);

//appendChild

const parentAside = document.querySelector("aside"); //Elije el nodo aside

parentAside.appendChild(reposNode); //Agrega como hijo a reposNode al nodo aside

//before y after

const reposList = document.querySelector("#repos-list");

reposList.before(reposNode);
reposList.after(reposNode);
switchTheme();
switchTheme();

// Link de propiedades y metodos de elementos => https://developer.mozilla.org/es/docs/Web/API/Element
// link de propieades y metodos document => https://developer.mozilla.org/es/docs/Web/API/Document

//EJERCICIO
//Utilizando el listado de
// repositorios que nos da la API de GITHUB (https://api.github.com)
// tomar el primer repositorio del listado y
// realizar las siguientes tareas:

// 1) Modificar el texto 'Nombre' por el nombre de usuario
// 2) Agregar el avatar del usuario
// 3) Insertar un listado de links a sus 5 primeros
// repositorios.

const baseUrl = "https://api.github.com";

const getPublicRepositories = async() => {
    const response = await fetch(`${baseUrl}/repositories`);
    const jsonResponse = await response.json();
    return jsonResponse[0];
};

const getRepositoriesFromOwner = async(reposEndpoint) => {
    const reposResponse = await fetch(reposEndpoint);
    const jsonReposResponse = await reposResponse.json();
    const responseRepos = jsonReposResponse.slice(0, 5);
    return responseRepos;
};

const editProfile = async() => {
    const profileData = await getPublicRepositories();
    const avatarUrl = profileData.owner.avatar_url;
    const name = profileData.owner.login;
    const userRepos = await getRepositoriesFromOwner(profileData.owner.repos_url);

    const userAvatar = document.querySelector("#avatar");
    const nameNode = document.querySelector("h1");

    nameNode.textContent = name;
    userAvatar.src = avatarUrl;

    userRepos.forEach((repo) => {
        const repoNode = document.createElement("a");
        const listNode = document.querySelector("#repos-list");
        repoNode.textContent = repo.html_url;
        repoNode.href = repo.html_url;

        listNode.appendChild(repoNode);
    });

    console.log(userRepos);
};

editProfile();

//