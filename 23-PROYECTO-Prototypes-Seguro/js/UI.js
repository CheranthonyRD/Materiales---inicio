function UI(){
    UI.prototype.error = function(resultado, data, message){

        const r = resultado.querySelector(".result");
        
        if(r){
            r.remove();
        }

        if(data.marca === '' || data.year){
            const divError = document.createElement("DIV");
            const form = document.querySelector("#cotizar-seguro");
            divError.textContent = message.trim();
            divError.classList.add("mensaje", "error", "mt-10");        
            form.insertBefore(divError, resultado);           
    
            setTimeout(()=>{
                divError.remove();
            }, 3000)
        }
    }

    UI.prototype.Success = function(resultado, message){
        const divError = document.createElement("DIV");
            const form = document.querySelector("#cotizar-seguro");
            divError.textContent = message.trim();
            divError.classList.add("mensaje", "correcto", "mt-10");        
            form.insertBefore(divError, resultado);           
    
            setTimeout(()=>{
                divError.remove();
            }, 3000)
    }

    UI.prototype.showResult = function(resultado, secure){

        const r = resultado.querySelector(".result");
        
        if(r){
            r.remove();
        }

        const div = document.createElement("DIV");
        div.classList.add("result", "mt-10");       

        div.innerHTML = `
            <p class = "header">Total: ${secure.result}</p>
            <p>Marca: ${secure.marca}<p/>
            <p>Año: ${secure.year}<p/>
            <p>Tipo de Seguro: ${secure.tipo}<p/>
            <p>Adicional: ${secure.adiccional}<p/>
        `;     

        setTimeout(()=>{
            resultado.appendChild(div);
        }, 3000)
        
    }

}

