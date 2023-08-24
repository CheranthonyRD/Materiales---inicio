//class

export class Receta{
    constructor(){
        this.categoriesAPI = "https://www.themealdb.com/api/json/v1/1/categories.php";
        this.measlAPI = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";
        this.mealAPI = "https://themealdb.com/api/json/v1/1/lookup.php?i=";
    }

    async getCategories(){
        try {
            const response = await fetch(this.categoriesAPI);
            if(response.status === 200){
                const categories = await response.json();
                return categories;
            }
        } catch (error) {
           console.log(error); 
        }        
    }

    async filterForCategories(categorie){
        const url = this.measlAPI + categorie;

        try {
            const response = await fetch(url);
            
            if(response.status === 200){
                const result = await response.json();
                return result;
            }

        } catch (error) {
            console.log(error);
        }    
    }

    async filterForId(id){
        const url = this.mealAPI + id;
        
        try{            
            const response = await fetch(url);

            if(response.status === 200){
                return await response.json();
            }

        }catch(error) {
            console.log(error);
       }
    }
}