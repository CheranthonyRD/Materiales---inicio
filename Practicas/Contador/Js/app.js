const number = document.querySelector('.number');
const up = document.querySelector('.up');
const down = document.querySelector('.down');

up.addEventListener("click", aumentar);
down.addEventListener('click', disminuir);

up.addEventListener('mouseover', agrandar);
up.addEventListener('mouseout', reducir);

down.addEventListener('mouseover', agrandar);
down.addEventListener('mouseout', reducir);

function aumentar(evt){

    if(number.value > 0){
        number.style.color = "steelblue";
    }
    number.value++;
}

function disminuir(){

    if(number.value < 0){
        number.style.color = "red";
    }

    number.value--;
}

function agrandar(evt){
    const element = evt.target;

    if(!element.classList.contains('agrandar')){
        element.classList.add('agrandar');
    }
}

function reducir(evt){
    const element = evt.target;

    if(element.classList.contains('agrandar')){
        element.classList.remove('agrandar');
    }
}