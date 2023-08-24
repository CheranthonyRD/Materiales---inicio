
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
}