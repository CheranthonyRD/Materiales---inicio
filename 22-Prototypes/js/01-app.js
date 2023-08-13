function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;

    Cliente.prototype.getCliente = function(){
        const {nombre, saldo} = this;
        return `El cliente ${nombre} 
        tiene un saldo de ${saldo}`
    }
}

const cliente = new Cliente("Juan", 2500);

console.log(cliente.getCliente())