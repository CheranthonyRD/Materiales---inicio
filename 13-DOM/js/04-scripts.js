// let elemento;

// elemento = document;
// elemento = document.all;
// elemento = document.head;
// elemento = document.body;
// elemento = document.forms;
// elemento = document.domain;
// elemento = document.links;
// elemento = document.images;
// elemento = document.scripts;

// console.log(elemento);


// const h2 = document.querySelector('h2');

// h2.addEventListener('mouseover', () =>{
//     change_style_h2();
// });

// //cambiar style al elemento h2
// function change_style_h2(){
//     h2.style.color = "#fd15fd";
//     h2.style.fontFamily = "Sans-serif";
//     h2.style.fontSize = "2.2rem";
// } 


// document.parentElement
// document.children
// document.nextSibling
// document.previousSibling

//eliminar elementos del DOM

// const card = document.querySelector('.contenedor-cards');
// card.children[0].remove();



// console.log(card);

// generar HTML con JS

// const enlace = document.createElement('a');
// const nav = document.querySelector('.navegacion');

// enlace.setAttribute('href', '.contenedor-cards');
// enlace.textContent = "Nuevo enlance";
// nav.insertBefore(enlace, nav.children[1]);
// console.log(enlace);

const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

btnFlotante.addEventListener('click', mostrarFooter);

function mostrarFooter(){

    (footer.classList.contains('activo')) 
    ? ocultarFooter() 
    : footer.classList.add('activo');
}

function ocultarFooter(){
    if(footer.classList.contains('activo')){
        footer.classList.remove('activo');
    }
}

console.log(footer.classList);