
//imports
import {UI} from "./UI.js";
import { Favorito } from "./Favoritos.js";
import { Receta } from "./Receta.js";

//variables y selectores
const categorias = document.querySelector("#categorias");
const resultado = document.querySelector("#resultado");
const modal = document.querySelector("#modal");
const btnFav = document.querySelector("#btnFav");
const favorito = new Favorito();

//evento principal
document.addEventListener("DOMContentLoaded", ()=>{
    UI.paintCategories(categorias);
    if(window.document.URL.includes("favoritos.html")){
        paintFavorites();
    }
    //events
    categorias.addEventListener("change", filterForCategories);
    btnFav.addEventListener("click", addToFavorite);
});

//functions
function filterForCategories(e){
    const value = e.target.value.trim();

    //En caso de estar vacio, mostrar error
    if(value === ''){
        //mostrar error
        UI.showError(resultado, "Debes seleccionar una categoria");
        return;
    }

    //buscar que exista esa categoria
    UI.filterForCategorie(value, resultado);
}

function addToFavorite(e){
    const receta = new Receta();    
    const idMeal = e.target.dataset.id;

    const filter = receta.filterForId(idMeal).then(r=> {
        const {idMeal, strCategory, strInstructions, strMealThumb, strMeal  } = r.meals[0];

        const fav = {
            idMeal,
            strCategory,
            strInstructions,
            strMealThumb,
            strMeal
        }

        favorito.setFavorito(fav);        
    });    
}

// function paintFavorites(){
//     const listFavorites = favorito.getFavoritos();
//     const container = document.querySelector("main #resultado");
//     UI.cleanResult();
    
//     if(listFavorites.length > 0){
//         listFavorites.forEach(fav=>{
//             const {idMeal, strCategory, strInstructions, strMealThumb, strMeal} = fav;
    
//             const card = document.createElement("DIV");
//             card.className = `card`;
//             card.setAttribute("style", "width: 18rem");
    
//             const cardImg = document.createElement("IMG");
//             cardImg.className = `card-img-top`;
//             cardImg.src = strMealThumb;
    
//             const cardBody = document.createElement("DIV");
//             cardBody.className = `card-body`;
    
//             const cardTitle = document.createElement("H5");
//             cardTitle.className = `card-title`;
//             cardTitle.textContent = strMeal;
    
//             const cardP = document.createElement("P");
//             cardP.className = `card-text`;
//             card.textContent = strInstructions;
    
    
//             //agregar title y p a cardBody
//             cardBody.appendChild(cardTitle);
//             cardBody.appendChild(cardP);
    
//             //agregar img a card
//             card.appendChild(cardImg);
    
//             //agregar body a card
//             card.appendChild(cardBody);
    
//             container.appendChild(card);
    
//         });
//     }
// }

















