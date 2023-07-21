//metodos indexOf, includes, lenght

const texto = "Monitor de 14\' pulgadas";

//el metodo indexOf devuelve la posicion de donde comienza el texto que estas buscando de la
// primera ocurrencia, siempre devolvera la primera que encuentre en el string
console.log(texto.indexOf("de"));


//lenght es mas una propiedad de los strings e imprime el numero de caracteres del string

console.log(texto.length);

// includes este metodo retorna true o false si la palabra que le indicas existe en el string

console.log(texto.includes("Monitor"));