

//function

export function crearElemento(element, callback = null){
    const e = document.createElement(element);
    if(callback){
        callback(e);
    }
    return e;
}