//strings

const producto = "Monitor 14\'";
const producto2 = String("Monitor 24\'");
const producto3 = new String("Monitor 27\'");

const productos = [
    producto,
    producto2,
    producto3
];

productos.forEach(function(productos){
    console.log(productos);
});