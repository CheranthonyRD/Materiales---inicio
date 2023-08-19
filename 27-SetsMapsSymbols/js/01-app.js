// sets

const user = {
    nombre: "JOse",
    age: 27
}
const carrito = new Set();
carrito.add(user);

// carrito.size para saber el length de un Set
// carrito.add para agregar un valor al Set

// console.log(carrito.delete(user))

//Maps

const map = new Map(); // llave  / valor

map.set("nombre", "Jose"); // agregar elemento
map.set("user", user);

// console.log(map.get("nombre")); // obtener dato

// map.forEach( m =>{
    
//     console.log(map.get("user"))
// });

// los weakmap y los weakset solo admiten objetos, no se pueden iterar y tampoco se puede conocer su tamaño






