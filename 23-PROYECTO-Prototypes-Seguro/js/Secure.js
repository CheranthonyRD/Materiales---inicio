function Secure(marca, year, tipo){
    this.marca = marca.toLowerCase();
    this.year = year;
    this.tipo = tipo;
    this.result = 0;
    this.adiccional = 0;

    /*
        Americano 1.15
        Asiatico 1.05
        Europeo 1.35
    */

    Secure.prototype.Cotizar = function(){
        const base = 2000;
        if(this.marca === 'am'){
           this.result += base * 1.15;
        }

        if(this.marca === 'eu'){
            this.result += base * 1.35;
        }

        if(this.marca === 'as'){
            this.result += base * 1.05;
        }

        if(this.tipo === 'basico'){
            this.adiccional += 50;
            this.result += this.adiccional;
        }else{
            this.adiccional += 100;
            this.result += this.adiccional;
        }
        
    }
}