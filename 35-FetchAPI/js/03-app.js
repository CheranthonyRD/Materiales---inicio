import {deleteElement, contenido} from "./01-app.js";

const btnJsonArray= document.querySelector("#cargarJSONArray");
const url = "./data/empleados.json";

//events
btnJsonArray.addEventListener("click", loadArrayJson);

//functions
async function loadArrayJson(){
    try {
        const responde = await fetch(url);
        const array = (responde.status === 200) ? await responde.json() : false;
        paintArrayJson(array);
    } catch (error) {
        console.log(error);
    }
}

function paintArrayJson(json){    
    json.forEach(e =>{
        const div = document.createElement("DIV");  
        div.className = "item";
        div.innerHTML = `<p>ID: ${e.id}</p>
        <p>NOMBRE: ${e.nombre}</p>
        <p>TRABAJO: ${e.trabajo}</p>
        <p>EMPRESA: ${e.empresa}</p>`;

        setTimeout(()=>{           
            contenido.appendChild(div);
        }, 3000);

        setTimeout(()=>{
            div.remove();
        }, 6000);
    });      
}


