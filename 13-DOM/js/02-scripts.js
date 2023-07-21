const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('#footer');



function changeColorBtn(){
   if(footer.classList.contains('activo')){
    
    closeFooter();
   }else{
    addActivoToFooter();
    btnFlotante.style.backgroundColor = "crimson";
    btnFlotante.style.color = "white";
    btnFlotante.textContent = "cerrar"
   }


    
}

function addActivoToFooter(){
    footer.classList.add('activo');
}

function closeFooter(){
    footer.classList.remove('activo');
    btnFlotante.style.backgroundColor = "white";
    btnFlotante.style.color = "black";
    btnFlotante.textContent = "Idioma y Monera";
}

btnFlotante.addEventListener('click', changeColorBtn );

