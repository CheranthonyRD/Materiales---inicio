import {deleteElement, contenido} from "./01-app.js";

const btnJson = document.querySelector("#cargarJSON");
const url = "./data/empleado.json";
btnJson.addEventListener("click",
loadJson);

//functions

async function loadJson(){
    try {
        const response = await fetch(url);
        const json = await response.json();
        paintJson(json);
    } catch (error) {
        console.log(error);
    }

}

function paintJson(json){
    const div = document.createElement("DIV");
    div.innerHTML = `<p>ID: ${json.id}</p>
                     <p>NOMBRE: ${json.nombre}</p>
                     <p>EMPRESA: ${json.empresa}</p>
                     <p>TRABAJO: ${json.trabajo}</p>`;
    contenido.appendChild(div);

    deleteElement(div).then(e => e.remove());
}