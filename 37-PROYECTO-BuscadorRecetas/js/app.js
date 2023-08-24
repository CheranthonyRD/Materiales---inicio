
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
















