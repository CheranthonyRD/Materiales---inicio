const busqueda = document.querySelector('.busqueda');
const premium = document.querySelector('.premium');

busqueda.parentElement.addEventListener('submit', (e)=>{
    e.preventDefault();

    submit(e)
});

window.addEventListener('scroll', scroolling);




function submit(e){
    let text = e.target[0].value;

    if(!text.includes('@')){
        const span = document.createElement('span');
        const title = document.querySelector('h1');

        span.textContent = "No es un correo valido";

        title.appendChild(span);

        setTimeout(()=>{span.remove()}, 6000);
    }
}

function scroolling(){
    const h2_title_premium = document.querySelector('.mi-viaje-plus');
    let PX = premium.getBoundingClientRect();
    

    // if(PX.top < 620 && PX.top > -60){        
    //     h2_title_premium.style.textAlign = "center";
    //     console.log('aqui esta premium');
    // }else{
    //     h2_title_premium.style.textAlign = "left";
    // }

    console.log(PX);
}



