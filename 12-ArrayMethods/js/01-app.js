const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
    { nombre: 'Celular', precio: 700 },
    { nombre: 'Celular', precio: 700 },
]

const user = {
    nombre: 'Juan',
    apellidos: 'Perez',
    direccion: 'Calle de la Paz, 1234',
    edad: 25,
    dinero: 8000
}


//comprobar si existe un valor en un array

const existe = meses.includes('Enero');

console.log(existe);

// comprobar si existe un valor en un array de objetos

const existeObjeto = carrito.some(car =>{
    return car.nombre === "Tablet";
});


console.log(existeObjeto);


//findIndex 

// meses.forEach( (mes, index) => {
//     if(mes === 'Abril'){
//         console.log(`El indice de ${mes} es ${index}`);
//     }
// });

// const abril = meses.findIndex( (mes) => {
//     return mes === 'Abril'
// });

// console.log(abril);

// const abril = carrito.findIndex( product => product.precio === 100 );

// console.log(abril);




let total_pagar = 0;

carrito.forEach( car => {
    total_pagar += car.precio;
});



// (pagar(user, total_pagar)) ? "Puede pagar" : "NO puede pagar";

//filter: 

const filtro = carrito.filter( car => car.precio > 400 );

// find: va a traer el elemento del array que cumpla con esa condicion
// por lo tanto en este caso devuelve el objeto que cumpla con eso

const find = carrito.find(car => car.nombre == "Tablet");

console.log(find);


//every: retorna true si todos los elementos del array cumplen la
//condicion

const every = carrito.every( car => car.precio > 50);

console.log(every);

//.concat: unir arreglos

const concat = carrito.concat(meses);

let unir = [];

function masLargo(meses, carrito){
    if(meses.length > carrito.length){
        return meses.length;
    }

    return carrito.length;
}

let length = masLargo(meses, carrito) - 1;

for(let i = 0; i< length; i++){
    unir.push(meses[i]);
    unir.push(carrito[i]);
}

console.log(unir);

//spread operator los elementos deben ser iterables

const copia = [...carrito, ...meses];

console.log(copia);