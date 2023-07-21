// alert("Hola mundo desde archivo externo");

// const nombre = prompt("Digite su nombre");
// document.querySelector(".contenido").innerHTML = `${nombre} esta aprendiendo JS`;

function hola($nombre){
    if($nombre === undefined){
        $nombre = prompt("Digite su nombre");
    }else{
        console.log("Hola mundo desde funcion hola " + $nombre);
    }
}





