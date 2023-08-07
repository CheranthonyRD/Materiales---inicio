//variables 
const brands = selection("#marca");
const year = selection("#year");
const min = selection("#minimo");
const max = selection("#maximo");
const doors = selection("#puertas");
const transmition = selection("#transmision");
const color = selection("#color");

const resultado = selection("#resultado");
const autos_info = document.querySelector(".auto-info");

const title = document.querySelector("title");

const busqueda = {
    brand: '',
    modelo: '',
    year: '',
    price: '',
    doors: '',
    color: '',
    transmition: ''
}




// eventos
document.addEventListener('DOMContentLoaded', ()=>{
    showResult();
    generateYears();

});

//eventos para selects
brands.addEventListener("change", filterForBrand);
year.addEventListener("change", filterForYear);
min.addEventListener("change", filterForMin);
max.addEventListener("change", filterForMax);
doors.addEventListener("change", filterForDoors);
transmition.addEventListener("change", filterForTransmition);
color.addEventListener("change", filterForColor);






//funciones
function showResult(){    
   autos.forEach(auto => {
    const {marca, modelo, color, puertas, precio, year, transmision} = auto;
        const autoHTML = document.createElement("P");
        autoHTML.textContent = `
           ${marca} - ${modelo}
           - ${color} - ${puertas}
           - ${precio} - ${year}
           - ${transmision}
            
        `;
        autoHTML.classList.add("auto-info");
        resultado.appendChild(autoHTML);        
    });
}

function generateYears(){
    const maxYear = new Date().getFullYear();
    const minYear = maxYear - 13;

    for(i = maxYear; i >= minYear; i--){
        const option = document.createElement("OPTION");
        option.value = i;
        option.textContent = i;
        year.appendChild(option);
    }    
}

function filterForBrand(e){
    busqueda.brand = e.target.value;
    console.log(busqueda);   
}

function filterForYear(e){
    busqueda.year = e.target.value;
}

function filterForMin(e){
    busqueda.minYear = e.target.value;
}

function filterForMax(e){
    busqueda.maxYear = e.target.value;
}

function filterForDoors(e){
    busqueda.doors = e.target.value;
}

function filterForTransmition(e){
    busqueda.transmition = e.target.value;
}

function filterForColor(e){
    busqueda.color = e.target.value;
}


function selection(element){
    return document.querySelector(element);
}
