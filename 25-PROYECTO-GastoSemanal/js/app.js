//variables y elementos

const form = document.querySelector("#agregar-gasto");
const agregar = form.querySelector("button[type='submit']");
const gasto = document.querySelector("#gasto");
const cantidad = document.querySelector("#cantidad");
const listado = document.querySelector(".list-group");
const presupuesto = document.querySelector("#total");
const restante = document.querySelector("#restante");

// let gastos = [];
const object = {
    gasto: '',
    cantidad: ''
}

let presu;
const regexLetters = /[a-zA-Z]/;
const regexNumber = /[0-9]/;

// while(regex.test(presu)  || presu < 0 || isNaN(presu)){
//     presu = parseFloat(prompt("Ingrese su prespuesto"));
// }

while(localStorage.getItem("presupuesto") === null){
    const presu = prompt("Ingrese presupuesto");
    const parse = parseFloat(presu);

    if(!isNaN(presu) && presu > 0 ){        
        localStorage.setItem("presupuesto", parse);        
        continue;
    }
}

const cliente = new Presupuesto(localStorage.getItem("presupuesto"));
presupuesto.textContent = cliente.getPresupuesto();
restante.textContent = cliente.getRestante();


//events
document.addEventListener("DOMContentLoaded", (e)=>{
    form.addEventListener("submit", obteniendoGasto);
});


//functions
function obteniendoGasto(e){
    e.preventDefault();
    object[cantidad.id] = (cantidad.value === '') ? '' : parseFloat(cantidad.value);
    object[gasto.id] = gasto.value;   

    // const {gasto, cantidad} = object;

    if( Object.values(object).includes('')
     || object.cantidad <= 0
     || regexLetters.test(cantidad.value)
     || regexNumber.test(gasto.value)
      )
    {
        UI.mostrarError();
        return;
    }

    UI.addGasto(object, cliente);
}




