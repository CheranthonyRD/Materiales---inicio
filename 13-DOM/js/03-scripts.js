const contendedor_cards = document.querySelector('.contenedor-cards');
const add = document.querySelector('.btn_add');

function listeners(){
    add.addEventListener('click', e => {
        add_card(e);
    });
}

listeners();

function add_card(e){
    e.preventDefault();

    crear_div_card();
}


function crear_div_card(){
    const div_card = document.createElement('div');
    div_card.classList.add('card');
    contendedor_cards.append(div_card);
    div_card.append(create_img_element());
    div_card.appendChild(create_div_info());
}

function create_img_element(){
    const img = document.createElement('img');
    img.src = "img/hacer1.jpg";
    return img;
}

function create_div_info(){
    const div_info = document.createElement('div');
    const parrafo1 = document.createElement('p');
    const parrafo2 = document.createElement('p');
    const parrafo3 = document.createElement('p');


    div_info.classList.add('info');

    parrafo1.classList.add('categoria');
    parrafo1.classList.add('paseo');
    parrafo1.textContent = "Paseo en motor";

    parrafo2.classList.add('titulo');
    parrafo2.textContent = "Paseo por cancino";

    parrafo3.classList.add('precio');
    parrafo3.textContent = "$150 pesos mensuales";

    

    div_info.append(parrafo1);
    div_info.append(parrafo2);
    div_info.append(parrafo3);

    console.log(div_info);

    return div_info;
}






