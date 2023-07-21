//replace, slice y substring


const mensaje = "Esto es un mensaje para los metodos: replace, slice,  substring";

//replace este metodo se usa para reemplazar una palabra en un string

let replace = mensaje.replace("replace", "reemplazo");

console.log(replace);

//slice retorna una porcion del string desde donde le digas hasta donde quieras que termine

let slice = mensaje.slice(0, 30);

console.log(slice);


//substring este metodo retorna una porcion de un string

let substring = mensaje.substring(0, 15);

console.log(substring);