import { Spinner } from "./Spinner.js";

export class UI{

    static showError(contenido, message){
        const p = document.createElement("P");
        p.className = "text-center mt-10 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative";
        p.textContent = message;

        contenido.appendChild(p);
        setTimeout(()=> {
            p.remove();
        }, 3000);
    }

    static paintWeather(data, contenido){
         //En caso de error 404 not found, mostramos un error
        if(data.cod === "404"){
            this.showError(contenido, "Ciudad no encontrada");
            return;
        }
       
        //variables y funciones
        this.cleanHtml();
        const {name} = data;
        const {temp_max, temp_min, temp} = data.main;

         //title dinamico
         document.title = name;
        

        //operaciones
        const temperatura = Math.round(temp - 273.15);
        const max = Math.round(temp_max - 273.15);
        const min = Math.round(temp_min - 273.15); 


        //creamos un div para imprimir el contenido
        const div = document.createElement("DIV");
        div.className =`weather w-full flex flex-col justify-center
                        items-center gap-4 text-white`;
        div.innerHTML = `<p class = "text-center text-sm">Clima en ${name}</p>
                         <p class = "text-center text-6xl">${temperatura} &#8451</p>
                         <p class = "text-center text-sm">Max: ${max} &#8451</p>
                         <p class = "text-center text-sm">Min: ${min} &#8451</p>`

        Spinner.activateSpinner(2000);
        setTimeout(()=>{
            contenido.appendChild(div);
        }, 2000)

    }

    static cleanHtml(p = null){
        const title = document.querySelector("#title");
        const div = document.querySelector(".weather");

        if(div){
            div.remove();            
        }

        if(title){
            title.remove();
        }

        if(p){
            const p = document.createElement(p);
            p.className = `text-center text-white mt-6`;
            p.textContent = `Agrega tu ciudad y país, el resultado se mostrará aquí`;
            contenido.appendChild(p);
        }
    }
}