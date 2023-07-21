//objetos

const producto = {
    marca: "ZOTAC GAMING",
    modelo: "3070",
    categoria: "GPU",
    precio: 23000,
    informacion: {
        creado: "25-12-2022",
        pais: "Rep. Dom",
        origen: {
            ciudad: "Santo Domingo",
            pais: "Republica Dominicana"
        }
    }
}




const perfil = {
    id: 5,
    name: "Jose",
    last_name: "Perez",
    email: "jose@gmail.com",
    password: "123456",
    nacimiento: {
        pais: "rep dominicana",
        direccion: "Calle 123, 123",
        ciudad: "Santo domingo",

    }
}

perfil.hospital = "Maternidad los mina";


const {id, name, last_name, email, password} = perfil;
const {direccion} = perfil.nacimiento;

console.log(`El usuario ${name} ${last_name} nacio en 
                        ${perfil.nacimiento.ciudad}, 
                        ${perfil.nacimiento.pais}`)


//agregar nueva propiedad
producto.hola = "hola";

console.log(producto);


//eliminando una propiedad de un objeto
delete producto.hola;

console.log(producto);

// destructuring de datos

const {marca, modelo, informacion: {creado, pais, origen: {ciudad}}} = producto;

console.log(marca);
console.log(modelo);
console.log(creado);
console.log(pais);
console.log(ciudad);


