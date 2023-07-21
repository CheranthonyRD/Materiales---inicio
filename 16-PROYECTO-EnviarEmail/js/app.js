// cargar primero todo el contenido

document.addEventListener('DOMContentLoaded', ()=>{

    //seleccionar los input del formulario
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');

    //asignar los eventos
    //blur: se ejecuta cuando sales del input o campo
    //input: se ejecuta cuando estas escribiendo

    inputEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);

    //funciones
   function validar(evt){
        const value = evt.target.value;
        if(value.trim() === ''){
            mostrarAlerta(evt.target, `El campo ${evt.target.id} es obligatorio`);
            return;
        }

        if(evt.target.id === 'email' && !validarEmail(evt.target.value) ){
            mostrarAlerta(evt.target, `El campo ${evt.target.id} no es valido`);
            return;
        }

        
        limpiarAlerta(evt.target);

   }

   //funcion para mostrar alerta de error vacio
   function mostrarAlerta(evt, mensaje){

    
   //limpiar la alerta
   limpiarAlerta(evt);
    
    const alerta = document.createElement('P');
    const elementoPadre = evt.parentElement;
    alerta.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center', 'error');
    alerta.textContent = mensaje;

    elementoPadre.appendChild(alerta);
   }

   
   function limpiarAlerta(evt){
        const error = evt.parentElement.querySelector('.error');
        if(error){
            error.remove();
        }
   }

   function validarEmail(value){

    const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ ;
    return regex.test(value);
   }

   function habilitarEnviar(){
    // const btnEnviar = document.querySelector('button');

    // if(btnEnviar.type === 'submit'){
    //     btnEnviar.classList.remove(['opacity-50']);
    //     btnEnviar.disabled = false;
    // }
   }
});