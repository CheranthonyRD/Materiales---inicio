//Notification API

const btnNotificar = document.querySelector("#notificar");
const verNotificacion = document.querySelector("#verNotificacion");
const submit = document.querySelector(".submit");
const img = document.querySelector(".pokemon_img");
const bg = document.querySelector(".pokemon_picture");
const name = document.querySelector(".pokemon_name");
const url = "https://pokeapi.co/api/v2/pokemon";

btnNotificar.addEventListener("click", ()=>{
    Notification.requestPermission()
    .then(resultado =>{
        console.log(resultado);
    });
});

verNotificacion.addEventListener("click", ()=>{
    const anthony = "Anthony";
    if(Notification.permission === 'granted'){        
        new Notification(`Alfredo y ${anthony} son 2 MAMAGUEVAZOS`);
    }
});

//POKEAPI


submit.addEventListener("click", getPokemons);

async function getPokemons(){
    const index = Math.round(Math.random() * 20);
    try {
        const resPokemon = await fetch(url);
        const pokemon = await resPokemon.json();
        getPokemon(pokemon.results[index]);
    } catch (error) {
        console.log(error);
    }      
}

async function getPokemon(pokemon){
    
    const urlPokemon = pokemon.url;
    const info = {
        name: pokemon.name,
        img: "",
        bg: ""
    }

    try {
        const result = await fetch(urlPokemon)
        const pokemonJson = await result.json();    
        info.img = pokemonJson.sprites.front_default;
        info.bg = pokemonJson.sprites.other.home.front_default;
    } catch (error) {
        console.log(error);
    }

    paintPokemon(info)
}

function paintPokemon(info){
    img.src = info.img;
    name.textContent = info.name;
    bg.style.backgroundImage = `url(${info.bg})`;
}










