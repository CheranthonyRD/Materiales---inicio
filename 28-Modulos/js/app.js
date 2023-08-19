import {clientes} from './cliente.js';

import {Empresa} from './empresa.js';

//instanciar a empresa
const empresa = new Empresa("Barberia Calle");

//ingresar clientes a empresa
clientes.map(cliente=>{
    empresa.ingresarCliente(cliente);
})

//obtener esos clientes
const clienteId = clientes[1].id;
//buscar cliente 
const cliente = empresa.obtenerCliente(clienteId);







