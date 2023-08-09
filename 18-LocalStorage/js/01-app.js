// para almacenar un dato en LocalStorage.setItem(llave, valor)
//estos datos persisten en el navegador
// localStorage solo almacena cadenas (strings)

const nombre = "Julio Cheranthony";
localStorage.setItem("nombre", nombre);

//convertir objetos a string para almacenarlos en localstorage
// se puede tambien usar para arrays
const producto = {
    nombre: "Monitor 24 pulgadas",
    marca: "AOC",
    caracteristicas: {
        refreshRate: "144hz",
        screen: "IPS"
    }
}

localStorage.setItem('producto', JSON.stringify(producto));

//obtener los datos
// si estan en objetos o en array, usamos la funcion de JSON.parse
// para transformar esos datos a objetos o array
const nombreObtenido = localStorage.getItem('nombre');
const productoObtenido = JSON.parse(localStorage.getItem('producto'));


//eliminar elementos del localStorage
// localStorage.removeItem("nombre")
// localStorage.removeItem("producto");

//actualizar elementos de localStorage

let actualizarNombre = localStorage.getItem("nombre");
actualizarNombre = "Otro Nombre";
localStorage.setItem("nombre", actualizarNombre);

//eliminar todo el localstorage
// localStorage.clear();