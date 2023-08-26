//imports
import { Receta } from "./Receta.js";
import { Favorito } from "./Favoritos.js";

//class
export class UI{
    
    //PaintCategories Function
    static paintCategories(contenido){ 

        const receta = new Receta();
        receta.getCategories().then(r=>{ 
            r.categories.forEach( c => {
                const option = document.createElement("OPTION");
                option.dataset.id = c.idCategory;
                option.textContent = c.strCategory;
                option.value = c.strCategory;
                contenido.appendChild(option);
            });
        });
    }

    static showError(parent, message){

        //limpiamos el contenido
        this.cleanResult();

        //creamos el elemento que contendra la alerta
        const error = document.createElement("DIV");
        error.className = `alert alert-danger w-50 text-center mx-auto text-white bg-danger`;
        error.textContent=message;

        //asignamos al padre
        parent.appendChild(error);

        //eliminamos luego de 3s
        setTimeout(()=>{
            error.remove();
        }, 3000);

    }
    
    //limpiar el contenido de resultado
     static cleanResult(){
        const resultado = document.querySelector("#resultado");

        while(resultado.firstChild){
            resultado.removeChild(resultado.firstChild);
        }

    }

    //obtener los datos de la api para luego mediante
    //la funcion paint imprimirlos en resultado
    static filterForCategorie(categorie, resultado){
        const receta = new Receta();
        const filter = receta.filterForCategories(categorie).then(r=>{
            this.paintFilterCategories(r, resultado);
        });

    }

    //imprimir los datos de la API
    static paintFilterCategories(filtered, resultado){
        this.cleanResult();

        //asignamos el resultado en una variable
        const meals = filtered.meals;

        //recorremos la variable
        meals.forEach(meal=>{
            const {strMeal, strMealThumb, idMeal} = meal;
            //creamos el div de la card
            const card = document.createElement("DIV");
            card.className = "card p-0 mb-10";
            card.setAttribute("style", "width: 18rem");

            //creando cardbody
           const cardBody = document.createElement("DIV");
           cardBody.className = "card-body d-flex flex-column justify-content-between";

           //creando cardImg
           const cardImg = document.createElement("IMG");
            cardImg.className = "card-img-top w-100";
            cardImg.src = strMealThumb;
            cardImg.alt = strMeal;

           //creando card_title
           const cardTitle = document.createElement("H5");
           cardTitle.className = "card-title" ;
           cardTitle.textContent = strMeal;

           //creando boton VerReceta
           const cardButton = document.createElement("BUTTON");
           cardButton.textContent = "Ver Receta";
           cardButton.className = "text-white btn btn-light bg-danger w-100";
           cardButton.dataset.id = idMeal;
           card.dataset.bsToggle = "modal";
           card.dataset.bsTarget = "#modal";
           card.id = "btnModal";

           //ingresando imagen a card
           card.appendChild(cardImg);

           //cardBody
           cardBody.appendChild(cardTitle);
           cardBody.appendChild(cardButton);

           //ingresando cardbody a card
           card.appendChild(cardBody);           

            
            // card.innerHTML = `
            // <img class="card-img-top w-100" src=${strMealThumb} alt="Card image cap">`;

            cardButton.onclick = (e)=>{
                const id = e.target.dataset.id;  
                const favorito = new Favorito();
                const btnFav = document.querySelector("#btnFav");
                btnFav.textContent = (favorito.verifyIfExistsFavoritte(id) ? "Eliminar Favorito" : "Guardar Favorito");
                              
                this.filterForId(id);
            }
            resultado.appendChild(card);
        });
        
    }

    static filterForId(id){
        const receta = new Receta();
        const filter = receta.filterForId(id).then(r=>{
            this.paintFilterForId(r.meals[0]);
        });
    }

    static paintFilterForId(filtered){
        
       const {idMeal, strInstructions, strMeal, strMealThumb} = filtered;
       const modalbody = document.querySelector(".modal-body");
       const modalTitle = document.querySelector(".modal-title");
       const btnFav = document.querySelector("#btnFav");

       //agregando data-id al boton de agregar a favorito
       btnFav.dataset.id = idMeal;

        modalTitle.innerHTML = `${strMeal}`;
        modalbody.innerHTML = `<img src = ${strMealThumb} alt=${strMeal} class = "w-100 mb-4"/>
                              <p>${strInstructions}</p>`;
        
    }
}