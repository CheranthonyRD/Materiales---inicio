//los numeros y el objeto Math

const PI = Math.PI;

// redondea al numero mas cerca del entero, ejemplo: 3.6 igual a 3
const redondeo_mas_bajo = Math.floor(PI);
//redondeo mas alto
const redondeo_mas_alto = Math.ceil(PI);

//raiz cuadrada
const raiz_cuadrada = Math.sqrt(PI);

// potencia
const potencia = Math.pow(PI, 3);

//convertir a string
const cadena = PI.toString();

const mostrar = [
    redondeo_mas_bajo,
    redondeo_mas_alto,
    raiz_cuadrada,
    potencia,
    cadena    
];




mostrar.forEach(element => {
    if(typeof element == "number"){
        element = element.toString();
    }

    console.log(element);
});