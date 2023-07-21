// concatenar strings

const texto = "Monitor de 30 pulgadas ";
const precio = 30;
const moneda = "USD";


console.log(texto.concat(precio));
console.log(texto.concat([precio, moneda]));

// string templates

console.log(`El producto ${texto} tiene un precio de ${precio} $ ${moneda}`)
