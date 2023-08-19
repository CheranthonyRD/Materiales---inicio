class UI{

    constructor(){
        this.btnBorrar;     
    }

    static getBtnBorrar(){
        if(this.btnBorrar){
            return this.btnBorrar;
        }else{
            return false;
        }
    }

   static mostrarError(){
        const exist = document.querySelector(".alert-danger");
        if(exist){
           exist.remove(); 
        }

        const primario = document.querySelector(".primario");
        const error = document.createElement("P");

        error.classList.add("alert", "alert-danger",  "text-center");
        error.textContent = "Hay campos invalidos, favor revisar.";
        primario.insertBefore(error, form);

        setTimeout(()=>{
            error.remove();
        }, 3000);
    }

    static addGasto(object, cliente){
        const listado = document.querySelector(".list-group");
        const li = document.createElement("LI");        
        const half = cliente.getPresupuesto() / 2;
        const third = cliente.getPresupuesto() / 3;

        li.classList.add( "d-flex",
        "justify-content-between", 
        "list-group-item", 
        "item",
        "align-items-center");
       
        li.innerHTML = `<span>${object.gasto}</span>
                         <span> ${object.cantidad} $</span>
                         <button class = "delete btn btn-danger" id = "borrar">Borrar X</button>`;
        li.setAttribute("value", object.cantidad);       
        restante.textContent = cliente.setGasto(object.cantidad).getRestante();
        listado.appendChild(li);        

        if(cliente.getRestante() <= half && cliente.getRestante() > third){
            this.changeColor(restante, "alert-warning", "alert-success")
        }

        if(cliente.getRestante() <= third){
            this.changeColor(restante, "alert-danger", "alert-warning")
        }

        if(cliente.getRestante() <= 0){
            this.disableElement(agregar);
        }
        
    }

    static changeColor(element, add, remove){
        if(element.getAttribute("class")){
            element.removeAttribute("class");
        }

        element.setAttribute("class", "alert");
        element.parentElement.parentElement.classList.add(add);
        element.parentElement.parentElement.classList.remove(remove);
    }

    static disableElement(element){
        if(element.getAttribute("disabled") === null){
            element.setAttribute("disabled", "disabled");
        }
    }
}