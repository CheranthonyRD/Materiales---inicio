

//clase para trabajar con la API

export class Cripto{
    constructor(btc= null, moneda = null){
        this.url = `https://min-api.cryptocompare.com/data/price?fsym=${btc}&tsyms=${moneda}`;
        this.urlCriptos = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
        this.full = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${btc}&tsyms=${moneda}`
    }

    async getFullInfo(){
        try {
            const response = await fetch(this.full);
            const info = await response.json();
            return info;
        } catch (error) {
            console.log(error);
        }        
    }

    //get 10 criptos more importants for paint in select criptomonedas
    async getCriptos(){
        try {
            const response = await fetch(this.urlCriptos);
            const criptos = await response.json();
            return criptos.Data;
        } catch (error) {
            console.log(error);
        }        
    }
}