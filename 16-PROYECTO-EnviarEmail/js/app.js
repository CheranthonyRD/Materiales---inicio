document.addEventListener('DOMContentLoaded', ()=>{
    const email = document.querySelector("#email");
    const asunto = document.querySelector("#asunto");
    const mensaje = document.querySelector("#mensaje");
    const submit = document.querySelector('button[type=submit]');
    const reset = document.querySelector('button[type=reset]');
    const formulario = document.querySelector('#formulario');
    const spinner = document.querySelector('#spinner');
    const success = document.querySelector('#success');

    const object = {
        email: '',
        asunto: '',
        mensaje: ''
    }

    email.addEventListener("input", validar);
    asunto.addEventListener("input", validar);
    mensaje.addEventListener("input", validar);
    reset.addEventListener("click", e =>{
        e.preventDefault();
        resetObject();
        formulario.reset();
        validate();
    });
    formulario.addEventListener('submit', enviar);
    
    // reset.addEventListener("click", reset);

    //funciones
    function validar(evt){
        const target = evt.target;
        const value = target.value.trim();

        if(!validateIfEmpty(value)){
            const message = `El campo ${target.id} es obligatorio`;
            showAlert(target, message);
            object[target.name] = '';
            validate();            
            return;
        }        
        
        if( target.id === 'email' && !validateEmail(value)){
            showAlert(target, `El campo ${target.id} no es valido`);
            object[target.name] = '';
            validate();            
            return;
        }

        cleanAlert(target);
        object[target.name] = target.value.trim().toLowerCase();        
        validate();
    }


    function validateIfEmpty(value){
        let isEmpty = false;
        if(value !== ""){
            isEmpty = true;
        }
        return isEmpty;
    }

    function showAlert(target, message){
        // comprobar si existe ya una alerta
        const alerta = target.parentElement.querySelector(".error");
        if(alerta){
            alerta.remove();
        }
        const sibling = target.previousElementSibling;
        const error = document.createElement("P");
        error.textContent = message;
        error.classList.add("error");
        sibling.appendChild(error);        
    }

    function cleanAlert(target){
        const error = target.parentElement.querySelector('.error');
        if(error){
            error.remove();
        }
    }

    function validateEmail(value){
        const email = value;
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

        return regex.test(email);
    }

    function validate(){
        const value = Object.values(object).includes('');

        if(!value){
            submit.classList.remove('opacity-50');
            submit.removeAttribute("disabled");            
            return;
        }

        submit.classList.add('opacity-50');
        submit.setAttribute("disabled", "");
    }

    function resetObject(){
        object.asunto = '';
        object.email = '';
        object.mensaje = '';
    }

    function enviar(evt){
        evt.preventDefault();

        spinner.classList.add("flex");
        spinner.classList.remove("hidden");

        setTimeout(()=>{
            spinner.classList.remove("flex");
            spinner.classList.add("hidden");
            resetObject();
            formulario.reset();
            validate();
        }, 3000)

        setTimeout(()=>{
            done();
        }, 3000);
    }

    function done(){
        success.classList.remove("hidden");

        setTimeout(()=>{
            success.classList.add("hidden");

        }, 2000);
    }


});