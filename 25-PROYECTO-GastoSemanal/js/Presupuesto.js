
class Presupuesto{

    constructor(presupuesto){
        this.presupuesto = presupuesto;
        this.restante = presupuesto;
    }

    setGasto(gasto){
        this.restante -= gasto;
        return this;
    }

    addRestante(restante){
        this.restante += restante;
        return this;
    }

    getRestante(){
        return this.restante;
    }

    getPresupuesto(){
        return this.presupuesto;
    }

}