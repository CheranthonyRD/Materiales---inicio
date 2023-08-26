
//

export class Favorito{

    constructor(){
        this.favoritos = [];
    }

    getFavoritos(){
        const favoritos = localStorage.getItem("favoritos");

        if(favoritos !== undefined){
            return JSON.parse(favoritos);
        }
    }

    setFavorito(fav){
       const favoritos = this.getFavoritos();

       if(favoritos){
            this.favoritos = favoritos;
        }

        this.favoritos.push(fav);

        localStorage.setItem("favoritos", JSON.stringify(this.favoritos))
    }


    //borrar todos los favoritos
    borrarFavoritos(){
        const favoritos = this.getFavoritos();

        if(favoritos !== null){
            localStorage.removeItem("favoritos");
            return;
        }
    }

    //borrar 1 favorito por el id
    deleteFavoriteForId(id){
        const favorites = this.getFavoritos();

        if(favorites.length > 0){
            const favorite = favorites.filter( f => f.idMeal !== id);
            localStorage.setItem("favoritos", JSON.stringify(favorite));
            location.reload();
            return;
        }
    }

    //comprobar que existe un favorito
    verifyIfExistsFavoritte(id){
        const favorites = this.getFavoritos() ?? [];
        return favorites.some(f=> f.idMeal === id);
    }
}