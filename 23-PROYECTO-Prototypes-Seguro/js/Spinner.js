function Spinner(){
    this.spinner = document.querySelector("#cargando");

    Spinner.prototype.Activate = function(){
        this.spinner.classList.remove("hidden");
        setTimeout(()=>{
            this.spinner.classList.add("hidden");
        }, 3000);       
    }
}