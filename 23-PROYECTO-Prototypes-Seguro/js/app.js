
const submit = document.querySelector("button[type=submit]");
const marca = document.querySelector("#marca");
const year = document.querySelector("#year");
const resultado = document.querySelector("#resultado");
const form = document.querySelector("#cotizar-seguro");
const result = resultado.querySelector(".result");

const data = {
    marca: '',
    year: '' ,
    type: ""
}

document.addEventListener("DOMContentLoaded", ()=>{
    const year = new Years().generateYears();    
});

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const ui = new UI();
    const error = form.querySelector(".error");
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    
    data.marca = marca.value.toLowerCase();
    data.year = parseInt(year.value);
    data.type = tipo;

    if(Object.values(data).includes('')){
        ui.error(resultado, data, "Hay campos vacios");
        return;
    }

    if(error){
        error.remove();
    }

    const spinner = new Spinner();
    const secure = new Secure(data.marca, data.year, data.type);
    secure.Cotizar();
    spinner.Activate();  
    ui.Success(resultado, "Cotizando");
    ui.showResult(resultado, secure);
    
    

});
















