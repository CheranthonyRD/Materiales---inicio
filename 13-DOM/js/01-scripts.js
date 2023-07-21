const titulo = document.querySelector(".contenido-hero h1");
// const card = document.querySelector('.card img');
const h2 = document.querySelector('.hacer>h2');
const cards = document.querySelector('.card');
const parrafos = document.querySelectorAll('p');
const nav = document.querySelector('.navegacion');
const hacer = document.querySelector('.hacer');
// cambiar src
// titulo.innerHTML = "Estoy cambiando el titulo";
// card.src = 'img/hacer3.jpg';

//cambiar el color al h2 con la clase style

// h2.style.color = "crimson";
// h2.style.fontSize = "2.5em";


// console.log(hacer.children[1].children)

// Array.from(hacer.children[1].children).forEach(child =>{
//     if(child.className === 'card'){
//         child.classList.remove(child.className);
//         child.classList.add('cambiada');
//     }
// });

//crear elementos
const contenedor = document.querySelector('.contenedor-cards');
const parrafo1 = document.createElement('p');
const parrafo2 = document.createElement('p');
const parrafo3 = document.createElement('p');
const img1 = document.createElement('img');
const info = document.createElement('div');
const card = document.createElement('div');


//asignar valores y atributos
img1.src = 'img/hacer4.jpg';
info.classList.add('info');
card.classList.add('card');
contenedor.append(card);
card.append(img1);
card.append(info);
info.append(parrafo1);
info.append(parrafo2);
info.append(parrafo3);
parrafo2.classList.add('titulo');
parrafo2.textContent = "Paseo en Cancino 2";
parrafo3.classList.add('precio');
parrafo3.textContent = "$1450 por persona";
parrafo1.className = "categoria paseo";
parrafo1.textContent = "Paseo en motores";

