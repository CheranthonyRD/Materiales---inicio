//variables

const btnAgregar = document.querySelector('.agregar-carrito');
const Btn_vaciarCarrito = document.querySelector('#vaciar-carrito');
const carritoHTML = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const listaCarrito = document.querySelector('#lista-carrito tbody');
const btnBorrarCurso = document.querySelector('.borrar-curso');
const submenu = document.querySelector('.submenu');
let carrito = [];

//listener
listeners();
function listeners(){
listaCursos.addEventListener('click', agregarCarrito);
Btn_vaciarCarrito.addEventListener('click', vaciarCarrito);
carritoHTML.addEventListener('click', eliminarCarrito);


}

//funciones
function agregarCarrito(event){  
    if(event.target.classList.contains('agregar-carrito')){
        event.preventDefault();
        obtenerInfo(event.target.parentElement.parentElement);
    }    
}

function eliminarCarrito(e){
    if(e.target.classList.contains('borrar-curso')){
        e.preventDefault();
        const id = e.target.getAttribute('data-id');
        const tr = e.target.parentElement.parentElement;

        carrito = carrito.filter(curso => curso.id !== id);
        tr.remove();
    }
}

function obtenerInfo(info){

    const info_card = {
    title: info.querySelector('h4').textContent,
    p: info.querySelector('p').textContent,
    image: info.querySelector('.imagen-curso').src,
    precio: info.querySelector('.precio span').textContent,
    id: info.querySelector('.agregar-carrito').getAttribute('data-id'),
    cantidad: 1
    }

    //comprobar si el curso ya existe en el arreglo
    const existe = carrito.some(curso =>curso.id === info_card.id);
    if(!existe){
        carrito = [...carrito, info_card];
        
    }else{
        const cursos = carrito.map(curso =>{
            if(curso.id === info_card.id){
                curso.cantidad++;
                return curso;
            }else{
                return curso;
            }
        });
        carrito = [...cursos ];
    }

    llenarCarrito();
    
}

function llenarCarrito(){
    limpiarCarrito();
    carrito.forEach(curso =>{
        const {image, title, precio, cantidad, id} = curso;
        const row = document.createElement('tr');
        row.innerHTML = 
        `
            <td>
                <img style = "max-width: 100px;" src = ${image}>
            </td>
            <td>
                ${title}
            </td>
            <td>
                ${precio}
            </td>
            <td>
                ${cantidad}
            </td>
            <td>
                <a href = "#" data-id = "${id}" class ="borrar-curso">X</a>
            </td>
        
        `;

        listaCarrito.appendChild(row);
    });
}

function limpiarCarrito(){
    listaCarrito.innerHTML = '';
}

//boton vaciar carrito

function vaciarCarrito(){
    carrito = [];
    listaCarrito.innerHTML = '';
}

//borrar curso

