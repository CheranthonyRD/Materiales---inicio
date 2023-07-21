// trimStart, trimEnd y trim
//estas funciones sirven para eliminar los espacios en blanco de un string

//trimStart

const texto = "   Espacios  en blanco   ";

//eliminar los espacios en blanco al inicio del string
console.log(texto.trimStart());

//eliminar los espacios en blanco al final del string
console.log(texto.trimEnd());


//eliminar los espacios en blanco en todo el string

console.log(texto.trim());
