import { Favorito } from "./Favoritos.js";

const container = document.querySelector(".favoritos");
const favorito = new Favorito();
const btnBorrar = document.querySelector("#btnBorrar");

document.addEventListener("DOMContentLoaded", ()=>{
    if(window.document.URL.includes("favoritos.html")){
        paintFavorites();
    }

    btnBorrar.addEventListener("click", deleteFavorites);
});


function paintFavorites(){
    const listFavorites = favorito.getFavoritos();
    
    if(listFavorites && listFavorites !== null && listFavorites.length > 0){
        listFavorites.forEach(fav=>{
            const {idMeal, strCategory, strInstructions, strMealThumb, strMeal} = fav;
    
            const card = document.createElement("DIV");
            card.className = `card p-0`;
            card.setAttribute("style", "width: 18rem");
    
            const cardImg = document.createElement("IMG");
            cardImg.className = `card-img-top w-100`;
            cardImg.src = strMealThumb;
    
            const cardBody = document.createElement("DIV");
            cardBody.className = `card-body`;
    
            const cardTitle = document.createElement("H5");
            cardTitle.className = `card-title`;
            cardTitle.textContent = strMeal;
    
            const cardP = document.createElement("P");
            cardP.className = `card-text`;
            cardP.textContent = strInstructions;
            

            const btnDelete = document.createElement("BUTTON");
            btnDelete.className = `btn btn-danger mt-4 mb-4 w-75 mx-auto`;
            btnDelete.dataset.id = idMeal;
            btnDelete.textContent = "Eliminar favorito";
            btnDelete.onclick = ()=>{
                favorito.deleteFavoriteForId(idMeal);
            }

            
            //agregar img a card
            card.appendChild(cardImg);
    
            //agregar title y p a cardBody
            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardP);           
    
            //agregar body a card
            card.appendChild(cardBody);
            card.appendChild(btnDelete)
            container.appendChild(card);
            
        });
    }else{
        container.textContent = "No tienes favoritos aun";
    }
}

function deleteFavorites(){
    favorito.borrarFavoritos();
    paintFavorites();
}