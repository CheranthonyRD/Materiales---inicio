
function Fizz(){
    console.log("Fizz");
}

function Buzz(){
    console.log("Buzz");
}

function Fizzbuzz(){
    console.log("FizzBuzz");
}


// for(let i = 0; i < 100; i++){
//     if(i % 2 === 0){
//         Fizz();
//     }

//     if(i % 3 === 0){
//         Buzz();
//     }

//     if(i % 3 === 0 && i % 2 == 0 ){
//         Fizzbuzz();
//     }
// }


//for of: es para iterar arrays

const pendientes = ['Tareas', 'comer', 'proyectos'];
const carrito = 
[
    {nombre: "Jose Manuel", precio: 50},
    {nombre: "Jose", precio: 50},
    {nombre: "Jose Miguel", precio: 50},
    {nombre: "Jose Arturo", precio: 50},
    {nombre: "Jose Alfredo", precio: 50},
    {nombre: "Jose Poncio", precio: 50}
];

const objeto = {
    nombre: "Jose Manuel",
    precio: 50,
    comer: true,
    lenguajes: ['JAVASCRIPT', 'PHP', 'CSS', 'HTML'],
    proyectos: ['Proyecto 1', 'Proyecto 2', 'Proyecto 3']
}

for(let pendiente of pendientes){
    console.log(pendiente);
}

for(let producto of carrito){
    console.table(producto.nombre);
}


// for in: es para iterar objetos
for(let obj in objeto){
    if(Array.isArray(objeto[obj])){
        objeto[obj].forEach(element => {
            console.log(element);
        });
    }else{
        console.log(objeto[obj])
    }

    
}