//imports
import {Clima} from "./Clima.js";
import {UI} from "./UI.js";

//variables y selectores
const formulario = document.querySelector("#formulario");
const ciudad = document.querySelector("#ciudad");
const pais = document.querySelector("#pais");
const contenido = document.querySelector("#resultado");

const info = {
    pais: "",
    ciudad: ""
}

//eventos
formulario.addEventListener("submit", getDataForm);



//functions
function getDataForm(e){
    e.preventDefault();
    //llenamos los datos del objeto con los datos del formulario
    info.ciudad = ciudad.value;
    info.pais = pais.value;

    if(Object.values(info).includes("")){
        UI.showError(formulario, "Datos invalidos, favor verificar");
        return;
    }

    const clima = new Clima(info.pais, info.ciudad);
    clima.getData().then(r=> UI.paintWeather(r, contenido));    
}




