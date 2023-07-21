
const carrito = [];
let cantidad = 2;
const producto = {
    id: 1,
    nombre: 'Coca Cola',
    precio: 10.50,
    descripcion: 'Coca Cola',
    stock: 5
}

const producto2 = {
    id: 2,
    nombre: 'Zona',
    precio: 10.50,
    descripcion: 'Zona',
    stock: 6
}


carrito.push(producto);

carrito.push(producto2);



carrito.forEach(function(n){
    if(n.id == 1){
        n.stock -= cantidad;
    }
});

console.table(carrito);


//destructuring arrays

const [primero] = carrito;

console.log(primero);


//map: la diferencia con forEach es que map retorna un nuevo arreglo
// y retorna ese arreglo

const nuevoArreglo = carrito.map(function(producto){
    return `${producto.nombre}`;
});


console.table(nuevoArreglo);