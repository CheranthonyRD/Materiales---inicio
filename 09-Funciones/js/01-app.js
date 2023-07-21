//funciones JS

function createObject(){
    return {
        nombre: "Cheranthony",
        last_name: "Perez",
        email: "cheranthony@gmail.com",
        precio: "12.00",
        descripcion: "Cheranthony",
        imagen: "img/cheranthony.jpg",
        stock: 15
    }
}

const producto = createObject();

console.table(producto);

//funciones nativas JS

//arrow functions

const reproducir = () => "reproducir";


console.log(reproducir());