export class Empresa{
    constructor(nombreEmpresa){
        this.empleados = [];
        this.clientes = [];
        this.nombreEmpresa = nombreEmpresa;
    }

    //empleados

    ingresarEmpleado(empleado){
        this.empleados = [...this.empleados, empleado];
    }

    obtenerEmpleados(){
        return this.empleados;
    }

    obtenerEmpleado(id){
        const empleado = this.empleados.find(empleado => {
            return empleado.id === id;
        });

        return empleado;
    }

    //clientes

    ingresarCliente(cliente){
        this.clientes = [...this.clientes, cliente];
    }

    obtenerClientes(){
        return this.clientes;
    }

    obtenerCliente(idCliente){
        return this.clientes.find(cliente=>{
        return cliente.id === idCliente; 
       });;
    }

    actualizarCliente(idCliente, nombre){
        const index = this.clientes.findIndex(cliente => cliente.id === idCliente);
        const cliente = this.clientes[index];
        cliente.nombre = "Actualizado hola";
    }

    //nombre

    getNombreEmpresa(){
        return this.nombreEmpresa;
    }
}