"use strict"



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
    },
    mostrarInfo: function(){
        console.log(`El producto: ${this.marca} tiene un precio de: ${this.precio}`);
    }
}


const cliente = {
    id: 1,
    name:"Cheranthony",
    last_name: "Perez",
    email: "cheranthony@gmail.com", 
    phone: "9888888888",
    address: "Calle de la Libertad, #1",
    city: "Santo Domingo",

}





//***** */ metodo para evitar que se modifiquen propiedades de los objetos*****

// Object.freeze(producto);

// *** metodo seal permite modificar las propiedades existentes en el objeto ****

// Object.seal(producto);

// producto.marca = "Gigabyte";

// console.log(producto.marca);  

// *** unir 2 objetos con el metodo Objetc.assign

// const result = Object.assign(producto, cliente);

// producto.mostrarInfo();

// *** otra forma de crear objetos

function Producto(marca, modelo, precio){
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
    this.disponible = false;
}

const producto1 = new Producto("Gigabyte", "Rtx2080", 20000);

