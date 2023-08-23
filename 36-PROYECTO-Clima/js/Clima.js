
import { UI } from "./UI.js";
//clase Clima

export class Clima {
    constructor(pais, ciudad){
        this.pais = pais;
        this.ciudad = ciudad;
        this.api_key = "be0eca4673ee928257fce886b63889e7";
        this.url = `https://api.openweathermap.org/data/2.5/weather?q=${this.ciudad},${this.pais}&appid=${this.api_key}`;
        this.weather = {};
    }

    async getData(){
        try {
            const response = await fetch(this.url);
            const clima = await response.json();
            return clima;
        } catch (error) {
           console.log(error);
        }      
    }

    getAll(){    
        return this.pais + this.ciudad;
    }
}