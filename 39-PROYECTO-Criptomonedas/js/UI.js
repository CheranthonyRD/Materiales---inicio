import {Cripto} from './api/api.js'

export class UI{   

    static showError(parent, message){
        const alert = document.createElement("DIV");
        alert.className = `error`;
        alert.textContent = message;

        parent.appendChild(alert);

        setTimeout(()=>{
            alert.remove();
        }, 2500)
    }

    static loadCriptos(parent){
        const criptos = new Cripto().getCriptos();
        criptos.then( c => {
            c.forEach( opt => {
                const {FullName, Name } = opt.CoinInfo;
                const option = document.createElement("OPTION");
                option.value = Name;
                option.textContent = FullName;
                parent.appendChild(option);
            });
        });
    }

    static showInfo(data, element){
        this.cleanHTML(element);
        const cripto = new Cripto(data.cripto, data.moneda);
        cripto.getFullInfo().then( r => this.paintFullInfo(r.DISPLAY[data.cripto][data.moneda], data,element));        
    }

    static paintFullInfo(data, info, parent){
        console.log(data)
        const {LASTUPDATE, CHANGEPCT24HOUR, LOWDAY } = data;
        const title = document.createElement("H1");
        title.textContent = `${info.moneda}: ${data.PRICE} - ${info.cripto}`;
        title.className = `title`;

        const p = document.createElement("P");
        p.textContent = `Ultima actualizacion: ${LASTUPDATE}`;

        const p1 = document.createElement("P");
        p1.textContent = `Porcentaje de cambio en las ultima 24hr: ${CHANGEPCT24HOUR}`;

        const p2 = document.createElement("P");
        p2.textContent = `Mas bajo del dia: ${LOWDAY}`;

        this.spinner(parent);
        
        setTimeout(()=>{
            parent.appendChild(title);
            parent.appendChild(p);  
            parent.appendChild(p1);  
            parent.appendChild(p2);  
        }, 2500);  
        
    }

   static cleanHTML(element){
        while(element.firstChild){
            element.removeChild(element.firstChild);
        }
    }
    
    static spinner(parent){
        this.cleanHTML(parent);
        const spinner = document.createElement("DIV");
        const div = document.createElement("DIV");

        //asignar clases y valores
        spinner.className = `spinner`;

        spinner.appendChild(div);

        parent.appendChild(spinner);

        setTimeout(()=>{
            spinner.remove();
        }, 2500);
    }
}