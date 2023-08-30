import {UI} from './UI.js';

//variables y selectores
const moneda = document.querySelector("#moneda");
const criptomonedas = document.querySelector("#criptomonedas");
const formulario = document.querySelector("#formulario");
const resultado = document.querySelector("#resultado");

//events
document.addEventListener("DOMContentLoaded", ()=>{
    UI.loadCriptos(criptomonedas);
    formulario.addEventListener("submit", formData);
});


//functions
function formData(e){
    e.preventDefault();

    const data = {
        moneda: moneda.value,
        cripto: criptomonedas.value
    }

    if(Object.values(data).includes("")){
        UI.cleanHTML(resultado);
        UI.showError(resultado, "Ambos campos son validos");
        return;
    }

    UI.showInfo(data, resultado);

}